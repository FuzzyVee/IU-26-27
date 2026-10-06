
class accion extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            { name: 'id_accion', label: 'ID Acción', type: 'text', rules: { ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, SEARCH: { max_size: 11, format: '^[0-9]+$' } } },
            { name: 'nombre_accion', label: 'Nombre Acción', type: 'text', rules: { ADD: { min_size: 5, max_size: 48, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$' }, EDIT: { min_size: 5, max_size: 48, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$' }, SEARCH: { max_size: 48, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$' } } },
            { name: 'descrip_accion', label: 'Descripción Acción', type: 'textarea', rules: { ADD: { min_size: 5, max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' }, EDIT: { min_size: 5, max_size: 200, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-]+$' }, SEARCH: { max_size: 200 } } }
        ];
        super('accion', fields, ['id_accion', 'nombre_accion', 'descrip_accion'], [], esTest);
    }
}

