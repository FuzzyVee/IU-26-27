class funcionalidad_accion extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            { name: 'id_funcionalidad', label: 'ID Funcionalidad', type: 'select', isFK: true, options: [] },
            { name: 'id_accion', label: 'ID Acción', type: 'select', isFK: true, options: [] }
        ];

        super('funcionalidad_accion', fields, ['id_funcionalidad', 'id_accion'], [], esTest);
    }
}

