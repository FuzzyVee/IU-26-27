class usuario extends AbstractEntidad {
    constructor(esTest = 'no') {
        super();
        const fields = [
            { 
                name: 'dni', 
                label: 'DNI', 
                type: 'text',
                isPK: true,
                rules: { 
                    ADD: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$', personalized: 'validarLetraDNI' },
                    EDIT: { min_size: 9, max_size: 9, format: '^[0-9]{8}[A-Za-z]$', personalized: 'validarLetraDNI' },
                    SEARCH: { max_size: 9 } 
                },
               
            },
            { 
                name: 'usuario', 
                label: 'Usuario', 
                type: 'text',
                rules: { 
                    ADD: { min_size: 3, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    EDIT: { min_size: 3, max_size: 45, format: '^[a-zA-Z0-9]+$' },
                    SEARCH: { max_size: 45 } 
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
                    EDIT: { min_size: 8, max_size: 45, format: '^[a-zA-Z0-9]+$' } 
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

usuario.prototype.validarLetraDNI = function() {
    const input = document.getElementById('dni');
    if (!input || !input.value) return true;

    const valor = input.value.trim().toUpperCase();

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
        return 'dni_format_ko';
    }

    return true;
};