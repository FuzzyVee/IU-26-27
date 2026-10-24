class entity_dom_fields extends dom_fields {
    constructor() {
        super();
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

    function repairTranslationText(value) {
        if (typeof value !== 'string' || !/[ÃÂâ]/.test(value)) return value;
        try {
            return decodeURIComponent(escape(value));
        } catch (error) {
            console.warn('No se pudo corregir una traducción mal codificada.', error);
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
                    url('https://f2.toyhou.se/file/f2-toyhou-se/images/116329354_1XMc1olgmXT12cp.png')
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
            #tablaresultadostest {
                width: 100%;
                border-collapse: collapse;
                text-align: left;
            }
            #tablaresultadostest th, #tablaresultadostest td {
                min-width: 90px;
                padding: 12px 14px;
                border-bottom: 1px solid var(--line) !important;
                vertical-align: middle;
            }
            #tablaresultadostest th {
                position: sticky;
                top: 0;
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
            #IU_Test_result_nofile { margin-top: 16px; overflow-x: auto; }
            footer { margin-top: 24px; padding: 12px 0; color: var(--muted); text-align: center; }
            @media (max-width: 640px) {
                body { padding: 16px 12px; }
                #header_page { align-items: flex-start; }
                #header_page h1 { max-width: 70%; }
                #label_seleccioncolumnas { margin-left: 0; }
                #seleccioncolumnas { flex: 1 1 100%; max-width: 100%; }
                #tablaresultadostest th, #tablaresultadostest td { padding: 9px; }
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
    url('https://f2.toyhou.se/file/f2-toyhou-se/images/116329354_1XMc1olgmXT12cp.png') no-repeat center center fixed;
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
  background: var(--panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  overflow-x: auto;
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

        `;
        document.head.appendChild(style);
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
                        <img id="botonTEST_DATA" src="./iconos/TEST.png" alt="Pruebas de datos" onclick="test = new entity_Test_Data(eval(entidad.nombreentidad))">

                        <label id="label_seleccioncolumnas" class="label_seleccioncolumnas" for="seleccioncolumnas">Seleccionar columnas</label>
                        <select id="seleccioncolumnas" multiple aria-label="Seleccionar columnas"></select>
                    </div>
                </section>
                <section id="IU_manage_table" aria-live="polite"></section>
                <section id="IU_Test_result_nofile" aria-live="polite"></section>
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

        normalizeTranslations();
        window.setLang();
        if (window.entidad) window.seleccionarEntidad(window.entidad.nombreentidad);
    }

    helperReady.then(() => {
        if (document.readyState === 'complete') {
            replaceBody();
        } else {
            window.addEventListener('load', replaceBody);
        }
    }).catch((error) => console.error(error));
})();
