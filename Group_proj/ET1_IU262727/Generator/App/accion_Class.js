class accion extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'accion';

		if (esTest !== 'test') {
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
		}
	}

      manual_form_creation() {
    	return `
    	<form id="form_accion" action="http://193.147.87.202/procesaform.php" method="POST" onsubmit="return entidad.ADD_submit_accion();">
    
    		<label class="label_id_accion">ID Acción</label>
    		<input type="text" id="id_accion" name="id_accion" onblur="return entidad.ADD_id_accion_validation();">
    		<span id="span_error_id_accion" class="error_span"><a id="error_id_accion"></a></span>
    		<br>
    
    		<label class="label_nombre_accion">Nombre Acción</label>
    		<input type="text" id="nombre_accion" name="nombre_accion" onblur="return entidad.ADD_nombre_accion_validation();">
    		<span id="span_error_nombre_accion" class="error_span"><a id="error_nombre_accion"></a></span>
    		<br>
    
    		<label class="label_descrip_accion">Descripción Acción</label>
    		<textarea id="descrip_accion" name="descrip_accion" class="flexible_textarea" onblur="return entidad.ADD_descrip_accion_validation();"></textarea>
    		<span id="span_error_descrip_accion" class="error_span"><a id="error_descrip_accion"></a></span>
    		<br>
    
    		<input id="submit_button" type="submit" value="Submit">
    	</form>
    	`;
    }

	ADD_id_accion_validation() {
		if (!this.min_size('id_accion', 1)) {
			this.dom.mostrar_error_campo('id_accion', 'id_accion_min_size_ko');
			return "id_accion_min_size_ko";
		}
		if (!this.max_size('id_accion', 11)) {
			this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_ko');
			return "id_accion_max_size_ko";
		}
		if (!this.format('id_accion', '^[0-9]+$')) {
			this.dom.mostrar_error_campo('id_accion', 'id_accion_format_ko');
			return "id_accion_format_ko";
		}
		this.dom.mostrar_exito_campo('id_accion');
		return true;
	}

	ADD_nombre_accion_validation() {
		if (!this.min_size('nombre_accion', 5)) {
			this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_min_size_ko');
			return "nombre_accion_min_size_ko";
		}
		if (!this.max_size('nombre_accion', 48)) {
			this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_max_size_ko');
			return "nombre_accion_max_size_ko";
		}
		if (!this.format('nombre_accion', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
			this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_format_ko');
			return "nombre_accion_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_accion');
		return true;
	}

	ADD_descrip_accion_validation() {
		if (!this.min_size('descrip_accion', 5)) {
			this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_min_size_ko');
			return "descrip_accion_min_size_ko";
		}
		if (!this.max_size('descrip_accion', 200)) {
			this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_ko');
			return "descrip_accion_max_size_ko";
		}
		if (!this.format('descrip_accion', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-""\'\']+$')) {
			this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_ko');
			return "descrip_accion_format_ko";
		}
		this.dom.mostrar_exito_campo('descrip_accion');
		return true;
	}

	ADD_submit_accion() {
		let res = {
			id_accion: this.ADD_id_accion_validation(),
			nombre_accion: this.ADD_nombre_accion_validation(),
			descrip_accion: this.ADD_descrip_accion_validation()
		};
		return Object.values(res).every(v => v === true) ? true : res;
	}
}