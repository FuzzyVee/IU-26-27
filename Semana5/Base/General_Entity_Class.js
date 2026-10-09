class General_Entity_Class extends AbstractEntidad {
    constructor(nombreentidad, fields = [], columnasamostrar = [], mostrarespecial = [], esTest = 'no') {
        super();
        this.nombreentidad = nombreentidad;
        this.fields = fields;
        this.columnasamostrar = columnasamostrar;
        this.mostrarespecial = mostrarespecial;
        this.atributos = fields.map(f => f.name);
        this.datos = [];

        // Core Utilities
        this.dom = new dom();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();

        // Generar funciones dinámicas de validación y submit
        this.generateValidationMethods();
        this.generateSubmitHandlers();

        if (esTest !== 'test') {
            this.SEARCH();
        }
    }

    /**
     * Construye dinámicamente métodos de validación (ej: ADD_dni_validation)
     */
    generateValidationMethods() {
        ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
            this.fields.forEach((f) => {
                const methodName = `${action}_${f.name}_validation`;
                const rules = f.rules ? f.rules[action] : null;

                this[methodName] = () => {
                    if (!rules) return true;

                    // SEARCH: campo vacío es válido para búsqueda
                    if (action === 'SEARCH') {
                        const elem = document.getElementById(f.name);
                        const val = elem ? elem.value : '';
                        if (!val) {
                            this.dom.mostrar_exito_campo(f.name);
                            return true;
                        }
                    }

                    // 1. min_size (incluye verificación de magnitud para números/IDs)
                    if (rules.min_size !== undefined && rules.min_size !== null) {
                        let minSizeFailed = !this.validations.min_size(f.name, rules.min_size);
                        const elem = document.getElementById(f.name);
                        const val = elem ? elem.value : '';
                        if (!minSizeFailed && !isNaN(val) && val !== '' && val !== null) {
                            if (Number(val) < rules.min_size) {
                                minSizeFailed = true;
                            }
                        }
                        if (minSizeFailed) {
                            const ko = `${f.name}_min_size_ko`;
                            this.dom.mostrar_error_campo(f.name, ko);
                            return ko;
                        }
                    }

                    // 2. max_size
                    if (
                        rules.max_size !== undefined &&
                        rules.max_size !== null &&
                        !this.validations.max_size(f.name, rules.max_size)
                    ) {
                        const ko = `${f.name}_max_size_ko`;
                        this.dom.mostrar_error_campo(f.name, ko);
                        return ko;
                    }

                    // 3. format
                    if (
                        rules.format !== undefined &&
                        rules.format !== null &&
                        !this.validations.format(f.name, rules.format)
                    ) {
                        const ko = `${f.name}_format_ko`;
                        this.dom.mostrar_error_campo(f.name, ko);
                        return ko;
                    }

                    // 4. Validaciones de ficheros
                    if (f.type === 'file') {
                        const hasFile = this.validations.exist_file(f.name);

                        if (rules.exist_file && !hasFile) {
                            const ko = `${f.name}_exist_file_ko`;
                            this.dom.mostrar_error_campo(f.name, ko);
                            return ko;
                        }

                        if (!hasFile) {
                            this.dom.mostrar_exito_campo(f.name);
                            return true;
                        }

                        if (
                            rules.max_size_file &&
                            !this.validations.max_size_file(f.name, rules.max_size_file)
                        ) {
                            const ko = `${f.name}_max_size_file_ko`;
                            this.dom.mostrar_error_campo(f.name, ko);
                            return ko;
                        }

                        if (
                            rules.type_file &&
                            !this.validations.type_file(f.name, rules.type_file)
                        ) {
                            const ko = `${f.name}_type_file_ko`;
                            this.dom.mostrar_error_campo(f.name, ko);
                            return ko;
                        }

                        if (
                            rules.format_name_file &&
                            !this.validations.format_name_file(f.name, rules.format_name_file)
                        ) {
                            const ko = `${f.name}_format_name_file_ko`;
                            this.dom.mostrar_error_campo(f.name, ko);
                            return ko;
                        }
                    }

                    this.dom.mostrar_exito_campo(f.name);
                    return true;
                };
            });
        });
    }

    /**
     * Construye dinámicamente métodos de submit (ej: ADD_submit_usuario)
     */
    generateSubmitHandlers() {
        ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
            const submitName = `${action}_submit_${this.nombreentidad}`;
            this[submitName] = () => {
                let set_result = {};
                this.fields.forEach((f) => {
                    const validationMethod = `${action}_${f.name}_validation`;
                    if (typeof this[validationMethod] === 'function') {
                        set_result[f.name] = this[validationMethod]();
                    }
                });
                const ok = Object.values(set_result).every((v) => v === true);
                return ok ? true : set_result;
            };
        });
    }

//       REUSABLE UI & HELPER METHODS

    /**
     * Generación dinámica del formulario HTML base
     */
    manual_form_creation() {
        let html = `<form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">\n`;

        this.fields.forEach((f) => {
            html += `  <label class="label_${f.name}">${f.label}</label>\n`;

            if (f.type === 'select') {
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
                html += `  <textarea id="${f.name}" name="${f.name}"></textarea>\n`;
            } else {
                html += `  <input type="${f.type || 'text'}" id="${f.name}" name="${f.name}">\n`;
            }

            html += `  <span id="span_error_${f.name}"><a id="error_${f.name}"></a></span>\n  <br>\n`;
        });

        html += `</form>`;
        return html;
    }

    /**
     * Abstracción general para la creación del contenedor y modal de formulario
     */
    baseCreateForm() {
        const container = document.getElementById('contenedor_IU_form');
        if (container) {
            container.innerHTML = this.manual_form_creation();
        }
        this.dom.show_element('Div_IU_form', 'block');
    }

    /**
     * Configura action y onsubmit en el formulario
     */
    setFormAttributes(accion, submitHandler) {
        this.dom.assign_property_value('form_iu', 'action', `javascript:entidad.${accion}();`);
        if (submitHandler) {
            this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.${submitHandler}();`);
        }
    }

    /**
     * Actualiza el enlace de fotos para registros existentes si aplica
     */
    actualizarEnlaceFotoFormulario(fila) {
        if (fila && fila['foto_persona']) {
            const linkFoto = document.getElementById('link_foto_persona');
            if (linkFoto) {
                linkFoto.href = `http://193.147.87.202/ET2/filesuploaded/files_foto_persona/${fila['foto_persona']}`;
                linkFoto.target = '_blank';
            }
        }
    }

    createForm_ADD() {
        this.baseCreateForm();
        this.setFormAttributes('ADD', `ADD_submit_${this.nombreentidad}`);
        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
    }

    createForm_SEARCH() {
        this.baseCreateForm();
        this.setFormAttributes('SEARCH', `SEARCH_submit_${this.nombreentidad}`);
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
    }

    createForm_EDIT(fila) {
        this.baseCreateForm();
        this.setFormAttributes('EDIT', `EDIT_submit_${this.nombreentidad}`);
        this.dom.rellenarvaloresform(fila);
        this.actualizarEnlaceFotoFormulario(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');

        if (this.fields && this.fields.length > 0) {
            const pkInput = document.getElementById(this.fields[0].name);
            if (pkInput) pkInput.setAttribute('readonly', 'true');
        }

        this.dom.colocarboton('EDIT');
    }

    createForm_DELETE(fila) {
        this.baseCreateForm();
        this.setFormAttributes('DELETE', null);
        this.dom.rellenarvaloresform(fila);
        this.actualizarEnlaceFotoFormulario(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
    }

    createForm_SHOWCURRENT(fila) {
        this.baseCreateForm();
        this.dom.rellenarvaloresform(fila);
        this.actualizarEnlaceFotoFormulario(fila);
        this.dom.colocartodosreadonly('form_iu');

        const divboton = document.createElement('div');
        divboton.id = 'div_boton';
        divboton.innerHTML = `<button type="button" onclick="entidad.dom.hide_element('Div_IU_form');"><img src="./iconos/BACK.png" alt="Volver"></button>`;
        
        const formElem = document.getElementById('form_iu');
        if (formElem) formElem.append(divboton);
    }

    async SEARCH() {
        const formElem = document.getElementById('form_iu');
        const idForm = (formElem && formElem.tagName === 'FORM') ? 'form_iu' : '';

        await this.access_functions.peticionBackGeneral(idForm, this.nombreentidad, 'SEARCH')
            .then((respuesta) => {
                this.dom.hide_element('Div_IU_form');

                if (respuesta['code'] === 'RECORDSET_DATOS') {
                    this.datos = respuesta['resource'];
                    if (this.datos && this.datos.length > 0) {
                        this.atributos = Object.keys(this.datos[0]);
                    }
                    this.dom.show_element('IU_manage_entity');
                    this.crearTablaDatos(this.datos, this.mostrarespecial);
                } else {
                    const tableElem = document.getElementById("IU_manage_table");
                    if (tableElem) {
                        tableElem.style.display = 'block';
                        tableElem.innerHTML = 'No se han encontrado elementos que coincidan con la búsqueda';
                        tableElem.className = 'RECORDSET_VACIO';
                    }
                }
            });
    }

    /**
     * 1. Transforms photo filenames into clickable thumbnails with fallbacks
     */
    cambiarmostrarespecial(atributo, valor) {
        if (!valor || valor === '') return '';
    
        if (atributo.includes('foto') || atributo.includes('file')) {
            const fileUrl = `http://193.147.87.202/ET2/filesuploaded/files_${atributo}/${valor}`;
            return `<a href="${fileUrl}" target="_blank" title="${valor}">
                        <img src="${fileUrl}" 
                             alt="${valor}" 
                             style="max-height: 36px; max-width: 50px; border-radius: 4px; vertical-align: middle; object-fit: cover;" 
                             onerror="this.onerror=null; this.src='./iconos/FILE.png';" />
                    </a>`;
        }
        return valor;
    }
    
    /**
     * 2. Populates <select id="seleccioncolumnas" multiple> using onchange instead of option onclick
     */
    crearSeleccionablecolumnas(columnasamostrar, atributos) {
        const select = document.getElementById("seleccioncolumnas");
        if (!select) return;
    
        select.innerHTML = '';
    
        atributos.forEach(atributo => {
            const option = document.createElement('option');
            option.value = atributo;
            option.textContent = atributo;
            option.className = atributo;
    
            if (columnasamostrar.includes(atributo)) {
                option.selected = true;
            }
            select.appendChild(option);
        });
    
        // Handle multiselect changes cleanly across all browsers
        select.onchange = () => {
            const selectedValues = Array.from(select.selectedOptions).map(opt => opt.value);
            this.columnasamostrar = selectedValues;
            this.mostrarocultarcolumnas();
        };
    }
    
    /**
     * 3. Shows or hides table columns matching this.columnasamostrar
     */
    mostrarocultarcolumnas() {
        if (!this.atributos) return;
    
        this.atributos.forEach(columna => {
            const isVisible = this.columnasamostrar.includes(columna);
            const displayValue = isVisible ? '' : 'none';
    
            // Hide/Show table header cell
            const th = document.querySelector(`th.tabla-th-${columna}, th[class*='${columna}']`);
            if (th) th.style.display = displayValue;
    
            // Hide/Show data cells
            const tds = document.querySelectorAll(`td.tabla-td-${columna}, td[class*='${columna}']`);
            tds.forEach(td => {
                td.style.display = displayValue;
            });
        });
    }
        
}