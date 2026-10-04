class persona extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'persona';

		if (esTest !== 'test') {
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
		}
	}

	manual_form_creation() {
		return `
		<form id="form_persona" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_persona();">

			<label class="label_dni">DNI:</label>
			<input type="text" id="dni" name="dni" onblur="return entidad.ADD_dni_validation();">
			<span id="span_error_dni" class="error_span"><a id="error_dni"></a></span>
            <br>

			<label class="label_nombre_persona">Nombre de pila</label>
			<input type="text" id="nombre_persona" name="nombre_persona" onblur="return entidad.ADD_nombre_persona_validation();">
			<span id="span_error_nombre_persona" class="error_span"><a id="error_nombre_persona"></a></span>
			<br>

			<label class="label_apellidos_persona">Apellidos</label>
			<input type="text" id="apellidos_persona" name="apellidos_persona" onblur="return entidad.ADD_apellidos_persona_validation();">
			<span id="span_error_apellidos_persona" class="error_span"><a id="error_apellidos_persona"></a></span>
			<br>

			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type="date" id="fechaNacimiento_persona" name="fechaNacimiento_persona" placeholder="dd/mm/aaaa" onblur="return entidad.ADD_fechaNacimiento_persona_validation();">
			<span id="span_error_fechaNacimiento_persona" class="error_span"><a id="error_fechaNacimiento_persona"></a></span>
			<br>

			<label class="label_direccion_persona">Dirección Postal</label>	<br>
			<textarea id="direccion_persona" name="direccion_persona" class="flexible_textarea" onblur="return entidad.ADD_direccion_persona_validation();"></textarea>
			<span id="span_error_direccion_persona" class="error_span"><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type="text" id="telefono_persona" name="telefono_persona" onblur="return entidad.ADD_telefono_persona_validation();">
			<span id="span_error_telefono_persona" class="error_span"><a id="error_telefono_persona"></a></span>
			<br>

			<label class="label_email_persona">Correo Electrónico</label>
			<input type="text" id="email_persona" name="email_persona" onblur="return entidad.ADD_email_persona_validation();">
			<span id="span_error_email_persona" class="error_span"><a id="error_email_persona"></a></span>
			<br>

			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type="file" id="nuevo_foto_persona" name="nuevo_foto_persona" onchange="return entidad.ADD_nuevo_foto_persona_validation();">
			<span id="span_error_nuevo_foto_persona" class="error_span"><a id="error_nuevo_foto_persona"></a></span>
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
		if (!this.format('dni', '^[0-9]{8}[A-Z]$')) {
			this.dom.mostrar_error_campo('dni', 'dni_format_ko');
			return "dni_format_ko";
		}
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	ADD_nombre_persona_validation() {
		if (!this.min_size('nombre_persona', 2)) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_min_size_ko');
			return "nombre_persona_min_size_ko";
		}
		if (!this.max_size('nombre_persona', 45)) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_ko');
			return "nombre_persona_max_size_ko";
		}
		if (!this.format('nombre_persona', '^[a-zA-ZñÑáéíóúÁÉÍÓÚª\\s\\.\\-]+$')) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_ko');
			return "nombre_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	ADD_apellidos_persona_validation() {
		if (!this.min_size('apellidos_persona', 3)) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_min_size_ko');
			return "apellidos_persona_min_size_ko";
		}
		if (!this.max_size('apellidos_persona', 100)) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_ko');
			return "apellidos_persona_max_size_ko";
		}
		if (!this.format('apellidos_persona', '^[a-zA-ZñÑáéíóúÁÉÍÓÚª\\s\\.\\-]+$')) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_ko');
			return "apellidos_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	ADD_fechaNacimiento_persona_validation() {
		const regexPattern = '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)[0-9]{2}$';
		if (!this.format('fechaNacimiento_persona', regexPattern)) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_ko');
			return "fechaNacimiento_persona_format_ko";
		}
		const dateValue = document.getElementById('fechaNacimiento_persona').value;
		const [day, month, year] = dateValue.split('/').map(Number);

		const inputDate = new Date(year, month - 1, day);
		const today = new Date();

		today.setHours(0, 0, 0, 0);

		if (inputDate > today) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_date_ko');
			return "fechaNacimiento_persona_max_date_ko";
		}

		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	ADD_direccion_persona_validation() {
		if (!this.min_size('direccion_persona', 10)) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_min_size_ko');
			return "direccion_persona_min_size_ko";
		}
		if (!this.max_size('direccion_persona', 200)) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_ko');
			return "direccion_persona_max_size_ko";
		}
		if (!this.format('direccion_persona', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.,;/ -]+$')) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_ko');
			return "direccion_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	ADD_telefono_persona_validation() {
		if (!this.min_size('telefono_persona', 9)) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_min_size_ko');
			return "telefono_persona_min_size_ko";
		}
		if (!this.max_size('telefono_persona', 9)) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_ko');
			return "telefono_persona_max_size_ko";
		}
		if (!this.format('telefono_persona', '^[0-9]{9}$')) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_ko');
			return "telefono_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	ADD_email_persona_validation() {
		if (!this.max_size('email_persona', 45)) {
			this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_ko');
			return "email_persona_max_size_ko";
		}
		if (!this.format('email_persona', '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')) {
			this.dom.mostrar_error_campo('email_persona', 'email_persona_format_ko');
			return "email_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	ADD_nuevo_foto_persona_validation() {
		if (!this.exist_file('nuevo_foto_persona')) {
			return true;
		}
		if (!this.max_size_file('nuevo_foto_persona', 2097152)) { // 2MB
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_max_size_file_ko');
			return "nuevo_foto_persona_max_size_file_ko";
		}
		if (!this.type_file('nuevo_foto_persona', ['image/jpeg', 'image/jpg'])) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_type_file_ko');
			return "nuevo_foto_persona_type_file_ko";
		}
		if (!this.format_name_file('nuevo_foto_persona', '^[a-zA-Z]{3,15}\\.(jpg|jpeg)$')) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_format_name_file_ko');
			return "nuevo_foto_persona_format_name_file_ko";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;
	}

	ADD_submit_persona() {
		let res = {
			dni: this.ADD_dni_validation(),
			nombre_persona: this.ADD_nombre_persona_validation(),
			apellidos_persona: this.ADD_apellidos_persona_validation(),
			fechaNacimiento_persona: this.ADD_fechaNacimiento_persona_validation(),
			direccion_persona: this.ADD_direccion_persona_validation(),
			telefono_persona: this.ADD_telefono_persona_validation(),
			email_persona: this.ADD_email_persona_validation(),
			nuevo_foto_persona: this.ADD_nuevo_foto_persona_validation()
		};

		let ok = Object.values(res).every(val => val === true);
		return ok ? true : res;
	}

	EDIT_dni_validation() { return this.ADD_dni_validation(); }
	EDIT_nombre_persona_validation() { return this.ADD_nombre_persona_validation(); }
	EDIT_apellidos_persona_validation() { return this.ADD_apellidos_persona_validation(); }
	EDIT_fechaNacimiento_persona_validation() { return this.ADD_fechaNacimiento_persona_validation(); }
	EDIT_direccion_persona_validation() { return this.ADD_direccion_persona_validation(); }
	EDIT_telefono_persona_validation() { return this.ADD_telefono_persona_validation(); }
	EDIT_email_persona_validation() { return this.ADD_email_persona_validation(); }
	EDIT_foto_persona_validation() { return true; }
	EDIT_nuevo_foto_persona_validation() {
		if (this.not_exist_file('nuevo_foto_persona')) {
			this.dom.mostrar_exito_campo('nuevo_foto_persona');
			return true;
		}
		return this.ADD_nuevo_foto_persona_validation();
	}

	/**
		@return {bool/object} true si todas las validaciones son correctas,
							  o el objeto set_result con los códigos de error si alguna falla.
	*/
	EDIT_submit_persona() {
		// Objeto para almacenar el resultado de cada campo
		var set_result = {};

		// Ejecución y guardado de resultados por campo
		set_result.dni = this.EDIT_dni_validation();
		set_result.nombre_persona = this.EDIT_nombre_persona_validation();
		set_result.apellidos_persona = this.EDIT_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.EDIT_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.EDIT_direccion_persona_validation();
		set_result.telefono_persona = this.EDIT_telefono_persona_validation();
		set_result.email_persona = this.EDIT_email_persona_validation();
		set_result.foto_persona = this.EDIT_foto_persona_validation();

		// Combinación a nivel de bits de todas las validaciones
		let result = (
			(set_result.dni) &
			(set_result.nombre_persona) &
			(set_result.apellidos_persona) &
			(set_result.fechaNacimiento_persona) &
			(set_result.direccion_persona) &
			(set_result.telefono_persona) &
			(set_result.email_persona) &
			(set_result.foto_persona)
		);


		// Conversión del resultado a booleano
		result = Boolean(result);

		// Si todo es correcto devuelve true; si no, devuelve el objeto con los errores
		if ((typeof result === 'boolean') && (result == true)) {
			return result;
		} else {
			return set_result;
		}
	}

	SEARCH_nombre_persona_validation() {
		let valor = document.getElementById("nombre_persona").value;
		if (valor === "" || valor === null) {
			this.dom.mostrar_exito_campo('nombre_persona');
			return false;
		}

		if (!this.min_size('nombre_persona', 2)) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_min_size_ko');
			return "nombre_persona_min_size_ko";
		}
		if (!this.max_size('nombre_persona', 45)) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_ko');
			return "nombre_persona_max_size_ko";
		}
		if (!this.format('nombre_persona', '^[a-zA-ZñÑáéíóúÁÉÍÓÚª\\s\\.\\-]+$')) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_ko');
			return "nombre_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	SEARCH_apellidos_persona_validation() { return this.ADD_apellidos_persona_validation(); }

	SEARCH_dni_validation() {
		if (!this.max_size('dni', 9)) {
			this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
			return "dni_max_size_ko";
		}
		if (!this.format('dni', '^[0-9]{8}[A-Z]$')) {
			this.dom.mostrar_error_campo('dni', 'dni_format_ko');
			return "dni_format_ko";
		}
	}
	SEARCH_fechaNacimiento_persona_validation() { return this.ADD_fechaNacimiento_persona_validation(); }
	SEARCH_direccion_persona_validation() { return this.ADD_direccion_persona_validation(); }
	SEARCH_telefono_persona_validation() { return this.ADD_telefono_persona_validation(); }
	SEARCH_email_persona_validation() { return this.ADD_email_persona_validation(); }
	SEARCH_foto_persona_validation() { return true; }
	SEARCH_apellidos_persona_validation() { return this.ADD_apellidos_persona_validation(); }


	SEARCH_submit_persona() {
		var set_result = {};

		set_result.dni = this.SEARCH_dni_validation();
		set_result.nombre_persona = this.SEARCH_nombre_persona_validation();
		set_result.apellidos_persona = this.SEARCH_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.SEARCH_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.SEARCH_direccion_persona_validation();
		set_result.telefono_persona = this.SEARCH_telefono_persona_validation();
		set_result.email_persona = this.SEARCH_email_persona_validation();

		// Combinación booleana de todos los campos
		let result = (
			(set_result.dni) &
		(set_result.nombre_persona) &
		(set_result.apellidos_persona) &
		(set_result.fechaNacimiento_persona) &
		(set_result.direccion_persona) &
		(set_result.telefono_persona) &
		(set_result.email_persona)
		);

		result = Boolean(result);

		if ((typeof result === 'boolean') &&  (result == true)) {
			return result;
		} else {
			return set_result;
		}
	}

}