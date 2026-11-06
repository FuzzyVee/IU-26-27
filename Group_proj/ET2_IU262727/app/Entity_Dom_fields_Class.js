class entity_dom_fields extends dom_fields {
    constructor() {
        super();
    }

    showData(idcomponente, test_result, marked = null) {
        super.showData(idcomponente, test_result, marked);
        if (idcomponente === 'IU_Test_result_nofile') {
            this.mostrarVentanaResultadosTests(document.getElementById(idcomponente));
        }
    }

    mostrarVentanaResultadosTests(resultsContainer = document.getElementById('IU_Test_result_nofile')) {
        if (!resultsContainer) {
            throw new Error('No se encontró el contenedor de resultados de tests.');
        }

        const translations = window.traduccion || {};
        const popup = window.open('', 'test_results_popup', 'popup=yes,width=1200,height=800,resizable=yes,scrollbars=yes');
        if (!popup) {
            resultsContainer.style.display = 'block';
            throw new Error(translations.test_popup_blocked ||
                'El navegador bloqueó la ventana de resultados. Permite las ventanas emergentes e inténtalo de nuevo.');
        }

        const popupDocument = popup.document;
        popupDocument.open();
        popupDocument.write('<!doctype html><html><head><meta charset="UTF-8"></head><body></body></html>');
        popupDocument.close();
        popupDocument.documentElement.lang = document.documentElement.lang;

        document.querySelectorAll('link[rel="stylesheet"], style').forEach((styleElement) => {
            const copiedStyle = styleElement.cloneNode(true);
            if (copiedStyle.tagName === 'LINK') copiedStyle.href = styleElement.href;
            popupDocument.head.appendChild(copiedStyle);
        });

        const titleText = translations.test_results_title || 'Resultados de tests';
        popupDocument.title = titleText;

        const popupStyles = popupDocument.createElement('style');
        popupStyles.textContent = `
            html, body { min-height: 100%; margin: 0; }
            body { max-width: none; box-sizing: border-box; padding: 24px; }
            .test-results-popup-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                margin-bottom: 16px;
            }
            .test-results-popup-header h1 { margin: 0; font-size: 1.4rem; }
            .test-results-popup-close {
                flex: 0 0 auto;
                padding: 8px 14px;
                border: 1px solid var(--line, #303b49);
                border-radius: 8px;
                color: var(--text, #f0f6fc);
                background: var(--panel-bg, #161b22);
                cursor: pointer;
                font: inherit;
            }
            .test-results-popup-content {
                max-height: calc(100vh - 120px);
                overflow: auto;
                overscroll-behavior: contain;
            }
            #tablaresultadostest { min-width: 880px; }
            @media (max-width: 640px) {
                body { padding: 16px 12px; }
                .test-results-popup-header { align-items: flex-start; }
            }
        `;
        popupDocument.head.appendChild(popupStyles);

        const header = popupDocument.createElement('header');
        header.className = 'test-results-popup-header';
        const title = popupDocument.createElement('h1');
        title.textContent = titleText;
        const closeButton = popupDocument.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'test-results-popup-close';
        closeButton.textContent = translations.test_close || 'Cerrar';
        closeButton.addEventListener('click', () => popup.close());
        header.append(title, closeButton);

        const content = popupDocument.createElement('main');
        content.className = 'test-results-popup-content';
        while (resultsContainer.firstChild) {
            content.appendChild(popupDocument.adoptNode(resultsContainer.firstChild));
        }

        popupDocument.body.replaceChildren(header, content);
        resultsContainer.style.display = 'none';
        popup.focus();
    }

}

(function() {
    if (window.__BODY_OVERRIDDEN__) return;
    window.__BODY_OVERRIDDEN__ = true;


    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.head.appendChild(script);
        });
    }

    const helperReady = loadScript('./app/EntityHelper.js');
    loadScript('./app/SearchHelper.js');


    function repairTranslationText(value) {
        if (typeof value !== 'string') return value;
        if (!/[ÃÂâ]/.test(value)) return value;

        const utf8Bytes = [];
        for (const character of value) {
            const codePoint = character.codePointAt(0);
            if (codePoint > 0xff) return value;
            utf8Bytes.push(`%${codePoint.toString(16).padStart(2, '0')}`);
        }

        try {
            return decodeURIComponent(utf8Bytes.join(''));
        } catch {
            return value;
        }
    }

    function normalizeTranslations() {
        [window.textos_ES, window.textos_EN].forEach((translations) => {
            if (!translations) return;
            Object.keys(translations).forEach((key) => {
                translations[key] = repairTranslationText(translations[key]);
            });
        });
    }

    function injectCSS() {
        if (document.getElementById('et2-interface-styles')) return;

        const style = document.createElement('style');
        style.id = 'et2-interface-styles';
        style.textContent = `
            :root {
                color-scheme: dark;
                --page-bg: #0d1117;
                --panel-bg: rgba(22, 27, 34, 0.96);
                --panel-soft: rgba(30, 38, 49, 0.96);
                --line: #303b49;
                --text: #f0f6fc;
                --muted: #aab6c5;
                --accent: #58a6ff;
                --accent-hover: #1f6feb;
            }
            * { box-sizing: border-box; }
            body {
                min-height: 100vh;
                margin: 0 auto;
                padding: 24px clamp(16px, 4vw, 56px);
                color: var(--text);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                background:
                    linear-gradient(rgba(13, 17, 23, 0.76), rgba(13, 17, 23, 0.82)),
                    url('https://f2.toyhou.se/file/f2-toyhou-se/images/111423519_AvzdA9PFgJHm4Aa.png?1765120139')
                    center / cover fixed no-repeat,
                    var(--page-bg);
            }
            #header_page {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                margin: 0 0 18px;
                padding: 0;
                border: 0;
            }
            #header_page h1 {
                margin: 0;
                font-size: clamp(1.35rem, 2.5vw, 1.9rem);
                letter-spacing: .02em;
            }
            .language-switch { display: flex; gap: 8px; }
            .language-switch button, .nav-link, .toolbar-button, .modal-close {
                border: 1px solid var(--line);
                color: var(--text);
                background: var(--panel-bg);
                cursor: pointer;
                transition: border-color .15s ease, background .15s ease, transform .15s ease;
            }
            .language-switch button:hover, .nav-link:hover, .toolbar-button:hover, .modal-close:hover {
                border-color: var(--accent);
                background: var(--panel-soft);
                transform: translateY(-1px);
            }
            .language-switch button {
                display: grid;
                place-items: center;
                width: 42px;
                height: 36px;
                padding: 4px;
                border-radius: 8px;
            }
            .language-switch img { width: 25px; height: 18px; object-fit: cover; }
            #menu-toggle {
                width: 100%;
                margin-bottom: 12px;
                padding: 10px 14px;
                border: 1px solid var(--line);
                border-radius: 10px;
                color: var(--text);
                background: var(--panel-bg);
                text-align: left;
                font: inherit;
                font-weight: 650;
                cursor: pointer;
            }
            #div-menu {
                display: none;
                margin: 0 0 20px;
                padding: 12px;
                border: 1px solid var(--line);
                border-radius: 12px;
                background: var(--panel-bg);
            }
            .IU_nav { display: flex; flex-wrap: wrap; gap: 9px; }
            .nav-link {
                padding: 9px 15px;
                border-radius: 999px;
                font: inherit;
                font-size: .92rem;
                font-weight: 600;
            }
            #IU_manage_entity { display: none; }
            #IU_manage_head, #IU_manage_table {
                border: 1px solid var(--line);
                border-radius: 14px;
                background: var(--panel-bg);
                box-shadow: 0 12px 30px rgba(0, 0, 0, .2);
            }
            #IU_manage_head { margin: 0 0 16px; padding: 18px; }
            #title_page {
                margin-bottom: 16px;
                padding: 0 0 12px;
                border: 0;
                border-bottom: 1px solid var(--line);
                font-size: 1.15rem;
                font-weight: 700;
            }
            #add_search_columns {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
            }
            .toolbar-button {
                display: inline-grid;
                place-items: center;
                min-width: 44px;
                min-height: 44px;
                padding: 8px;
                border-radius: 9px;
            }
            .toolbar-button img { display: block; width: 26px; height: 26px; object-fit: contain; }
            #label_seleccioncolumnas { margin-left: auto; color: var(--muted); font-weight: 600; }
            #seleccioncolumnas {
                min-width: 190px;
                max-width: min(100%, 290px);
                min-height: 44px;
                padding: 7px;
                border: 1px solid var(--line);
                border-radius: 8px;
                color: var(--text);
                background: #111820;
                font: inherit;
            }
            #seleccioncolumnas option { padding: 5px; }
            #IU_manage_table {
                min-height: 120px;
                padding: 12px;
                overflow-x: auto;
            }
            .relation-matrix-description {
                margin: 4px 2px 14px;
                color: var(--muted);
                line-height: 1.5;
            }
            .relation-combination-selector {
                display: flex;
                flex-direction: column;
                gap: 8px;
                max-width: 560px;
                margin: 0 0 16px;
            }
            .relation-combination-selector label {
                color: var(--text);
                font-weight: 600;
            }
            .relation-combination-selector select {
                width: 100%;
                min-height: 42px;
                padding: 8px 12px;
                border: 1px solid var(--line);
                border-radius: 8px;
                color: var(--text);
                background: #111820;
                font: inherit;
            }
            .relation-matrix-scroll {
                max-width: 100%;
                overflow: auto;
                border: 1px solid var(--line);
                border-radius: 10px;
            }
            .relation-matrix {
                width: max-content;
                min-width: 100%;
                border-collapse: collapse;
                text-align: center;
            }
            .relation-matrix th, .relation-matrix td {
                min-width: 100px;
                padding: 10px 12px;
                border-bottom: 1px solid var(--line);
                border-right: 1px solid var(--line);
            }
            .relation-matrix thead th {
                position: sticky;
                top: 0;
                z-index: 1;
                color: var(--text);
                background: #202a36;
                font-size: .85rem;
                line-height: 1.4;
            }
            .relation-matrix th:first-child {
                position: sticky;
                left: 0;
                z-index: 2;
                min-width: 190px;
                max-width: 280px;
                text-align: left;
                background: #202a36;
            }
            .relation-matrix tbody th:first-child { background: #171e27; }
            .relation-matrix tbody tr:hover { background: rgba(88, 166, 255, .07); }
            .relation-matrix input[type="checkbox"] {
                width: 19px;
                height: 19px;
                accent-color: var(--accent);
                cursor: pointer;
            }
            .relation-matrix input[type="checkbox"]:disabled { cursor: progress; }
            .relation-matrix-status { margin: 12px 2px 2px; color: var(--muted); }
            .relation-matrix-status.is-error { color: #ff7b72; }
            .test-results-summary {
                margin: 0 0 8px;
                color: var(--text);
                font-weight: 700;
            }
            #tablaresultadostest .test-passed { color: #3fb950; font-weight: 700; }
            #tablaresultadostest .test-failed { color: #ff7b72; font-weight: 700; }
            #tablaresultadostest {
                width: 100%;
                border-collapse: collapse;
                table-layout: fixed;
                text-align: left;
                font-size: 1rem;
            }
            #tablaresultadostest th, #tablaresultadostest td {
                padding: 10px 12px;
                border-bottom: 1px solid var(--line) !important;
                vertical-align: top;
                overflow-wrap: anywhere;
                line-height: 1.45;
            }
            #tablaresultadostest th:nth-child(1) { width: 8%; }
            #tablaresultadostest th:nth-child(2) { width: 17%; }
            #tablaresultadostest th:nth-child(3) { width: 10%; }
            #tablaresultadostest th:nth-child(4) { width: 22%; }
            #tablaresultadostest th:nth-child(5) { width: 18%; }
            #tablaresultadostest th:nth-child(6) { width: 14%; }
            #tablaresultadostest th:nth-child(7) { width: 11%; }
            #tablaresultadostest td:nth-child(1),
            #tablaresultadostest td:nth-child(3) {
                white-space: nowrap;
            }
            #tablaresultadostest th {
                position: sticky;
                top: 0;
                z-index: 1;
                color: var(--muted);
                background: #171e27;
                font-size: .82rem;
                letter-spacing: .045em;
                text-transform: uppercase;
            }
            #tablaresultadostest tbody tr:hover { background: rgba(88, 166, 255, .07); }
            #tablaresultadostest td img {
                max-width: 44px;
                max-height: 38px;
                object-fit: contain;
            }
            #tablaresultadostest td img[id^="boton"] {
                width: 38px;
                height: 38px;
                padding: 7px;
                border: 1px solid #d8e2ef;
                border-radius: 8px;
                background: #f0f6fc;
                cursor: pointer;
            }
            #tablaresultadostest td img[id^="boton"]:hover { background: #dbeafe; }
            #Div_IU_form {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 1000;
                overflow-y: auto;
                padding: 6vh 16px;
                background: rgba(0, 0, 0, .72);
            }
            .form-dialog {
                position: relative;
                display: flex;
                flex-direction: column;
                width: min(1080px, 100%);
                max-height: 88vh;
                margin: 0 auto;
                padding: 24px;
                overflow: hidden;
                border: 1px solid var(--line);
                border-radius: 14px;
                background: #161b22;
                box-shadow: 0 24px 70px rgba(0, 0, 0, .55);
            }
            .class_titulo_form {
                margin: 0 0 16px;
                padding: 0 0 12px;
                border-bottom: 1px solid var(--line);
                color: var(--text);
                font-size: 1.15rem;
                font-weight: 700;
                text-align: center;
            }
            #error_action_modal .modal-close {
                position: absolute;
                top: 12px;
                right: 12px;
                z-index: 2;
                width: 36px;
                height: 36px;
                border-radius: 8px;
                font-size: 1.1rem;
            }

    #IU_manage_table {
        overflow-x: auto !important;
    }

    #IU_manage_table table {
        width: 100%;
        border-collapse: collapse;
    }

    
    #IU_manage_table td.tabla-td-foto_persona,
    #IU_manage_table th.tabla-th-foto_persona,
    #IU_manage_table td[class*="foto"],
    #IU_manage_table th[class*="foto"] {
        width: 90px !important;
        min-width: 90px !important;
        text-align: center;
    }

    
    #IU_manage_table th:nth-last-child(-n+3),
    #IU_manage_table td:nth-last-child(-n+3) {
        width: 55px !important;
        min-width: 55px !important;
        padding: 8px 4px !important;
        text-align: center !important;
        white-space: nowrap !important;
    }

    #IU_manage_table td:nth-last-child(-n+3) img {
        width: 36px !important;
        height: 36px !important;
        display: inline-block;
    }

    

   
    #IU_manage_table th[class*="fecha"],
    {
        max-width: 130px !important;
        width: 130px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }


    #IU_manage_table td:not(:nth-last-child(-n+3)) {
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    

    #IU_manage_table th[class*="dni"],
    #IU_manage_table td[class*="dni"],
    #IU_manage_table th.tabla-th-dni,
    #IU_manage_table td.tabla-td-dni,
    #IU_manage_table td:first-child:not([class*="foto"]) {
        width: 125px !important;
        min-width: 125px !important;
        white-space: nowrap !important;
        overflow: visible !important;
        text-overflow: clip !important;
    }
            
            .formulario { clear: both; display: grid; gap: 8px; padding-top: 12px; }
            .formulario label { margin-top: 8px; color: var(--muted); font-weight: 600; }
            .formulario input:not([type="file"]), .formulario select, .formulario textarea {
                width: 100%;
                padding: 10px 12px;
                border: 1px solid var(--line);
                border-radius: 8px;
                color: var(--text);
                background: #0d1117;
                font: inherit;
            }
            .formulario input[type="file"] { max-width: 100%; }
            .formulario input:focus, .formulario select:focus, .formulario textarea:focus {
                outline: 2px solid rgba(88, 166, 255, .45);
                border-color: var(--accent);
            }
            .formulario span[id^="span_error"] { color: #ff7b72; }
            .formulario button, .formulario input[type="submit"] {
                width: fit-content;
                margin-top: 12px;
                padding: 10px 16px;
                border: 1px solid var(--accent);
                border-radius: 8px;
                color: white;
                background: var(--accent-hover);
                cursor: pointer;
            }
            .form-actions {
                flex: 0 0 auto;
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                margin: 12px -24px -24px;
                padding: 14px 24px;
                border-top: 1px solid var(--line);
                background: #161b22;
            }
            .form-actions button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                min-width: 116px;
                min-height: 42px;
                padding: 9px 16px;
                border: 1px solid var(--accent);
                border-radius: 8px;
                color: #fff;
                background: var(--accent-hover);
                font: inherit;
                font-weight: 650;
                cursor: pointer;
            }
            .form-actions button:hover { filter: brightness(1.12); }
            .form-actions button img { width: 20px; height: 20px; object-fit: contain; }
            .form-actions .secondary-action {
                border-color: var(--line);
                color: var(--text);
                background: var(--panel-soft);
            }
            #contenedor_IU_form {
                min-height: 0;
                overflow-y: auto;
            }
            #modal_action_overlay {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 1100;
                background: rgba(0, 0, 0, .68);
            }
            #error_action_modal {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                z-index: 1101;
                width: min(460px, calc(100% - 32px));
                padding: 22px;
                border: 1px solid #f85149;
                border-radius: 12px;
                color: var(--text);
                background: #1c2128;
                box-shadow: 0 18px 50px rgba(0, 0, 0, .5);
                transform: translate(-50%, -50%);
            }
            #error_action_modal .modal-close { float: right; }
            #IU_Test_result_nofile {
                max-height: min(80vh, 900px);
                margin-top: 10px;
                overflow: auto;
                overscroll-behavior: contain;
            }
            footer { margin-top: 24px; padding: 12px 0; color: var(--muted); text-align: center; }
            @media (max-width: 640px) {
                body { padding: 16px 12px; }
                #header_page { align-items: flex-start; }
                #header_page h1 { max-width: 70%; }
                #label_seleccioncolumnas { margin-left: 0; }
                #seleccioncolumnas { flex: 1 1 100%; max-width: 100%; }
                #tablaresultadostest th, #tablaresultadostest td { padding: 8px; }
                #tablaresultadostest th:nth-child(1) { width: 12%; }
                #tablaresultadostest th:nth-child(2) { width: 18%; }
                #tablaresultadostest th:nth-child(3) { width: 12%; }
                #tablaresultadostest th:nth-child(4) { width: 20%; }
                #tablaresultadostest th:nth-child(5) { width: 15%; }
                #tablaresultadostest th:nth-child(6) { width: 13%; }
                #tablaresultadostest th:nth-child(7) { width: 10%; }
            }
                :root {
  --bg: #0d1117;
  --panel-bg: rgba(22, 27, 34, 0.95);
  --card-bg: #161b22;
  --input-bg: #21262d;
  --border-color: #30363d;
  --text-primary: #ffffff;
  --text-muted: #8b949e;
  --accent-blue: #58a6ff;
  --accent-blue-hover: #1f6feb;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

body {
  background:
    linear-gradient(rgba(13, 17, 23, 0.72), rgba(13, 17, 23, 0.72)),
    url('https://f2.toyhou.se/file/f2-toyhou-se/images/111423519_AvzdA9PFgJHm4Aa.png?1765120139') no-repeat center center fixed;
  background-size: cover;
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  max-width: 1300px;
  margin: 0 auto;
  padding: 24px 16px;
  min-height: 100vh;
}

#header_page h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

#div-menu {
  margin-bottom: 24px;
}

.IU_nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.nav-link {
  display: inline-block;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  border-color: var(--accent-blue);
  background: var(--input-bg);
}

#IU_manage_head {
  background: var(--panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
}

#add_search_columns {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

/* White tile background for toolbar & table action buttons */
#add_search_columns img#botonADD,
#add_search_columns img#botonSEARCH,
#add_search_columns img#botonTEST_DATA,
#IU_manage_table img#botonEDIT,
#IU_manage_table img#botonDELETE,
#IU_manage_table img#botonSHOWCURRENT {
  background-color: #f0f6fc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 6px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  filter: none !important;
  transition: transform 0.15s ease, background-color 0.15s ease;
}

#add_search_columns img#botonADD:hover,
#add_search_columns img#botonSEARCH:hover,
#IU_manage_table img#botonEDIT:hover,
#IU_manage_table img#botonDELETE:hover,
#IU_manage_table img#botonSHOWCURRENT:hover {
  background-color: #ffffff;
  border-color: #58a6ff;
  transform: scale(1.08);
}

#label_seleccioncolumnas {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 700;
  margin-left: auto;
}

/* High-contrast column selection */
select#seleccioncolumnas {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #0d1117 !important;
  color: #ffffff !important;
  border: 2px solid #484f58;
  border-radius: 10px;
  padding: 8px;
  width: clamp(280px, 28vw, 360px);
  height: 180px;
  font-size: 0.96rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  overflow-y: auto;
}

select#seleccioncolumnas:focus-visible {
  border-color: var(--accent-blue) !important;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.35);
}

select#seleccioncolumnas option {
  background-color: #0d1117 !important;
  color: #ffffff !important;
  padding: 10px 12px;
  line-height: 1.5;
}

select#seleccioncolumnas option:checked {
  background-color: #075985 ;
  color: #ffffff ;
}

select#seleccioncolumnas option:checked {
  box-shadow: 0 0 10px 100px #075985 inset ;
  font-weight: 700;
}

select#seleccioncolumnas option:hover {
  background-color: #263b53 !important;
  color: #ffffff !important;
  box-shadow: inset 0 0 0 2px var(--accent-blue) !important;
}

  #IU_manage_table {
            background-color: #161b22 !important;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Table header cells */
        #IU_manage_table th {
            background-color: #21262d !important;
            color: #58a6Af !important;
            font-weight: 700;
            padding: 14px 16px;
        }

        /* Table body cells */
        #IU_manage_table td {
            border-bottom: 1px solid #30363d !important;
            padding: 12px 16px;
        }

        #IU_manage_table table {
        table-layout: fixed !important;
        width: 100% !important;
    }

    
    #IU_manage_table th.tabla-th-foto_persona,
    #IU_manage_table td.tabla-td-foto_persona,
    #IU_manage_table td:has(img) {
        width: 95px !important;
        min-width: 95px !important;
        text-align: center;
    }

    #IU_manage_table td.tabla-td-foto_persona img,
    #IU_manage_table td a img {
        width: 70px !important;
        height: 70px !important;
        min-width: 70px !important;
        min-height: 70px !important;
        object-fit: cover !important;
        border-radius: 8px;
        display: inline-block;
    }
   
    #IU_manage_table td {
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #IU_manage_table td:last-child {
        width: 150px !important;
        min-width: 150px !important;
        text-align: right;
    }

#IU_manage_table table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--text-primary);
}

#IU_manage_table th {
  background: var(--card-bg);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

#IU_manage_table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.9rem;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#IU_manage_table td a img,
.tabla-td-foto_persona img {
  filter: none !important;
  width: 70px !important;
  height: 70px !important;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  vertical-align: middle;
  background: var(--input-bg);
}

#IU_manage_table th:nth-last-child(-n+3),
#IU_manage_table td:nth-last-child(-n+3) {
    text-align: right;
    white-space: nowrap;
}

#Div_IU_form {
  position: fixed !important;
  inset: 0 !important;
  transform: none !important;
  width: 100% !important;
  max-height: none !important;
  overflow-y: auto !important;
  background: rgba(0, 0, 0, 0.72) !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 6vh 16px !important;
  color: var(--text-primary) !important;
  z-index: 1000 !important;
}

#Div_IU_form .form-dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(750px, 100%);
  max-height: 88vh;
  margin: 0 auto;
  overflow: hidden;
  background: #161b22;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  padding: 28px;
  color: var(--text-primary);
}

#Div_IU_form .modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  float: none;
}

#IU_manage_table td:not(:first-child):not(:nth-last-child(-n+3)):not([class*="foto"]):not([class*="fecha"]) {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

#contenedor_IU_form {
  flex: 1 1 auto;
  min-height: 0;
  clear: both;
  overflow-y: auto;
}

.formulario br {
  display: none !important;
}

.formulario {
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-top: 16px;
}

.formulario label {
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-top: 4px;
}

.formulario input:not([type="file"]),
.formulario select,
.formulario textarea {
  background: var(--input-bg) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-primary) !important;
  border-radius: 6px;
  padding: 9px 12px;
  font-size: 0.88rem;
  width: min(100%, 32rem);
  outline: none;
}

.formulario input[id^="id_"] {
  width: min(100%, 14rem);
}

.formulario input[id*="fecha"],
.formulario input[id*="telefono"] {
  width: min(100%, 18rem);
}

.formulario input[id*="email"],
.formulario input[id*="nombre"],
.formulario input[id*="apellido"] {
  width: min(100%, 36rem);
}

.formulario {
  width: min(100%, 42rem);
  min-height: 90px;
  resize: vertical;
}
  
textarea {
  width: min(100%, 42rem);
  min-height: 90px;
  resize: vertical;
}

.formulario span[id^="span_error_"] {
  color: #f85149;
  font-size: 0.78rem;
  min-height: 14px;
  display: block;
  width: 100%;
  margin-top: -8px;
}

.formulario input[type="file"] {
  width: min(100%, 32rem);
  background: var(--input-bg);
  border: 1px dashed var(--border-color);
  border-radius: 6px;
  padding: 8px;
  color: var(--text-primary);
  font-size: 0.85rem;
}

.class_titulo_form {
  background: var(--panel-bg);
}

.text_contenido_titulo_form_persona_ADD {
  color: #075985;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
}

input[type="file"]::file-selector-button {
  background: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 6px 12px;
  margin-right: 10px;
  cursor: pointer;
}

#div_boton {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

#submit_button,
#div_boton button {
  background: var(--accent-blue);
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.form-dialog > .form-actions {
  flex: 0 0 auto;
  margin: 12px -28px -28px;
  padding: 14px 28px;
  background: #161b22;
  border-top: 1px solid var(--border-color);
}

.form-dialog > .form-actions button {
  width: auto;
  min-height: 42px;
  padding: 9px 16px;
  color: var(--text-primary);
  font-size: .95rem;
  font-weight: 650;
}

.form-dialog > .form-actions button[type="submit"] {
  color: #fff;
  background: var(--accent-blue);
}

.form-dialog > .form-actions .secondary-action {
  color: var(--text-primary);
  background: var(--input-bg);
  border: 1px solid var(--border-color);
}

.form-dialog > .form-actions button img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

#submit_button:hover,
#div_boton button:hover {
  background: var(--accent-blue-hover);
}

#submit_button img,
#div_boton button img {
  width: 22px;
  height: 22px;
  filter: brightness(0) invert(1);
}

#modalError {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  background: #2d1517 !important;
  border: 1px solid #f85149 !important;
  border-radius: 8px !important;
  color: #ff7b72 !important;
  padding: 20px !important;
  z-index: 10001;
}

footer {
  margin-top: 32px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--input-bg);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

@media (max-width: 600px) {
  #Div_IU_form {
    padding: 16px 10px !important;
  }

  #Div_IU_form .form-dialog {
    max-height: 92vh;
    padding: 20px 16px;
  }

  .form-dialog > .form-actions {
    margin: 12px -16px -20px;
    padding: 12px 16px;
  }

  #add_search_columns {
    flex-wrap: wrap;
  }

  #label_seleccioncolumnas {
    margin-left: 0;
  }

  select#seleccioncolumnas {
    width: 100%;
    max-width: 360px;
  margin-left: 0;
  }
}

#IU_manage_table .relation-matrix-scroll {
  max-width: 100%;
  overflow: auto;
}

#IU_manage_table .relation-matrix {
  width: max-content;
  min-width: 100%;
  table-layout: auto;
}

#IU_manage_table .relation-matrix th {
  width: 160px !important;
  min-width: 145px !important;
  max-width: 200px;
  padding: 12px 10px;
  text-align: center;
  white-space: normal !important;
  overflow-wrap: anywhere;
  line-height: 1.4;
  vertical-align: middle;
}

#IU_manage_table .relation-matrix th:first-child {
  position: sticky;
  left: 0;
  z-index: 3;
  width: 230px !important;
  min-width: 210px !important;
  max-width: 260px;
  text-align: left;
}

#IU_manage_table .relation-matrix thead th {
  position: sticky;
  top: 0;
  z-index: 2;
}

#IU_manage_table .relation-matrix td:not(:first-child):not([class*="foto"]):not([class*="fecha"]):not(:nth-last-child(-n+3)),
#IU_manage_table .relation-matrix td:nth-last-child(-n+3) {
  width: 64px !important;
  min-width: 64px !important;
  max-width: 64px;
  padding: 10px 8px;
  overflow: visible;
  text-align: center;
  white-space: normal;
}

#IU_manage_table .relation-matrix tbody th:first-child {
  z-index: 1;
}

#IU_manage_table .relation-matrix input[type="checkbox"] {
  display: block;
  margin: 0 auto;
}
.form-photo-preview:empty {
    display: none;
}
.form-photo-preview img {
    max-width: 160px;
    max-height: 160px;
    border-radius: 8px;
    object-fit: cover;
}
.date-picker-control {
    display: inline-flex;
    gap: 6px;
    align-items: center;
}
.date-picker-toggle {
    border: 1px solid #57606a;
    border-radius: 4px;
    background: #1c2330;
    color: #f0f6fc;
    cursor: pointer;
    padding: 6px 9px;
    font-size: 1rem;
}
.date-picker-popup {
    position: fixed;
    z-index: 1100;
    box-sizing: border-box;
    width: min(260px, calc(100vw - 16px));
    max-height: min(360px, calc(100vh - 16px));
    overflow: auto;
    padding: 10px;
    border: 1px solid #57606a;
    border-radius: 8px;
    background: #161b22;
    color: #f0f6fc;
    box-shadow: 0 8px 24px #0008;
}
.date-picker-popup[hidden] {
    display: none;
}
.date-picker-header,
.date-picker-week,
.date-picker-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
    text-align: center;
}
.date-picker-header {
    grid-template-columns: auto 1fr auto;
    align-items: center;
    margin-bottom: 8px;
}
.date-picker-week {
    margin-bottom: 4px;
    font-size: 0.8rem;
}
.date-picker-popup .date-picker-nav,
.date-picker-popup .date-picker-day {
    width: auto;
    min-width: 0;
    margin: 0;
    padding: 6px 0;
    border: 1px solid #57606a;
    border-radius: 4px;
    background: #1c2330;
    color: #f0f6fc;
    cursor: pointer;
}
.date-picker-popup .date-picker-nav {
    padding: 4px 9px;
}
.date-picker-day {
    min-height: 30px;
}
.date-picker-day:hover,
.date-picker-day:focus,
.date-picker-nav:hover,
.date-picker-toggle:hover,
.date-picker-nav:focus {
    background: #303b4b;
}
.date-picker-toggle:focus {
    outline: 2px solid rgba(88, 166, 255, .65);
}

.autocomplete-wrapper {
        position: relative;
        width: min(100%, 32rem);
    }
    .autocomplete-input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid var(--border-color, #30363d);
        border-radius: 8px;
        color: var(--text-primary, #ffffff);
        background: var(--input-bg, #21262d);
        font: inherit;
        outline: none;
    }
    .autocomplete-input:focus {
        border-color: #58a6ff;
        box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);
    }
    .autocomplete-list {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 1050;
        max-height: 200px;
        overflow-y: auto;
        background: #161b22;
        border: 1px solid #30363d;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        margin-top: 4px;
    }
    .autocomplete-item {
        padding: 9px 12px;
        color: #f0f6fc;
        cursor: pointer;
        font-size: 0.88rem;
        border-bottom: 1px solid #21262d;
    }
    .autocomplete-item:last-child {
        border-bottom: none;
    }
    .autocomplete-item:hover, .autocomplete-active {
        background-color: #1f6feb;
        color: #ffffff;
    }

        `;
        document.head.appendChild(style);
    }

    function addCharset() {
      const head = document.head || document.getElementsByTagName('head')[0];
      if (!head) return;
      if (head.querySelector('meta[charset]')) return;
      const meta = document.createElement('meta');
      meta.setAttribute('charset', 'UTF-8');
      head.insertBefore(meta, head.firstChild);
    }

    function replaceBody() {
        const body = document.getElementById('body') || document.body;
        if (!body) return;

        injectCSS();
        body.innerHTML = `
            <header id="header_page">
                <h1 class="text_titulo_app">Interfaz ET2 IU</h1>
                <div class="language-switch" aria-label="Seleccionar idioma">
                    <button type="button" onclick="setLang('ES')" title="Español">
                        <img src="./iconos/Spain.png" alt="Español">
                    </button>
                    <button type="button" onclick="setLang('EN')" title="English">
                        <img src="./iconos/United-Kingdom.png" alt="English">
                    </button>
                </div>
            </header>

            <button id="menu-toggle" type="button" class="text_titulo_menu" onclick="menu_work()">
                Opciones de menú
            </button>
            <aside id="div-menu">
                <nav class="IU_nav" aria-label="Gestión de entidades">
                    <button type="button" class="nav-link text_menu_persona" onclick="seleccionarEntidad('persona')">Gestionar persona</button>
                    <button type="button" class="nav-link text_menu_usuario" onclick="seleccionarEntidad('usuario')">Gestionar usuario</button>
                    <button type="button" class="nav-link text_menu_rol" onclick="seleccionarEntidad('rol')">Gestionar rol</button>
                    <button type="button" class="nav-link text_menu_accion" onclick="seleccionarEntidad('accion')">Gestionar acción</button>
                    <button type="button" class="nav-link text_menu_funcionalidad" onclick="seleccionarEntidad('funcionalidad')">Gestionar funcionalidad</button>
                    <button type="button" class="nav-link text_menu_funcionalidad_accion" onclick="seleccionarEntidad('funcionalidad_accion')">Gestionar funcionalidad-acción</button>
                    <button type="button" class="nav-link text_menu_rolaccionfuncionalidad" onclick="seleccionarEntidad('rolaccionfuncionalidad')">Gestionar rol-acción-funcionalidad</button>
                </nav>
            </aside>

            <section id="IU_manage_entity">
                <section id="IU_manage_head">
                    <div id="title_page"><span id="text_title_page"></span></div>
                    <div id="add_search_columns">
                         <img id="botonADD" src="./iconos/ADD.png" alt="ADD" onclick="entidad.createForm_ADD();" />
                        <img id="botonSEARCH" src="./iconos/SEARCH.png" alt="SEARCH" onclick="entidad.createForm_SEARCH();"/>
                        <img id="botonTEST_DATA" src="./iconos/TEST.png" alt="Ejecutar tests de validación" title="Ejecutar tests para la entidad seleccionada" role="button" tabindex="0" onclick="runSelectedEntityTests()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();runSelectedEntityTests()}">

                        <label id="label_seleccioncolumnas"  for="seleccioncolumnas"></label>
                        <select id="seleccioncolumnas" multiple aria-label="Seleccionar columnas"></select>
                    </div>
                </section>
                <section id="IU_manage_table" aria-live="polite"></section>
            </section>

            <section id="Div_IU_form">
                <div class="form-dialog">
                    <div class="class_titulo_form">
                        <span id="class_contenido_titulo_form"></span>
                    </div>
                    <div id="contenedor_IU_form"></div>
                </div>
            </section>

            <div id="modal_action_overlay" onclick="entidad.dom.cerrarModalError()"></div>
            <div id="error_action_modal" role="alertdialog" aria-modal="true">
                <button type="button" class="modal-close" aria-label="Cerrar"
                    onclick="entidad.dom.cerrarModalError()">×</button>
                <span id="error_action_msg"></span>
            </div>

            <section id="IU_Test_result_nofile" aria-live="polite"></section>

            <footer><span class="text_titulo_pie">Pie de página</span></footer>
        `;

        window.menu_work = function() {
            const menu = document.getElementById('div-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        };

        window.seleccionarEntidad = function(name) {
            const entities = {
                persona,
                usuario,
                rol,
                accion,
                funcionalidad,
                funcionalidad_accion,
                rolaccionfuncionalidad
            };
            const Entity = entities[name];
            if (!Entity) throw new Error(`Entidad no reconocida: ${name}`);

            window.entidad = new Entity();
            const esRelacion = ['funcionalidad_accion', 'rolaccionfuncionalidad'].includes(name);
            [
                document.getElementById('botonADD'),
                document.getElementById('label_seleccioncolumnas'),
                document.getElementById('seleccioncolumnas')
            ].forEach((control) => {
                if (control) control.style.display = esRelacion ? 'none' : '';
            });

            document.getElementById('div-menu').style.display = 'none';
            const title = document.getElementById('text_title_page');
            if (title) {
                const key = `entity_${name}`;
                title.className = key;
                title.textContent = window.traduccion && window.traduccion[key]
                    ? key
                    : name.replaceAll('_', ' ');
                window.setLang();
            }
        };

        window.runSelectedEntityTests = function() {
            const selectedEntity = window.entidad;
            const results = document.getElementById('IU_Test_result_nofile');
            if (!selectedEntity || !results) return;

            const testSuites = {
                persona: typeof persona_pruebas === 'undefined' ? null : persona_pruebas,
                usuario: typeof usuario_pruebas === 'undefined' ? null : usuario_pruebas,
                rol: typeof rol_pruebas === 'undefined' ? null : rol_pruebas,
                accion: typeof accion_pruebas === 'undefined' ? null : accion_pruebas,
                funcionalidad: typeof funcionalidad_pruebas === 'undefined' ? null : funcionalidad_pruebas,
                funcionalidad_accion: typeof funcionalidad_accion_pruebas === 'undefined' ? null : funcionalidad_accion_pruebas,
                rolaccionfuncionalidad: typeof rolaccionfuncionalidad_pruebas === 'undefined' ? null : rolaccionfuncionalidad_pruebas
            };
            const testCases = testSuites[selectedEntity.nombreentidad];
            if (!Array.isArray(testCases) || testCases.length === 0) {
                const message = document.createElement('p');
                message.className = 'test-failed';
                message.textContent = window.traduccion && window.traduccion.test_suite_missing
                    ? window.traduccion.test_suite_missing
                    : `No hay tests de validación cargados para ${selectedEntity.nombreentidad}.`;
                results.replaceChildren(message);
                selectedEntity.dom.mostrarVentanaResultadosTests(results);
                return;
            }

            try {
                selectedEntity.runValidationTests(testCases);
            } catch (error) {
                console.error(`No se pudieron ejecutar los tests de ${selectedEntity.nombreentidad}.`, error);
                const message = document.createElement('p');
                message.className = 'test-failed';
                message.textContent = error.message || 'No se pudieron ejecutar los tests.';
                results.replaceChildren(message);
                results.style.display = 'block';
            }
        };

        normalizeTranslations();
        window.setLang();
        if (window.entidad) window.seleccionarEntidad(window.entidad.nombreentidad);
    }

    helperReady.then(() => {
        if (document.readyState === 'complete') {
            addCharset();  
            replaceBody();
        } else {
            window.addEventListener('load', addCharset);
            window.addEventListener('load', replaceBody);
        }
    }).catch((error) => console.error(error));
})();
