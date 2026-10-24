class persona extends AbstractEntidad {
    constructor(esTest = 'no') {
        super(); // Llama al constructor de AbstractEntidad

        const fechaNacimientoFormat = '^(?:(?:0?[1-9]|[12][0-9]|3[01])[/\\-](?:0?[1-9]|1[0-2])[/\\-](?:19|20)\\d{2}|(?:19|20)\\d{2}-(?:0?|1)-(?:0?||3))$';
        
        this.nombreentidad = 'persona';
        this.fields = [
            {
                name: 'dni',
                label: 'DNI',
                type: 'select',
                isPK: true,
                isFK: true,
                referenceEntity: 'usuario',
                referenceKey: 'dni',
                rules: {
                    ADD: { min_size: 9, max_size: 9, format: '^{8}[A-Za-z]$' },
                    EDIT: { min_size: 9, max_size: 9, format: '^{8}[A-Za-z]$' },
                    SEARCH: { max_size: 9 }
                }
            },
            {
                name: 'nombre_persona',
                label: 'Nombre',
                type: 'text',
                rules: {
                    ADD: { min_size: 2, max_size: 45, format: '^[a-zA-ZnNaeiouAEIOU\\s\\.\\-]+$' },
                    EDIT: { min_size: 2, max_size: 45, format: '^[a-zA-ZnNaeiouAEIOU\\s\\.\\-]+$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-ZnNaeiouAEIOU\\s\\.\\-]+$' }
                }
            },
            {
                name: 'apellidos_persona',
                label: 'Apellidos',
                type: 'text',
                rules: {
                    ADD: { min_size: 3, max_size: 100, format: '^[a-zA-ZnNaeiouAEIOU\\s\\.\\-]+$' },
                    EDIT: { min_size: 3, max_size: 100, format: '^[a-zA-ZnNaeiouAEIOU\\s\\.\\-]+$' },
                    SEARCH: { max_size: 100, format: '^[a-zA-ZnNaeiouAEIOU\\s\\.\\-]+$' }
                }
            },
            {
                name: 'fechaNacimiento_persona',
                label: 'Fecha Nacimiento',
                type: 'text',
                rules: {
                    ADD: { format: fechaNacimientoFormat },
                    EDIT: { format: fechaNacimientoFormat },
                    SEARCH: { format: fechaNacimientoFormat }
                }
            },
            {
                name: 'direccion_persona',
                label: 'Direccion',
                type: 'textarea',
                rules: {
                    ADD: { min_size: 10, max_size: 200, format: '^[a-zA-Z0-9nNaeiouAEIOU\\s\\.-;/]+$' },
                    EDIT: { min_size: 10, max_size: 200, format: '^[a-zA-Z0-9nNaeiouAEIOU\\s\\.-;/]+$' },
                    SEARCH: { max_size: 200, format: '^[a-zA-Z0-9nNaeiouAEIOU\\s\\.-;/]+$' }
                }
            },
            {
                name: 'telefono_persona',
                label: 'Telefono',
                type: 'text',
                rules: {
                    ADD: { min_size: 9, max_size: 9, format: '^{9}$' },
                    EDIT: { min_size: 9, max_size: 9, format: '^{9}$' },
                    SEARCH: { max_size: 9, format: '^+$' }
                }
            },
            {
                name: 'email_persona',
                label: 'Email',
                type: 'text',
                rules: {
                    ADD: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
                    EDIT: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' }
                }
            },
            {
                name: 'foto_persona',
                label: 'Foto',
                type: 'file',
                rules: {
                    ADD: { exist_file: true, max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'], format_name_file: '^[a-zA-Z]{3,15}\\.(jpg|jpeg)$' },
                    EDIT: { max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'], format_name_file: '^[a-zA-Z]{3,15}\\.(jpg|jpeg)$' }
                }
            }
        ];

        this.columnasamostrar = ['dni', 'nombre_persona', 'foto_persona'];
        this.mostrarespecial = ['foto_persona'];
        this.atributos = this.fields.map(f => f.name);
        this.datos = [];

        // Conectar el helper con la entidad
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}