class usuario extends AbstractEntidad {
    /**
     * Initializes the user entity, its fields, and shared UI helper.
     * @param {string} [esTest='no'] Pass 'test' to skip the initial backend search.
     */
    constructor(esTest = 'no') {
        super();
        const fields = [
            {
                name: 'dni',
                label: 'DNI',
                type: 'text',
                isPK: true,
                rules: {
                    ADD: { min_size: 9, max_size: 9, format: '^([0-9]{8}[A-Za-z]|[XYZxyz][0-9]{7}[A-Za-z])$', personalized: 'validarLetraDNI' },
                    EDIT: { min_size: 9, max_size: 9, format: '^([0-9]{8}[A-Za-z]|[XYZxyz][0-9]{7}[A-Za-z])$', personalized: 'validarLetraDNI' },
                    SEARCH: { max_size: 9, format: '^[0-9]{0,8}[A-Za-z]?$', personalized: 'validarLetraDNI' }
                },
            },
            {
                name: 'usuario',
                label: 'Usuario',
                type: 'text',
                rules: {
                    ADD: { min_size: 3, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    EDIT: { min_size: 3, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-Z0-9]*$' }
                }
            },
            {
                name: 'id_rol',
                label: 'Rol Asignado',
                type: 'select',
                isFK: true,
                referenceEntity: 'rol',
                optionLabel: 'rol_name',
                options: [],
                rules: {
                    ADD: { min_size: 1, max_size: 11, format: '^[0-9]+$' },
                    EDIT: { min_size: 1, max_size: 11, format: '^[0-9]+$' },
                    SEARCH: { max_size: 11 }
                }
            },
            {
                name: 'contrasena',
                label: 'Contrasena',
                type: 'password',
                rules: {
                    ADD: { min_size: 8, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    EDIT: { min_size: 8, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    SEARCH: { max_size: 45, format: '^[a-zA-Z0-9]*$' }
                }
            }
        ];

        this.nombreentidad = 'usuario';
        this.fields = fields;
        this.columnasamostrar = ['dni', 'usuario', 'id_rol'];
        this.mostrarespecial = [];
        this.atributos = fields.map((field) => field.name);
        this.datos = [];
        this.helper = new EntityHelper(this);

        if (esTest !== 'test') this.SEARCH();
    }
}

/**
 * Validates the checksum letter and structure of a Spanish DNI or NIE.
 * @returns {boolean|string} True when valid or empty; otherwise the DNI error code.
 */
usuario.prototype.validarLetraDNI = function() {
    const input = document.getElementById('dni');
    if (!input || !input.value) return true;

    const valor = input.value.trim().toUpperCase();

    if (valor.length !== 9) {
        return true;
    }

    // Validar estructura: DNI NIE
    const regexNIF =/^([0-9]{8}[A-Z]|[XYZ][0-9]{7}[A-Z])$/;
    if (!regexNIF.test(valor)) {
        return 'dni_format_ko';
    }

    // Convertir la letra inicial del NIE a su número equivalente
    let numeroStr = valor.substring(0, 8)
        .replace(/^X/, '0')
        .replace(/^Y/, '1')
        .replace(/^Z/, '2');

    // Algoritmo Módulo 23 DNI
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = parseInt(numeroStr, 10);
    const letraCalculada = letras.charAt(numero % 23);

    // Comprobar si la letra final coincide
    if (valor.charAt(8) !== letraCalculada) {
        return 'dni_personalized_ko';
    }

    return true;
};