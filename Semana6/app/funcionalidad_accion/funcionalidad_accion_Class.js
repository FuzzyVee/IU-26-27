class funcionalidad_accion extends AbstractEntidad {
    constructor(esTest = 'no') {
        super();

        const idRule = { 
            ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, 
            EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, 
            SEARCH: { max_size: 11, format: '^[0-9]+$' } 
        };

        const fields = [
            { name: 'id_funcionalidad', label: 'ID Funcionalidad', type: 'select', isFK: true, referenceEntity: 'funcionalidad', optionLabel: 'nombre_funcionalidad', options: [], rules: idRule },
            { name: 'id_accion', label: 'ID Acción', type: 'select', isFK: true, referenceEntity: 'accion', optionLabel: 'nombre_accion', options: [], rules: idRule }
        ];

        this.nombreentidad = 'funcionalidad_accion';
        this.fields = fields;
        this.columnasamostrar = ['id_funcionalidad', 'id_accion'];
        this.mostrarespecial = [];
        this.atributos = fields.map((field) => field.name);
        this.datos = [];
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}
