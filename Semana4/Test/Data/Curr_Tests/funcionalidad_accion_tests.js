let funcionalidad_accion_def_tests = Array(
   Array("funcionalidad_accion", "id_funcionalidad", "input", 1, "cumple tamaño numerico minimo id_funcionalidad en ADD", "min_size", "ADD", "id_funcionalidad_min_size_ko", "Minimo 1"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 2, "cumple tamaño numerico minimo id_funcionalidad en EDIT", "min_size", "EDIT", "id_funcionalidad_min_size_ko", "Minimo 1"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 3, "cumple tamaño numerico maximo id_funcionalidad en ADD", "max_size", "ADD", "id_funcionalidad_max_size_ko", "Maximo 11"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 4, "cumple tamaño numerico maximo id_funcionalidad en EDIT", "max_size", "EDIT", "id_funcionalidad_max_size_ko", "Maximo 11"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 5, "cumple tamaño numerico maximo id_funcionalidad en SEARCH", "max_size", "SEARCH", "id_funcionalidad_max_size_ko", "Maximo 11"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 6, "es correcto id_funcionalidad en ADD", "valid", "ADD", true, "ID funcionalidad correcto"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 7, "es correcto id_funcionalidad en EDIT", "valid", "EDIT", true, "ID funcionalidad correcto"),
   Array("funcionalidad_accion", "id_funcionalidad", "input", 8, "es correcto id_funcionalidad en SEARCH", "valid", "SEARCH", true, "ID funcionalidad correcto"),
   Array("funcionalidad_accion", "id_accion", "input", 9, "cumple tamaño numerico minimo id_accion en ADD", "min_size", "ADD", "id_accion_min_size_ko", "Minimo 1"),
   Array("funcionalidad_accion", "id_accion", "input", 10, "cumple tamaño numerico minimo id_accion en EDIT", "min_size", "EDIT", "id_accion_min_size_ko", "Minimo 1"),
   Array("funcionalidad_accion", "id_accion", "input", 11, "cumple tamaño numerico maximo id_accion en ADD", "max_size", "ADD", "id_accion_max_size_ko", "Maximo 11"),
   Array("funcionalidad_accion", "id_accion", "input", 12, "cumple tamaño numerico maximo id_accion en EDIT", "max_size", "EDIT", "id_accion_max_size_ko", "Maximo 11"),
   Array("funcionalidad_accion", "id_accion", "input", 13, "cumple tamaño numerico maximo id_accion en SEARCH", "max_size", "SEARCH", "id_accion_max_size_ko", "Maximo 11"),
   Array("funcionalidad_accion", "id_accion", "input", 14, "es correcto id_accion en ADD", "valid", "ADD", true, "ID accion correcto"),
   Array("funcionalidad_accion", "id_accion", "input", 15, "es correcto id_accion en EDIT", "valid", "EDIT", true, "ID accion correcto"),
   Array("funcionalidad_accion", "id_accion", "input", 16, "es correcto id_accion en SEARCH", "valid", "SEARCH", true, "ID accion correcto")
);

let funcionalidad_accion_pruebas = Array(
   Array("funcionalidad_accion", "id_funcionalidad", 1, 1, "ADD", {"id_funcionalidad":0}, "id_funcionalidad_min_size_ko"),
   Array("funcionalidad_accion", "id_funcionalidad", 2, 2, "EDIT", {"id_funcionalidad":0}, "id_funcionalidad_min_size_ko"),
   Array("funcionalidad_accion", "id_funcionalidad", 3, 3, "ADD", {"id_funcionalidad":999999999999}, "id_funcionalidad_max_size_ko"),
   Array("funcionalidad_accion", "id_funcionalidad", 4, 4, "EDIT", {"id_funcionalidad":999999999999}, "id_funcionalidad_max_size_ko"),
   Array("funcionalidad_accion", "id_funcionalidad", 5, 5, "SEARCH", {"id_funcionalidad":999999999999}, "id_funcionalidad_max_size_ko"),
   Array("funcionalidad_accion", "id_funcionalidad", 6, 6, "ADD", {"id_funcionalidad":2}, true),
   Array("funcionalidad_accion", "id_funcionalidad", 7, 7, "EDIT", {"id_funcionalidad":2}, true),
   Array("funcionalidad_accion", "id_funcionalidad", 8, 8, "SEARCH", {"id_funcionalidad":2}, true),
   Array("funcionalidad_accion", "id_accion", 9, 9, "ADD", {"id_accion":0}, "id_accion_min_size_ko"),
   Array("funcionalidad_accion", "id_accion", 10, 10, "EDIT", {"id_accion":0}, "id_accion_min_size_ko"),
   Array("funcionalidad_accion", "id_accion", 11, 11, "ADD", {"id_accion":999999999999}, "id_accion_max_size_ko"),
   Array("funcionalidad_accion", "id_accion", 12, 12, "EDIT", {"id_accion":999999999999}, "id_accion_max_size_ko"),
   Array("funcionalidad_accion", "id_accion", 13, 13, "SEARCH", {"id_accion":999999999999}, "id_accion_max_size_ko"),
   Array("funcionalidad_accion", "id_accion", 14, 14, "ADD", {"id_accion":2}, true),
   Array("funcionalidad_accion", "id_accion", 15, 15, "EDIT", {"id_accion":2}, true),
   Array("funcionalidad_accion", "id_accion", 16, 16, "SEARCH", {"id_accion":2}, true)
);
