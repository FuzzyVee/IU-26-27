var textos_EN = {

	// textos titulos generales
	'text_titulo_app': 'IU ET2 Interface',
	'text_titulo_menu': 'Menu Options',
	'text_titulo_pie': 'Footer',
    'label_seleccioncolumnas': 'Select columns ',
	'entity_persona': 'Personal data management',
	'entity_usuario': 'User management',
	'entity_rol': 'Role management',
	'entity_accion': 'Action management',
	'entity_funcionalidad': 'Functionality management',
	'entity_funcionalidad_accion': 'Functionality and action management',
	'entity_rolaccionfuncionalidad': 'Role, action and functionality management',
	'form_action_ADD': 'Save',
	'form_action_EDIT': 'Save changes',
	'form_action_SEARCH': 'Search',
	'form_action_DELETE': 'Delete',
	'form_action_cancel': 'Cancel',
	'matrix_functionality': 'Functionality',
	'matrix_role': 'Role',
	'matrix_functionality_action_help': 'Check a box to assign an action to a functionality.',
	'matrix_role_assignment_help': 'Check a box to assign a functionality-action pair to a role.',
	'matrix_assign_action': 'Assign action to functionality',
	'matrix_assign_relation': 'Assign functionality and action to role',
	'matrix_loading': 'Loading relations...',
	'matrix_saving': 'Saving assignment...',
	'matrix_saved': 'Assignment saved.',
	'matrix_save_error': 'Could not save assignment',
	'matrix_empty_matrix': 'There are no functionalities, actions, or roles to build the matrix.',
	'matrix_matrix_ready': 'Select boxes to change assignments.',
    
    // textos de test
    /*'res_estructura_tests':'Tabla verificacion estructura de test',
	'resultadodef':'formato correcto estructura definicion tests',
	'res_estructura_pruebas':'Tabla verificacion estructura de pruebas',
	'resultadoprueba':'formato correcto estructura pruebas',
	'res_pruebas':'Tabla ejecución de pruebas',
	'resultadotest':'Resultado ejecucion pruebas',
    */

    // textos menu
	'text_menu_persona': 'Person Management',
    'text_menu_usuario': 'User Management',
    'text_menu_rol': 'Role Management',
    'text_menu_accion': 'Action Management',
    'text_menu_funcionalidad': 'Functionality Management',
    'text_menu_funcionalidad_accion': 'Functionality-Action Management',
    'text_menu_rolaccionfuncionalidad': 'Role-Action-Functionality Management',

    // textos entidad persona
	'text_titulo_page_persona' : 'Personal Data Management',
    'text_contenido_titulo_form_persona_ADD': 'Personal Data ADD Form',
	'text_contenido_titulo_form_persona_EDIT': 'Personal Data EDIT Form',
	'text_contenido_titulo_form_persona_DELETE': 'Personal Data DELETE Form',
	'text_contenido_titulo_form_persona_SHOWCURRENT': 'Personal Data SHOWCURRENT Form',
    'text_contenido_titulo_form_persona_SEARCH': 'Personal Data SEARCH Form',

	// atributos
	'dni': 'Identification',
    'nombre_persona': 'First Name',
    'apellidos_persona': 'Last Name',
    'fechaNacimiento_persona': 'Date of Birth',
    'direccion_persona': 'Address',
    'telefono_persona': 'Phone',
    'email_persona': 'Email',
    'foto_persona': 'Photo',

	// labels
	'label_dni': 'Identification',
	'label_nombre_persona': 'First Name',
	'label_apellidos_persona': 'Last Name',
	'label_fechaNacimiento_persona': 'Date of Birth',
	'label_direccion_persona': 'Address',
	'label_telefono_persona': 'Phone',
	'label_email_persona': 'Email',
	'label_foto_persona': 'Photo',
	'label_nuevo_foto_persona': 'New Photo',

	// errores validaciones formulario
	// ADD/EDIT

	// dni
	'dni_min_size_ko':'ID number too short. Must have 8 numbers and 1 alphabetical character',
    'dni_max_size_ko':'ID number too long. Must have 8 numbers and 1 alphabetical character',
    'dni_format_ko':'Incorrect ID/foreign ID format. ID number 8 digits 1 letter, foreign ID number 1 letter 7 digits 1 letter',
    // nombre_persona
    'nombre_persona_min_size_ko':'Name too short. Must have more than 4 alphabetical characters',
    'nombre_persona_max_size_ko':'Name too long. Must have less than 15 alphabetic characters',
    'nombre_persona_format_ko':'Incorrect name. Only alphabetic characters are allowed',

    // apellidos_persona
    'apellidos_persona_min_size_ko': 'Last name too short. Must have more than 4 alphabetic characters or spaces',
    'apellidos_persona_max_size_ko': 'Last name too long. Must have less than 20 alphabetic characters or spaces',
    'apellidos_persona_format_ko': 'Last name incorrect. Only alphabetic characters and spaces are allowed',

    //fechaNacimiento_persona
    'fechaNacimiento_persona_format_ko': 'Date is incorrect. Must be in dd/mm/yyyy format',
    'fechaNacimiento_persona_valid_ko': 'Date is invalid. The date must exist',


	// email persona
	'email_persona_min_size_ko': '',
	'email_persona_max_size_ko':'',
	'email_persona_format_ko':'',

	// nuevo foto persona	
	'nuevo_foto_persona_exist_file_ko':'The file does not exist. A photo in jpg format must be uploaded.',
	'nuevo_foto_persona_max_size_file_ko':'',
	'nuevo_foto_persona_type_file_ko':'',
	'nuevo_foto_persona_format_name_file_ko':'',
	'nuevo_foto_persona_min_size_ko':'',
	'nuevo_foto_persona_max_size_ko':'',

	//SEARCH
	// foto persona
	'foto_persona_max_size_ko':'',
	'foto_persona_format_ko':'',
	

	//errores acciones
	'RECORDSET_VACIO' : 'There are not results for your search',
	'dni_es_nulo_ko':'DNI can not be empty',

	'admin_no_se_puede_modificar_ko':'El admin no se puede modificar',

}