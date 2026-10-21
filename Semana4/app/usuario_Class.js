
class usuario extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            { name: 'dni', label: 'DNI', type: 'select', isFK: true, options: [] },
            { name: 'usuario', label: 'Usuario', type: 'text', rules: { ADD: { min_size: 5, max_size: 45, format: '^[a-zA-Z]+$' }, EDIT: { min_size: 5, max_size: 45, format: '^[a-zA-Z]+$' }, SEARCH: { max_size: 45, format: '^[a-zA-Z]+$' } } },
            { name: 'contrasena', label: 'Contraseña', type: 'password', rules: { ADD: { min_size: 8, max_size: 45, format: '^[a-zA-Z]+$' }, EDIT: { min_size: 8, max_size: 45, format: '^[a-zA-Z]+$' } } },
            { name: 'id_rol', label: 'ID Rol', type: 'select', isFK: true, options: []  }
        ];
        super('usuario', fields, ['dni', 'usuario', 'id_rol'], [], esTest);
    }
}


