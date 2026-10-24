class EntityHelper {
    constructor(entidad) {
        this.entidad = entidad;

        if (!entidad.nombreentidad) {
            entidad.nombreentidad = entidad.constructor.name;
        }
        if (!entidad.atributos) {
            entidad.atributos = (entidad.fields || []).map((field) => field.name);
        }
        if (!entidad.columnasamostrar || entidad.columnasamostrar.length === 0) {
            entidad.columnasamostrar = (entidad.fields || []).map((field) => field.name);
        }
        if (!entidad.mostrarespecial) {
            entidad.mostrarespecial = (entidad.fields || [])
                .filter((field) => field.name.includes('foto') || field.name.includes('file'))
                .map((field) => field.name);
        }

        entidad.dom = new entity_dom_fields();
        entidad.validations = new Validations();
        entidad.access_functions = new ExternalAccess();

        this.injectStyles();
        this.generateValidationMethods();
        this.generateSubmitHandlers();
        this.bindEntityMethods();
    }

    injectStyles() {
        if (document.getElementById('custom-helper-styles')) return;

        const style = document.createElement('style');
        style.id = 'custom-helper-styles';
        style.textContent = `
            #seleccioncolumnas {
                background: #1c2330;
                color: #f0f6fc;
                border: 1px solid #30363d;
                border-radius: 6px;
                padding: 4px;
            }
            .tabla-foto-preview {
                max-height: 36px;
                max-width: 50px;
                border-radius: 4px;
                object-fit: cover;
                vertical-align: middle;
            }
        `;
        document.head.appendChild(style);
    }

    bindEntityMethods() {
        [
            'manual_form_creation',
            'SEARCH',
            'ADD',
            'EDIT',
            'DELETE',
            'createForm_ADD',
            'createForm_SEARCH',
            'createForm_EDIT',
            'createForm_DELETE',
            'createForm_SHOWCURRENT',
            'cambiarmostrarespecial',
            'actualizarEnlaceFotoFormulario'
        ].forEach((methodName) => {
            this.entidad[methodName] = (...args) => this[methodName](...args);
        });
    }

    async SEARCH() {
        const entity = this.entidad;
        const form = document.getElementById('form_iu');
        const formId = form && form.tagName === 'FORM' ? 'form_iu' : '';
        const response = await entity.access_functions.peticionBackGeneral(
            formId,
            entity.nombreentidad,
            'SEARCH'
        );

        entity.dom.hide_element('Div_IU_form');
        entity.datos = response.code === 'RECORDSET_DATOS' ? response.resource : [];
        if (entity.datos.length > 0) {
            entity.atributos = Object.keys(entity.datos[0]);
        }
        entity.dom.show_element('IU_manage_entity');

        if (['funcionalidad_accion', 'rolaccionfuncionalidad'].includes(entity.nombreentidad)) {
            await this.renderRelationMatrix();
        } else if (entity.datos.length > 0) {
            entity.crearTablaDatos(entity.datos, entity.mostrarespecial);
        } else {
            const table = document.getElementById('IU_manage_table');
            if (table) {
                table.style.display = 'block';
                table.innerHTML = 'No se han encontrado elementos que coincidan con la busqueda';
                table.className = 'RECORDSET_VACIO';
            }
        }
    }

    async fetchEntityRows(entityName) {
        const response = await this.entidad.access_functions.peticionBackGeneral(
            '',
            entityName,
            'SEARCH'
        );
        return response.code === 'RECORDSET_DATOS' ? response.resource : [];
    }

    async loadForeignKeyOptions() {
        const foreignKeyFields = (this.entidad.fields || []).filter((field) => field.isFK);
        await Promise.all(foreignKeyFields.map(async (field) => {
            const referenceEntity = field.referenceEntity || field.name.replace(/^id_/, '');
            if (referenceEntity === field.name) {
                throw new Error(`No se pudo determinar la entidad referenciada por ${field.name}.`);
            }

            const response = await this.entidad.access_functions.peticionBackGeneral(
                '',
                referenceEntity,
                'SEARCH'
            );
            if (!response || response.code !== 'RECORDSET_DATOS' || !Array.isArray(response.resource)) {
                throw new Error(
                    response && response.code
                        ? `No se pudieron cargar los registros de ${referenceEntity}: ${response.code}.`
                        : `No se pudieron cargar los registros de ${referenceEntity}.`
                );
            }

            const referenceKey = field.referenceKey || field.name;
            const labelField = field.optionLabel || Object.keys(response.resource[0] || {})
                .find((key) => key !== referenceKey && !key.startsWith('id_') &&
                    !/password|contrasena/i.test(key));
            field.options = response.resource.map((record) => {
                const value = record[referenceKey];
                if (value === undefined || value === null || value === '') {
                    throw new Error(`Un registro de ${referenceEntity} no contiene ${referenceKey}.`);
                }
                const label = labelField && labelField !== referenceKey && record[labelField] !== undefined
                    ? `${record[labelField]} (${value})`
                    : String(value);
                return { value: String(value), label: String(label) };
            });
        }));
    }

    async prepareForeignKeyForm() {
        try {
            await this.loadForeignKeyOptions();
            return true;
        } catch (error) {
            console.error(`No se pudieron cargar las claves foráneas de ${this.entidad.nombreentidad}.`, error);
            this.entidad.dom.abrirModalError(error.message || 'No se pudieron cargar las opciones relacionadas.');
            return false;
        }
    }

    escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    getRelationLabel(entityName, fallback) {
        const key = `matrix_${entityName}`;
        return window.traduccion && window.traduccion[key]
            ? window.traduccion[key]
            : fallback;
    }

    async renderRelationMatrix() {
        const entityName = this.entidad.nombreentidad;
        const tableContainer = document.getElementById('IU_manage_table');
        if (!tableContainer) return;

        tableContainer.innerHTML = '';
        const status = document.createElement('p');
        status.className = 'relation-matrix-status';
        status.setAttribute('role', 'status');
        status.textContent = this.getRelationLabel('loading', 'Cargando relaciones...');
        tableContainer.appendChild(status);

        const [functionalities, actions, roles] = await Promise.all([
            this.fetchEntityRows('funcionalidad'),
            this.fetchEntityRows('accion'),
            entityName === 'rolaccionfuncionalidad'
                ? this.fetchEntityRows('rol')
                : Promise.resolve([])
        ]);

        const records = this.entidad.datos || [];
        const pairs = [];
        functionalities.forEach((functionality) => {
            actions.forEach((action) => {
                pairs.push({ functionality, action });
            });
        });

        tableContainer.innerHTML = '';
        const heading = document.createElement('p');
        heading.className = 'relation-matrix-description';
        heading.textContent = entityName === 'funcionalidad_accion'
            ? this.getRelationLabel('functionality_action_help', 'Marca una casilla para asignar una acción a una funcionalidad.')
            : this.getRelationLabel('role_assignment_help', 'Marca una casilla para asignar la combinación funcionalidad-acción a un rol.');
        tableContainer.appendChild(heading);

        if (entityName === 'funcionalidad_accion') {
            this.renderFunctionalityActionMatrix(tableContainer, functionalities, actions, records, status);
        } else {
            this.renderRoleAssignmentMatrix(tableContainer, roles, pairs, records, status);
        }
    }

    relationKey(firstId, secondId) {
        return `${String(firstId)}\u0000${String(secondId)}`;
    }

    renderFunctionalityActionMatrix(container, functionalities, actions, records, status) {
        const selected = new Set(records.map((record) =>
            this.relationKey(record.id_funcionalidad, record.id_accion)
        ));
        const table = document.createElement('table');
        table.className = 'relation-matrix';
        const head = table.createTHead().insertRow();
        const corner = document.createElement('th');
        corner.scope = 'col';
        corner.textContent = this.getRelationLabel('functionality', 'Funcionalidad');
        head.appendChild(corner);

        actions.forEach((action) => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.textContent = this.describeRecord(action, 'nombre_accion', 'id_accion');
            head.appendChild(th);
        });

        const body = table.createTBody();
        functionalities.forEach((functionality) => {
            const row = body.insertRow();
            const heading = document.createElement('th');
            heading.scope = 'row';
            heading.className = 'relation-matrix-row-heading';
            heading.textContent = this.describeRecord(functionality, 'nombre_funcionalidad', 'id_funcionalidad');
            row.appendChild(heading);

            actions.forEach((action) => {
                const cell = row.insertCell();
                const selectedBefore = selected.has(this.relationKey(
                    functionality.id_funcionalidad,
                    action.id_accion
                ));
                const checkbox = this.createAssignmentCheckbox(
                    selectedBefore,
                    this.getRelationLabel('assign_action', 'Asignar acción'),
                    status,
                    async (isChecked) => {
                        const request = {
                            id_funcionalidad: functionality.id_funcionalidad,
                            id_accion: action.id_accion
                        };
                        const response = await this.submitRelationChange(
                            'funcionalidad_accion',
                            isChecked ? 'ADD' : 'DELETE',
                            request
                        );
                        if (!response.ok) {
                            throw new Error(response.code || 'No se pudo guardar la relación.');
                        }
                        const key = this.relationKey(request.id_funcionalidad, request.id_accion);
                        if (isChecked) selected.add(key);
                        else selected.delete(key);
                    }
                );
                cell.appendChild(checkbox);
            });
        });

        this.finishMatrix(container, table, functionalities.length, actions.length, status);
    }

    renderRoleAssignmentMatrix(container, roles, pairs, records, status) {
        const selected = new Set(records.map((record) =>
            `${String(record.id_rol)}\u0000${this.relationKey(record.id_funcionalidad, record.id_accion)}`
        ));
        const table = document.createElement('table');
        table.className = 'relation-matrix';
        const head = table.createTHead().insertRow();
        const corner = document.createElement('th');
        corner.scope = 'col';
        corner.textContent = this.getRelationLabel('role', 'Rol');
        head.appendChild(corner);

        pairs.forEach(({ functionality, action }) => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.textContent = `${this.describeRecord(functionality, 'nombre_funcionalidad', 'id_funcionalidad')} / ${this.describeRecord(action, 'nombre_accion', 'id_accion')}`;
            head.appendChild(th);
        });

        const body = table.createTBody();
        roles.forEach((role) => {
            const row = body.insertRow();
            const heading = document.createElement('th');
            heading.scope = 'row';
            heading.className = 'relation-matrix-row-heading';
            heading.textContent = this.describeRecord(role, 'rol_name', 'id_rol');
            row.appendChild(heading);

            pairs.forEach(({ functionality, action }) => {
                const cell = row.insertCell();
                const selectedBefore = selected.has(
                    `${String(role.id_rol)}\u0000${this.relationKey(functionality.id_funcionalidad, action.id_accion)}`
                );
                const checkbox = this.createAssignmentCheckbox(
                    selectedBefore,
                    this.getRelationLabel('assign_relation', 'Asignar relación'),
                    status,
                    async (isChecked) => {
                        const request = {
                            id_funcionalidad: functionality.id_funcionalidad,
                            id_accion: action.id_accion,
                            id_rol: role.id_rol
                        };
                        const response = await this.submitRelationChange(
                            'rolaccionfuncionalidad',
                            isChecked ? 'ADD' : 'DELETE',
                            request
                        );
                        if (!response.ok) {
                            throw new Error(response.code || 'No se pudo guardar la relación.');
                        }
                        const key = `${String(request.id_rol)}\u0000${this.relationKey(
                            request.id_funcionalidad,
                            request.id_accion
                        )}`;
                        if (isChecked) selected.add(key);
                        else selected.delete(key);
                    }
                );
                cell.appendChild(checkbox);
            });
        });

        this.finishMatrix(container, table, roles.length, pairs.length, status);
    }

    describeRecord(record, labelField, idField) {
        const label = record[labelField];
        return label ? `${label} (${record[idField]})` : String(record[idField] ?? '');
    }

    createAssignmentCheckbox(checked, label, status, onChange) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checked;
        checkbox.setAttribute('aria-label', label);
        checkbox.addEventListener('change', async () => {
            const desiredValue = checkbox.checked;
            checkbox.disabled = true;
            status.textContent = this.getRelationLabel('saving', 'Guardando...');
            status.classList.remove('is-error');

            try {
                await onChange(desiredValue);
                status.textContent = this.getRelationLabel('saved', 'Cambios guardados.');
            } catch (error) {
                checkbox.checked = !desiredValue;
                status.textContent = `${this.getRelationLabel('save_error', 'No se pudo guardar')}: ${error.message}`;
                status.classList.add('is-error');
            } finally {
                checkbox.disabled = false;
            }
        });
        return checkbox;
    }

    submitRelationChange(entityName, action, fields) {
        return this.entidad.access_functions.peticionBackGeneral('', entityName, action, fields);
    }

    finishMatrix(container, table, rowCount, columnCount, status) {
        const wrapper = document.createElement('div');
        wrapper.className = 'relation-matrix-scroll';
        wrapper.appendChild(table);
        container.appendChild(wrapper);

        if (rowCount === 0 || columnCount === 0) {
            status.textContent = this.getRelationLabel(
                'empty_matrix',
                'No hay funcionalidades, acciones o roles para construir la matriz.'
            );
            status.classList.add('is-error');
        } else {
            status.textContent = this.getRelationLabel(
                'matrix_ready',
                'Selecciona las casillas para modificar las asignaciones.'
            );
        }
        container.appendChild(status);
    }

    generateValidationMethods() {
        ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
            (this.entidad.fields || []).forEach((field) => {
                const methodName = `${action}_${field.name}_validation`;
                const rules = field.rules ? field.rules[action] : null;

                this.entidad[methodName] = () => {
                    if (field.isFK && action === 'ADD') {
                        const select = document.getElementById(field.name);
                        const value = select && select.value;
                        const isExistingOption = select && select.tagName === 'SELECT' &&
                            Array.from(select.options).some((option) =>
                            option.value !== '' && option.value === value
                        );
                        if (!isExistingOption) {
                            return this.showValidationError(field.name, 'required');
                        }
                    }

                    if (!rules) return true;

                    if (action === 'SEARCH') {
                        const input = document.getElementById(field.name);
                        if (!input || !input.value) {
                            this.entidad.dom.mostrar_exito_campo(field.name);
                            return true;
                        }
                    }

                    if (rules.min_size !== undefined && rules.min_size !== null) {
                        const input = document.getElementById(field.name);
                        const value = input ? input.value : '';
                        const validation = this.entidad.validations.min_size(field.name, rules.min_size);
                        let failed = typeof validation === 'boolean'
                            ? !validation
                            : String(value).length < rules.min_size;

                        if (!failed && value !== '' && value !== null && !isNaN(value) &&
                            Number(value) < rules.min_size) {
                            failed = true;
                        }
                        if (failed) {
                            return this.showValidationError(field.name, 'min_size');
                        }
                    }

                    if (rules.max_size !== undefined && rules.max_size !== null) {
                        const input = document.getElementById(field.name);
                        const validation = this.entidad.validations.max_size(field.name, rules.max_size);
                        const failed = typeof validation === 'boolean'
                            ? !validation
                            : String(input ? input.value : '').length > rules.max_size;
                        if (failed) return this.showValidationError(field.name, 'max_size');
                    }

                    if (rules.format !== undefined && rules.format !== null &&
                        !this.entidad.validations.format(field.name, rules.format)) {
                        return this.showValidationError(field.name, 'format');
                    }

                    if (field.type === 'file') {
                        const hasFile = this.entidad.validations.exist_file(field.name);
                        if (rules.exist_file && !hasFile) {
                            return this.showValidationError(field.name, 'exist_file');
                        }
                        if (!hasFile) {
                            this.entidad.dom.mostrar_exito_campo(field.name);
                            return true;
                        }

                        const fileRules = [
                            ['max_size_file', rules.max_size_file],
                            ['type_file', rules.type_file],
                            ['format_name_file', rules.format_name_file]
                        ];
                        for (const [ruleName, ruleValue] of fileRules) {
                            if (ruleValue !== undefined && ruleValue !== null &&
                                !this.entidad.validations[ruleName](field.name, ruleValue)) {
                                return this.showValidationError(field.name, ruleName);
                            }
                        }
                    }

                    this.entidad.dom.mostrar_exito_campo(field.name);
                    return true;
                };
            });
        });
    }

    showValidationError(fieldName, ruleName) {
        const errorId = `${fieldName}_${ruleName}_ko`;
        this.entidad.dom.mostrar_error_campo(fieldName, errorId);
        return errorId;
    }

    generateSubmitHandlers() {
        ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
            const submitName = `${action}_submit_${this.entidad.nombreentidad}`;
            this.entidad[submitName] = () => {
                const results = {};
                (this.entidad.fields || []).forEach((field) => {
                    const validationName = `${action}_${field.name}_validation`;
                    if (typeof this.entidad[validationName] === 'function') {
                        results[field.name] = this.entidad[validationName]();
                    }
                });
                return Object.values(results).every((result) => result === true);
            };
        });
    }

    manual_form_creation(action = 'ADD') {
        const entity = this.entidad;
        let html = '<form id="form_iu" action="" method="POST" enctype="multipart/form-data" class="formulario">\n';

        (entity.fields || []).forEach((field) => {
            if (field.type === 'file' && ['SEARCH', 'DELETE', 'SHOWCURRENT'].includes(action)) return;

            html += `  <label class="label_${field.name}" for="${field.name}">${field.label}</label>\n`;
            const isLockedKey = field.isPK || field.isFK || field.name === entity.fields[0]?.name;
            const isReadOnlyView = ['DELETE', 'SHOWCURRENT'].includes(action);
            const isSelectField = field.isFK || field.type === 'select';

            if (isSelectField && (isReadOnlyView || (action === 'EDIT' && isLockedKey))) {
                html += `  <input type="text" id="${field.name}" name="${field.name}">\n`;
            } else if (isSelectField) {
                const required = field.isFK && action === 'ADD' ? ' required' : '';
                html += `  <select id="${field.name}" name="${field.name}"${required}>\n`;
                html += '    <option value="">-- Seleccionar --</option>\n';
                if (Array.isArray(field.options)) {
                    field.options.forEach((option) => {
                        const value = typeof option === 'object' ? option.value : option;
                        const label = typeof option === 'object' ? option.label : option;
                        html += `    <option value="${this.escapeHTML(value)}">${this.escapeHTML(label)}</option>\n`;
                    });
                }
                html += '  </select>\n';
            } else if (field.type === 'file') {
                const acceptedTypes = field.rules && field.rules.ADD && field.rules.ADD.type_file;
                const accept = Array.isArray(acceptedTypes)
                    ? acceptedTypes.includes('image/jpeg') ? ' accept="image/jpeg,.jpg,.jpeg"' : ''
                    : '';
                html += `  <input type="file" id="${field.name}" name="${field.name}"${accept}>\n`;
            } else if (field.type === 'textarea') {
                html += `  <textarea id="${field.name}" name="${field.name}"></textarea>\n`;
            } else {
                html += `  <input type="${field.type || 'text'}" id="${field.name}" name="${field.name}">\n`;
            }
            html += `  <span id="span_error_${field.name}"><a id="error_${field.name}"></a></span>\n  <br>\n`;
        });

        return `${html}</form>`;
    }

    baseCreateForm(action) {
        const modal = document.getElementById('Div_IU_form');
        if (modal && modal.closest && modal.closest('form')) {
            document.body.appendChild(modal);
        }

        const container = document.getElementById('contenedor_IU_form');
        if (!container) throw new Error('No se encontró el contenedor del formulario.');

        const template = document.createElement('template');
        template.innerHTML = this.manual_form_creation(action);
        const form = template.content.querySelector('form');
        if (!form) throw new Error(`No se pudo crear el formulario para ${action}.`);
        container.replaceChildren(form);

        const title = document.getElementById('class_contenido_titulo_form');
        if (title) {
            const key = `text_contenido_titulo_form_${this.entidad.nombreentidad}_${action}`;
            title.className = key;
            title.textContent = window.traduccion && window.traduccion[key]
                ? key
                : `${this.entidad.nombreentidad} - ${action}`;
            if (typeof window.setLang === 'function') window.setLang();
        }
        this.entidad.dom.show_element('Div_IU_form', 'block');
    }

    setFormAttributes(action, submitHandler) {
        const form = document.getElementById('form_iu');
        if (!form) throw new Error(`No se encontró el formulario para ${action}.`);

        form.setAttribute('action', '');
        form.removeAttribute('onsubmit');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (submitHandler && this.entidad[submitHandler]() !== true) return;

            const submitButton = event.submitter;
            if (submitButton) submitButton.disabled = true;
            this.entidad[action]().finally(() => {
                if (submitButton) submitButton.disabled = false;
            });
        });
    }

    async ADD() {
        await this.submitEntityAction('ADD');
    }

    async EDIT() {
        await this.submitEntityAction('EDIT');
    }

    async DELETE() {
        await this.submitEntityAction('DELETE');
    }

    async submitEntityAction(action) {
        try {
            const response = await this.entidad.access_functions.peticionBackGeneral(
                'form_iu',
                this.entidad.nombreentidad,
                action
            );

            if (!response || !response.ok) {
                this.entidad.dom.abrirModalError(response && response.code
                    ? response.code
                    : `No se pudo completar la acción ${action}.`);
                return;
            }

            this.entidad.dom.hide_element('Div_IU_form');
            const formContainer = document.getElementById('contenedor_IU_form');
            if (formContainer) formContainer.replaceChildren();
            await this.SEARCH();
        } catch (error) {
            console.error(`Error al ejecutar ${action} en ${this.entidad.nombreentidad}.`, error);
            this.entidad.dom.abrirModalError(error.message || `No se pudo completar la acción ${action}.`);
        }
    }

    async createForm_ADD() {
        const entity = this.entidad;
        if (!await this.prepareForeignKeyForm()) return;
        this.baseCreateForm('ADD');
        this.setFormAttributes('ADD', `ADD_submit_${entity.nombreentidad}`);
        entity.dom.colocarvalidaciones('form_iu', 'ADD');
        this.appendFormActions('ADD');
    }

    async createForm_SEARCH() {
        const entity = this.entidad;
        if (!await this.prepareForeignKeyForm()) return;
        this.baseCreateForm('SEARCH');
        this.setFormAttributes('SEARCH', `SEARCH_submit_${entity.nombreentidad}`);
        entity.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.appendFormActions('SEARCH');
    }

    createForm_EDIT(row) {
        const entity = this.entidad;
        this.baseCreateForm('EDIT');
        this.setFormAttributes('EDIT', `EDIT_submit_${entity.nombreentidad}`);
        entity.dom.rellenarvaloresform(row);
        this.actualizarEnlaceFotoFormulario(row);

        (entity.fields || []).forEach((field) => {
            if (field.isPK || field.isFK || field.name === entity.fields[0]?.name) {
                const input = document.getElementById(field.name);
                if (input) input.setAttribute('readonly', 'true');
            }
        });
        entity.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.appendFormActions('EDIT');
    }

    createForm_DELETE(row) {
        const entity = this.entidad;
        this.baseCreateForm('DELETE');
        this.setFormAttributes('DELETE');
        entity.dom.rellenarvaloresform(row);
        this.actualizarEnlaceFotoFormulario(row);
        entity.dom.colocartodosreadonly('form_iu');
        this.appendFormActions('DELETE');
    }

    createForm_SHOWCURRENT(row) {
        const entity = this.entidad;
        this.baseCreateForm('SHOWCURRENT');
        entity.dom.rellenarvaloresform(row);
        this.actualizarEnlaceFotoFormulario(row);
        entity.dom.colocartodosreadonly('form_iu');

        const form = document.getElementById('form_iu');
        if (form) this.appendFormActions('SHOWCURRENT');
    }

    appendFormActions(action) {
        const form = document.getElementById('form_iu');
        if (!form) throw new Error('No se encontró el formulario para añadir sus botones.');

        const dialog = document.querySelector('#Div_IU_form .form-dialog');
        if (!dialog) throw new Error('No se encontró el diálogo para mostrar las acciones del formulario.');

        dialog.querySelectorAll('.form-actions').forEach((existingFooter) => existingFooter.remove());

        const footer = document.createElement('div');
        footer.className = 'form-actions';

        const cancel = document.createElement('button');
        cancel.type = 'button';
        cancel.className = 'secondary-action';
        cancel.textContent = this.getActionLabel('cancel', 'Cancelar');
        cancel.addEventListener('click', () => this.entidad.dom.hide_element('Div_IU_form'));
        footer.appendChild(cancel);

        if (action !== 'SHOWCURRENT') {
            const submit = document.createElement('button');
            submit.id = 'submit_button';
            submit.type = 'submit';
            submit.setAttribute('form', 'form_iu');
            const icon = document.createElement('img');
            icon.src = `./iconos/${action}.png`;
            icon.alt = '';
            icon.setAttribute('aria-hidden', 'true');
            submit.appendChild(icon);
            submit.appendChild(document.createTextNode(this.getActionLabel(action, action)));
            footer.appendChild(submit);
        }

        dialog.appendChild(footer);
    }

    getActionLabel(action, fallback) {
        const key = `form_action_${action}`;
        return window.traduccion && window.traduccion[key]
            ? window.traduccion[key]
            : fallback;
    }

    escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    cambiarmostrarespecial(attribute, value) {
        if (!value) return '';
        if (!attribute.includes('foto') && !attribute.includes('file')) return value;

        const safeValue = this.escapeHtml(value);
        const fileUrl = `http://193.147.87.202/ET2/filesuploaded/files_${attribute}/${encodeURIComponent(value)}`;
        return `<a href="${fileUrl}" target="_blank" title="${safeValue}">
            <img src="${fileUrl}" alt="${safeValue}" class="tabla-foto-preview"
                 onerror="this.onerror=null; this.src='./iconos/FILE.png';" />
        </a>`;
    }

    actualizarEnlaceFotoFormulario(row) {
        if (!row) return;

        const fileKey = Object.keys(row).find((key) => key.includes('foto') || key.includes('file'));
        if (!fileKey || !row[fileKey]) return;

        const fileName = row[fileKey];
        const safeName = this.escapeHtml(fileName);
        const fileUrl = `http://193.147.87.202/ET2/filesuploaded/files_${fileKey}/${encodeURIComponent(fileName)}`;
        let link = document.getElementById(`link_${fileKey}`);

        if (!link) {
            const input = document.getElementById(fileKey);
            if (input && input.parentNode) {
                link = document.createElement('a');
                link.id = `link_${fileKey}`;
                input.parentNode.insertBefore(link, input.nextSibling);
            }
        }

        if (link) {
            link.href = fileUrl;
            link.target = '_blank';
            link.innerHTML = `<img src="${fileUrl}" alt="${safeName}" class="tabla-foto-preview"
                onerror="this.onerror=null; this.src='./iconos/FILE.png';" />`;
        }
    }
}
