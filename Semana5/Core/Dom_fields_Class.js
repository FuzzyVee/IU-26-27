class dom_fields extends dom_form {
    constructor() {
        super();
    }

    /**
     * Creates an HTML input element with id, name, and type
     */
    createInput(nombre, tipo) {
        let newElement = document.createElement('input');
        newElement.type = tipo || 'text';
        newElement.id = nombre;
        newElement.name = nombre;
        return newElement;
    }

    /**
     * Fills a standard input with a string value
     */
    fillElementValue(elemento, valor) {
        if (elemento) {
            elemento.value = valor !== undefined && valor !== null ? valor : '';
        }
    }

    /**
     * Constructs a DataTransfer file list for file inputs
     */
    fillElementFile(elemento, valores) {
        const dataTransfer = new DataTransfer();

        if (valores && Object.keys(valores).length > 0) {
            let fichero = Object.keys(valores)[0];
            let nombrefichero = valores[fichero].format_name_file || 'file.jpg';
            let tipomime = valores[fichero].type_file || 'image/jpeg';
            let maxsize = valores[fichero].max_size_file || 1024;

            let file = new File([new ArrayBuffer(maxsize)], nombrefichero, {
                type: tipomime,
                webkitRelativePath: "C:\\fakepath\\" + nombrefichero
            });

            dataTransfer.items.add(file);
        }

        elemento.files = dataTransfer.files;
    }

    /**
     * Generates a generic HTML element (e.g., input, file, error span)
     */
    crearElementoHtml(tag, tipo, nombrecampo, valores) {
        let element;

        switch (tag) {
            case 'input':
                element = this.createInput(nombrecampo, tipo);
                if (valores && valores[nombrecampo] !== undefined) {
                    this.fillElementValue(element, valores[nombrecampo]);
                }
                return element;

            case 'file':
                element = this.createInput(nombrecampo, 'file');
                this.fillElementFile(element, valores);
                return element;

            default:
                element = document.createElement(tag);
                element.id = nombrecampo;
                if (tipo) element.type = tipo;
                return element;
        }
    }
}