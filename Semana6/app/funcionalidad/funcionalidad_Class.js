class funcionalidad extends AbstractEntidad {
    constructor(esTest = 'no') {
        super();

        const fields = [
            { name: 'id_funcionalidad', label: 'ID Funcionalidad', type: 'text', isPK: true, rules: { ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, SEARCH: { max_size: 11, format: '^[0-9]+$' } } },
            { name: 'nombre_funcionalidad', label: 'Nombre Funcionalidad', type: 'text', rules: { ADD: { min_size: 5, max_size: 48, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$' }, EDIT: { min_size: 5, max_size: 48, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$' }, SEARCH: { max_size: 48, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$' } } },
            { name: 'descrip_funcionalidad', label: 'Descripción Funcionalidad', type: 'textarea', rules: { ADD: { min_size: 5, max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' }, EDIT: { min_size: 5, max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' }, SEARCH: { max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' } } }
        ];

        this.nombreentidad = 'funcionalidad';
        this.fields = fields;
        this.columnasamostrar = ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'];
        this.mostrarespecial = [];
        this.atributos = fields.map((field) => field.name);
        this.datos = [];
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}
