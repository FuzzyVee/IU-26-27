
class usuario extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            { name: 'dni', label: 'DNI', type: 'text', rules: { ADD: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' }, EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' }, SEARCH: { max_size: 9, format: '^[0-9]*[A-Za-z]$' } } },
            { name: 'usuario', label: 'Usuario', type: 'text', rules: { ADD: { min_size: 5, max_size: 45, format: '^[a-zA-Z]+$' }, EDIT: { min_size: 5, max_size: 45, format: '^[a-zA-Z]+$' }, SEARCH: { max_size: 45, format: '^[a-zA-Z]+$' } } },
            { name: 'contrasena', label: 'Contraseña', type: 'password', rules: { ADD: { min_size: 8, max_size: 45, format: '^[a-zA-Z]+$' }, EDIT: { min_size: 8, max_size: 45, format: '^[a-zA-Z]+$' } } },
            { name: 'id_rol', label: 'ID Rol', type: 'text', rules: { ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, SEARCH: { max_size: 11, format: '^[0-9]+$' } } }
        ];
        super('usuario', fields, ['dni', 'usuario', 'id_rol'], [], esTest);
    }
}


