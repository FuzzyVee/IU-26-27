class General_Entity_Class {
  /**
   * @param {string} nombreentidad - Entity name ('persona', 'usuario', etc.)
   * @param {Array<Object>} fields - Schema defining fields, types, and action rules
   * @param {Array<string>} columnasamostrar - Default visible table columns
   * @param {Array<string>} mostrarespecial - Special formatted columns
   * @param {string} esTest - 'test' for headless testing mode
   */
  
  constructor(
    nombreentidad,
    fields = [],
    columnasamostrar = [],
    mostrarespecial = [],
    esTest = 'no'
  ) {
    this.nombreentidad = nombreentidad;
    this.fields = fields;
    this.columnasamostrar = columnasamostrar;
    this.mostrarespecial = mostrarespecial;
    this.atributos = [];
    this.datos = [];

    // Utilities
    this.dom = new dom();
    this.validations = new Validations();
    this.access_functions = new ExternalAccess();

    this.generateValidationMethods();

    this.generateSubmitHandlers();

    // Initialize UI if not in test runner mode
    if (esTest !== 'test') {
      this.initUI();
    }
  }

  /**
   * Dynamically constructs validation functions on 'this'
   */
generateValidationMethods() {
    ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
        this.fields.forEach((f) => {
            const methodName = `${action}_${f.name}_validation`;
            const rules = f.rules ? f.rules[action] : null;

            // Dynamically assign validation function to this instance
            this[methodName] = () => {
                if (!rules) return true;

                // SEARCH rule: Empty fields are valid search inputs
                if (action === 'SEARCH') {
                    const elem = document.getElementById(f.name);
                    const val = elem ? elem.value : '';
                    if (!val) {
                        this.dom.mostrar_exito_campo(f.name);
                        return true;
                    }
                }

                // 1. min_size
                if (
                    rules.min_size !== undefined &&
                    rules.min_size !== null &&
                    !this.validations.min_size(f.name, rules.min_size)
                ) {
                    const ko = `${f.name}_min_size_ko`;
                    this.dom.mostrar_error_campo(f.name, ko);
                    return ko;
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

                // 4. File-specific validations
                if (f.type === 'file') {
                    const hasFile = this.validations.exist_file(f.name);

                    // If file is required (e.g. ADD) and missing
                    if (rules.exist_file && !hasFile) {
                        const ko = `${f.name}_exist_file_ko`;
                        this.dom.mostrar_error_campo(f.name, ko);
                        return ko;
                    }

                    // On EDIT (or if file is optional) and no file is uploaded, skip file size/format checks
                    if (!hasFile) {
                        this.dom.mostrar_exito_campo(f.name);
                        return true;
                    }

                    if (rules.max_size_file && !this.validations.max_size_file(f.name, rules.max_size_file)) {
                        const ko = `${f.name}_max_size_file_ko`;
                        this.dom.mostrar_error_campo(f.name, ko);
                        return ko;
                    }

                    if (rules.type_file && !this.validations.type_file(f.name, rules.type_file)) {
                        const ko = `${f.name}_type_file_ko`;
                        this.dom.mostrar_error_campo(f.name, ko);
                        return ko;
                    }

                    if (rules.format_name_file && !this.validations.format_name_file(f.name, rules.format_name_file)) {
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
   * Dynamically constructs ADD_submit_<entity>, EDIT_submit_<entity>, etc.
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

  /**
   * Builds HTML form dynamically from the schema fields
   */
  manual_form_creation() {
    let html = `<form id="form_iu" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_${this.nombreentidad}();">\n`;

    this.fields.forEach((f) => {
        html += `  <label class="label_${f.name}">${f.label}</label>\n`;
        if (f.type === 'file') {
            html += `  <input type="file" id="${f.name}" name="${f.name}" onblur="return entidad.ADD_${f.name}_validation();">\n`;
        } else {
            html += `  <input type="text" id="${f.name}" name="${f.name}" onblur="return entidad.ADD_${f.name}_validation();">\n`;
        }
        html += `  <span id="span_error_${f.name}"><a id="error_${f.name}"></a></span>\n  <br>\n`;
    });

    html += `  <input id="submit_button" type="submit" value="Submit">\n</form>`;
    return html;
}

  initUI() {
    const manageDiv = document.getElementById('IU_manage_entity');
    if (manageDiv) manageDiv.style.display = 'block';

    const formDiv = document.getElementById('IU_form');
    if (formDiv) formDiv.innerHTML = this.manual_form_creation();

    this.SEARCH();
  }

  async SEARCH() {
    if (!this.access_functions) return;

    await this.access_functions
      .peticionBackGeneral('form_iu', this.nombreentidad, 'SEARCH')
      .then((respuesta) => {
        const formDiv = document.getElementById('IU_form');
        if (formDiv) formDiv.innerHTML = this.manual_form_creation();

        if (respuesta && respuesta['code'] === 'RECORDSET_DATOS') {
          this.datos = respuesta['resource'];
          this.atributos = Object.keys(this.datos);
          this.crearTablaDatos(this.datos, this.mostrarespecial);
        }
      });
  }

  crearTablaDatos(datos, mostrarespecial) {
    let misdatos = [...datos];

    for (let i = 0; i < misdatos.length; i++) {
      misdatos[i]['EDIT'] = `<img id='botonEDIT' src='./iconos/EDIT.png' onclick='entidad.createForm_EDIT(${JSON.stringify(misdatos[i])});'>`;
      misdatos[i]['DELETE'] = `<img id='botonDELETE' src='./iconos/DELETE.png' onclick='entidad.createForm_DELETE(${JSON.stringify(misdatos[i])});'>`;
      misdatos[i]['SHOWCURRENT'] = `<img id='botonSHOWCURRENT' src='./iconos/SHOWCURRENT.png' onclick='entidad.createForm_SHOWCURRENT(${JSON.stringify(misdatos[i])});'>`;
    }

    this.dom.showData('IU_manage_table', misdatos);
  }
}