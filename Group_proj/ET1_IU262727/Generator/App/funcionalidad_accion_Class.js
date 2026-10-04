class funcionalidad_accion extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'funcionalidad_accion';

		if (esTest !== 'test') {
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
		}
	}

	manual_form_creation() {
		return `
		<form id="form_funcionalidad_accion" action="http://193.147.87.202/procesaform.php" method="POST" onsubmit="return entidad.ADD_submit_funcionalidad_accion();">
			<label class="label_id_funcionalidad">id_funcionalidad</label>
			<input type="text" id="id_funcionalidad" name="id_funcionalidad" onblur="return entidad.ADD_id_funcionalidad_validation();">
			<span id="error_id_funcionalidad"></span>
			<br>

			<label class="label_id_accion">id_accion</label>
			<input type="text" id="id_accion" name="id_accion" onblur="return entidad.ADD_id_accion_validation();">
			<span id="error_id_accion"></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">
		</form>
		`;
	}

	ADD_id_funcionalidad_validation() {
		if (!this.min_size('id_funcionalidad', 1) || !this.max_size('id_funcionalidad', 11) || !this.format('id_funcionalidad', '^[0-9]+$')) {
			this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_ko');
			return "id_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('id_funcionalidad');
		return true;
	}

	ADD_id_accion_validation() {
		if (!this.min_size('id_accion', 1) || !this.max_size('id_accion', 11) || !this.format('id_accion', '^[0-9]+$')) {
			this.dom.mostrar_error_campo('id_accion', 'id_accion_format_ko');
			return "id_accion_format_ko";
		}
		this.dom.mostrar_exito_campo('id_accion');
		return true;
	}

	ADD_submit_funcionalidad_accion() {
		let res = {
			id_funcionalidad: this.ADD_id_funcionalidad_validation(),
			id_accion: this.ADD_id_accion_validation()
		};
		return Object.values(res).every(v => v === true) ? true : res;
	}
}