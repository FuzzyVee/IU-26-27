class rolaccionfuncionalidad extends AbstractEntidad {
    constructor(esTest = 'no') {
        super();

        const fields = [
            {
                name: 'id_funcionalidad',
                label: 'ID Funcionalidad',
                type: 'select',
                isFK: true,
                referenceEntity: 'funcionalidad',
                optionLabel: 'nombre_funcionalidad',
                options: [],
                rules: {
                    ADD: { min_size: 1, max_size: 9 },
                    EDIT: { min_size: 1, max_size: 9 },
                    SEARCH: { max_size: 9 },
                }
            },
            {
                name: 'id_accion',
                label: 'ID Accion',
                type: 'select',
                isFK: true,
                referenceEntity: 'accion',
                optionLabel: 'nombre_accion',
                options: [],
                rules: {
                    ADD: { min_size: 1, max_size: 9 },
                    EDIT: { min_size: 1, max_size: 9 },
                    SEARCH: { max_size: 9 },
                }
            },
            {
                name: 'id_rol',
                label: 'ID Rol',
                type: 'select',
                isFK: true,
                referenceEntity: 'rol',
                optionLabel: 'rol_name',
                options: [],
                rules: {
                    ADD: { min_size: 1, max_size: 9 },
                    EDIT: { min_size: 1, max_size: 9 },
                    SEARCH: { max_size: 9 },
                }
            }
        ];

        this.nombreentidad = 'rolaccionfuncionalidad';
        this.fields = fields;
        this.columnasamostrar = ['id_funcionalidad', 'id_accion', 'id_rol'];
        this.mostrarespecial = [];
        this.atributos = fields.map((field) => field.name);
        this.datos = [];
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}
