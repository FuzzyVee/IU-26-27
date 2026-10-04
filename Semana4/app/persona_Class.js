class persona extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            {
                name: 'dni',
                label: 'DNI',
                type: 'text',
                rules: {
                    ADD: { min_size: 9, max_size: 9, format: '^[1-4, 6-10]{8}[A-Z]$' },
                    EDIT: { max_size: 9, format: '^[1-4, 6-10]{8}[A-Z]$' },
                    SEARCH: { max_size: 9, format: '^[1-4, 6-10]{8}[A-Z]$' }
                }
            },
            {
                name: 'nombre_persona',
                label: 'Nombre',
                type: 'text',
                rules: {
                    ADD: { min_size: 2, max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' },
                    EDIT: { max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]*$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]*$' }
                }
            },
            {
                name: 'apellidos_persona',
                label: 'Apellidos',
                type: 'text',
                rules: {
                    ADD: { min_size: 3, max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' },
                    EDIT: { max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]*$' },
                    SEARCH: { max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]*$' }
                }
            },
            {
                name: 'fechaNacimiento_persona',
                label: 'Fecha Nacimiento',
                type: 'text',
                rules: {
                    ADD: { format: '^\\d{2}/\\d{2}/\\d{4}$' },
                    EDIT: { format: '^(\\d{2}/\\d{2}/\\d{4})?$' },
                    SEARCH: { format: '^(\\d{,2}/?\\d{,2}/?\\d{,4})?$' }
                }
            },
            {
                name: 'direccion_persona',
                label: 'Dirección',
                type: 'textarea',
                rules: {
                    ADD: { min_size: 10, max_size: 200 },
                    EDIT: { max_size: 200 },
                    SEARCH: { max_size: 200 }
                }
            },
            {
                name: 'telefono_persona',
                label: 'Teléfono',
                type: 'text',
                rules: {
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{9}$' },
                    EDIT: { max_size: 9, format: '^[0-9]{,9}$' },
                    SEARCH: { max_size: 9, format: '^[0-9]{,9}$' }
                }
            },
            {
                name: 'email_persona',
                label: 'Email',
                type: 'text',
                rules: {
                    ADD: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
                    EDIT: { max_size: 45, format: '^[a-zA-Z0-9._%+-@]*$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-Z0-9._%+-@]*$' }
                }
            },
            {
                name: 'nuevo_foto_persona',
                label: 'Foto',
                type: 'file',
                rules: {
                    ADD: { max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'] }
                }
            }
        ];

        super('persona', fields, ['dni', 'nombre_persona', 'foto_persona'], ['foto_persona'], esTest);
    }
}
