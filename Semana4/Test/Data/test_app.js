
function runAllTests() {
    const selectElem = document.getElementById('entidadSelect');
    if (!selectElem) {
        alert('Error: Could not find element #entidadSelect');
        return;
    }

    const entidadSeleccionada = selectElem.value;

    // Handle 'ALL' option
    if (entidadSeleccionada === 'all') {
        runAllTestsAll();
        return;
    }

    // Map of all 7 entity constructors
    const clasesEntidades = {
        persona: typeof persona !== 'undefined' ? persona : null,
        usuario: typeof usuario !== 'undefined' ? usuario : null,
        rol: typeof rol !== 'undefined' ? rol : null,
        accion: typeof accion !== 'undefined' ? accion : null,
        funcionalidad: typeof funcionalidad !== 'undefined' ? funcionalidad : null,
        funcionalidad_accion: typeof funcionalidad_accion !== 'undefined' ? funcionalidad_accion : null,
        rolaccionfuncionalidad: typeof rolaccionfuncionalidad !== 'undefined' ? rolaccionfuncionalidad : null
    };

    const ClaseEntidad = clasesEntidades[entidadSeleccionada];
    if (!ClaseEntidad) {
        alert(`Error: Class '${entidadSeleccionada}' is not defined. Check script imports.`);
        return;
    }

    //  Instantiate in 'test' mode to bypass backend/AJAX calls
    let entity_obj;
    try {
        entity_obj = new ClaseEntidad('test');
    } catch (e) {
        alert(`Error instantiating '${entidadSeleccionada}': ${e.message}`);
        return;
    }

    //  Retrieve global test array (e.g. persona_pruebas)
    const nombreArrayPruebas = `${entidadSeleccionada}_pruebas`;
    let pruebasArray = window[nombreArrayPruebas];
    if (typeof pruebasArray === 'undefined') {
        try {
            pruebasArray = Function(`return typeof ${nombreArrayPruebas} !== 'undefined' ? ${nombreArrayPruebas} : undefined`)();
        } catch (e) {
            pruebasArray = undefined;
        }
    }

    const tbody = document.getElementById('results-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (!pruebasArray || !Array.isArray(pruebasArray)) {
        alert(`Error: Test dataset '${nombreArrayPruebas}' is not loaded from ./Data/`);
        return;
    }

    // Run test cases
    executeTestSuite(entity_obj, pruebasArray, tbody);
}

/**
 * Runs all 7 entity test suites sequentially.
 */
function runAllTestsAll() {
    const testSuites = [
        { nombre: 'persona', clase: typeof persona !== 'undefined' ? persona : null, pruebas: typeof persona_pruebas !== 'undefined' ? persona_pruebas : null },
        { nombre: 'usuario', clase: typeof usuario !== 'undefined' ? usuario : null, pruebas: typeof usuario_pruebas !== 'undefined' ? usuario_pruebas : null },
        { nombre: 'rol', clase: typeof rol !== 'undefined' ? rol : null, pruebas: typeof rol_pruebas !== 'undefined' ? rol_pruebas : null },
        { nombre: 'accion', clase: typeof accion !== 'undefined' ? accion : null, pruebas: typeof accion_pruebas !== 'undefined' ? accion_pruebas : null },
        { nombre: 'funcionalidad', clase: typeof funcionalidad !== 'undefined' ? funcionalidad : null, pruebas: typeof funcionalidad_pruebas !== 'undefined' ? funcionalidad_pruebas : null },
        { nombre: 'funcionalidad_accion', clase: typeof funcionalidad_accion !== 'undefined' ? funcionalidad_accion : null, pruebas: typeof funcionalidad_accion_pruebas !== 'undefined' ? funcionalidad_accion_pruebas : null },
        { nombre: 'rolaccionfuncionalidad', clase: typeof rolaccionfuncionalidad !== 'undefined' ? rolaccionfuncionalidad : null, pruebas: typeof rolaccionfuncionalidad_pruebas !== 'undefined' ? rolaccionfuncionalidad_pruebas : null }
    ];

    const tbody = document.getElementById('results-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    testSuites.forEach(suite => {
        const { nombre, clase: ClaseEntidad, pruebas: pruebasArray } = suite;

        if (!ClaseEntidad || !pruebasArray || !Array.isArray(pruebasArray)) {
            console.warn(`Skipping tests for '${nombre}': missing class or test dataset.`);
            return;
        }

        const entity_obj = new ClaseEntidad('test');
        executeTestSuite(entity_obj, pruebasArray, tbody);
    });
}


function executeTestSuite(entity_obj, pruebasArray, tbody) {
    // 1. Locate or create hidden container for form elements
    let formContainer = document.getElementById('hidden-form-container') || document.getElementById('IU_form');
    if (!formContainer) {
        formContainer = document.createElement('div');
        formContainer.id = 'hidden-form-container';
        formContainer.style.display = 'none';
        document.body.appendChild(formContainer);
    }

    // 2. Inject form fields dynamically for current entity
    if (typeof entity_obj.manual_form_creation === 'function') {
        formContainer.innerHTML = entity_obj.manual_form_creation();
    }

    // 3. Process each test case
    pruebasArray.forEach(testCase => {
        const [entidad, campo, numTest, numPrueba, accion, valorProbado, resultadoEsperado] = testCase;

        const targetInput = document.getElementById(campo);
        if (targetInput) {
            try {
                if (typeof valorProbado === 'object' && valorProbado !== null) {
                    targetInput.value = valorProbado[campo] !== undefined ? valorProbado[campo] : '';
                } else if (typeof valorProbado === 'string' || typeof valorProbado === 'number') {
                    targetInput.value = valorProbado;
                }
            } catch (valErr) {
                console.warn(`Could not set value for field '${campo}':`, valErr);
            }
        }

        const methodName = `${accion}_${campo}_validation`;
        let resultadoObtenido = 'MÉTODO NO ENCONTRADO';

        if (typeof entity_obj[methodName] === 'function') {
            try {
                resultadoObtenido = entity_obj[methodName]();
            } catch (err) {
                resultadoObtenido = `ERROR: ${err.message}`;
            }
        }

        const isSuccess = (JSON.stringify(resultadoObtenido) === JSON.stringify(resultadoEsperado));

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${numPrueba} (Test ${numTest})</td>
            <td><strong>${entidad}</strong>.${campo}</td>
            <td>${accion}</td>
            <td><code>${JSON.stringify(valorProbado)}</code></td>
            <td><code>${JSON.stringify(resultadoEsperado)}</code></td>
            <td><code>${JSON.stringify(resultadoObtenido)}</code></td>
            <td>${isSuccess ? '<span style="color: green; font-weight: bold;">PASSED</span>' : '<span style="color: red; font-weight: bold;">FAILED</span>'}</td>
        `;
        tbody.appendChild(row);
    });
}