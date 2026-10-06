class funcionalidad_accion extends General_Entity_Class {
    constructor(esTest = 'no') {
        const idRule = { 
            ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, 
            EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, 
            SEARCH: { max_size: 11, format: '^[0-9]+$' } 
        };

        const fields = [
            { name: 'id_funcionalidad', label: 'ID Funcionalidad', type: 'text', rules: idRule },
            { name: 'id_accion', label: 'ID Acción', type: 'text', rules: idRule }
        ];

        super('funcionalidad_accion', fields, ['id_funcionalidad', 'id_accion'], [], esTest);
    }
}

