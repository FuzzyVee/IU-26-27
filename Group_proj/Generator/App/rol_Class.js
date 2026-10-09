class rol extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'rol';

		if (esTest !== 'test') {
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
		}
	}

    manual_form_creation() {
    	return `
    	<form id="form_usuario" action="http://193.147.87.202/procesaform.php" method="POST" onsubmit="return entidad.ADD_submit_usuario();">
    
    		<label class="label_dni">DNI</label>
    		<input type="text" id="dni" name="dni" onblur="return entidad.ADD_dni_validation();">
    		<span id="span_error_dni" class="error_span"><a id="error_dni"></a></span>
    		<br>
    
    		<label class="label_usuario">Nombre de Usuario</label>
    		<input type="text" id="usuario" name="usuario" onblur="return entidad.ADD_usuario_validation();">
    		<span id="span_error_usuario" class="error_span"><a id="error_usuario"></a></span>
    		<br>
    
    		<label class="label_contrasena">Contraseña</label>
    		<input type="password" id="contrasena" name="contrasena" onblur="return entidad.ADD_contrasena_validation();">
    		<span id="span_error_contrasena" class="error_span"><a id="error_contrasena"></a></span>
    		<br>
    
    		<label class="label_id_rol">ID Rol</label>
    		<input type="text" id="id_rol" name="id_rol" onblur="return entidad.ADD_id_rol_validation();">
    		<span id="span_error_id_rol" class="error_span"><a id="error_id_rol"></a></span>
    		<br>
    
    		<input id="submit_button" type="submit" value="Submit">
    	</form>
    	`;
    }

	ADD_id_rol_validation() {
		if (!this.min_size('id_rol', 1)) {
			this.dom.mostrar_error_campo('id_rol', 'id_rol_min_size_ko');
			return "id_rol_min_size_ko";
		}
		if (!this.max_size('id_rol', 11)) {
			this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_ko');
			return "id_rol_max_size_ko";
		}
		if (!this.format('id_rol', '^[0-9]+$')) {
			this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
			return "id_rol_format_ko";
		}
		this.dom.mostrar_exito_campo('id_rol');
		return true;
	}

	ADD_rol_name_validation() {
		if (!this.min_size('rol_name', 5)) {
			this.dom.mostrar_error_campo('rol_name', 'rol_name_min_size_ko');
			return "rol_name_min_size_ko";
		}
		if (!this.max_size('rol_name', 48)) {
			this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_ko');
			return "rol_name_max_size_ko";
		}
		// Strict alphabetic without ñ/accents per PDF specs
		if (!this.format('rol_name', '^[a-zA-Z]+$')) {
			this.dom.mostrar_error_campo('rol_name', 'rol_name_format_ko');
			return "rol_name_format_ko";
		}
		this.dom.mostrar_exito_campo('rol_name');
		return true;
	}

	ADD_rol_description_validation() {
		if (!this.min_size('rol_description', 5)) {
			this.dom.mostrar_error_campo('rol_description', 'rol_description_min_size_ko');
			return "rol_description_min_size_ko";
		}
		if (!this.max_size('rol_description', 200)) {
			this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_ko');
			return "rol_description_max_size_ko";
		}
		if (!this.format('rol_description', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-""\'\']+$')) {
			this.dom.mostrar_error_campo('rol_description', 'rol_description_format_ko');
			return "rol_description_format_ko";
		}
		this.dom.mostrar_exito_campo('rol_description');
		return true;
	}

	ADD_submit_rol() {
		let res = {
			id_rol: this.ADD_id_rol_validation(),
			rol_name: this.ADD_rol_name_validation(),
			rol_description: this.ADD_rol_description_validation()
		};
		return Object.values(res).every(v => v === true) ? true : res;
	}

    EDIT_rol_name_validation() { return this.ADD_rol_name_validation;}
    EDIT_rol_descriptions_validation() { return this.ADD_rol_description_validation;}
    
}