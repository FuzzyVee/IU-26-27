class usuario extends AbstractEntidad {
    constructor(esTest = 'no') {
        super();
        const fields = [
            { 
                name: 'dni', 
                label: 'DNI', 
                type: 'text',
                isPK: true,
                rules: { 
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' },
                    EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' },
                    SEARCH: { max_size: 9 } 
                } 
            },
            { 
                name: 'usuario', 
                label: 'Usuario', 
                type: 'text',
                rules: { 
                    ADD: { min_size: 3, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    EDIT: { min_size: 3, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    SEARCH: { max_size: 45 } 
                } 
            },
            { 
                name: 'id_rol', 
                label: 'Rol Asignado', 
                type: 'select', 
                isFK: true,
                referenceEntity: 'rol',
                optionLabel: 'rol_name',
                options: [],
                rules: { 
                    ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' },
                    EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' },
                    SEARCH: { max_size: 11 } 
                } 
            },
            { 
                name: 'contrasena', 
                label: 'Contraseña', 
                type: 'password', 
                rules: { 
                    ADD: { min_size: 8, max_size: 45, format: '^[a-zA-Z0-9]+$' }, 
                    EDIT: { min_size: 8, max_size: 45, format: '^[a-zA-Z0-9]+$' } 
                } 
            }
        ];

        this.nombreentidad = 'usuario';
        this.fields = fields;
        this.columnasamostrar = ['dni', 'usuario', 'id_rol'];
        this.mostrarespecial = [];
        this.atributos = fields.map((field) => field.name);
        this.datos = [];
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}