let usuario_pruebas = Array(
    Array("usuario", "dni", 1, 1, "ADD", { "dni": "1234" }, "dni_min_size_ko"),
    Array("usuario", "dni", 2, 2, "EDIT", { "dni": "1234567890" }, "dni_max_size_ko"),
    Array("usuario", "dni", 3, 3, "SEARCH", { "dni": "1234567890" }, "dni_max_size_ko"),
    Array("usuario", "dni", 4, 4, "ADD", { "dni": "80423097D" }, true),
    Array("usuario", "id_rol", 5, 5, "ADD", { "id_rol": "abc" }, "id_rol_format_ko"),
    Array("usuario", "id_rol", 6, 6, "ADD", { "id_rol": "1" }, true),
    Array("usuario", "contrasena", 7, 7, "ADD", { "contrasena": "short" }, "contrasena_min_size_ko"),
    Array("usuario", "contrasena", 8, 8, "EDIT", { "contrasena": "contra-seña" }, "contrasena_format_ko"),
    Array("usuario", "contrasena", 9, 9, "ADD", { "contrasena": "securePass" }, true)
);
