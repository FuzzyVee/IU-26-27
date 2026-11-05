var textos_ES = {
	// textos titulos generales
	'text_titulo_app': 'Interfaz ET2 IU',
	'text_titulo_menu': 'Opciones  Menú',
	'text_titulo_pie': 'Pie de página',
    'label_seleccioncolumnas': 'Seleccionar columnas',
	'entity_persona': 'Gestión de datos personales',
	'entity_usuario': 'Gestión de usuarios',
	'entity_rol': 'Gestión de roles',
	'entity_accion': 'Gestión de acciones',
	'entity_funcionalidad': 'Gestión de funcionalidades',
	'entity_funcionalidad_accion': 'Gestión de funcionalidades y acciones',
	'entity_rolaccionfuncionalidad': 'Gestión de roles, acciones y funcionalidades',
	'form_action_ADD': 'Guardar',
	'form_action_EDIT': 'Guardar cambios',
	'form_action_SEARCH': 'Buscar',
	'form_action_DELETE': 'Eliminar',
	'form_action_cancel': 'Cancelar',
	'matrix_functionality': 'Funcionalidad',
	'matrix_role': 'Rol',
	'matrix_functionality_action_help': 'Marca una casilla para asignar una acción a una funcionalidad.',
	'matrix_role_assignment_help': 'Selecciona una funcionalidad para ver sus acciones y asignar cada acción a los roles correspondientes.',
	'matrix_select_combination': 'Funcionalidad:',
	'matrix_assign_action': 'Asignar acción a funcionalidad',
	'matrix_assign_relation': 'Asignar funcionalidad y acción al rol',
	'matrix_loading': 'Cargando relaciones...',
	'matrix_saving': 'Guardando asignación...',
	'matrix_saved': 'Asignación guardada.',
	'matrix_save_error': 'No se pudo guardar la asignación',
	'matrix_empty_matrix': 'No hay funcionalidades, acciones o roles para construir la matriz.',
	'matrix_matrix_ready': 'Selecciona las casillas para modificar las asignaciones.',
	'test_number': 'Test',
	'test_field': 'Campo',
	'test_action': 'Acción',
	'test_value': 'Valor probado',
	'test_expected': 'Esperado',
	'test_actual': 'Obtenido',
	'test_status': 'Resultado',
	'test_method_missing': 'Método no encontrado',
	'test_passed': 'CORRECTO',
	'test_failed': 'FALLIDO',
	'test_summary': 'Tests completados',
	'test_results_title': 'Resultados de tests',
	'test_close': 'Cerrar',
	'test_popup_blocked': 'El navegador bloqueó la ventana de resultados. Permite las ventanas emergentes e inténtalo de nuevo.',
	'test_suite_missing': 'No hay tests de validación cargados para esta entidad.',

    // textos de test
    /*
	'res_estructura_tests': 'Tabla verificacion estructura de test',
	'resultadodef': 'formato correcto estructura definicion tests',
	'res_estructura_pruebas': 'Tabla verificacion estructura de pruebas',
	'resultadoprueba': 'formato correcto estructura pruebas',
	'res_pruebas': 'Tabla ejecución de pruebas',
	'resultadotest': 'Resultado ejecucion pruebas',
    */

    // textos menu
	'text_menu_persona': 'Gestionar persona',
    'text_menu_usuario': 'Gestionar usuario',
    'text_menu_rol': 'Gestionar rol',
    'text_menu_accion': 'Gestionar acción',
    'text_menu_funcionalidad': 'Gestionar funcionalidad',
    'text_menu_funcionalidad_accion': 'Gestionar funcionalidad-acción',
    'text_menu_rolaccionfuncionalidad': 'Gestionar rol-acción-funcionalidad',

    // textos entidad persona
	'text_titulo_page_persona' : 'Gestión de Datos Personales',
    'text_contenido_titulo_form_persona_ADD': 'Formulario Alta Datos Personales',
	'text_contenido_titulo_form_persona_EDIT': 'Formulario Modificación Datos Personales',
	'text_contenido_titulo_form_persona_DELETE': 'Formulario Eliminación Datos Personales',
	'text_contenido_titulo_form_persona_SHOWCURRENT': 'Formulario Detalle Datos Persona',
	'text_contenido_titulo_form_persona_SEARCH': 'Formulario Búsqueda Datos Persona',

	// atributos
	'dni': 'Identificación',
	'nombre_persona': 'Nombre',
	'apellidos_persona': 'Apellidos',
	'fechaNacimiento_persona': 'Fecha Nacimiento',
	'direccion_persona': 'Dirección',
	'telefono_persona': 'Teléfono',
	'email_persona': 'Correo Electrónico',
	'foto_persona': 'Foto',

	// labels
	'label_dni': 'Identificación',
	'label_nombre_persona': 'Nombre',
	'label_apellidos_persona': 'Apellidos',
	'label_fechaNacimiento_persona': 'Fecha Nacimiento',
	'label_direccion_persona': 'Dirección',
	'label_telefono_persona': 'Teléfono',
	'label_email_persona': 'Correo Electrónico',
	'label_foto_persona': 'Foto',
	'label_nuevo_foto_persona': 'Nueva Foto',

	// errores validaciones formulario
	// ADD/EDIT

	// dni
	'dni_min_size_ko': 'Dni demasiado corto. Debe tener 8 números y 1 caracter alfabético',
	'dni_max_size_ko': 'DNI demasiado largo. Debe tener 8 números y 1 caracter alfabético',
	'dni_format_ko': 'Formato dni/nie no correcto. DNI 8 digitos 1 letra, NIE 1 letra 7 digitos 1 letra',
	'dni_personalized_ko': 'La letra de control del DNI/NIE no es correcta.',
	// nombre_persona
	'nombre_persona_min_size_ko': 'Nombre demasiado corto. Debe tener mas de 4 caracteres alfabéticos',
	'nombre_persona_max_size_ko': 'Nombre demasiado largo. Debe tener menos de 15 caracteres alfabéticos',
	'nombre_persona_format_ko': 'Nombre no correcto. Solo se permiten alfabéticos',

	// apellidos persona
	'apellidos_persona_min_size_ko': 'Apellidos demasiado corto. Debe tener mas de 4 caracteres alfabéticos o espacios',
	'apellidos_persona_max_size_ko': 'Apellidos demasiado largo. Debe tener menos de 20 caracteres alfabéticos o espacios',
	'apellidos_persona_format_ko': 'Apellidos no correcto. Solo se permiten alfabéticos y espacios',

	//fecha nacimiento persona
	'fechaNacimiento_persona_format_ko': 'Fecha no correcta. Debe tener el formato dd/mm/aaaa',
	'fechaNacimiento_persona_valid_ko': 'Fecha no válida. La fecha debe existir',

	// email persona
	'email_persona_min_size_ko': 'Email demasido corto. Debe tener mas de 3 caracteres.',
	'email_persona_max_size_ko': 'Email demasido largo. Debe tener menos de 46 caracteres.',
	'email_persona_format_ko': 'Email no válido. Compruebe el formato.',
	'email_persona_personalized_ko': 'Email no válido. Compruebe el dominio y su extensión.',
	'telefono_persona_personalized_ko': 'El teléfono debe tener 9 cifras y comenzar por 6, 7, 8 o 9.',

	// nuevo foto persona
	'nuevo_foto_persona_exist_file_ko': 'El fichero no existe. Debe subir una foto.',
	'nuevo_foto_persona_max_size_file_ko': 'El fichero es demasiado grande. Debe de tener un tamaño menor de 2MB.',
	'nuevo_foto_persona_type_file_ko': 'El fichero es de un tipo incorrecto. Debe de ser un archivo \'.jpg\' o \'.jpeg\'.',
	'nuevo_foto_persona_format_name_file_ko': 'El fichero tiene un nombre inválido.',
	'nuevo_foto_persona_min_size_ko': 'El nombre del fichero es demasiado corto. Debe tener mas de 2 caracteres.',
	'nuevo_foto_persona_max_size_ko': 'El nombre del fichero es demasiado largo. Debe tener menos de 16 caracteres.',

	//SEARCH
	// foto persona
	'foto_persona_max_size_ko': 'El nombre del fichero es demasiado largo. Debe tener menos de 16 caracteres.',
	'foto_persona_format_ko': 'El nombre del fichero no cumple el formato.',

	//errores acciones
	'RECORDSET_VACIO' : 'No hay coincidencias para la búsqueda',
	'dni_es_nulo_ko': 'El dni no puede ser vacio',

	'admin_no_se_puede_modificar_ko': 'El admin no se puede modificar',
};