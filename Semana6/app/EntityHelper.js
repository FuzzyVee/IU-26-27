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
            'crearTablaDatos',
            'createForm_ADD',
            'createForm_SEARCH',
            'createForm_EDIT',
            'createForm_DELETE',
            'createForm_SHOWCURRENT',
            'cambiarmostrarespecial',
            'actualizarEnlaceFotoFormulario',
            'runValidationTests'
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

    /**
     * Limpia caracteres de salto de línea codificados (&#13;&#10;) antes de rellenar el formulario
     */
    cleanRowData(row) {
        if (!row) return row;
        const clean = { ...row };
        for (let key in clean) {
            if (typeof clean[key] === 'string') {
                clean[key] = clean[key]
                    .replace(/&#13;&#10;/g, '\n')
                    .replace(/&#10;/g, '\n')
                    .replace(/&#13;/g, '\n');
            }
        }
        return clean;
    }
    
    /**
     * Sobrescribe la creación de tabla usando índices en lugar de JSON.stringify
     */
    crearTablaDatos(datos, mostrarespecial) {
        var misdatos = datos;
    
        for (var i = 0; i < misdatos.length; i++) {
            misdatos[i]['EDIT'] = `<img id='botonEDIT' src='./iconos/EDIT.png' onclick='entidad.createForm_EDIT(entidad.datos[${i}]);'>`;
            misdatos[i]['DELETE'] = `<img id='botonDELETE' src='./iconos/DELETE.png' onclick='entidad.createForm_DELETE(entidad.datos[${i}]);'>`;
            misdatos[i]['SHOWCURRENT'] = `<img id='botonSHOWCURRENT' src='./iconos/SHOWCURRENT.png' onclick='entidad.createForm_SHOWCURRENT(entidad.datos[${i}]);'>`;
        }
    
        if (mostrarespecial && mostrarespecial.length > 0) {
            for (var i = 0; i < misdatos.length; i++) {
                for (var clave in misdatos[i]) {
                    if (mostrarespecial.includes(clave)) {
                        misdatos[i][clave] = this.entidad.cambiarmostrarespecial(clave, misdatos[i][clave]);
                    }
                }
            }
        }
    
        this.entidad.dom.showData('IU_manage_table', misdatos);
        this.entidad.dom.crearSeleccionablecolumnas(this.entidad.columnasamostrar, this.entidad.atributos);
        this.entidad.dom.mostrarocultarcolumnas(this.entidad.columnasamostrar, this.entidad.atributos);
    
        if (typeof setLang === 'function') setLang();
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
            this.renderRoleAssignmentSelector(tableContainer, roles, pairs, records, status);
        }
    }

    relationKey(firstId, secondId) {
        return `${this.normalizeRelationId(firstId)}\u0000${this.normalizeRelationId(secondId)}`;
    }

    normalizeRelationId(value) {
        if (value === undefined || value === null || typeof value === 'object') return '';
        return String(value).trim();
    }

    getRecordValue(record, fieldName) {
        if (!record || typeof record !== 'object') return undefined;
        const normalizedFieldName = fieldName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const matchingField = Object.keys(record).find((key) =>
            key.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedFieldName
        );
        if (matchingField !== undefined) {
            const value = record[matchingField];
            if (value === null || typeof value !== 'object') {
                return value;
            } else {
                const nestedValue = this.getRecordValue(value, fieldName);
                if (nestedValue !== undefined) return nestedValue;
            }
        }

        for (const [key, value] of Object.entries(record)) {
            if (key === matchingField) continue;
            if (value && typeof value === 'object') {
                const nestedValue = this.getRecordValue(value, fieldName);
                if (nestedValue !== undefined) return nestedValue;
            }
        }
        return undefined;
    }

    renderFunctionalityActionMatrix(container, functionalities, actions, records, status) {
        const selected = new Set(records
            .map((record) => {
                const functionalityId = this.normalizeRelationId(
                    this.getRecordValue(record, 'id_funcionalidad')
                );
                const actionId = this.normalizeRelationId(
                    this.getRecordValue(record, 'id_accion')
                );
                return functionalityId && actionId
                    ? this.relationKey(functionalityId, actionId)
                    : null;
            })
            .filter((key) => key !== null));
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
                const functionalityId = this.normalizeRelationId(
                    this.getRecordValue(functionality, 'id_funcionalidad')
                );
                const actionId = this.normalizeRelationId(this.getRecordValue(action, 'id_accion'));
                const selectedBefore = selected.has(this.relationKey(
                    functionalityId,
                    actionId
                ));
                const checkbox = this.createAssignmentCheckbox(
                    selectedBefore,
                    this.getRelationLabel('assign_action', 'Asignar acción'),
                    status,
                    async (isChecked) => {
                        const request = {
                            id_funcionalidad: functionalityId,
                            id_accion: actionId
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
        const selected = new Set(records
            .map((record) => {
                const roleId = this.normalizeRelationId(this.getRecordValue(record, 'id_rol'));
                const functionalityId = this.normalizeRelationId(
                    this.getRecordValue(record, 'id_funcionalidad')
                );
                const actionId = this.normalizeRelationId(this.getRecordValue(record, 'id_accion'));
                return roleId && functionalityId && actionId
                    ? `${roleId}\u0000${this.relationKey(functionalityId, actionId)}`
                    : null;
            })
            .filter((key) => key !== null));
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
                const roleId = this.normalizeRelationId(this.getRecordValue(role, 'id_rol'));
                const functionalityId = this.normalizeRelationId(
                    this.getRecordValue(functionality, 'id_funcionalidad')
                );
                const actionId = this.normalizeRelationId(this.getRecordValue(action, 'id_accion'));
                const selectedBefore = selected.has(
                    `${this.normalizeRelationId(roleId)}\u0000${this.relationKey(functionalityId, actionId)}`
                );
                const checkbox = this.createAssignmentCheckbox(
                    selectedBefore,
                    this.getRelationLabel('assign_relation', 'Asignar relación'),
                    status,
                    async (isChecked) => {
                        const request = {
                            id_funcionalidad: functionalityId,
                            id_accion: actionId,
                            id_rol: roleId
                        };
                        const response = await this.submitRelationChange(
                            'rolaccionfuncionalidad',
                            isChecked ? 'ADD' : 'DELETE',
                            request
                        );
                        if (!response.ok) {
                            throw new Error(response.code || 'No se pudo guardar la relación.');
                        }
                        const key = `${this.normalizeRelationId(request.id_rol)}\u0000${this.relationKey(
                            request.id_funcionalidad,
                            request.id_accion
                        )}`;
                        const relationIndex = records.findIndex((record) =>
                            `${this.normalizeRelationId(this.getRecordValue(record, 'id_rol'))}\u0000${this.relationKey(
                                this.getRecordValue(record, 'id_funcionalidad'),
                                this.getRecordValue(record, 'id_accion')
                            )}` === key
                        );
                        if (isChecked) {
                            selected.add(key);
                            if (relationIndex === -1) records.push({ ...request });
                        } else {
                            selected.delete(key);
                            if (relationIndex !== -1) records.splice(relationIndex, 1);
                        }
                    }
                );
                cell.appendChild(checkbox);
            });
        });

        this.finishMatrix(container, table, roles.length, pairs.length, status);
    }

    renderRoleAssignmentSelector(container, roles, pairs, records, status) {
        const functionalities = [];
        const actionsByFunctionality = new Map();
        pairs.forEach(({ functionality, action }) => {
            const functionalityId = this.normalizeRelationId(
                this.getRecordValue(functionality, 'id_funcionalidad')
            );
            if (!actionsByFunctionality.has(functionalityId)) {
                functionalities.push(functionality);
                actionsByFunctionality.set(functionalityId, []);
            }
            actionsByFunctionality.get(functionalityId).push(action);
        });

        if (functionalities.length === 0) {
            this.renderRoleAssignmentMatrix(container, roles, [], records, status);
            return;
        }

        const selectorGroup = document.createElement('div');
        selectorGroup.className = 'relation-combination-selector';

        const label = document.createElement('label');
        label.htmlFor = 'relation-combination-select';
        label.textContent = this.getRelationLabel(
            'select_combination',
            'Selecciona una funcionalidad:'
        );
        selectorGroup.appendChild(label);

        const selector = document.createElement('select');
        selector.id = 'relation-combination-select';
        selector.setAttribute('aria-label', label.textContent);
        functionalities.forEach((functionality, index) => {
            const option = document.createElement('option');
            option.value = String(index);
            option.textContent = this.describeRecord(
                functionality,
                'nombre_funcionalidad',
                'id_funcionalidad'
            );
            selector.appendChild(option);
        });
        selectorGroup.appendChild(selector);

        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'relation-assignment-table';
        container.appendChild(selectorGroup);
        container.appendChild(matrixContainer);

        const renderSelectedCombination = () => {
            const selectedFunctionality = functionalities[Number(selector.value)];
            matrixContainer.replaceChildren();
            if (!selectedFunctionality) {
                return;
            }
            const functionalityId = this.normalizeRelationId(
                this.getRecordValue(selectedFunctionality, 'id_funcionalidad')
            );
            const selectedPairs = (actionsByFunctionality.get(functionalityId) || [])
                .map((action) => ({ functionality: selectedFunctionality, action }));
            this.renderRoleAssignmentMatrix(matrixContainer, roles, selectedPairs, records, status);
        };

        selector.addEventListener('change', renderSelectedCombination);
        selector.value = '0';
        renderSelectedCombination();
    }

    describeRecord(record, labelField, idField) {
        const label = this.getRecordValue(record, labelField);
        const id = this.getRecordValue(record, idField);
        return label ? `${label} (${id ?? ''})` : String(id ?? '');
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

    runValidationTests(testCases) {
        const resultsContainer = document.getElementById('IU_Test_result_nofile');
        if (!resultsContainer) throw new Error('No se encontró el contenedor de resultados de tests.');
        if (!Array.isArray(testCases) || testCases.length === 0) {
            throw new Error(`No hay tests de validación definidos para ${this.entidad.nombreentidad}.`);
        }

        let fixture = document.getElementById('validation-test-fixture');
        if (!fixture) {
            fixture = document.createElement('div');
            fixture.id = 'validation-test-fixture';
            fixture.hidden = true;
            document.body.appendChild(fixture);
        }
        document.body.prepend(fixture);

        const table = document.createElement('table');
        table.id = 'tablaresultadostest';
        const header = table.createTHead().insertRow();
        [
            this.getTestLabel('test_number', 'Test'),
            this.getTestLabel('test_field', 'Campo'),
            this.getTestLabel('test_action', 'Acción'),
            this.getTestLabel('test_value', 'Valor'),
            this.getTestLabel('test_expected', 'Esperado'),
            this.getTestLabel('test_actual', 'Obtenido'),
            this.getTestLabel('test_status', 'Resultado')
        ].forEach((label) => {
            const cell = document.createElement('th');
            cell.textContent = label;
            header.appendChild(cell);
        });

        const body = table.createTBody();
        let passed = 0;

        testCases.forEach((testCase) => {
            const [entityName, fieldName, definitionNumber, testNumber, action, testValues, expected] = testCase;
            let actual = this.getTestLabel('test_method_missing', 'MÉTODO NO ENCONTRADO');
            let errorMessage = '';

            try {
                fixture.innerHTML = this.manual_form_creation(action);
                const form = fixture.querySelector('form');
                if (!form) throw new Error(`No se pudo crear el formulario para ${action}.`);
                const getField = (name) => form &&
                    Array.from(form.elements).find((element) => element.name === name);
                const target = getField(fieldName);
                if (!target) throw new Error(`No se encontró el campo ${fieldName} en el formulario ${action}.`);
                const submitButton = document.createElement('button');
                submitButton.id = 'submit_button';
                submitButton.type = 'button';
                form.appendChild(submitButton);

                if (target.type === 'file') {
                    this.setTestFile(target, testValues && testValues[fieldName]);
                } else {
                    Object.entries(testValues || {}).forEach(([name, value]) => {
                        const input = getField(name);
                        if (!input) return;
                        const stringValue = value === undefined || value === null ? '' : String(value);
                        if (input.tagName === 'SELECT' &&
                            !Array.from(input.options).some((option) => option.value === stringValue)) {
                            const option = document.createElement('option');
                            option.value = stringValue;
                            option.textContent = stringValue;
                            input.appendChild(option);
                        }
                        input.value = stringValue;
                    });
                }

                const methodName = `${action}_${fieldName}_validation`;
                if (typeof this.entidad[methodName] === 'function') {
                    actual = this.entidad[methodName]();
                }
            } catch (error) {
                actual = `ERROR: ${error.message}`;
                errorMessage = error.message;
            }

            const isPassed = !errorMessage && JSON.stringify(actual) === JSON.stringify(expected);
            if (isPassed) passed += 1;

            const row = body.insertRow();
            [
                `${testNumber} (${definitionNumber})`,
                `${entityName}.${fieldName}`,
                action,
                JSON.stringify(testValues),
                JSON.stringify(expected),
                JSON.stringify(actual),
                isPassed
                    ? this.getTestLabel('test_passed', 'CORRECTO')
                    : `${this.getTestLabel('test_failed', 'FALLIDO')}${errorMessage ? `: ${errorMessage}` : ''}`
            ].forEach((value, index) => {
                const cell = row.insertCell();
                cell.textContent = value === undefined ? '' : String(value);
                if (index === 6) cell.className = isPassed ? 'test-passed' : 'test-failed';
            });
        });

        const summary = document.createElement('p');
        summary.className = 'test-results-summary';
        summary.textContent = this.getTestLabel('test_summary', 'Tests completados') +
            `: ${passed}/${testCases.length}`;
        resultsContainer.replaceChildren(summary, table);
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        fixture.replaceChildren();

        return { passed, failed: testCases.length - passed, total: testCases.length };
    }

    setTestFile(input, fileName) {
        if (!fileName) {
            input.files = new DataTransfer().files;
            return;
        }

        if (typeof File !== 'function' || typeof DataTransfer !== 'function') {
            throw new Error('Este navegador no permite simular archivos para los tests.');
        }

        const extension = String(fileName).split('.').pop().toLowerCase();
        const mimeType = ['jpg', 'jpeg'].includes(extension) ? 'image/jpeg' : 'application/octet-stream';
        const file = new File(['test file'], String(fileName), { type: mimeType });
        const transfer = new DataTransfer();
        transfer.items.add(file);
        input.files = transfer.files;
    }

    getTestLabel(key, fallback) {
        const translationKey = key.startsWith('test_') ? key : `test_${key}`;
        return window.traduccion && window.traduccion[translationKey]
            ? window.traduccion[translationKey]
            : fallback;
    }

    manual_form_creation(accion = 'ADD') {
        let html = `<form id="form_iu" action="" method="POST" enctype="multipart/form-data" class="formulario">\n`;
    
        (this.entidad.fields || []).forEach((f) => {
            // Ocultar campos de archivo en búsquedas y borrados
            if (f.type === 'file' && ['SEARCH', 'DELETE', 'SHOWCURRENT'].includes(accion)) return;
            if (f.name.startsWith('foto_') && accion === 'ADD') return;
    
            html += `  <label class="label_${f.name}">${f.label}</label>\n`;
    
            const esClaveEspecial = (f.isPK || f.isFK || f.name === this.entidad.fields[0]?.name);
            const esVistaSoloLectura = ['DELETE', 'SHOWCURRENT'].includes(accion);
            const debeSerReadonly = esVistaSoloLectura || (accion === 'EDIT' && esClaveEspecial);
            const readonlyAttr = debeSerReadonly ? ' readonly style="background-color: #2a313d; cursor: not-allowed; color: #8b949e;"' : '';
    
            // --- Siguiente ID automático en la vista ADD ---
            if (accion === 'ADD' && f.isPK && f.name.startsWith('id_')) {
                let siguienteId = 1;
                if (this.entidad.datos && Array.isArray(this.entidad.datos) && this.entidad.datos.length > 0) {
                    const maxId = Math.max(...this.entidad.datos.map(row => Number(row[f.name]) || 0));
                    siguienteId = (isNaN(maxId) || maxId < 1) ? 1 : maxId + 1;
                }
                html += `  <input type="text" id="${f.name}" name="${f.name}" value="${siguienteId}" readonly style="background-color: #2a313d; cursor: not-allowed; color: #8b949e;">\n`;
            }
            else if (f.type === 'select' && debeSerReadonly) {
                html += `  <input type="text" id="${f.name}" name="${f.name}"${readonlyAttr}>\n`;
            } else if (f.type === 'select') {
                html += `  <select id="${f.name}" name="${f.name}">\n`;
                html += `    <option value="">-- Seleccionar --</option>\n`;
                if (f.options && Array.isArray(f.options)) {
                    f.options.forEach(opt => {
                        const val = (typeof opt === 'object') ? opt.value : opt;
                        const lbl = (typeof opt === 'object') ? opt.label : opt;
                        html += `    <option value="${val}">${lbl}</option>\n`;
                    });
                }
                html += `  </select>\n`;
            } else if (f.type === 'file') {
                html += `  <input type="file" id="${f.name}" name="${f.name}">\n`;
            } else if (f.type === 'textarea') {
                html += `  <textarea id="${f.name}" name="${f.name}"${readonlyAttr}></textarea>\n`;
            } else {
                html += `  <input type="${f.type || 'text'}" id="${f.name}" name="${f.name}"${readonlyAttr}>\n`;
            }
    
            html += `  <span id="span_error_${f.name}"><a id="error_${f.name}"></a></span>\n  <br>\n`;
        });
    
        html += `</form>`;
        return html;
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
