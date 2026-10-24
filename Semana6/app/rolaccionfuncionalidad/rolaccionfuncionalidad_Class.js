class rolaccionfuncionalidad extends General_Entity_Class {
    constructor(esTest = 'no') {

        const fields = [
            { name: 'id_funcionalidad', label: 'ID Funcionalidad', type: 'select', isFK: true, options: [] },
            { name: 'id_accion', label: 'ID Acción', type: 'select', isFK: true, options: [] },
            { name: 'id_rol', label: 'ID Rol', type: 'select', isFK: true, options: [] }
        ];

        super('rolaccionfuncionalidad', fields, ['id_funcionalidad', 'id_accion', 'id_rol'], [], esTest);
    }
}
