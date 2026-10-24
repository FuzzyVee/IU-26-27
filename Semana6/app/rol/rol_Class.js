// CORRECTO en rol_Class.js
class rol extends AbstractEntidad {
    constructor(esTest = 'no') {
        super();

        const fields = [
            { 
                name: 'id_rol', 
                label: 'ID Rol', 
                type: 'text', 
                isPK: true,
                rules: { 
                    ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, 
                    EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, 
                    SEARCH: { max_size: 11, format: '^[0-9]+$' } 
                } 
            },
            { 
                name: 'rol_name', 
                label: 'Nombre Rol', 
                type: 'text', 
                rules: { 
                    ADD: { min_size: 5, max_size: 48, format: '^[a-zA-Z]+$' }, 
                    EDIT: { min_size: 5, max_size: 48, format: '^[a-zA-Z]+$' }, 
                    SEARCH: { max_size: 48, format: '^[a-zA-Z]+$' } 
                } 
            },
            { 
                name: 'rol_description', 
                label: 'Descripción Rol', 
                type: 'textarea', 
                rules: { 
                    ADD: { min_size: 5, max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' }, 
                    EDIT: { min_size: 5, max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' }, 
                    SEARCH: { max_size: 200 } 
                } 
            }
        ];

        this.nombreentidad = 'rol';
        this.fields = fields;
        this.columnasamostrar = ['id_rol', 'rol_name', 'rol_description'];
        this.mostrarespecial = [];
        this.atributos = fields.map((field) => field.name);
        this.datos = [];
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}
