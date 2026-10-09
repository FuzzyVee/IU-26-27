function runAllTestsPersona() {
        const persona_obj = new persona();
        
        const tbody = document.getElementById('results-body');
        tbody.innerHTML = '';

        if (typeof persona_pruebas === 'undefined' || !Array.isArray(persona_pruebas)) {
            alert('Error: persona_pruebas no está definido. Asegúrate de incluir persona_tests.js');
            return;
        }

        persona_pruebas.forEach(testCase => {
            const [entidad, campo, numTest, numPrueba, accion, valorProbado, resultadoEsperado] = testCase;

            const targetInput = document.getElementById(campo);
            if (targetInput && typeof valorProbado === 'object' && valorProbado !== null) {
                targetInput.value = valorProbado[campo] !== undefined ? valorProbado[campo] : '';
            }

            const methodName = `${accion}_${campo}_validation`;
            let resultadoObtenido = 'MÉTODO NO ENCONTRADO';

            if (typeof persona_obj[methodName] === 'function') {
                resultadoObtenido = persona_obj[methodName]();
            }

            const isSuccess = (resultadoObtenido === resultadoEsperado);

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${numPrueba} (Test ${numTest})</td>
                <td>${campo}</td>
                <td>${accion}</td>
                <td><code>${JSON.stringify(valorProbado)}</code></td>
                <td><code>${JSON.stringify(resultadoEsperado)}</code></td>
                <td><code>${JSON.stringify(resultadoObtenido)}</code></td>
                <td class="${isSuccess ? 'pass' : 'fail'}">${isSuccess ? 'PASSED' : 'FAILED'}</td>
            `;
            tbody.appendChild(row);
        });
    }

function runAllTestsAll() {
    // 1. Map entity names directly to their class constructors & test arrays
    const testSuites = [
        {
            nombre: 'persona',
            clase: typeof persona !== 'undefined' ? persona : null,
            pruebas: typeof persona_pruebas !== 'undefined' ? persona_pruebas : null
        },
        {
            nombre: 'usuario',
            clase: typeof usuario !== 'undefined' ? usuario : null,
            pruebas: typeof usuario_pruebas !== 'undefined' ? usuario_pruebas : null
        },
        {
            nombre: 'rol',
            clase: typeof rol !== 'undefined' ? rol : null,
            pruebas: typeof rol_pruebas !== 'undefined' ? rol_pruebas : null
        },
        {
            nombre: 'accion',
            clase: typeof accion !== 'undefined' ? accion : null,
            pruebas: typeof accion_pruebas !== 'undefined' ? accion_pruebas : null
        },
        {
            nombre: 'funcionalidad',
            clase: typeof funcionalidad !== 'undefined' ? funcionalidad : null,
            pruebas: typeof funcionalidad_pruebas !== 'undefined' ? funcionalidad_pruebas : null
        }
    ];

    const tbody = document.getElementById('results-body');
    if (!tbody) return;
    tbody.innerHTML = ''; // Clear results once at start

    // 2. Iterate through each entity test suite
    testSuites.forEach(suite => {
        const { nombre, clase: ClaseEntidad, pruebas: pruebasArray } = suite;

        // Skip missing classes or missing test arrays gracefully
        if (!ClaseEntidad) {
            console.warn(`Clase para '${nombre}' no definida. Omitiendo tests.`);
            return;
        }

        if (!pruebasArray || !Array.isArray(pruebasArray)) {
            console.warn(`Array '${nombre}_pruebas' no está definido. Omitiendo tests.`);
            return;
        }

        const entity_obj = new ClaseEntidad();

        // 3. Execute test cases for this entity
        pruebasArray.forEach(testCase => {
            const [entidad, campo, numTest, numPrueba, accion, valorProbado, resultadoEsperado] = testCase;

            // Set input value in DOM if element exists
            const targetInput = document.getElementById(campo);
            if (targetInput) {
                if (typeof valorProbado === 'object' && valorProbado !== null) {
                    targetInput.value = valorProbado[campo] !== undefined ? valorProbado[campo] : '';
                } else if (typeof valorProbado === 'string' || typeof valorProbado === 'number') {
                    targetInput.value = valorProbado;
                }
            }

            // Execute validation method
            const methodName = `${accion}_${campo}_validation`;
            let resultadoObtenido = 'MÉTODO NO ENCONTRADO';

            if (typeof entity_obj[methodName] === 'function') {
                try {
                    resultadoObtenido = entity_obj[methodName]();
                } catch (err) {
                    resultadoObtenido = `ERROR: ${err.message}`;
                }
            }

            // Result check
            const isSuccess = (JSON.stringify(resultadoObtenido) === JSON.stringify(resultadoEsperado));

            // Render table row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${numPrueba} (Test ${numTest})</td>
                <td>${campo}</td>
                <td>${accion}</td>
                <td><code>${JSON.stringify(valorProbado)}</code></td>
                <td><code>${JSON.stringify(resultadoEsperado)}</code></td>
                <td><code>${JSON.stringify(resultadoObtenido)}</code></td>
                <td class="${isSuccess ? 'pass' : 'fail'}">${isSuccess ? 'PASSED' : 'FAILED'}</td>
            `;
            tbody.appendChild(row);
        });
    });
}

function runAllTests() {
    const selectElem = document.getElementById('entidadSelect');
    if (!selectElem) {
        alert('Error: Could not find element #entidadSelect');
        return;
    } 
    
    if (selectElem.value === 'all') {
        runAllTestsAll();
        return;
    }

    const entidadSeleccionada = selectElem.value; 
        
    const clasesEntidades = {
        persona: typeof persona !== 'undefined' ? persona : null,
        usuario: typeof usuario !== 'undefined' ? usuario : null,
        rol: typeof rol !== 'undefined' ? rol : null,
        accion: typeof accion !== 'undefined' ? accion : null,
        funcionalidad: typeof funcionalidad !== 'undefined' ? funcionalidad : null
    };

    const ClaseEntidad = clasesEntidades[entidadSeleccionada];
    
    if (!ClaseEntidad) {
        alert(`Error: Class '${entidadSeleccionada}' is not defined. Make sure its script file is included in your HTML.`);
        return;
    }

    let entity_obj;
    try {
        entity_obj = new ClaseEntidad();
    } catch (e) {
        alert(`Error instantiating class '${entidadSeleccionada}': ${e.message}`);
        return;
    }

    const nombreArrayPruebas = `${entidadSeleccionada}_pruebas`;
    
    // SAFE RESOLUTION: Checks window, globalThis, and falls back to dynamic scope lookup
    let pruebasArray = window[nombreArrayPruebas];
    if (typeof pruebasArray === 'undefined') {
        try {
            pruebasArray = Function(`return typeof ${nombreArrayPruebas} !== 'undefined' ? ${nombreArrayPruebas} : undefined`)();
        } catch (e) {
            pruebasArray = undefined;
        }
    }

    const tbody = document.getElementById('results-body');
    tbody.innerHTML = '';

    if (typeof pruebasArray === 'undefined' || !Array.isArray(pruebasArray)) {
        alert(`Error: ${nombreArrayPruebas} is not defined. Make sure you included ${entidadSeleccionada}_tests.js`);
        return;
    }

    pruebasArray.forEach(testCase => {
        const [entidad, campo, numTest, numPrueba, accion, valorProbado, resultadoEsperado] = testCase;

        // Safely set DOM input value
        try {
            const targetInput = document.getElementById(campo);
            if (targetInput) {
                if (typeof valorProbado === 'object' && valorProbado !== null) {
                    targetInput.value = valorProbado[campo] !== undefined ? valorProbado[campo] : '';
                } else if (typeof valorProbado === 'string' || typeof valorProbado === 'number') {
                    targetInput.value = valorProbado;
                }
            }
        } catch (domErr) {
            console.warn(`DOM update warning for field '${campo}':`, domErr);
        }

        const methodName = `${accion}_${campo}_validation`;
        let resultadoObtenido = 'MÉTODO NO ENCONTRADO';

        // WRAPPED IN TRY-CATCH: Prevents uncaught errors from stopping the loop
        if (typeof entity_obj[methodName] === 'function') {
            try {
                resultadoObtenido = entity_obj[methodName]();
            } catch (err) {
                // Catches errors like "Uncaught ReferenceError: valor is not defined"
                resultadoObtenido = `ERROR: ${err.message}`;
            }
        }

        const isSuccess = JSON.stringify(resultadoObtenido) === JSON.stringify(resultadoEsperado);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${numPrueba} (Test ${numTest})</td>
            <td>${campo}</td>
            <td>${accion}</td>
            <td><code>${JSON.stringify(valorProbado)}</code></td>
            <td><code>${JSON.stringify(resultadoEsperado)}</code></td>
            <td><code>${JSON.stringify(resultadoObtenido)}</code></td>
            <td class="${isSuccess ? 'pass' : 'fail'}">${isSuccess ? 'PASSED' : 'FAILED'}</td>
        `;
        tbody.appendChild(row);
    });
}