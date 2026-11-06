/* app/SearchHelper.js */

// Helper para normalizar texto (elimina acentos y pasa a minúsculas)
function normalizeStr(str) {
    return (str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

// Coincidencia flexible (subcadena o múltiples palabras)
function flexibleMatch(targetText, queryStr) {
    const normTarget = normalizeStr(targetText);
    const normQuery = normalizeStr(queryStr);
    if (!normQuery) return true;
    if (normTarget.includes(normQuery)) return true;

    const queryTokens = normQuery.split(/\s+/).filter(Boolean);
    return queryTokens.length > 1 && queryTokens.every(token => normTarget.includes(token));
}

/**
 * Transforma un <select> de la ET2 en un campo de autocompletado único con sugerencias dinámicas.
 */
function attachSelectAutocomplete(selectId, placeholderText = "Escribe DNI o Nombre...") {
   
    const select = document.getElementById(selectId);
    if (!select || select.tagName !== 'SELECT') return;

    const inputId = `ac_input_${selectId}`;

    // Forward validation calls from ac_input_[selectId] to [selectId]
    ['ADD', 'EDIT', 'SEARCH'].forEach((action) => {
        const targetMethod = `${action}_${selectId}_validation`;
        const aliasMethod = `${action}_${inputId}_validation`;

        if (window.entidad) {
            window.entidad[aliasMethod] = function() {
                if (typeof window.entidad[targetMethod] === 'function') {
                    return window.entidad[targetMethod]();
                }
                return true;
            };
        }
    });
    
    // Si ya fue procesado, no duplicar
    if (document.getElementById(`ac_wrapper_${selectId}`)) return;

    // Ocultar el select original para no alterar los tests de la ET2
    select.style.display = 'none';

    // Crear el contenedor envolvente del autocompletado
    const wrapper = document.createElement('div');
    wrapper.id = `ac_wrapper_${selectId}`;
    wrapper.className = 'autocomplete-wrapper';
    wrapper.style.position = 'relative';
    wrapper.style.width = '100%';

    // Crear el único campo de texto visible
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `ac_input_${selectId}`;
    input.className = 'autocomplete-input';
    input.placeholder = placeholderText;
    input.autocomplete = 'off';

    // Si el select ya tiene un valor cargado, mostrarlo en el input
    if (select.selectedIndex >= 0 && select.options[select.selectedIndex].value !== '') {
        input.value = select.options[select.selectedIndex].text || select.value;
    }

    // Crear el menú desplegable flotante para sugerencias
    const listContainer = document.createElement('div');
    listContainer.id = `ac_list_${selectId}`;
    listContainer.className = 'autocomplete-list';
    listContainer.hidden = true;

    // Insertar elementos en el DOM
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(input);
    wrapper.appendChild(listContainer);
    wrapper.appendChild(select); // Mantener el select oculto dentro del wrapper

    const form = select.closest('form');
    let currentFocus = -1;

    // Función para renderizar las sugerencias dinámicas
    // Renderizar sugerencias en tiempo real
    const renderSuggestions = () => {
        const query = input.value.trim();
        listContainer.innerHTML = '';
        currentFocus = -1;
    
        // Si el usuario borró todo el texto, el select vuelve al valor por defecto ("-- Seleccionar --")
        if (!query) {
            listContainer.hidden = true;
            select.value = ''; 
            select.dispatchEvent(new Event('change', { bubbles: true }));
            return;
        }
    
        // 1. Filtrar ignorando la opción vacía "-- Seleccionar --"
        const validOptions = Array.from(select.options).filter(opt => opt.value !== '');
    
        // 2. Buscar coincidencias por DNI, Nombre o ID
        const matches = validOptions.filter(opt => 
            flexibleMatch(opt.text, query) || flexibleMatch(opt.value, query)
        );
    
        if (matches.length === 0) {
            listContainer.hidden = true;
            return;
        }
    
        // 3. Mostrar hasta 8 sugerencias
        matches.slice(0, 8).forEach((opt) => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = opt.text;  
    
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                input.value = opt.text;       // Texto visible en el input
                select.value = opt.value;     // Valor real (DNI/ID) asignado al select oculto
                listContainer.hidden = true;
    
                // Disparar validación nativa de la ET2
                select.dispatchEvent(new Event('change', { bubbles: true }));
            });
            listContainer.appendChild(item);
        });
    
        listContainer.hidden = false;
    };

    const selectOption = (opt) => {
        input.value = opt.text;
        select.value = opt.value;
        listContainer.hidden = true;
        // Disparar evento change en el select para validaciones de la ET2
        select.dispatchEvent(new Event('change', { bubbles: true }));
    };

    // Eventos de teclado y escritura
    input.addEventListener('input', () => {
        // Al escribir o borrar con retroceso, actualizar las sugerencias
        renderSuggestions();

        // Intentar hacer match exacto si el usuario escribió el DNI completo a mano
        const exactMatch = Array.from(select.options).find(opt => 
            opt.value.toLowerCase() === input.value.trim().toLowerCase()
        );
        select.value = exactMatch ? exactMatch.value : input.value.trim();
    });

    input.addEventListener('keydown', (e) => {
        const items = listContainer.getElementsByClassName('autocomplete-item');

        if (e.key === 'ArrowDown') {
            currentFocus++;
            addActive(items);
        } else if (e.key === 'ArrowUp') {
            currentFocus--;
            addActive(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();

            if (currentFocus > -1 && items[currentFocus]) {
                items[currentFocus].click();
            }
            const fields = form
                ? Array.from(form.elements).filter((element) =>
                    /^(INPUT|SELECT|TEXTAREA)$/.test(element.tagName) &&
                    element.type !== 'hidden' &&
                    !element.disabled &&
                    element.getClientRects().length > 0
                )
                : [];
            const currentIndex = fields.indexOf(input);
            if (currentIndex !== -1) fields[currentIndex + 1]?.focus();
        } else if (e.key === 'Escape') {
            listContainer.hidden = true;
        }
    });

    const addActive = (items) => {
        if (!items || !items.length) return;
        Array.from(items).forEach(item => item.classList.remove('autocomplete-active'));
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;
        items[currentFocus].classList.add('autocomplete-active');
        items[currentFocus].scrollIntoView({ block: 'nearest' });
    };

    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            listContainer.hidden = true;
        }
    });

    // Sincronización al enviar el formulario (Submit)
    if (form) {
        form.addEventListener('submit', () => {
            const query = input.value.trim();
            const matchedOpt = Array.from(select.options).find(opt =>
                opt.value.toLowerCase() === query.toLowerCase() ||
                opt.text.toLowerCase() === query.toLowerCase()
            );
            if (matchedOpt) {
                select.value = matchedOpt.value;
            }
        });
    }
}