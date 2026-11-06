class EntityHelper {
    // This helper connects one entity's field definitions to the shared UI,
    // validation, backend, and table behavior.
    // I will be clear right now I don't write very good spanish... Now ENGLISH thath's my strong suite.
    constructor(entidad) {
        this.entidad = entidad;

        // Fill in common entity settings only when the entity did not define them.
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

        // Set up the reusable behavior once the entity has its default properties.
        this.injectStyles();
        this.generateValidationMethods();
        this.generateSubmitHandlers();
        this.bindEntityMethods();
        this.setupEscKeyListener();
        this.setupEnterKeyListener();
    }

    // Add small shared styles used by the helper-generated UI.
    injectStyles() {
        // There can be several entities on the page; add this style block only once.
        if (document.getElementById('custom-helper-styles')) return;

        const style = document.createElement('style');
        style.id = 'custom-helper-styles'; //Styles I couldnt manague to get going -v-
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

    // Make helper methods available on the entity object, which is what the UI calls.
    bindEntityMethods() {
        [
            'manual_form_creation',
            'mostrar_error_campo',
            'mostrar_error_campo',
            'peticionBackGeneral',
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
            'runValidationTests',
            'rellenarvaloresform'
        ].forEach((methodName) => {
            this.entidad[methodName] = (...args) => this[methodName](...args);
        });
        this.entidad.dom.abrirModalError = (errorMsg) => this.abrirModalError(errorMsg);
    }

    // Send a backend request. SEARCH is paged in batches because the backend may
    // limit each response; other actions are sent once with their original data.
    async peticionBackGeneral(formulario, controlador, action, datosextra = null) {
        const request = (extra) => this.entidad.access_functions.peticionBackGeneral(
            formulario,
            controlador,
            action,
            extra
        );
        if (String(action).toUpperCase() !== 'SEARCH') {
            return request(datosextra);
        }

        const pageSize = 100;
        const rows = [];
        let response;

        // Ask for successive pages until the server returns fewer than 100 rows.
        for (let offset = 0; ; offset += pageSize) {
            response = await request({
                ...(datosextra || {}),
                empieza: offset,
                filaspagina: pageSize
            });

            if (response && response.code === 'RECORDSET_VACIO') {
                if (rows.length === 0) return response;
                break;
            }
            if (!response || response.code !== 'RECORDSET_DATOS' || !Array.isArray(response.resource)) {
                throw new Error(
                    response && response.code
                        ? `La búsqueda de ${controlador} falló: ${response.code}.`
                        : `La búsqueda de ${controlador} devolvió una respuesta no válida.`
                );
            }

            rows.push(...response.resource);
            // A short page means there are no more records to fetch.
            if (response.resource.length < pageSize) break;
        }

        if (rows.length === 0) {
            return { ...response, code: 'RECORDSET_VACIO', resource: [] };
        }
        return { ...response, code: 'RECORDSET_DATOS', resource: rows };
    }

    setupEnterKeyListener() {
        if (EntityHelper.enterListenerRegistered) return;
        EntityHelper.enterListenerRegistered = true;
    
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
                const target = event.target;
                const tagName = target ? target.tagName.toLowerCase() : '';
    
                // Allow standard newline behavior only inside <textarea> or contenteditable elements
                if (tagName === 'textarea' || (target && target.isContentEditable)) {
                    return;
                }
    
                // Check if the form modal (Div_IU_form) is currently open and visible
                const formContainer = document.getElementById('Div_IU_form');
                if (formContainer && formContainer.style.display !== 'none') {
                    // Prevent browser default actions (such as toggling <select> dropdowns)
                    event.preventDefault();
    
                    const submitButton = document.getElementById('submit_button') || 
                                         formContainer.querySelector('button[type="submit"]');
    
                    if (submitButton && !submitButton.disabled) {
                        submitButton.click();
                    } else {
                        const form = document.getElementById('form_iu');
                        if (form) {
                            if (typeof form.requestSubmit === 'function') {
                                form.requestSubmit();
                            } else {
                                form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Register one Escape-key handler for the whole page to close open UI overlays.
    setupEscKeyListener() {
        // Evita registrar múltiples listeners si se instancian varias entidades
        if (EntityHelper.escapeListenerRegistered) return;
        EntityHelper.escapeListenerRegistered = true;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' || event.keyCode === 27) {
                // Cerrar formulario principal
                const formContainer = document.getElementById('Div_IU_form');
                if (formContainer && formContainer.style.display !== 'none') {
                    this.entidad.dom.hide_element('Div_IU_form');
                }

                // Cerrar modal de error si está visible
                const errorModal = document.getElementById('error_action_modal') || document.getElementById('modalError');
                const overlay = document.getElementById('modal_action_overlay');
                if (errorModal) errorModal.style.display = 'none';
                if (overlay) overlay.style.display = 'none';

            }
        });
    }

    // Clean backend row data, then ask the DOM helper to put it into the form.
    rellenarvaloresform(row) {
        const cleanRow = this.cleanRowData(row);
        this.dom.rellenarvaloresform(cleanRow);
    }

    // Show one field's validation error and refresh its translated text.
    mostrar_error_campo(id, codigoerror) {
        const aError = document.getElementById('error_' + id);
        if (aError) {
            aError.className = codigoerror; // Updates class name so setLang() knows the active error
        }
        originalMostrarError(id, codigoerror);
        if (typeof window.setLang === 'function') window.setLang();
    };
    
    // Clear the error state for a field after it passes validation.
    mostrar_exito_campo(id) {
        const aError = document.getElementById('error_' + id);
        if (aError) {
            aError.className = '';
        }
        originalMostrarExito(id);
    };
    
    // Show the app's error dialog. The fallback IDs support older App markup.
    abrirModalError(errorMsg) {
        // Buscar los elementos compatibles con el HTML de la aplicación
        const modal = document.getElementById('error_action_modal') || document.getElementById('modalError');
        const overlay = document.getElementById('modal_action_overlay');
        const msgElem = document.getElementById('error_action_msg') || document.getElementById('mensajeErrorModal');

        if (modal) modal.style.display = 'block';
        if (overlay) overlay.style.display = 'block';

        if (msgElem) {
            msgElem.className = errorMsg;

            const textoTraducido = (window.traduccion && window.traduccion[errorMsg])
                ? window.traduccion[errorMsg]
                : errorMsg;

            msgElem.textContent = textoTraducido;
        }

        if (typeof setLang === 'function') {
            setLang();
        }
    };

    // Turn line-break entities returned by the backend back into real newlines... Hence my chromebook accident Beckons once more.
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

    // Remove accidental newlines and extra spaces from text fields before sending.
    sanitizeFormInputs() {
        const form = document.getElementById('form_iu');
        if (!form) return;
    
        const inputs = form.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(input => {
            if (input.value) {
                // Replace newlines/carriage returns with a single space and trim
                input.value = input.value.replace(/[\r\n]+/g, ' ').trim();
            }
        });
    }
    
    // Add row action buttons and render special values (such as photo links)
    // before handing the finished rows to the DOM table renderer.
    crearTablaDatos(datos, mostrarespecial) {
        if (!datos || datos.length === 0) return;
    
        const misdatos = datos.map((row) => ({ ...row }));
    
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
    
        // Extract keys that were actually rendered in the DOM table
        const actualTableKeys = Object.keys(misdatos[0] || {});
    
        // Filter out form-only upload fields (type 'file' or starting with 'nuevo_')
        const fileFields = (this.entidad.fields || [])
            .filter((field) => field.type === 'file' || field.name.startsWith('nuevo_'))
            .map((field) => field.name);
    
        // Keep ONLY attributes and columnasamostrar that exist in the DOM table
        const validAtributos = (this.entidad.atributos || [])
            .filter((attr) => actualTableKeys.includes(attr) && !fileFields.includes(attr));
    
        const validColumnas = (this.entidad.columnasamostrar || [])
            .filter((col) => actualTableKeys.includes(col) && !fileFields.includes(col));
    
        // Render data and safely set column visibility
        this.entidad.dom.showData('IU_manage_table', misdatos);
        this.entidad.dom.crearSeleccionablecolumnas(validColumnas, validAtributos);
        this.entidad.dom.mostrarocultarcolumnas(validColumnas, validAtributos);
    
        if (typeof setLang === 'function') setLang();
    }
    
    // Fetch all records for an entity; used to fill foreign-key options and matrices.
    async fetchEntityRows(entityName) {
        const response = await this.entidad.peticionBackGeneral(
            '',
            entityName,
            'SEARCH'
        );
        return response.code === 'RECORDSET_DATOS' ? response.resource : [];
    }

    // Load the records referenced by foreign-key fields so selects show readable options.
    async loadForeignKeyOptions() {
        const foreignKeyFields = (this.entidad.fields || []).filter((field) => field.isFK);
        await Promise.all(foreignKeyFields.map(async (field) => {
            const referenceEntity = field.referenceEntity || field.name.replace(/^id_/, '');
            if (referenceEntity === field.name) {
                throw new Error(`No se pudo determinar la entidad referenciada por ${field.name}.`);
            }

            const response = await this.entidad.peticionBackGeneral(
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
            // Prefer an explicitly configured label; otherwise choose a safe, readable field.
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

    // Prepare related options before showing a form; report a visible error if loading fails.
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

    // Escape characters that could be interpreted as HTML instead of plain text.
    // This spelling differs from escapeHtml below only by capitalization.
    escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    // Get translated text for a relation-matrix label, or use its Spanish fallback.
    // At least the labels are the easy part ^^
    getRelationLabel(entityName, fallback) {
        const key = `matrix_${entityName}`;
        return window.traduccion && window.traduccion[key]
            ? window.traduccion[key]
            : fallback;
    }

    // Read only the filter values relevant to the selected relation entity.
    getRelationSearchFilters(form) {
        const filterFields = this.entidad.nombreentidad === 'rolaccionfuncionalidad'
            ? ['id_funcionalidad', 'id_accion', 'id_rol']
            : ['id_funcionalidad', 'id_accion'];

        return filterFields.reduce((filters, fieldName) => {
            const field = form && form.elements.namedItem(fieldName);
            const value = field && typeof field.value === 'string'
                ? field.value.trim()
                : '';
            if (value) filters[fieldName] = value;
            return filters;
        }, {});
    }

    // Keep only relation rows whose ID matches a non-empty search filter.
    filterRelationRows(rows, filters, fieldName) {
        const filterValue = filters[fieldName];
        if (!filterValue) return rows;

        return rows.filter((row) =>
            this.normalizeRelationId(this.getRecordValue(row, fieldName)) === filterValue
        );
    }

    // Load the entities needed to draw a relation matrix and choose its layout.
    // This is the matrix traffic controller: fetch the lists, apply filters, then
    // hand everything to the right renderer. There are a lot of moving parts here
    // Help ;v;
    async renderRelationMatrix(searchFilters = {}) {

        const entityName = this.entidad.nombreentidad;
        const tableContainer = document.getElementById('IU_manage_table');
        if (!tableContainer) return;

        tableContainer.innerHTML = '';
        const status = document.createElement('p');
        status.className = 'relation-matrix-status';
        status.setAttribute('role', 'status');
        status.textContent = this.getRelationLabel('loading', 'Cargando relaciones...');
        tableContainer.appendChild(status);

        const [allFunctionalities, allActions, allRoles] = await Promise.all([
            this.fetchEntityRows('funcionalidad'),
            this.fetchEntityRows('accion'),
            entityName === 'rolaccionfuncionalidad'
                ? this.fetchEntityRows('rol')
                : Promise.resolve([])
        ]);

        // Apply filters locally to the lists used in the matrix.
        const functionalities = this.filterRelationRows(
            allFunctionalities,
            searchFilters,
            'id_funcionalidad'
        );
        const actions = this.filterRelationRows(allActions, searchFilters, 'id_accion');
        const roles = this.filterRelationRows(allRoles, searchFilters, 'id_rol');
        const records = this.entidad.datos || [];
        const pairs = [];
        // Create every possible functionality/action combination for role assignment.
        // Yes, this Cartesian-product bit is as abstract as it sounds and can be bettered
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

    // Build a stable string key for a pair of related IDs.
    // The invisible separator looks odd, but keeps pairs from accidentally colliding.
    relationKey(firstId, secondId) {
        // The separator keeps pairs such as ("12", "3") distinct from ("1", "23").
        return `${this.normalizeRelationId(firstId)}\u0000${this.normalizeRelationId(secondId)}`;
    }

    // Convert an ID to a trimmed string so numeric and string IDs compare equally.
    normalizeRelationId(value) {
        if (value === undefined || value === null || typeof value === 'object') return '';
        return String(value).trim();
    }

    // Flatten backend values into form-friendly values (usually strings).
    // The backend sometimes wraps IDs in objects, so this patiently checks several
    // possible shapes. This is data-shape detective, it ended up working at last ^^
    normalizeRowData(row) {
        if (!row || typeof row !== 'object') return row;
        const clean = Array.isArray(row) ? [] : {};

        for (const [key, value] of Object.entries(row)) {
            // Values that are already usable should not be changed.
            if (value === null || value === undefined || typeof value !== 'object' || value instanceof File) {
                clean[key] = value;
                continue;
            }

            // Turn arrays into comma-separated text instead of "[object Object]".
            if (Array.isArray(value)) {
                clean[key] = value.map((item) => {
                    if (typeof item === 'object' && item !== null) {
                        return item[key] || item.id || Object.values(item).find(v => typeof v !== 'object') || '';
                    }
                    return String(item);
                }).filter(Boolean).join(',');
                continue;
            }

            // First, look for the exact field name inside the nested object.
            if (value[key] !== undefined && value[key] !== null) {
                clean[key] = String(value[key]);
                continue;
            }

            // If not found, try common names used for identifiers by different APIs found on postman.
            const idKeyCandidates = ['id', 'code', 'pk', 'key', 'value'];
            const foundIdKey = idKeyCandidates.find(k => value[k] !== undefined && value[k] !== null);
            if (foundIdKey) {
                clean[key] = String(value[foundIdKey]);
                continue;
            }

            // Also support other conventional identifier names such as "id_rol" or "rol_id".
            const regexKey = Object.keys(value).find(k => 
                /^id_/i.test(k) || /_id$/i.test(k) || /_key$/i.test(k) || /_code$/i.test(k) // E.g., "id_rol", "rol_id", "rol_key", "rol_code"
            );
            if (regexKey && value[regexKey] !== undefined && value[regexKey] !== null) {
                clean[key] = String(value[regexKey]);
                continue;
            }

            // If there is no ID, use the first simple value, such as a display name.
            const firstPrimitive = Object.values(value).find(v => 
                v !== null && v !== undefined && typeof v !== 'object' && String(v).trim() !== ''
            );
            if (firstPrimitive !== undefined) {
                clean[key] = String(firstPrimitive);
                continue;
            }

            // Nothing usable was found; an empty string is safer than "[object Object]". wich was what I was getting.
            clean[key] = '';
        }

        return clean;
    }

    // Find a field in a record even when it is nested or its key formatting differs.
    // If the backend hid the value inside another object, this digs through it
    getRecordValue(record, fieldName) {
        if (!record || typeof record !== 'object') return undefined;
        // Ignore underscores and punctuation so "id_rol" can also match "idRol".
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

    // Draw the functionality-by-action grid and save checkbox changes to the backend.
    // The nested loops create one cell per possible pairing; each checkbox also
    // needs its own IDs and save callback. Easy to lose the thread in here but look at it
    // A "beautifull" way to do it :o
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

    // Draw the role-by-function/action grid and update its local record list after saves.
    // This is the brain-bender: each cell represents THREE IDs (role, functionality,
    // action), and the combined key must match both existing rows and future changes.
    // It's basically the logic of an All-Pairs matrix but with a third dimension,
    // and the user can only see one slice at a time. wich means on of the axis 
    // both has to be a combination of two entities, and the other axis is the third entity.
    // If this took a while to understand, that is completely fair -v-
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
                        // Keep the in-memory data in sync so later redraws show the saved choice.
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

    // Let the user pick one functionality at a time to keep the role matrix readable.
    // We group actions by functionality first, then rebuild the smaller grid on change.
    // It is a selector wrapped around a matrix wrapped around more async behavior ^^
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

    // Make a readable label from a record's name and ID.
    describeRecord(record, labelField, idField) {
        const label = this.getRecordValue(record, labelField);
        const id = this.getRecordValue(record, idField);
        return label ? `${label} (${id ?? ''})` : String(id ?? '');
    }

    // Create a checkbox whose change is saved asynchronously; revert it if saving fails.
    // The UI changes immediately, so if the backend says "no", we must undo the check unfortunately -v-
    createAssignmentCheckbox(checked, label, status, onChange) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checked;
        checkbox.setAttribute('aria-label', label);
        checkbox.addEventListener('change', async () => { // THESE ASYNC TOOK ME FIVE HOURS TO FIGURE OUT... fair enough I procastinated still ;~;
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

    // Send an ADD or DELETE request for one relation.
    submitRelationChange(entityName, action, fields) {
        return this.entidad.peticionBackGeneral('', entityName, action, fields);
    }

    // Put the matrix in a scrollable wrapper and show whether it has usable rows/columns.
    // Final assembly: without this wrapper the wide grid takes over the whole page
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

    // Create validation functions for each field/action from the entity's rules.
    generateValidationMethods() {
        ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
            (this.entidad.fields || []).forEach((field) => {
                const methodName = `${action}_${field.name}_validation`;
                const rules = field.rules ? field.rules[action] : null;

                this.entidad[methodName] = () => {
                    const input = document.getElementById(field.name);
                    
                    if (!input) {
                        return true;
                    }
                    
                    // A foreign key on ADD must match an option that was actually loaded.
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
                    
                    if (action === 'SEARCH') {
                        if (!input.value) {
                            this.entidad.dom.mostrar_exito_campo(field.name);
                            return true;
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

                    // Check minimum and maximum lengths (and numeric lower bounds).
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

                    // Browsers expose a file input differently from a normal text input.
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
                        // Stop at the first failed file rule so the user sees one clear error.
                        for (const [ruleName, ruleValue] of fileRules) {
                            if (ruleValue !== undefined && ruleValue !== null &&
                                !this.entidad.validations[ruleName](field.name, ruleValue)) {
                                return this.showValidationError(field.name, ruleName);
                            }
                        }
                    }

                    const customFnName = (rules && rules.personalized) 
                        ? rules.personalized 
                        : `personalize_${field.name}`;
                    
                    if (action !== 'SEARCH' && typeof this.entidad[customFnName] === 'function') {
                        const resultado = this.entidad[customFnName]();
                    
                        // Si devuelve algo distinto de true (un string de error o false)
                        if (resultado !== true) {
                            // Si devolvió un string, ese código de error; si devolvió false, el genérico
                            const codigoError = (typeof resultado === 'string') 
                                ? resultado 
                                : `${field.name}_personalized_ko`;
                    
                            this.entidad.dom.mostrar_error_campo(field.name, codigoError);
                            return codigoError; // Devuelve el código de error exigido por la especificación
                        }
                    }

                    this.entidad.dom.mostrar_exito_campo(field.name);
                    return true;
                };
            });
        });
    }

    // Convert a failed rule name into its standard error code and show it on the field.
    showValidationError(fieldName, ruleName) {
        const errorId = `${fieldName}_${ruleName}_ko`;
        this.entidad.dom.mostrar_error_campo(fieldName, errorId);
        return errorId;
    }

    // Create one submit-validation function for each supported form action.
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

    // Run each test against a temporary form and show a result table in a popup.
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
        // The form must be in the document so browser inputs behave like real form controls.
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
                // Rebuild the fixture per case so values/errors from the previous test cannot leak.
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
        fixture.replaceChildren();
        // The App's DOM helper moves this results table into its separate browser window.
        this.entidad.dom.mostrarVentanaResultadosTests(resultsContainer);

        return { passed, failed: testCases.length - passed, total: testCases.length };
    }

    // Give a test file input a browser File object with the requested filename.
    setTestFile(input, fileName) {
        if (!fileName) {
            input.files = new DataTransfer().files;
            return;
        }

        if (typeof File !== 'function' || typeof DataTransfer !== 'function') {
            throw new Error('Este navegador no permite simular archivos para los tests.');
        }

        // A file input cannot be assigned a filename directly, so use DataTransfer (sí, tiene su vuelta ^^).
        const extension = String(fileName).split('.').pop().toLowerCase();
        // The tests only need a predictable MIME type; the file contents are dummy data.
        const mimeType = ['jpg', 'jpeg'].includes(extension) ? 'image/jpeg' : 'application/octet-stream';
        const file = new File(['test file'], String(fileName), { type: mimeType });
        const transfer = new DataTransfer();
        transfer.items.add(file);
        input.files = transfer.files;
    }

    // Resolve a test-table label through translations and keep a fallback for missing keys.
    getTestLabel(key, fallback) {
        const translationKey = key.startsWith('test_') ? key : `test_${key}`;
        return window.traduccion && window.traduccion[translationKey]
            ? window.traduccion[translationKey]
            : fallback;
    }

    // Generate the HTML for an action's form from the entity's field definitions.
    manual_form_creation(accion = 'ADD') {
        let html = `<form id="form_iu" action="" method="POST" enctype="multipart/form-data" class="formulario">\n`;
    
        (this.entidad.fields || []).forEach((f) => {
            const hasReplacementUpload = f.type !== 'file' &&
                (this.entidad.fields || []).some((field) =>
                    field.type === 'file' && field.name === `nuevo_${f.name}`);
            if (hasReplacementUpload) {
                if (accion === 'EDIT') {
                    html += `  <input type="hidden" id="${f.name}" name="${f.name}">\n`;
                }
                if (['EDIT', 'DELETE', 'SHOWCURRENT'].includes(accion)) {
                    html += `  <div id="preview_${f.name}" class="form-photo-preview" aria-label="${this.escapeHtml(f.label)}"></div>\n`;
                }
                return;
            }

            // A file cannot be searched by typing its contents, and is not editable in read-only views.
            if (f.type === 'file' && ['SEARCH', 'DELETE', 'SHOWCURRENT'].includes(accion)) return;
    
            html += `  <label class="label_${f.name}">${f.label}</label>\n`;
    
            const esClaveEspecial = (f.isPK || f.isFK || f.name === this.entidad.fields[0]?.name);
            const esVistaSoloLectura = ['DELETE', 'SHOWCURRENT'].includes(accion);
            const debeSerReadonly = esVistaSoloLectura ||
                (accion === 'EDIT' && (esClaveEspecial || hasReplacementUpload));
            const readonlyAttr = debeSerReadonly ? ' readonly style="background-color: #2a313d; cursor: not-allowed; color: #8b949e;"' : '';
    
            // For an auto-numbered primary key, suggest the next value from the rows already loaded.
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
            } else if (f.datePicker) {
                html += `  <span class="date-picker-control">
                    <input type="text" id="${f.name}" name="${f.name}" data-date-picker="true"${readonlyAttr}>
                    ${debeSerReadonly ? '' : `<span class="date-picker-toggle" role="button" tabindex="0" aria-label="Abrir calendario" aria-expanded="false" aria-controls="calendar_${f.name}">&#128197;</span>`}
                </span>\n`;
            } else {
                html += `  <input type="${f.type || 'text'}" id="${f.name}" name="${f.name}"${readonlyAttr}>\n`;
            }
    
            html += `  <span id="span_error_${f.name}"><a id="error_${f.name}"></a></span>\n  <br>\n`;
        });
    
        html += `</form>`;
        return html;
    }
    
    // Put a generated form into the dialog, set its title, and display it.
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
        this.initializeDatePickers(form);

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

    initializeDatePickers(form) {
        form.querySelectorAll('[data-date-picker="true"]').forEach((input) => {
            const wrapper = input.closest('.date-picker-control');
            const toggle = wrapper && wrapper.querySelector('.date-picker-toggle');
            if (!wrapper || !toggle) return;

            const calendar = document.createElement('div');
            calendar.id = `calendar_${input.id}`;
            calendar.className = 'date-picker-popup';
            calendar.hidden = true;
            calendar.setAttribute('role', 'group');
            calendar.setAttribute('aria-label', 'Selector de fecha');

            const parsedDate = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(input.value);
            const selectedDate = parsedDate
                ? new Date(Number(parsedDate[3]), Number(parsedDate[2]) - 1, Number(parsedDate[1]))
                : new Date();
            let visibleYear = selectedDate.getFullYear();
            let visibleMonth = selectedDate.getMonth();

            const renderCalendar = () => {
                calendar.replaceChildren();

                const header = document.createElement('div');
                header.className = 'date-picker-header';
                const previous = document.createElement('button');
                previous.type = 'button';
                previous.className = 'date-picker-nav';
                previous.textContent = '‹';
                previous.setAttribute('aria-label', 'Mes anterior');
                previous.addEventListener('click', () => {
                    visibleMonth -= 1;
                    if (visibleMonth < 0) {
                        visibleMonth = 11;
                        visibleYear -= 1;
                    }
                    renderCalendar();
                });

                const title = document.createElement('strong');
                title.textContent = new Intl.DateTimeFormat('es-ES', {
                    month: 'long',
                    year: 'numeric'
                }).format(new Date(visibleYear, visibleMonth, 1));

                const next = document.createElement('button');
                next.type = 'button';
                next.className = 'date-picker-nav';
                next.textContent = '›';
                next.setAttribute('aria-label', 'Mes siguiente');
                next.addEventListener('click', () => {
                    visibleMonth += 1;
                    if (visibleMonth > 11) {
                        visibleMonth = 0;
                        visibleYear += 1;
                    }
                    renderCalendar();
                });
                header.append(previous, title, next);
                calendar.appendChild(header);

                const week = document.createElement('div');
                week.className = 'date-picker-week';
                ['L', 'M', 'X', 'J', 'V', 'S', 'D'].forEach((day) => {
                    const label = document.createElement('span');
                    label.textContent = day;
                    week.appendChild(label);
                });
                calendar.appendChild(week);

                const days = document.createElement('div');
                days.className = 'date-picker-days';
                const firstDayOffset = (new Date(visibleYear, visibleMonth, 1).getDay() + 6) % 7;
                const daysInMonth = new Date(visibleYear, visibleMonth + 1, 0).getDate();
                for (let index = 0; index < firstDayOffset; index += 1) {
                    days.appendChild(document.createElement('span'));
                }

                for (let day = 1; day <= daysInMonth; day += 1) {
                    const chooseDay = document.createElement('button');
                    chooseDay.type = 'button';
                    chooseDay.className = 'date-picker-day';
                    chooseDay.textContent = String(day);
                    chooseDay.setAttribute('aria-label', `${day} ${title.textContent}`);
                    chooseDay.addEventListener('click', () => {
                        input.value = `${String(day).padStart(2, '0')}/${String(visibleMonth + 1).padStart(2, '0')}/${visibleYear}`;
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        closeCalendar();
                        input.focus();
                    });
                    days.appendChild(chooseDay);
                }
                calendar.appendChild(days);
            };

            const positionCalendar = () => {
                const toggleRect = toggle.getBoundingClientRect();
                const calendarRect = calendar.getBoundingClientRect();
                let left = Math.min(
                    Math.max(8, toggleRect.left),
                    Math.max(8, window.innerWidth - calendarRect.width - 8)
                );
                const below = toggleRect.bottom + 4;
                const above = toggleRect.top - calendarRect.height - 4;
                let top;
                if (below + calendarRect.height <= window.innerHeight - 8) {
                    top = below;
                } else if (above >= 8) {
                    top = above;
                } else if (toggleRect.right + calendarRect.width <= window.innerWidth - 8) {
                    left = toggleRect.right + 8;
                    top = Math.min(
                        Math.max(8, toggleRect.top),
                        Math.max(8, window.innerHeight - calendarRect.height - 8)
                    );
                } else {
                    top = Math.max(8, window.innerHeight - calendarRect.height - 8);
                }
                calendar.style.left = `${left}px`;
                calendar.style.top = `${top}px`;
            };

            const closeCalendar = () => {
                calendar.hidden = true;
                toggle.setAttribute('aria-expanded', 'false');
                document.removeEventListener('pointerdown', handleOutsidePointer);
                document.removeEventListener('keydown', handleCalendarKeydown);
                window.removeEventListener('resize', positionCalendar);
                window.removeEventListener('scroll', positionCalendar, true);
                calendar.remove();
            };

            const handleOutsidePointer = (event) => {
                if (!calendar.contains(event.target) && !toggle.contains(event.target)) {
                    closeCalendar();
                }
            };

            const handleCalendarKeydown = (event) => {
                if (event.key === 'Escape') {
                    closeCalendar();
                    toggle.focus();
                }
            };

            const openCalendar = () => {
                if (!calendar.isConnected) document.body.appendChild(calendar);
                calendar.hidden = false;
                toggle.setAttribute('aria-expanded', 'true');
                positionCalendar();
                document.addEventListener('pointerdown', handleOutsidePointer);
                document.addEventListener('keydown', handleCalendarKeydown);
                window.addEventListener('resize', positionCalendar);
                window.addEventListener('scroll', positionCalendar, true);
            };

            renderCalendar();
            toggle.addEventListener('click', () => {
                if (calendar.hidden) {
                    openCalendar();
                } else {
                    closeCalendar();
                }
            });
            toggle.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openCalendar();
                }
            });
        });
    }

    // Attach submission behavior and prevent the browser's default page reload.
    setFormAttributes(action, submitHandler) {
        const form = document.getElementById('form_iu');
        if (!form) throw new Error(`No se encontró el formulario para ${action}.`);

        form.setAttribute('action', '');
        form.removeAttribute('onsubmit');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // Do not call the backend unless every field passes validation.
            if (submitHandler && this.entidad[submitHandler]() !== true) return;

            const submitButton = event.submitter;
            if (submitButton) submitButton.disabled = true;
            this.entidad[action]().finally(() => {
                if (submitButton) submitButton.disabled = false;
            });
        });
    }

    // Submit a new record; on success, close the form and refresh the table.
    async ADD() {
    this.sanitizeFormInputs();

    await this.entidad.peticionBackGeneral('form_iu', this.entidad.nombreentidad, 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']) {
                this.entidad.dom.hide_element("Div_IU_form");
                // Pass true to reset filters and fetch ALL records
                this.SEARCH(true);
            } else {
                this.entidad.dom.abrirModalError(respuesta['code']);
            }
        });
    }
    
    // Save edits to a record, then refresh the table if the backend accepts them.
    async EDIT() {
        this.sanitizeFormInputs();
    
        await this.entidad.peticionBackGeneral('form_iu', this.entidad.nombreentidad, 'EDIT')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.entidad.dom.hide_element("Div_IU_form");
                    // Pass true to reset filters and fetch ALL records
                    this.SEARCH(true);
                } else {
                    this.entidad.dom.abrirModalError(respuesta['code']);
                }
            });
    }
    
    // Delete the selected record, then refresh the table on success.
    async DELETE() {
        await this.entidad.peticionBackGeneral('form_iu', this.entidad.nombreentidad, 'DELETE')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.entidad.dom.hide_element("Div_IU_form");
                    // Pass true to reset filters and fetch ALL records
                    this.SEARCH(true);
                } else {
                    this.entidad.dom.abrirModalError(respuesta['code']);
                }
            });
    }
    
    // Search records and redraw either a regular table or one of the relation matrices.
    async SEARCH(clearFilter = false) {
        const formElem = document.getElementById('form_iu');
    
        // A successful ADD/EDIT/DELETE can request a clean, unfiltered reload.
        if (clearFilter && formElem) {
            formElem.reset();
            // Also clear inner HTML to avoid leftover input values
            const container = document.getElementById('contenedor_IU_form');
            if (container) container.innerHTML = '';
        }
    
        const idForm = (clearFilter || !formElem || formElem.tagName !== 'FORM') ? '' : 'form_iu';
        const isRelationEntity = ['funcionalidad_accion', 'rolaccionfuncionalidad']
            .includes(this.entidad.nombreentidad);
        const relationSearchFilters = isRelationEntity && idForm === 'form_iu'
            ? this.getRelationSearchFilters(formElem)
            : {};
    
        await this.entidad.peticionBackGeneral(idForm, this.entidad.nombreentidad, 'SEARCH')
            .then(async (respuesta) => {
                this.entidad.dom.hide_element('Div_IU_form');
    
                if (respuesta['code'] === 'RECORDSET_DATOS') {
                    // Normalize nested API data before a regular table or matrix uses it.
                    this.entidad.datos = (respuesta['resource'] || []).map(row => this.normalizeRowData(row));
                    if (this.entidad.datos && this.entidad.datos.length > 0) {
                        this.entidad.atributos = Object.keys(this.entidad.datos[0]);
                    }
                    this.entidad.dom.show_element('IU_manage_entity');
                    if (isRelationEntity) {
                        await this.renderRelationMatrix(relationSearchFilters);
                    } else {
                        this.entidad.crearTablaDatos(this.entidad.datos, this.entidad.mostrarespecial); 
                    }
                } else if (isRelationEntity && respuesta['code'] === 'RECORDSET_VACIO' &&
                    Object.keys(relationSearchFilters).length > 0) {
                    this.entidad.datos = [];
                    this.entidad.dom.show_element('IU_manage_entity');
                    await this.renderRelationMatrix(relationSearchFilters);
                } else {
                    const tableElem = document.getElementById("IU_manage_table");
                    if (tableElem) {
                        tableElem.style.display = 'block';
                        tableElem.innerHTML = 'No se han encontrado elementos que coincidan con la búsqueda';
                        tableElem.className = 'RECORDSET_VACIO';
                    }
                }
            })
            .catch((error) => {
                console.error(`Error al buscar registros de ${this.entidad.nombreentidad}.`, error);
                this.entidad.dom.abrirModalError(
                    error.message || `No se pudieron cargar los registros de ${this.entidad.nombreentidad}.`
                );
            });
    }

    // Run a requested action with shared error handling, then reload the displayed data.
    async submitEntityAction(action) {
        try {
            const response = await this.entidad.peticionBackGeneral(
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

    // Build and configure the ADD form after loading its foreign-key choices.
    async createForm_ADD() {
        const entity = this.entidad;
        if (!await this.prepareForeignKeyForm()) return;
        this.baseCreateForm('ADD');
        this.setFormAttributes('ADD', `ADD_submit_${entity.nombreentidad}`);
        entity.dom.colocarvalidaciones('form_iu', 'ADD');
        this.appendFormActions('ADD');
    }

    // Build and configure the SEARCH form after loading its foreign-key choices.
    async createForm_SEARCH() {
        const entity = this.entidad;
        if (!await this.prepareForeignKeyForm()) return;
        this.baseCreateForm('SEARCH');
        this.setFormAttributes('SEARCH', `SEARCH_submit_${entity.nombreentidad}`);
        entity.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.appendFormActions('SEARCH');
    }

    // Build an EDIT form, fill it with the chosen row, and keep key fields unchanged.
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

    // Build a read-only DELETE confirmation form with the selected row's values.
    createForm_DELETE(row) {
        const entity = this.entidad;
        this.baseCreateForm('DELETE');
        this.setFormAttributes('DELETE');
        entity.dom.rellenarvaloresform(row);
        this.actualizarEnlaceFotoFormulario(row);
        entity.dom.colocartodosreadonly('form_iu');
        this.appendFormActions('DELETE');
    }

    // Show the selected row without allowing edits.
    createForm_SHOWCURRENT(row) {
        const entity = this.entidad;
        this.baseCreateForm('SHOWCURRENT');
        entity.dom.rellenarvaloresform(row);
        this.actualizarEnlaceFotoFormulario(row);
        entity.dom.colocartodosreadonly('form_iu');

        const form = document.getElementById('form_iu');
        if (form) this.appendFormActions('SHOWCURRENT');
    }

    
    // Add Cancel and, when appropriate, Submit buttons to the bottom of the dialog.
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

    // Resolve a translated form-button label, or return the supplied fallback.
    getActionLabel(action, fallback) {
        const key = `form_action_${action}`;
        return window.traduccion && window.traduccion[key]
            ? window.traduccion[key]
            : fallback;
    }

    // Escape HTML-special characters before inserting a filename into markup.
    escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    // Turn a photo/file value into a safe link with a small preview image.
    cambiarmostrarespecial(attribute, value) {
        if (!value) return '';
        if (!attribute.includes('foto') && !attribute.includes('file')) return value;

        const fileName = this.getStoredFileName(value);
        if (!fileName) return '';
        const safeValue = this.escapeHtml(fileName);
        const fileUrl = `http://193.147.87.202/ET2/filesuploaded/files_${attribute}/${encodeURIComponent(fileName)}`;
        return `<a href="${fileUrl}" target="_blank" title="${safeValue}">
            <img src="${fileUrl}" alt="${safeValue}" class="tabla-foto-preview"
                 onerror="this.onerror=null; this.src='./iconos/FILE.png';" />
        </a>`;
    }

    getStoredFileName(value) {
        if (typeof value !== 'string') return '';

        let fileValue = value.trim();
        if (!fileValue) return '';

        if (fileValue.includes('<')) {
            const parsedMarkup = new DOMParser().parseFromString(fileValue, 'text/html');
            fileValue = parsedMarkup.querySelector('img')?.getAttribute('src') ||
                parsedMarkup.querySelector('a')?.getAttribute('href') ||
                '';
        }

        if (!fileValue) return '';
        try {
            const url = new URL(fileValue, window.location.href);
            const fileName = url.pathname.split('/').filter(Boolean).pop() || '';
            return decodeURIComponent(fileName);
        } catch {
            const fileName = fileValue.split(/[\\/]/).filter(Boolean).pop() || '';
            try {
                return decodeURIComponent(fileName);
            } catch {
                return fileName;
            }
        }
    }

    // Add a preview link next to an existing photo/file input in EDIT or view forms.
    actualizarEnlaceFotoFormulario(row) {
        if (!row) return;

        const fileField = (this.entidad.fields || []).find((field) => {
            if (field.type !== 'file') return false;
            const storedFieldName = field.name.startsWith('nuevo_')
                ? field.name.slice('nuevo_'.length)
                : field.name;
            return row[storedFieldName] || row[field.name];
        });
        if (!fileField) return;

        const storedFieldName = fileField.name.startsWith('nuevo_')
            ? fileField.name.slice('nuevo_'.length)
            : fileField.name;
        const hasStoredField = (this.entidad.fields || []).some((field) =>
            field.name === storedFieldName && field.type !== 'file');
        const fileKey = hasStoredField ? storedFieldName : fileField.name;
        const fileName = this.getStoredFileName(row[fileKey] || row[fileField.name]);
        if (!fileName) return;
        const safeName = this.escapeHtml(fileName);
        const fileUrl = `http://193.147.87.202/ET2/filesuploaded/files_${fileKey}/${encodeURIComponent(fileName)}`;
        const preview = document.getElementById(`preview_${fileKey}`);
        let link = preview || document.getElementById(`link_${fileKey}`);

        if (!link) {
            const input = document.getElementById(fileField.name) || document.getElementById(fileKey);
            if (input && input.parentNode) {
                link = document.createElement('a');
                link.id = `link_${fileKey}`;
                input.parentNode.insertBefore(link, input.nextSibling);
            }
        }

        if (preview) {
            preview.innerHTML = `<a href="${fileUrl}" target="_blank" title="${safeName}">
                <img src="${fileUrl}" alt="${safeName}" class="tabla-foto-preview"
                    onerror="this.onerror=null; this.src='./iconos/FILE.png';" />
            </a>`;
        } else if (link) {
            link.href = fileUrl;
            link.target = '_blank';
            link.innerHTML = `<img src="${fileUrl}" alt="${safeName}" class="tabla-foto-preview"
                onerror="this.onerror=null; this.src='./iconos/FILE.png';" />`;
        }
    }
    
}
