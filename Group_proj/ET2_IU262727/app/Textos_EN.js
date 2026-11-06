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
	'matrix_role_assignment_help': 'Select a functionality to view its actions and assign each action to the appropriate roles.',
	'matrix_select_combination': 'Functionality:',
	'matrix_assign_action': 'Assign action to functionality',
	'matrix_assign_relation': 'Assign functionality and action to role',
	'matrix_loading': 'Loading relations...',
	'matrix_saving': 'Saving assignment...',
	'matrix_saved': 'Assignment saved.',
	'matrix_save_error': 'Could not save assignment',
	'matrix_empty_matrix': 'There are no functionalities, actions, or roles to build the matrix.',
	'matrix_matrix_ready': 'Select boxes to change assignments.',
	'test_number': 'Test',
	'test_field': 'Field',
	'test_action': 'Action',
	'test_value': 'Test value',
	'test_expected': 'Expected',
	'test_actual': 'Actual',
	'test_status': 'Result',
	'test_method_missing': 'Method not found',
	'test_passed': 'PASSED',
	'test_failed': 'FAILED',
	'test_summary': 'Tests completed',
	'test_results_title': 'Test results',
	'test_close': 'Close',
	'test_popup_blocked': 'The browser blocked the results window. Allow pop-ups and try again.',
	'test_suite_missing': 'No validation tests are loaded for this entity.',

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
	'dni_min_size_ko': 'ID number too short. Must have 8 numbers and 1 alphabetical character',
    'dni_max_size_ko': 'ID number too long. Must have 8 numbers and 1 alphabetical character',
    'dni_format_ko': 'Incorrect ID/foreign ID format. ID number 8 digits 1 letter, foreign ID number 1 letter 7 digits 1 letter',
    'dni_personalized_ko': 'The DNI/NIE checksum letter is incorrect.',

    // nombre_persona
    'nombre_persona_min_size_ko': 'Name too short. Must have more than 4 alphabetical characters',
    'nombre_persona_max_size_ko': 'Name too long. Must have less than 15 alphabetic characters',
    'nombre_persona_format_ko': 'Incorrect name. Only alphabetic characters are allowed',

    // apellidos_persona
    'apellidos_persona_min_size_ko': 'Last name too short. Must have more than 4 alphabetic characters or spaces',
    'apellidos_persona_max_size_ko': 'Last name too long. Must have less than 20 alphabetic characters or spaces',
    'apellidos_persona_format_ko': 'Last name incorrect. Only alphabetic characters and spaces are allowed',

    //fechaNacimiento_persona
    'fechaNacimiento_persona_max_size_ko': 'Date is too long. Must be 10 characters at most.',
    'fechaNacimiento_persona_format_ko': 'Date is incorrect. Must be in dd/mm/yyyy format',
    'fechaNacimiento_persona_personalized_ko': 'Date is invalid. The date must exist',

	//direccion_persona
	'direccion_persona_min_size_ko': 'Address too short. Must be 10 characters at the least.',
	'direccion_persona_max_size_ko': 'Address too long. Must be 200 characters at most.',
	'direccion_persona_format_ko': 'Invalid address. It can only contain letters, numbers, dots, dashes, slashes, spaces or semicolons.',

	// email persona
	'email_persona_min_size_ko': 'Email too short. It has to be at least 4 characters.',
	'email_persona_max_size_ko': 'Email too long. It has to be at most 45 characters.',
	'email_persona_format_ko': 'Invalid email. Check the format.',
	'email_persona_personalized_ko': 'Invalid email. Check the domain and its suffix.',

	// telefono persona
	'telefono_persona_min_size_ko': 'The phone number is too short. It must be 9 characters.',
	'telefono_persona_max_size_ko': 'The phone number is too long. It must be 9 characters.',
	'telefono_persona_format_ko': 'The phone number must only be numbers.',
	'telefono_persona_personalized_ko': 'The phone number must have 9 digits and start with 6, 7, 8, or 9.',

	// nuevo foto persona
	'nuevo_foto_persona_exist_file_ko': 'The file does not exist. A photo in \'.jpg\' or \'.jpeg\' format must be uploaded.',
	'nuevo_foto_persona_max_size_file_ko': 'The file is too big. It has to be smaller than 2MB.',
	'nuevo_foto_persona_type_file_ko': 'The file is of an incorrect type. It has to have a \'.jpg\' or a \'.jpeg\' extension.',
	'nuevo_foto_persona_format_name_file_ko': 'The file has an invalid name.',
	'nuevo_foto_persona_min_size_ko': 'The name of the file is too short. It has to be at least 3 characters.',
	'nuevo_foto_persona_max_size_ko': 'The name of the file is too long. It has to be at most 15 characters.',

	//SEARCH
	// foto persona
	'foto_persona_max_size_ko': 'The name of the file is too long. It has to be at most 15 characters.',
	'foto_persona_format_ko': 'The name of the file is invalid. Check the format.',

	//errores acciones
	'RECORDSET_VACIO' : 'There are not results for your search',
	'dni_es_nulo_ko': 'DNI can not be empty',

	'admin_no_se_puede_modificar_ko': 'El admin no se puede modificar',
};