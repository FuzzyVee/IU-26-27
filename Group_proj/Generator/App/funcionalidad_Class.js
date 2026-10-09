class funcionalidad extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'funcionalidad';

		if (esTest !== 'test') {
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
		}
	}

	manual_form_creation() {
	return `
	<form id="form_funcionalidad" action="http://193.147.87.202/procesaform.php" method="POST" onsubmit="return entidad.ADD_submit_funcionalidad();">

		<label class="label_id_funcionalidad">ID Funcionalidad</label>
		<input type="text" id="id_funcionalidad" name="id_funcionalidad" onblur="return entidad.ADD_id_funcionalidad_validation();">
		<span id="span_error_id_funcionalidad" class="error_span"><a id="error_id_funcionalidad"></a></span>
		<br>

		<label class="label_nombre_funcionalidad">Nombre Funcionalidad</label>
		<input type="text" id="nombre_funcionalidad" name="nombre_funcionalidad" onblur="return entidad.ADD_nombre_funcionalidad_validation();">
		<span id="span_error_nombre_funcionalidad" class="error_span"><a id="error_nombre_funcionalidad"></a></span>
		<br>

		<label class="label_descrip_funcionalidad">Descripción Funcionalidad</label>
		<textarea id="descrip_funcionalidad" name="descrip_funcionalidad" class="flexible_textarea" onblur="return entidad.ADD_descrip_funcionalidad_validation();"></textarea>
		<span id="span_error_descrip_funcionalidad" class="error_span"><a id="error_descrip_funcionalidad"></a></span>
		<br>

		<input id="submit_button" type="submit" value="Submit">
	</form>
	`;
    }

	ADD_id_funcionalidad_validation() {
		if (!this.min_size('id_funcionalidad', 1)) {
			this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_min_size_ko');
			return "id_funcionalidad_min_size_ko";
		}
		if (!this.max_size('id_funcionalidad', 11)) {
			this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_ko');
			return "id_funcionalidad_max_size_ko";
		}
		if (!this.format('id_funcionalidad', '^[0-9]+$')) {
			this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_ko');
			return "id_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('id_funcionalidad');
		return true;
	}

	ADD_nombre_funcionalidad_validation() {
		if (!this.min_size('nombre_funcionalidad', 5)) {
			this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_min_size_ko');
			return "nombre_funcionalidad_min_size_ko";
		}
		if (!this.max_size('nombre_funcionalidad', 48)) {
			this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_max_size_ko');
			return "nombre_funcionalidad_max_size_ko";
		}
		if (!this.format('nombre_funcionalidad', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
			this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_format_ko');
			return "nombre_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_funcionalidad');
		return true;
	}

	ADD_descrip_funcionalidad_validation() {
		if (!this.min_size('descrip_funcionalidad', 5)) {
			this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_min_size_ko');
			return "descrip_funcionalidad_min_size_ko";
		}
		if (!this.max_size('descrip_funcionalidad', 200)) {
			this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_max_size_ko');
			return "descrip_funcionalidad_max_size_ko";
		}
		if (!this.format('descrip_funcionalidad', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-""\'\']+$')) {
			this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_format_ko');
			return "descrip_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('descrip_funcionalidad');
		return true;
	}

	ADD_submit_funcionalidad() {
		let res = {
			id_funcionalidad: this.ADD_id_funcionalidad_validation(),
			nombre_funcionalidad: this.ADD_nombre_funcionalidad_validation(),
			descrip_funcionalidad: this.ADD_descrip_funcionalidad_validation()
		};
		return Object.values(res).every(v => v === true) ? true : res;
	}
}