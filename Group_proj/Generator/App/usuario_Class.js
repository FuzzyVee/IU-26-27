class usuario extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'usuario';

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

	ADD_dni_validation() {
		if (!this.min_size('dni', 9)) {
			this.dom.mostrar_error_campo('dni', 'dni_min_size_ko');
			return "dni_min_size_ko";
		}
		if (!this.max_size('dni', 9)) {
			this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
			return "dni_max_size_ko";
		}
		if (!this.format('dni', '^[0-9]{8}[A-Za-z]$')) {
			this.dom.mostrar_error_campo('dni', 'dni_format_ko');
			return "dni_format_ko";
		}
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	ADD_usuario_validation() {
		if (!this.min_size('usuario', 5)) {
			this.dom.mostrar_error_campo('usuario', 'usuario_min_size_ko');
			return "usuario_min_size_ko";
		}
		if (!this.max_size('usuario', 45)) {
			this.dom.mostrar_error_campo('usuario', 'usuario_max_size_ko');
			return "usuario_max_size_ko";
		}
		// Strict alphabetic without ñ or accents
		if (!this.format('usuario', '^[a-zA-Z]+$')) {
			this.dom.mostrar_error_campo('usuario', 'usuario_format_ko');
			return "usuario_format_ko";
		}
		this.dom.mostrar_exito_campo('usuario');
		return true;
	}

	ADD_contrasena_validation() {
		if (!this.min_size('contrasena', 8)) {
			this.dom.mostrar_error_campo('contrasena', 'contrasena_min_size_ko');
			return "contrasena_min_size_ko";
		}
		if (!this.max_size('contrasena', 45)) {
			this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_ko');
			return "contrasena_max_size_ko";
		}
		// Strict alphabetic without ñ or accents
		if (!this.format('contrasena', '^[a-zA-Z]+$')) {
			this.dom.mostrar_error_campo('contrasena', 'contrasena_format_ko');
			return "contrasena_format_ko";
		}
		this.dom.mostrar_exito_campo('contrasena');
		return true;
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

	ADD_submit_usuario() {
		let res = {
			dni: this.ADD_dni_validation(),
			usuario: this.ADD_usuario_validation(),
			contrasena: this.ADD_contrasena_validation(),
			id_rol: this.ADD_id_rol_validation()
		};
		return Object.values(res).every(v => v === true) ? true : res;
	}
}