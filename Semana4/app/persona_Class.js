class persona extends General_Entity_Class {
    constructor(esTest = 'no') {
        const fields = [
            { 
                name: 'dni', 
                label: 'DNI', 
                type: 'text', 
                rules: { 
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' }, 
                    EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' }, 
                    SEARCH: { max_size: 9, format: '^[0-9]*[A-Za-z]$' } 
                } 
            },
            { 
                name: 'nombre_persona', 
                label: 'Nombre', 
                type: 'text', 
                rules: { 
                    ADD: { min_size: 2, max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+\$' }, 
                    EDIT: { min_size: 2, max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+\$' }, 
                    SEARCH: { max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+\$' } 
                } 
            },
            { 
                name: 'apellidos_persona', 
                label: 'Apellidos', 
                type: 'text', 
                rules: { 
                    ADD: { min_size: 3, max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+\$' }, 
                    EDIT: { min_size: 3, max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+\$' }, 
                    SEARCH: { max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+\$' } 
                } 
            },
            { 
                name: 'fechaNacimiento_persona', 
                label: 'Fecha Nacimiento', 
                type: 'text', 
                rules: { 
                    ADD: { format: '^((0?[1-9]|[12][0-9]|3[01])[/\\-](0?[1-9]|1[0-2])[/\\-](19|20)\\d{2})\$' },
                    EDIT: { format: '^((0?[1-9]|[12][0-9]|3[01])[/\\-](0?[1-9]|1[0-2])[/\\-](19|20)\\d{2})\$' },
                    SEARCH: { format: '^((0?[1-9]|[12][0-9]|3[01])[/\\-](0?[1-9]|1[0-2])[/\\-](19|20)\\d{2})\$' }
                } 
            },
            { 
                name: 'direccion_persona', 
                label: 'Dirección', 
                type: 'textarea', 
                rules: { 
                    ADD: { min_size: 10, max_size: 200, format: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s\\.-;/]+$' },
                    EDIT: { min_size: 10, max_size: 200, format: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s\\.-;/]+$' },
                    SEARCH: { max_size: 200, format: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s\\.-;/]+$' }
                } 
            },
            { 
                name: 'telefono_persona', 
                label: 'Teléfono', 
                type: 'text', 
                rules: { 
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{9}\$' },
                    EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{9}\$' },
                    SEARCH: { max_size: 9, format: '^[0-9]+\$' }
                } 
            },
            { 
                name: 'email_persona', 
                label: 'Email', 
                type: 'text', 
                rules: { 
                    ADD: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$' },
                    EDIT: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$' }
                } 
            },
            { 
                name: 'foto_persona', 
                label: 'Foto', 
                type: 'file', 
                rules: { 
                    ADD: { exist_file: true, max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'], format_name_file: '^[a-zA-Z]{3,15}\\.(jpg|jpeg)\$' },
                    EDIT: { max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'], format_name_file: '^[a-zA-Z]{3,15}\\.(jpg|jpeg)\$' }
                } 
            }
        ];

        super('persona', fields, ['dni', 'nombre_persona', 'foto_persona'], ['foto_persona'], esTest);
    }
}

