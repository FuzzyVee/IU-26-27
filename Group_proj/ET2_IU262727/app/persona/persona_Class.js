class persona extends AbstractEntidad {
    /**
     * Initializes the person entity, its fields, and shared UI helper.
     * @param {string} [esTest='no'] Pass 'test' to skip the initial backend search.
     */
    constructor(esTest = 'no') {
        super(); // Llama al constructor de AbstractEntidad

        const fechaNacimientoFormat = '^(?:0[1-9]|[12]\\d|3[01])/(?:0[1-9]|1[0-2])/(?:19|20)\\d{2}$';
        const nombreFotoFormat = '^[a-zA-Z0-9_-]{3,15}\\.(jpg|jpeg)$';

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
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' },
                    EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$' },
                    SEARCH: { max_size: 9, format: '^[0-9]{0,8}[A-Za-z]?$' },
                }
            },
            {
                name: 'nombre_persona',
                label: 'Nombre',
                type: 'text',
                rules: {
                    ADD: { min_size: 2, max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' },
                    EDIT: { min_size: 2, max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' }
                }
            },
            {
                name: 'apellidos_persona',
                label: 'Apellidos',
                type: 'text',
                rules: {
                    ADD: { min_size: 3, max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' },
                    EDIT: { min_size: 3, max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' },
                    SEARCH: { max_size: 100, format: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.\\-]+$' }
                }
            },
            {
                name: 'fechaNacimiento_persona',
                label: 'Fecha Nacimiento',
                type: 'text',
                datePicker: true,
                rules: {
                    ADD: { format: fechaNacimientoFormat, personalized: 'personalize_fechaNacimiento_persona' },
                    EDIT: { format: fechaNacimientoFormat, personalized: 'personalize_fechaNacimiento_persona' },
                    SEARCH: { format: fechaNacimientoFormat }
                }
            },
            {
                name: 'direccion_persona',
                label: 'Direccion',
                type: 'textarea',
                rules: {
                    ADD: { min_size: 10, max_size: 200, format: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s./;-]+$' },
                    EDIT: { min_size: 10, max_size: 200, format: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s./;-]+$' },
                    SEARCH: { max_size: 200, format: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s./;-]+$' }
                }
            },
            {
                name: 'telefono_persona',
                label: 'Telefono',
                type: 'text',
                rules: {
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{9}$', personalized: 'personalize_telefono_persona' },
                    EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{9}$', personalized: 'personalize_telefono_persona' },
                    SEARCH: { max_size: 9, format: '^[0-9]*$' },
                }
            },
            {
                name: 'email_persona',
                label: 'Email',
                type: 'text',
                rules: {
                    ADD: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', personalized: 'personalize_email_persona' },
                    EDIT: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', personalized: 'personalize_email_persona' },
                    SEARCH: { max_size: 45, format: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' }
                }
            },
            {
                name: 'foto_persona',
                label: 'Foto',
                type: 'text',
                rules: {
                    SEARCH: { max_size: 20, format: nombreFotoFormat }
                }
            },
            {
                name: 'nuevo_foto_persona',
                label: 'Nueva Foto',
                type: 'file',
                rules: {
                    ADD: { exist_file: true, max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'], format_name_file: nombreFotoFormat },
                    EDIT: { max_size_file: 2097152, type_file: ['image/jpeg', 'image/jpg'], format_name_file: nombreFotoFormat }
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

/**
 * Validates that the entered birth date is a real date in dd/mm/yyyy format.
 * @returns {boolean|string} True when valid or empty; otherwise the date error code.
 */
persona.prototype.personalize_fechaNacimiento_persona = function() {
    const input = document.getElementById('fechaNacimiento_persona');
    if (!input || !input.value) return true;

    const fecha = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(input.value);
    if (!fecha) return 'fechaNacimiento_persona_valid_ko';

    const dia = Number(fecha[1]);
    const mes = Number(fecha[2]);
    const anio = Number(fecha[3]);
    const fechaNacimiento = new Date(anio, mes - 1, dia);

    return fechaNacimiento.getFullYear() === anio &&
        fechaNacimiento.getMonth() === mes - 1 &&
        fechaNacimiento.getDate() === dia
        ? true
        : 'fechaNacimiento_persona_valid_ko';
};

/**
 * Validates the checksum letter of a Spanish DNI.
 * @returns {boolean|string} True when valid or empty; otherwise the DNI error code.
 */
persona.prototype.personalize_dni = function() {
    const input = document.getElementById('dni');
    if (!input || !input.value) return true;

    const valor = input.value.trim().toUpperCase();

    if (!/^[0-9]{8}[A-Z]$/.test(valor)) {
        return 'dni_format_ko'; // Very important return, otherwise It always returns same error code.
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = parseInt(valor.substring(0, 8), 10);
    const letraCalculada = letras.charAt(numero % 23);

    if (valor.charAt(8) !== letraCalculada) {
        return 'dni_format_ko';
    }

    return true;
};

/**
 * Validates that a Spanish phone number starts with 6–9.
 * @returns {boolean|string} True when valid or empty; otherwise the phone error code.
 */
persona.prototype.personalize_telefono_persona = function() {
    const input = document.getElementById('telefono_persona');
    if (!input || !input.value) return true;

    return /^[6-9][0-9]{8}$/.test(input.value)
        ? true
        : 'telefono_persona_personalized_ko';
};

/**
 * Validates the email address with stricter local-part and domain rules.
 * @returns {boolean|string} True when valid or empty; otherwise the email error code.
 */
persona.prototype.personalize_email_persona = function() {
    const input = document.getElementById('email_persona');
    if (!input || !input.value) return true;

    const emailPattern = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9_%+-]+(?:\.[a-zA-Z0-9_%+-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
    return emailPattern.test(input.value)
        ? true
        : 'email_persona_personalized_ko';
};