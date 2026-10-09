class Validations{
	constructor() {}

	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar
	min_size(id, minsize){
		//console.log("id = " + id + ", minsize = " + minsize);
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text' || 'textarea' || 'fecha':
						return elemento.value.length >= minsize;
					case 'file':
					default:
						break;
				}
			case 'SELECT':
			default:
				break;
		}

		return true;
	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		//console.log("id = " + id + ", maxsize = " + maxsize + ", elemento.value.length = " + elemento.value.length);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text' || 'textarea' || 'fecha':
						return elemento.value.length <= maxsize;
					case 'file':
					default:
						break;
				}
				break;
			case 'SELECT':
			default:
				break;
		}

		return true;
	}

	/**
	 * @param {string} id of html element
	 * @param {string} regular expression to testing id html element value
	 * @return {bool} result of regular expression testing
	 */
	format(id, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

	/**
	 * 
	 */
	exist_file(id){
		let objfile = document.getElementById(id);
		if (objfile.files.length == 0){
			return false;
		}
		return true;
	}

	/**
	 * @param {string} id of html file element
	 * @param {number} maxsize max size allowed for fiel
	 * @return {bool} result of size comparison
	 */
	max_size_file(id, maxsize){
		let objfile = document.getElementById(id);
		if (objfile.files[0].size>maxsize){
			return false;
		}
		return true;
	}

	type_file(id, array_tipos){
		let objfile = document.getElementById(id);
		if (!(array_tipos.includes(objfile.files[0].type))){
			return false;
		}
		return true;
	}

	format_name_file(id, exprreg){
		let objfile = document.getElementById(id);
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.files[0].name;
		return expresionregular.test(valor);
	}
}