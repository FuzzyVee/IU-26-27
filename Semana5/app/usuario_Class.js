
class usuario extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            { 
        name: 'dni', 
        label: 'DNI', 
        type: 'select', 
        options: [],
        rules: { 
            ADD: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' },
            EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' },
            SEARCH: { max_size: 9 } 
        } 
    },
    { 
        name: 'id_rol', 
        label: 'Rol Asignado', 
        type: 'select', 
        options: [
            { value: '1', label: 'Admin' },
            { value: '2', label: 'Usuario' }
        ],
        rules: { 
            ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' },
            EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' },
            SEARCH: { max_size: 11 } 
        } 
    },
            { name: 'contrasena', label: 'Contraseña', type: 'password', rules: { ADD: { min_size: 8, max_size: 45, format: '^[a-zA-Z]+$' }, EDIT: { min_size: 8, max_size: 45, format: '^[a-zA-Z]+$' } } },
            { name: 'id_rol', label: 'ID Rol', type: 'text', rules: { ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' }, SEARCH: { max_size: 11, format: '^[0-9]+$' } } }
        ];
        super('usuario', fields, ['dni', 'usuario', 'id_rol'], [], esTest);
    }
}


const fields = [
    
];