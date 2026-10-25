### **Completed Tasks**

* [x] **Core Adapter Base Class (** **General\_Entity\_Class.js** **)**
  * Inherits from `AbstractEntidad` and connects all core DOM utilities (`dom`, `dom_form`, `dom_table`, `Validations`, `ExternalAccess`) [1, 9].
  * Generates schema-driven field validation methods (`generateValidationMethods`) and submit handlers (`generateSubmitHandlers`) [9].
  * Fixed numeric ID boundary check so `-1` / `0` fail `min_size` before regex format evaluation [9, 12].
* [x] **7 Entity Subclasses Created**
  * Classes defined and inheriting from `General_Entity_Class`: `persona`, `usuario`, `rol`, `accion`, `funcionalidad`, `funcionalidad_accion`, `rolaccionfuncionalidad` [2, 9, 13, 15, 17, 18, 22].
* [x] **Modal Form Lifecycle (** **createForm\_ACCION** **)**
  * Implemented `createForm_ADD`, `createForm_SEARCH`, `createForm_EDIT(fila)`, `createForm_DELETE(fila)`, and `createForm_SHOWCURRENT(fila)` in modal overlay (`#Div_IU_form`) [1, 3, 9, 15].
  * Correctly configured `onsubmit` and `action` properties on `form_iu` [1, 9].
* [x] **Data Table &amp; Special Formatting**
  * Generates interactive data tables with row icons (`EDIT`, `DELETE`, `SHOWCURRENT`) [1, 9, 15].
  * Formats special file attributes (`foto_persona`) into thumbnail previews with fallback error handling [9, 15].
  * Multi-select column filtering (`#seleccioncolumnas`) dynamically updates visible columns (`columnasamostrar`) [1, 9, 15].

---

### **Pending Tasks for ET2**

* [x] **File Input Visibility Rules (** **xxxx** **vs** **nuevo\_xxxx** **)**
  * Ensure `foto_persona` (text) is hidden in `ADD`, set to `readonly` in `EDIT`/`DELETE`/`SHOWCURRENT`, and editable in `SEARCH` [3, 9, 15].
  * Ensure `nuevo_foto_persona` (file input) is visible in `ADD`/`EDIT`, and hidden in `SEARCH`/`DELETE`/`SHOWCURRENT` [3, 9, 15].
  * Verify `link_foto_persona` connects to `http://193.147.87.202/ET2/filesuploaded/files_foto_persona/filename` [3, 9, 15].
* [x] **Multilingual System (** **locale/** **)**
  * Create `locale/Textos_ES.js` (defining `textos_ES`) and `locale/Textos_EN.js` (defining `textos_EN`) [3, 16].
  * Assign CSS classes to all HTML text elements matching translation keys and verify `setLang()` toggles language via cookies [3, 16].
* [ ] **Header** **TEST** **Execution Launcher**
  * Add `TEST.png` icon in `#add_search_columns` header next to `ADD` and `SEARCH` [3, 15].
  * Link click event to open test runner window for the current entity using `entity_Test_Data` [3, 21].
* [ ] **Group Hours File (** **app/ET2\_datosgenerales.js** **)**
  * Create `app/ET2_datosgenerales.js` with member roles, student information, and hours logged [3].
* [ ] **Fix Selects in PK/FK**
  * Ensure that Existent PK are selectable in `EDIT`, and `ADD` forms, and that FK selects are populated with valid options from existent PKs [3, 9, 15]. 
* [ ] **Final Submission Archive**
  * Compress all project files into `ET2_Codigodegrupo.rar` with a single root folder named `ET2_Codigodegrupo` [3].  

---

### **Final Package Structure (** **ET2\_Codigodegrupo.rar** **)**

Your final submission archive must be compressed as a `.rar` file named **ET2\_Codigodegrupo.rar** and contain a single root folder named **ET2\_Codigodegrupo** [3]:

```
ET2_Codigodegrupo.rar
 └── ET2_Codigodegrupo/
      ├── index.html
      ├── styles.css
      ├── app/
      │    ├── ET2_datosgenerales.js
      │    ├── persona/ (persona_Class.js, persona_test.js)
      │    ├── usuario/
      │    ├── rol/
      │    ├── accion/
      │    ├── funcionalidad/
      │    ├── funcionalidad_accion/
      │    └── rolaccionfuncionalidad/
      ├── Base/
      │    ├── AbstractEntidad_Class.js
      │    └── General_Entity_Class.js
      ├── Core/
      │    ├── Dom_Class.js
      │    ├── Dom_form_Class.js
      │    ├── Dom_table_Class.js
      │    ├── Dom_fields_Class.js
      │    ├── Validations_Class.js
      │    └── ExternalAccess_class.js
      ├── locale/
      │    ├── Textos_ES.js
      │    └── Textos_EN.js
      └── iconos/

```

---

Let me know if you want to tackle the **locale/** **translation system** or the **TEST** **button launcher** next