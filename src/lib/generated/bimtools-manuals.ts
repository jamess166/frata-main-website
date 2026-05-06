/* eslint-disable */
export type ManualLocale = "es" | "en";

export interface BimtoolsManualEntry {
  slug: string;
  addinName: string;
  suiteId: string;
  suiteLabel: string;
  title: Record<ManualLocale, string>;
  excerpt: Record<ManualLocale, string>;
  markdown: Record<ManualLocale, string>;
  media: {
    images: Array<{
      src: string;
      alt: string;
    }>;
    youtubeUrl: string;
    youtubeId: string;
  };
  commerce: {
    tier: "free" | "premium";
    purchaseUrl: string;
    trialDays: number;
    activationEmail: string;
    isPremium: boolean;
    isFree: boolean;
  };
}

export interface BimtoolsSuite {
  id: string;
  label: string;
  description: string;
  addins: string[];
}

export const bimtoolsSuites: BimtoolsSuite[] = [
  {
    "id": "architecture-create",
    "label": "Architecture Create",
    "description": "Automatizacion para convertir datos arquitectonicos del modelo en elementos constructivos con menos trabajo manual.",
    "addins": [
      "room-to-floor"
    ]
  },
  {
    "id": "manage",
    "label": "Manage",
    "description": "Automatiza exportacion, parametros y configuracion centralizada para mantener tus modelos consistentes.",
    "addins": [
      "bim-syntax",
      "freeze-elements",
      "exportify",
      "grid-assigner",
      "idwriter",
      "level-mapper",
      "options",
      "parameter-catalog",
      "schedule-exporter",
      "super-match",
      "transfer-parameters"
    ]
  },
  {
    "id": "navigate",
    "label": "Navigate",
    "description": "Herramientas para encontrar, abrir y seleccionar informacion del modelo con menos friccion.",
    "addins": [
      "open-model-folder",
      "search-view",
      "data-explorer",
      "quick-select"
    ]
  },
  {
    "id": "structure-create",
    "label": "Structure Create",
    "description": "Automatizacion para crear armaduras y componentes estructurales con mayor velocidad y precision.",
    "addins": [
      "auto-stirrups",
      "footing-rebar"
    ]
  },
  {
    "id": "structure-modify",
    "label": "Structure Modify",
    "description": "Utilidades para editar, sincronizar y visualizar refuerzo estructural en modelos complejos.",
    "addins": [
      "host-sync",
      "rebar-toggle",
      "solid-rebar"
    ]
  }
] as const;

export const bimtoolsManuals: BimtoolsManualEntry[] = [
  {
    "slug": "room-to-floor",
    "addinName": "RoomToFloor",
    "suiteId": "architecture-create",
    "suiteLabel": "Architecture Create",
    "title": {
      "es": "Room to Floor - Crear pisos a partir de habitaciones",
      "en": "Room to Floor - Create floors from rooms"
    },
    "excerpt": {
      "es": "Room to Floor permite convertir habitaciones de Revit en pisos de forma controlada y masiva. La herramienta ayuda a transformar informacion arquitectonica ya modelada en elementos constructivos reales, reduciendo trabajo repetitivo al definir tipos de piso y valores por lote.",
      "en": "Room to Floor converts Revit rooms into floor elements in a controlled and scalable way. The tool helps turn existing architectural room data into modeled building elements while reducing repetitive setup work."
    },
    "markdown": {
      "es": "# Room to Floor - Crear pisos a partir de habitaciones\n\nRoom to Floor permite convertir habitaciones de Revit en pisos de forma controlada y masiva. La herramienta ayuda a transformar informacion arquitectonica ya modelada en elementos constructivos reales, reduciendo trabajo repetitivo al definir tipos de piso y valores por lote.\n\n## Descripcion General\n\nEl add-in carga habitaciones del modelo, permite filtrarlas, seleccionar un parametro de apoyo y asignar un tipo de piso a cada fila o a grupos de habitaciones seleccionadas. Despues ejecuta la conversion y reporta cuantas habitaciones pudieron procesarse.\n\n### Caracteristicas Clave\n- **Cargar habitaciones:** Puede cargar todas las habitaciones o escogerlas manualmente.\n- **Asignacion de tipo de piso:** Permite definir el tipo de piso por habitacion o por seleccion multiple.\n- **Edicion por lote:** Aplica cambios masivos a varias habitaciones al mismo tiempo.\n- **Filtro por parametro:** Usa un parametro del modelo para apoyar la clasificacion o revision.\n- **Resultado controlado:** Informa cuantos pisos se crearon y cuales habitaciones no pudieron convertirse.\n\n## Procedimiento de Uso\n\n1. Abra Room to Floor y cargue las habitaciones con `Load All` o `Pick Rooms`.\n2. Revise la tabla y asigne un `Floor Type` a cada habitacion o grupo seleccionado.\n3. Si lo necesita, use el parametro auxiliar para ordenar o filtrar resultados.\n4. Ejecute la herramienta con `Execute`.\n5. Revise el resumen final para confirmar los pisos creados y las habitaciones pendientes.",
      "en": "# Room to Floor - Create floors from rooms\n\nRoom to Floor converts Revit rooms into floor elements in a controlled and scalable way. The tool helps turn existing architectural room data into modeled building elements while reducing repetitive setup work.\n\n## General Description\n\nThe add-in loads rooms from the model, lets users filter them, select a supporting parameter, and assign a floor type to each row or to multiple selected rooms. It then executes the conversion and reports how many rooms were processed successfully.\n\n### Key Features\n- **Load rooms:** Load all rooms or pick them manually.\n- **Floor type assignment:** Define the floor type per room or across a multi-selection.\n- **Batch editing:** Apply the same settings to many rooms at once.\n- **Parameter-assisted filtering:** Use a model parameter to support classification or review.\n- **Controlled output:** Reports how many floors were created and which rooms could not be converted.\n\n## Usage Procedure\n\n1. Open Room to Floor and load rooms with `Load All` or `Pick Rooms`.\n2. Review the table and assign a `Floor Type` to each room or selected group.\n3. If needed, use the supporting parameter to sort or filter results.\n4. Run the tool with `Execute`.\n5. Review the final summary to confirm created floors and pending rooms."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "bim-syntax",
    "addinName": "BimSyntax",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "BimSyntax - Estandarizacion de nombres en Revit",
      "en": "BimSyntax - Revit naming standardization"
    },
    "excerpt": {
      "es": "BimSyntax centraliza reglas de nomenclatura para vistas, familias, tipos y otros elementos del modelo. Esta herramienta ayuda a mantener consistencia en los nombres, revisar incumplimientos y aplicar cambios masivos segun reglas y catalogos definidos por el equipo.",
      "en": "BimSyntax centralizes naming rules for views, families, types, and other model elements. The tool helps teams keep names consistent, review non-compliance, and apply bulk updates based on rules and catalogs."
    },
    "markdown": {
      "es": "# BimSyntax - Estandarizacion de nombres en Revit\n\nBimSyntax centraliza reglas de nomenclatura para vistas, familias, tipos y otros elementos del modelo. Esta herramienta ayuda a mantener consistencia en los nombres, revisar incumplimientos y aplicar cambios masivos segun reglas y catalogos definidos por el equipo.\n\n## Descripcion General\n\nEl add-in trabaja con categorias, alcances, reglas y catalogos para proponer nombres estructurados y validar si los elementos cumplen con el estandar definido. Tambien permite editar campos, regenerar nombres, aplicar cambios y administrar perfiles de configuracion.\n\n### Caracteristicas Clave\n- **Reglas de nomenclatura:** Define campos, separadores, longitudes y restricciones para construir nombres consistentes.\n- **Catalogos de apoyo:** Usa codigos y descripciones para completar nombres controlados.\n- **Revision de cumplimiento:** Detecta elementos conformes, parciales o no conformes.\n- **Aplicacion masiva:** Regenera propuestas y aplica cambios a multiples elementos.\n- **Perfiles y configuracion:** Guarda reglas generales o especificas por categoria.\n\n## Procedimiento de Uso\n\n1. Abra BimSyntax y seleccione la categoria o alcance que desea revisar.\n2. Cargue o configure las reglas de nombres y los catalogos necesarios.\n3. Revise los nombres actuales y la propuesta generada por la herramienta.\n4. Use `Regenerate` o edicion por lote para ajustar los valores.\n5. Ejecute `Apply changes` para actualizar los elementos seleccionados.",
      "en": "# BimSyntax - Revit naming standardization\n\nBimSyntax centralizes naming rules for views, families, types, and other model elements. The tool helps teams keep names consistent, review non-compliance, and apply bulk updates based on rules and catalogs.\n\n## General Description\n\nThe add-in works with categories, scopes, rules, and catalogs to propose structured names and validate whether elements follow the selected standard. It also supports field editing, name regeneration, change application, and profile management.\n\n### Key Features\n- **Naming rules:** Define fields, separators, length limits, and restrictions to build consistent names.\n- **Supporting catalogs:** Use controlled codes and descriptions to complete names.\n- **Compliance review:** Detect compliant, partial, and non-compliant elements.\n- **Bulk application:** Regenerate proposals and apply changes to many elements.\n- **Profiles and configuration:** Save general rules or category-specific rules.\n\n## Usage Procedure\n\n1. Open BimSyntax and choose the category or scope you want to review.\n2. Load or configure the naming rules and supporting catalogs.\n3. Review current names and the proposal generated by the tool.\n4. Use `Regenerate` or batch editing to adjust values.\n5. Run `Apply changes` to update the selected elements."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "freeze-elements",
    "addinName": "FreezeElements",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Bloquear Elementos - Proteccion de elementos criticos en Revit",
      "en": "Freeze Elements - Protect critical model elements in Revit"
    },
    "excerpt": {
      "es": "Bloquear Elementos permite marcar elementos del modelo como congelados para impedir cambios accidentales durante el trabajo diario en Revit. La herramienta esta pensada para equipos que necesitan proteger componentes clave y, al mismo tiempo, poder revisarlos y gestionarlos rapidamente.",
      "en": "Freeze Elements allows teams to mark model elements as frozen so accidental changes can be prevented during day-to-day work in Revit. The tool is designed for projects where key components must remain protected while still being easy to review and manage."
    },
    "markdown": {
      "es": "# Bloquear Elementos - Proteccion de elementos criticos en Revit\n\nBloquear Elementos permite marcar elementos del modelo como congelados para impedir cambios accidentales durante el trabajo diario en Revit. La herramienta esta pensada para equipos que necesitan proteger componentes clave y, al mismo tiempo, poder revisarlos y gestionarlos rapidamente.\n\n## Descripcion General\n\nEl add-in guarda un conjunto de elementos congelados dentro del proyecto y supervisa esos IDs para bloquear modificaciones no deseadas. Cuando un elemento esta congelado, el usuario debe descongelarlo antes de editarlo. La herramienta tambien incluye funciones para localizar y aislar los elementos protegidos en la vista activa.\n\n### Caracteristicas Clave\n- **Congelar Elementos:** Agrega elementos seleccionados a la lista de elementos protegidos del proyecto.\n- **Descongelar Elementos:** Quita elementos de la lista para permitir su edicion normal.\n- **Seleccionar Congelados:** Selecciona de una sola vez todos los elementos congelados almacenados.\n- **Aislar Congelados:** Aisla temporalmente los elementos congelados en la vista activa para revisarlos con rapidez.\n- **Proteccion Operativa:** Ayuda a evitar cambios accidentales sobre elementos criticos durante coordinacion y documentacion.\n\n## Procedimiento de Uso\n\n1. **Congelar:** Abra la herramienta y use `Congelar Elementos` para seleccionar los elementos que desea proteger.\n2. **Validacion:** Una vez congelados, el add-in impedira modificaciones sobre esos elementos hasta que se retiren de la lista.\n3. **Revision:** Use `Seleccionar Congelados` para ubicar rapidamente todos los elementos protegidos del proyecto.\n4. **Aislamiento:** Use `Aislar Congelados` para revisar solo esos elementos en la vista activa.\n5. **Descongelar:** Cuando necesite editar un elemento, use `Descongelar Elementos` y seleccionelo para quitar su proteccion.",
      "en": "# Freeze Elements - Protect critical model elements in Revit\n\nFreeze Elements allows teams to mark model elements as frozen so accidental changes can be prevented during day-to-day work in Revit. The tool is designed for projects where key components must remain protected while still being easy to review and manage.\n\n## General Description\n\nThe add-in stores a set of frozen elements inside the project and monitors those IDs to block unwanted edits. When an element is frozen, users must unfreeze it before making changes. The tool also includes commands to locate and isolate protected elements in the active view.\n\n### Key Features\n- **Freeze Elements:** Adds selected elements to the project protected-elements list.\n- **Unfreeze Elements:** Removes selected elements from the frozen list so they can be edited normally.\n- **Select Frozen Elements:** Selects all frozen elements currently stored in the project.\n- **Isolate Frozen Elements:** Temporarily isolates frozen elements in the active view for quick review.\n- **Operational Protection:** Helps prevent accidental modifications to critical elements during coordination and documentation work.\n\n## Usage Procedure\n\n1. **Freeze:** Open the tool and use `Freeze Elements` to pick the elements you want to protect.\n2. **Validation:** Once frozen, the add-in will block modifications on those elements until they are removed from the list.\n3. **Review:** Use `Select Frozen Elements` to quickly locate all protected elements in the project.\n4. **Isolation:** Use `Isolate Frozen Elements` to review only those elements in the active view.\n5. **Unfreeze:** When you need to edit an element, use `Unfreeze Elements` and pick it to remove its protection."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "exportify",
    "addinName": "Exportify",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Exportify - Exportacion multiformato de vistas y planos",
      "en": "Exportify - Multi-format export for views and sheets"
    },
    "excerpt": {
      "es": "Exportify centraliza la preparacion de entregables desde Revit para equipos que exportan planos y vistas con frecuencia. La herramienta permite trabajar varios formatos desde una misma interfaz y mantener reglas de salida mas consistentes entre proyectos.",
      "en": "Exportify centralizes deliverable preparation in Revit for teams that export sheets and views frequently. The tool lets users work across multiple formats from a single interface and keep output rules more consistent between projects."
    },
    "markdown": {
      "es": "# Exportify - Exportacion multiformato de vistas y planos\n\nExportify centraliza la preparacion de entregables desde Revit para equipos que exportan planos y vistas con frecuencia. La herramienta permite trabajar varios formatos desde una misma interfaz y mantener reglas de salida mas consistentes entre proyectos.\n\n## Descripcion General\n\nEl add-in organiza el flujo en tres frentes: seleccion de vistas o planos, configuracion de formatos y definicion de carpeta y nombres de salida. Puede trabajar con PDF, DWG, DXF, NWC e IFC, guardar perfiles, reutilizar configuraciones y almacenar rutas directamente en el modelo.\n\n### Caracteristicas Clave\n- **Seleccion flexible:** Trabaja con sheets, views y view sets.\n- **Exportacion multiformato:** Permite activar PDF, DWG, DXF, NWC e IFC desde un mismo flujo.\n- **Nomenclatura configurable:** Usa plantillas y perfiles para construir nombres de archivo consistentes.\n- **Rutas reutilizables:** Guarda carpetas por formato o rutas comunes dentro del proyecto.\n- **Importacion y exportacion de ajustes:** Reutiliza configuraciones mediante archivos JSON.\n\n## Procedimiento de Uso\n\n1. Abra Exportify y seleccione los planos o vistas que desea exportar.\n2. Active los formatos requeridos y ajuste sus opciones tecnicas.\n3. Configure la plantilla de nombres y la carpeta de salida.\n4. Guarde el perfil si desea reutilizarlo en el proyecto o en otros equipos.\n5. Ejecute `Export` y revise la carpeta generada al finalizar.",
      "en": "# Exportify - Multi-format export for views and sheets\n\nExportify centralizes deliverable preparation in Revit for teams that export sheets and views frequently. The tool lets users work across multiple formats from a single interface and keep output rules more consistent between projects.\n\n## General Description\n\nThe add-in organizes the workflow around three areas: view or sheet selection, format configuration, and output folder and naming setup. It can work with PDF, DWG, DXF, NWC, and IFC, save profiles, reuse settings, and store folder paths directly in the model.\n\n### Key Features\n- **Flexible selection:** Works with sheets, views, and view sets.\n- **Multi-format export:** Enables PDF, DWG, DXF, NWC, and IFC from a single workflow.\n- **Configurable naming:** Uses templates and profiles to build consistent file names.\n- **Reusable folders:** Saves per-format folders or shared output paths inside the project.\n- **Settings import/export:** Reuses export setups through JSON files.\n\n## Usage Procedure\n\n1. Open Exportify and select the sheets or views you want to export.\n2. Enable the required formats and adjust their technical options.\n3. Configure the naming template and output folder.\n4. Save the profile if you want to reuse it in the project or across teams.\n5. Run `Export` and review the generated folder when the process finishes."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "grid-assigner",
    "addinName": "GridAssigner",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "GridAssigner - Asignacion automatica de ejes",
      "en": "GridAssigner - Automatic grid assignment"
    },
    "excerpt": {
      "es": "GridAssigner ayuda a escribir informacion de ejes en parametros del modelo para mejorar trazabilidad y lectura de elementos. Es especialmente util cuando el equipo necesita identificar rapidamente relacion entre elementos y grillas sin completar ese dato a mano.",
      "en": "GridAssigner helps write grid information into model parameters to improve traceability and element readability. It is especially useful when teams need a fast link between elements and grids without filling that data manually."
    },
    "markdown": {
      "es": "# GridAssigner - Asignacion automatica de ejes\n\nGridAssigner ayuda a escribir informacion de ejes en parametros del modelo para mejorar trazabilidad y lectura de elementos. Es especialmente util cuando el equipo necesita identificar rapidamente relacion entre elementos y grillas sin completar ese dato a mano.\n\n## Descripcion General\n\nEl add-in detecta los ejes mas cercanos a cada elemento, genera un texto configurable y lo escribe en un parametro de destino. Ademas, permite clasificacion manual de grillas, inclusion opcional de distancias y sincronizacion automatica cuando los elementos cambian.\n\n### Caracteristicas Clave\n- **Parametro de destino:** Escribe el resultado en un parametro de texto elegido por el usuario.\n- **Formato configurable:** Ajusta prefijos, separadores, grupos y unidades de distancia.\n- **Elementos lineales:** Soporta logicas de tolerancia para muros, vigas y casos similares.\n- **Clasificacion manual:** Permite separar grillas longitudinales y transversales en casos complejos.\n- **Auto Sync:** Puede actualizar datos automaticamente cuando el modelo cambia.\n\n## Procedimiento de Uso\n\n1. Abra GridAssigner y seleccione el parametro donde se escribira la informacion.\n2. Defina el formato del texto y, si aplica, las opciones de distancia.\n3. Elija las categorias que participaran en Auto Sync o en la asignacion manual.\n4. Seleccione elementos y ejecute `Assign to Selection`.\n5. Active `Enable Auto Sync` si desea mantener el parametro actualizado en segundo plano.",
      "en": "# GridAssigner - Automatic grid assignment\n\nGridAssigner helps write grid information into model parameters to improve traceability and element readability. It is especially useful when teams need a fast link between elements and grids without filling that data manually.\n\n## General Description\n\nThe add-in detects the closest grids for each element, generates configurable grid text, and writes it into a selected target parameter. It also supports manual grid classification, optional distance output, and automatic synchronization when elements change.\n\n### Key Features\n- **Target parameter:** Writes the result into a user-selected text parameter.\n- **Configurable formatting:** Adjust prefixes, separators, grouping, and distance units.\n- **Linear element support:** Handles tolerance logic for walls, beams, and similar cases.\n- **Manual classification:** Lets users separate longitudinal and transverse grids in complex layouts.\n- **Auto Sync:** Can keep data updated automatically when the model changes.\n\n## Usage Procedure\n\n1. Open GridAssigner and choose the parameter where the information will be written.\n2. Define the text format and, if needed, the distance options.\n3. Select the categories that should participate in Auto Sync or manual assignment.\n4. Pick elements and run `Assign to Selection`.\n5. Enable `Auto Sync` if you want the parameter to stay updated in the background."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "idwriter",
    "addinName": "IDWriter",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "ID Writer - Escritura de IDs en parametros",
      "en": "ID Writer - Write Revit IDs into parameters"
    },
    "excerpt": {
      "es": "ID Writer permite copiar el identificador interno de elementos de Revit hacia un parametro visible del modelo. Es una utilidad practica para trazabilidad, coordinacion y revisiones donde conviene exponer el ID sin entrar a herramientas internas.",
      "en": "ID Writer copies the internal Revit element ID into a visible model parameter. It is a practical utility for traceability, coordination, and review workflows where teams want the ID exposed without relying on internal tools."
    },
    "markdown": {
      "es": "# ID Writer - Escritura de IDs en parametros\n\nID Writer permite copiar el identificador interno de elementos de Revit hacia un parametro visible del modelo. Es una utilidad practica para trazabilidad, coordinacion y revisiones donde conviene exponer el ID sin entrar a herramientas internas.\n\n## Descripcion General\n\nEl add-in trabaja con un parametro de destino y puede asignar IDs de manera manual o activar una sincronizacion automatica para nuevos elementos. Esto facilita flujos de QA, seguimiento de incidencias y cruces entre modelo, tablas o reportes externos.\n\n### Caracteristicas Clave\n- **Asignacion manual:** Escribe IDs sobre elementos seleccionados.\n- **Auto Sync:** Puede iniciar o detener la asignacion automatica en segundo plano.\n- **Parametro configurable:** El usuario define donde se almacenara el ID.\n- **Soporte de trazabilidad:** Hace visible el ID en propiedades, tablas y otros flujos de control.\n\n## Procedimiento de Uso\n\n1. Abra ID Writer y seleccione el parametro de destino.\n2. Use `Assign ID` para escribir IDs en los elementos que necesite procesar.\n3. Revise el resultado en el parametro configurado.\n4. Active `Start Auto Sync` si desea que nuevos elementos reciban el ID automaticamente.\n5. Use `Stop Auto Sync` cuando quiera desactivar ese comportamiento.",
      "en": "# ID Writer - Write Revit IDs into parameters\n\nID Writer copies the internal Revit element ID into a visible model parameter. It is a practical utility for traceability, coordination, and review workflows where teams want the ID exposed without relying on internal tools.\n\n## General Description\n\nThe add-in works with a selected target parameter and can assign IDs manually or enable automatic synchronization for new elements. This supports QA workflows, issue tracking, and cross-checking between the model, schedules, and external reports.\n\n### Key Features\n- **Manual assignment:** Writes IDs to selected elements.\n- **Auto Sync:** Can start or stop automatic assignment in the background.\n- **Configurable parameter:** Users choose where the ID will be stored.\n- **Traceability support:** Makes the Revit ID visible in properties, schedules, and review flows.\n\n## Usage Procedure\n\n1. Open ID Writer and select the target parameter.\n2. Use `Assign ID` to write IDs to the elements you want to process.\n3. Review the result in the configured parameter.\n4. Enable `Start Auto Sync` if you want new elements to receive IDs automatically.\n5. Use `Stop Auto Sync` when you want to disable that behavior."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "level-mapper",
    "addinName": "LevelMapper",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Level Mapper - Asignacion y vistas por nivel",
      "en": "Level Mapper - Level assignment and level views"
    },
    "excerpt": {
      "es": "Level Mapper ayuda a detectar, escribir y reorganizar informacion de nivel en elementos del modelo. Tambien puede generar vistas por nivel y aplicar codificacion visual o nombres estructurados para flujos de revision y control.",
      "en": "Level Mapper helps detect, write, and reorganize level information for model elements. It can also generate level-based views and apply visual coding or structured naming for review workflows."
    },
    "markdown": {
      "es": "# Level Mapper - Asignacion y vistas por nivel\n\nLevel Mapper ayuda a detectar, escribir y reorganizar informacion de nivel en elementos del modelo. Tambien puede generar vistas por nivel y aplicar codificacion visual o nombres estructurados para flujos de revision y control.\n\n## Descripcion General\n\nEl add-in permite seleccionar elementos, detectar su nivel objetivo segun distintos modos de calculo y escribir ese resultado en parametros del modelo. Adicionalmente, puede crear vistas 3D por nivel, aplicar colores y apoyarse en BimSyntax para nombres consistentes.\n\n### Caracteristicas Clave\n- **Deteccion de nivel:** Trabaja con logicas como `Nearest`, `Nearest Above` y `Nearest Below`.\n- **Escritura en parametros:** Guarda el resultado del mapeo en un parametro seleccionado.\n- **Mapeo personalizado:** Permite reasignar niveles objetivo de forma manual.\n- **Vistas por nivel:** Puede crear vistas 3D y reglas visuales por nivel.\n- **Integracion con BimSyntax:** Apoya la nomenclatura estructurada para vistas y filtros.\n\n## Procedimiento de Uso\n\n1. Abra Level Mapper y seleccione el perfil o ajuste el modo de deteccion.\n2. Elija los niveles que participaran en el proceso.\n3. Seleccione el parametro de salida donde se escribira el mapeo.\n4. Ejecute `Detect` para previsualizar resultados.\n5. Use `Execute`, `Apply` o `Create Views` segun el flujo que necesite completar.",
      "en": "# Level Mapper - Level assignment and level views\n\nLevel Mapper helps detect, write, and reorganize level information for model elements. It can also generate level-based views and apply visual coding or structured naming for review workflows.\n\n## General Description\n\nThe add-in lets users select elements, detect their target level using different calculation modes, and write the result into model parameters. It can also create per-level 3D views, apply color rules, and use BimSyntax for consistent naming.\n\n### Key Features\n- **Level detection:** Supports modes such as `Nearest`, `Nearest Above`, and `Nearest Below`.\n- **Parameter writing:** Stores mapping results in a selected parameter.\n- **Custom mapping:** Allows manual reassignment to a target level.\n- **Level views:** Can create 3D views and visual rules by level.\n- **BimSyntax integration:** Supports structured naming for views and filters.\n\n## Usage Procedure\n\n1. Open Level Mapper and select a profile or detection mode.\n2. Choose the levels that will participate in the process.\n3. Select the output parameter where the mapping will be written.\n4. Run `Detect` to preview results.\n5. Use `Execute`, `Apply`, or `Create Views` depending on the workflow you need."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "options",
    "addinName": "Options",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Opciones - Configuracion central de Frata Tools",
      "en": "Options - Central configuration for Frata Tools"
    },
    "excerpt": {
      "es": "Opciones concentra la configuracion general de Frata Tools dentro de Revit. Desde esta ventana puedes revisar informacion de licencia, ajustar apariencia y administrar las rutas y perfiles compartidos que usan los distintos addins.",
      "en": "Options centralizes the general configuration of Frata Tools inside Revit. From this window you can review license information, adjust appearance, and manage the shared profile paths used by different add-ins."
    },
    "markdown": {
      "es": "# Opciones - Configuracion central de Frata Tools\n\nOpciones concentra la configuracion general de Frata Tools dentro de Revit. Desde esta ventana puedes revisar informacion de licencia, ajustar apariencia y administrar las rutas y perfiles compartidos que usan los distintos addins.\n\n## Descripcion General\n\nEl add-in actua como panel de administracion para la suite. Permite definir carpetas de perfiles a nivel local, compania y proyecto, revisar el estado de la licencia y mover perfiles entre distintos niveles de almacenamiento, incluyendo el propio modelo.\n\n### Caracteristicas Clave\n- **Apariencia y tema:** Ajusta opciones visuales generales de la suite.\n- **Informacion de licencia:** Muestra version de Revit, tipo de licencia, correo activado y vencimiento.\n- **Rutas de perfiles:** Configura carpetas compartidas de compania y proyecto.\n- **Gestor de perfiles:** Permite mover, borrar o publicar perfiles entre Local, Company, Project y Model.\n- **Control centralizado:** Ayuda a mantener consistencia entre configuraciones de distintos addins.\n\n## Procedimiento de Uso\n\n1. Abra `Options` desde Frata Tools.\n2. Revise la seccion de licencia y confirme el estado actual.\n3. Defina o actualice las rutas de perfiles compartidos.\n4. Abra `Manage profiles` si necesita mover o publicar perfiles entre niveles.\n5. Guarde los cambios para que el resto de addins use la configuracion actualizada.",
      "en": "# Options - Central configuration for Frata Tools\n\nOptions centralizes the general configuration of Frata Tools inside Revit. From this window you can review license information, adjust appearance, and manage the shared profile paths used by different add-ins.\n\n## General Description\n\nThe add-in acts as an administration panel for the suite. It lets users define local, company, and project profile folders, review license status, and move profiles between storage levels, including the active Revit model.\n\n### Key Features\n- **Appearance and theme:** Adjust general visual settings for the suite.\n- **License information:** Shows Revit version, license type, activated email, and expiration.\n- **Profile paths:** Configure shared company and project folders.\n- **Profile manager:** Move, delete, or publish profiles across Local, Company, Project, and Model levels.\n- **Centralized control:** Helps keep settings consistent across multiple add-ins.\n\n## Usage Procedure\n\n1. Open `Options` from Frata Tools.\n2. Review the license section and confirm the current status.\n3. Define or update the shared profile paths.\n4. Open `Manage profiles` if you need to move or publish profiles between levels.\n5. Save the changes so the rest of the add-ins use the updated configuration."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "parameter-catalog",
    "addinName": "ParameterCatalog",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Parameter Catalog - Control de valores permitidos",
      "en": "Parameter Catalog - Controlled parameter values"
    },
    "excerpt": {
      "es": "Parameter Catalog permite definir catalogos de parametros y valores validos para el modelo. La herramienta ayuda a aplicar valores estandarizados, validar el cumplimiento y transferir la configuracion entre modelo, cache local y archivos JSON.",
      "en": "Parameter Catalog lets teams define parameter catalogs and allowed values for the model. The tool helps apply standardized values, validate compliance, and transfer configuration between the model, local cache, and JSON files."
    },
    "markdown": {
      "es": "# Parameter Catalog - Control de valores permitidos\n\nParameter Catalog permite definir catalogos de parametros y valores validos para el modelo. La herramienta ayuda a aplicar valores estandarizados, validar el cumplimiento y transferir la configuracion entre modelo, cache local y archivos JSON.\n\n## Descripcion General\n\nEl add-in organiza parametros del modelo en un catalogo editable, permite asociar valores permitidos y luego aplicar esos valores a elementos seleccionados. Tambien incluye una capa de validacion para detectar elementos que no cumplen con el catalogo definido.\n\n### Caracteristicas Clave\n- **Catalogo editable:** Agrega o elimina parametros y valores permitidos.\n- **Aplicacion de valores:** Escribe valores controlados en elementos del modelo.\n- **Validacion del modelo:** Revisa el modelo completo o solo la seleccion actual.\n- **Importacion y exportacion:** Transfiere catalogos mediante JSON, almacenamiento local o el propio modelo.\n- **Perfiles de trabajo:** Mantiene configuraciones reutilizables por perfil.\n\n## Procedimiento de Uso\n\n1. Abra Parameter Catalog y configure el catalogo en la pestaña `Standards`.\n2. Agregue parametros y los valores permitidos que deban controlarse.\n3. Guarde el catalogo en el modelo o exportelo si desea compartirlo.\n4. En la pestaña `Execute`, elija una entrada y un valor para aplicarlo a elementos.\n5. Use `Validate Model` o `Validate Selection` para revisar incumplimientos.",
      "en": "# Parameter Catalog - Controlled parameter values\n\nParameter Catalog lets teams define parameter catalogs and allowed values for the model. The tool helps apply standardized values, validate compliance, and transfer configuration between the model, local cache, and JSON files.\n\n## General Description\n\nThe add-in organizes model parameters into an editable catalog, lets users assign allowed values, and then applies those values to selected elements. It also includes a validation layer to detect elements that do not comply with the defined catalog.\n\n### Key Features\n- **Editable catalog:** Add or remove parameters and allowed values.\n- **Value application:** Write controlled values into model elements.\n- **Model validation:** Review the full model or only the current selection.\n- **Import and export:** Transfer catalogs through JSON, local storage, or the model itself.\n- **Work profiles:** Maintain reusable configurations by profile.\n\n## Usage Procedure\n\n1. Open Parameter Catalog and configure the catalog in the `Standards` tab.\n2. Add the parameters and allowed values you want to control.\n3. Save the catalog to the model or export it if you want to share it.\n4. In the `Execute` tab, choose an entry and value to apply it to elements.\n5. Use `Validate Model` or `Validate Selection` to review non-compliant elements."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "schedule-exporter",
    "addinName": "ScheduleExporter",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Schedule Exporter - Exportacion de tablas a Excel",
      "en": "Schedule Exporter - Export schedules to Excel"
    },
    "excerpt": {
      "es": "Schedule Exporter facilita la salida de tablas de Revit hacia archivos Excel listos para revision, coordinacion o analisis. Esta herramienta reduce trabajo manual al permitir exportar varias tablas desde una sola interfaz.",
      "en": "Schedule Exporter makes it easier to send Revit schedules to Excel files ready for review, coordination, or analysis. The tool reduces manual work by exporting multiple schedules from a single interface."
    },
    "markdown": {
      "es": "# Schedule Exporter - Exportacion de tablas a Excel\n\nSchedule Exporter facilita la salida de tablas de Revit hacia archivos Excel listos para revision, coordinacion o analisis. Esta herramienta reduce trabajo manual al permitir exportar varias tablas desde una sola interfaz.\n\n## Descripcion General\n\nEl add-in carga las tablas disponibles del modelo, permite filtrarlas, seleccionarlas en bloque y elegir entre exportacion a un solo archivo o a multiples archivos separados. Al terminar, ofrece acceso directo a la carpeta de salida.\n\n### Caracteristicas Clave\n- **Filtro de tablas:** Busca rapidamente schedules dentro del proyecto.\n- **Seleccion multiple:** Permite exportar varias tablas en una misma operacion.\n- **Modo de salida flexible:** Puede crear un solo workbook o un archivo por tabla.\n- **Apertura de carpeta final:** Facilita revisar el resultado apenas termina la exportacion.\n\n## Procedimiento de Uso\n\n1. Abra Schedule Exporter y filtre las tablas que necesita.\n2. Marque una o varias tablas.\n3. Elija si desea un solo archivo Excel o archivos separados.\n4. Defina la ruta de salida cuando la herramienta la solicite.\n5. Ejecute `Export Selected Schedules` y revise la carpeta final.",
      "en": "# Schedule Exporter - Export schedules to Excel\n\nSchedule Exporter makes it easier to send Revit schedules to Excel files ready for review, coordination, or analysis. The tool reduces manual work by exporting multiple schedules from a single interface.\n\n## General Description\n\nThe add-in loads the schedules available in the model, lets users filter and batch-select them, and supports either a single workbook export or multiple separate files. At the end, it offers direct access to the output folder.\n\n### Key Features\n- **Schedule filtering:** Quickly searches schedules inside the project.\n- **Multiple selection:** Exports several schedules in one operation.\n- **Flexible output mode:** Can create one workbook or one file per schedule.\n- **Final folder access:** Makes it easy to review the result immediately after export.\n\n## Usage Procedure\n\n1. Open Schedule Exporter and filter the schedules you need.\n2. Select one or more schedules.\n3. Choose whether you want one Excel workbook or separate files.\n4. Define the output path when the tool requests it.\n5. Run `Export Selected Schedules` and review the generated folder."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "super-match",
    "addinName": "SuperMatch",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Super Match - Sincronización Avanzada de Propiedades",
      "en": "Super Match - Advanced Property Synchronization"
    },
    "excerpt": {
      "es": "Super Match es una herramienta de precisión diseñada para la distribución rápida de propiedades y parámetros dentro de los modelos de Revit. Permite a los usuarios tratar un elemento como una \"plantilla\" y propagar sus datos a cualquier número de elementos de destino con una velocidad inigualable.",
      "en": "Super Match is a precision tool designed for rapid property and parameter distribution within Revit models. It enables users to treat one element as a blueprint and propagate its data to any number of target elements with unmatched speed."
    },
    "markdown": {
      "es": "# Super Match - Sincronización Avanzada de Propiedades\n\nSuper Match es una herramienta de precisión diseñada para la distribución rápida de propiedades y parámetros dentro de los modelos de Revit. Permite a los usuarios tratar un elemento como una \"plantilla\" y propagar sus datos a cualquier número de elementos de destino con una velocidad inigualable.\n\n## Descripción General\n\nUna herramienta que permite seleccionar un elemento de origen, obtener sus propiedades y parámetros, y luego aplicar la misma información a uno o más elementos de destino seleccionados. Está diseñada específicamente para trabajar con parámetros de sistema editables por el usuario, asegurando la estabilidad del modelo mientras se maximiza la productividad.\n\n### Características Clave:\n- **Selección de Plantilla:** Use cualquier elemento como origen de datos.\n- **Filtrado Inteligente:** Filtra automáticamente las restricciones geométricas y los parámetros de solo lectura para evitar errores.\n- **Múltiples Destinos:** Aplique los datos a un solo elemento o a una gran selección.\n- **Consistencia de Datos:** Asegura que los datos de identidad, fases y parámetros personalizados sean uniformes entre elementos relacionados.\n\n## Procedimiento de Uso\n\n1. **Selección de Origen:** Inicie Super Match y seleccione el elemento \"Origen\" cuyas propiedades desea copiar.\n2. **Revisión de Datos:** La herramienta muestra los parámetros disponibles que pueden ser transferidos.\n3. **Selección de Destino:** Seleccione los elementos de destino en el modelo que deben recibir los datos.\n4. **Ejecución:** Haga clic en \"Aplicar\" para sincronizar los parámetros.\n5. **Confirmación:** Los elementos de destino se actualizan inmediatamente para coincidir con el origen.",
      "en": "# Super Match - Advanced Property Synchronization\n\nSuper Match is a precision tool designed for rapid property and parameter distribution within Revit models. It enables users to treat one element as a blueprint and propagate its data to any number of target elements with unmatched speed.\n\n## General Description\n\nA tool that allows you to select a source element, retrieve its properties and parameters, and then apply the same information to one or more selected target elements. It is specifically designed to work with user-editable system parameters, ensuring model stability while maximizing productivity.\n\n### Key Features:\n- **Blueprint Selection:** Use any element as a source for data.\n- **Smart Filtering:** Automatically filters out geometric constraints and read-only parameters to prevent errors.\n- **Multiple Targets:** Apply data to a single element or a large selection.\n- **Data Consistency:** Ensures that identity data, phasing, and custom parameters are uniform across related elements.\n\n## Usage Procedure\n\n1. **Source Pick:** Launch Super Match and select the \"Source\" element whose properties you want to copy.\n2. **Data Review:** The tool displays the available parameters that can be transferred.\n3. **Target Selection:** Select the target elements in the model that should receive the data.\n4. **Execution:** Click \"Apply\" or \"Match\" to synchronize the parameters.\n5. **Confirmation:** The target elements are updated immediately to match the source."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "transfer-parameters",
    "addinName": "TransferParameters",
    "suiteId": "manage",
    "suiteLabel": "Manage",
    "title": {
      "es": "Transfer Parameters - Composicion y traslado de valores",
      "en": "Transfer Parameters - Compose and rewrite parameter values"
    },
    "excerpt": {
      "es": "Transfer Parameters permite construir o reescribir valores de parametros a partir de otros parametros del modelo. Es util para estandarizar nombres, codigos y textos compuestos sin editar elemento por elemento.",
      "en": "Transfer Parameters lets users build or rewrite parameter values from other model parameters. It is useful for standardizing names, codes, and composed text without editing elements one by one."
    },
    "markdown": {
      "es": "# Transfer Parameters - Composicion y traslado de valores\n\nTransfer Parameters permite construir o reescribir valores de parametros a partir de otros parametros del modelo. Es util para estandarizar nombres, codigos y textos compuestos sin editar elemento por elemento.\n\n## Descripcion General\n\nEl add-in trabaja con categoria, parametros de origen, parametro de destino y una estructura de composicion. Puede operar sobre todo el modelo, la vista activa, una seleccion manual o refuerzos por anfitrion, y soporta modos como wrap, replace y regex.\n\n### Caracteristicas Clave\n- **Seleccion de categoria:** Limita el trabajo al tipo de elementos necesario.\n- **Parametros de origen y destino:** Define que informacion se lee y donde se escribe.\n- **Estructura configurable:** Usa prefijos, sufijos y orden de parametros.\n- **Modos de transformacion:** Soporta `Wrap`, `Replace` y `Regex`.\n- **Alcance variable:** Puede ejecutarse sobre modelo, vista o seleccion puntual.\n\n## Procedimiento de Uso\n\n1. Abra Transfer Parameters y seleccione la categoria de trabajo.\n2. Defina parametros de origen y parametro de destino.\n3. Arme la estructura del texto con prefijos, parametros y sufijos.\n4. Elija el modo de seleccion y, si corresponde, el modo de transformacion.\n5. Ejecute `Execute` para escribir el nuevo valor en los elementos objetivo.",
      "en": "# Transfer Parameters - Compose and rewrite parameter values\n\nTransfer Parameters lets users build or rewrite parameter values from other model parameters. It is useful for standardizing names, codes, and composed text without editing elements one by one.\n\n## General Description\n\nThe add-in works with a selected category, source parameters, a destination parameter, and a composition structure. It can run over the whole model, the active view, a manual selection, or host-based reinforcement workflows, and supports modes such as wrap, replace, and regex.\n\n### Key Features\n- **Category selection:** Limits processing to the required element type.\n- **Source and destination parameters:** Defines what data is read and where it is written.\n- **Configurable structure:** Uses prefixes, suffixes, and parameter order.\n- **Transformation modes:** Supports `Wrap`, `Replace`, and `Regex`.\n- **Flexible scope:** Can run on the model, the active view, or a targeted selection.\n\n## Usage Procedure\n\n1. Open Transfer Parameters and select the working category.\n2. Define the source parameters and the destination parameter.\n3. Build the text structure with prefixes, parameters, and suffixes.\n4. Choose the selection scope and, if needed, the transformation mode.\n5. Run `Execute` to write the new value to the target elements."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "open-model-folder",
    "addinName": "OpenModelFolder",
    "suiteId": "navigate",
    "suiteLabel": "Navigate",
    "title": {
      "es": "Abrir Directorio del Modelo - Acceso directo a la carpeta activa",
      "en": "Open Model Folder - Direct access to the active model directory"
    },
    "excerpt": {
      "es": "Abrir Directorio del Modelo ofrece una accion inmediata para saltar desde el modelo abierto en Revit a su carpeta fisica en Windows. Es una utilidad simple, pero muy util para equipos que trabajan constantemente con archivos asociados, entregables y respaldos.",
      "en": "Open Model Folder provides an immediate jump from the model currently open in Revit to its physical folder in Windows. It is a simple utility, but very useful for teams that constantly work with related files, deliverables, and backups."
    },
    "markdown": {
      "es": "# Abrir Directorio del Modelo - Acceso directo a la carpeta activa\n\nAbrir Directorio del Modelo ofrece una accion inmediata para saltar desde el modelo abierto en Revit a su carpeta fisica en Windows. Es una utilidad simple, pero muy util para equipos que trabajan constantemente con archivos asociados, entregables y respaldos.\n\n## Descripcion General\n\nEl add-in detecta la ubicacion del modelo activo y abre esa carpeta directamente en el explorador de archivos. Esto evita navegar manualmente por rutas largas y acelera tareas de coordinacion, revision de entregables y acceso a recursos vinculados.\n\n### Caracteristicas Clave\n- **Acceso en un clic:** Abre la carpeta del modelo activo de inmediato.\n- **Integracion con Windows Explorer:** Lleva al usuario al directorio real del archivo.\n- **Apoyo operativo:** Facilita encontrar PDFs, DWGs, respaldos y archivos vinculados.\n- **Validacion basica:** Informa cuando el modelo activo no tiene una ruta valida.\n\n## Procedimiento de Uso\n\n1. Abra `Open Model Folder` desde la pestaña Frata Tools.\n2. Espere a que Windows Explorer se abra en la carpeta del modelo actual.\n3. Use esa ubicacion para revisar archivos relacionados o preparar entregables.\n4. Si el modelo no tiene ruta valida, revise primero donde esta almacenado.",
      "en": "# Open Model Folder - Direct access to the active model directory\n\nOpen Model Folder provides an immediate jump from the model currently open in Revit to its physical folder in Windows. It is a simple utility, but very useful for teams that constantly work with related files, deliverables, and backups.\n\n## General Description\n\nThe add-in detects the location of the active model and opens that folder directly in File Explorer. This avoids manual navigation through long paths and speeds up coordination, deliverable review, and access to linked resources.\n\n### Key Features\n- **One-click access:** Opens the folder of the active model immediately.\n- **Windows Explorer integration:** Takes the user to the real file directory.\n- **Operational support:** Helps find PDFs, DWGs, backups, and linked files faster.\n- **Basic validation:** Warns when the active model does not have a valid directory.\n\n## Usage Procedure\n\n1. Open `Open Model Folder` from the Frata Tools tab.\n2. Wait for Windows Explorer to open in the current model folder.\n3. Use that location to review related files or prepare deliverables.\n4. If the model has no valid directory, verify where it is stored first."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "search-view",
    "addinName": "SearchView",
    "suiteId": "navigate",
    "suiteLabel": "Navigate",
    "title": {
      "es": "Buscar Vista - Busqueda rapida de vistas y utilidades",
      "en": "Search View - Fast view search and utility launcher"
    },
    "excerpt": {
      "es": "Buscar Vista es una herramienta de acceso rapido para navegar vistas dentro del proyecto y ejecutar utilidades ligeras desde una sola caja de busqueda. Ademas de localizar vistas, incorpora ayuda, historial y funciones auxiliares como calculadora, conversion de unidades y exploracion de archivos.",
      "en": "Search View is a quick-access tool for navigating project views and running lightweight utilities from a single search box. Besides locating views, it includes help, history, and auxiliary modes such as calculator, unit conversion, and file navigation."
    },
    "markdown": {
      "es": "# Buscar Vista - Busqueda rapida de vistas y utilidades\n\nBuscar Vista es una herramienta de acceso rapido para navegar vistas dentro del proyecto y ejecutar utilidades ligeras desde una sola caja de busqueda. Ademas de localizar vistas, incorpora ayuda, historial y funciones auxiliares como calculadora, conversion de unidades y exploracion de archivos.\n\n## Descripcion General\n\nEl add-in permite buscar nombres de vistas con coincidencia flexible, abrir resultados por teclado y acceder a acciones adicionales segun el tipo de consulta. Tambien incluye un modo de ayuda que documenta operadores, atajos y consultas disponibles.\n\n### Caracteristicas Clave\n- **Busqueda de vistas:** Encuentra rapidamente planos, secciones, hojas, listas y otras vistas.\n- **Navegacion por teclado:** Abre resultados con Enter y recorre coincidencias sin salir del cuadro de busqueda.\n- **Calculadora y conversion:** Interpreta expresiones matematicas y conversiones de unidades.\n- **Exploracion de archivos:** Permite abrir la carpeta del proyecto y navegar resultados relacionados.\n- **Ayuda integrada:** Explica shortcuts, filtros y modos de consulta disponibles.\n\n## Procedimiento de Uso\n\n1. Abra `Search View` desde Frata Tools.\n2. Escriba parte del nombre de una vista para buscar coincidencias.\n3. Use flechas y Enter para abrir la vista seleccionada.\n4. Si lo necesita, use consultas de calculadora, unidades o archivos segun el modo de ayuda.\n5. Consulte la ayuda integrada para recordar operadores y atajos de teclado.",
      "en": "# Search View - Fast view search and utility launcher\n\nSearch View is a quick-access tool for navigating project views and running lightweight utilities from a single search box. Besides locating views, it includes help, history, and auxiliary modes such as calculator, unit conversion, and file navigation.\n\n## General Description\n\nThe add-in lets users search view names with fuzzy matching, open results from the keyboard, and access additional actions depending on the query type. It also includes a help mode that documents operators, shortcuts, and supported query patterns.\n\n### Key Features\n- **View search:** Quickly find plans, sections, sheets, schedules, and other views.\n- **Keyboard navigation:** Open results with Enter and browse matches without leaving the search box.\n- **Calculator and unit conversion:** Evaluates math expressions and unit conversions.\n- **File navigation:** Opens the project folder and browses related files.\n- **Built-in help:** Explains shortcuts, filters, and available query modes.\n\n## Usage Procedure\n\n1. Open `Search View` from Frata Tools.\n2. Type part of a view name to search for matches.\n3. Use arrow keys and Enter to open the selected view.\n4. When needed, use calculator, unit, or file queries according to the help mode.\n5. Open the built-in help to review operators and keyboard shortcuts."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "data-explorer",
    "addinName": "DataExplorer",
    "suiteId": "navigate",
    "suiteLabel": "Navigate",
    "title": {
      "es": "Data Explorer - Revision tabular del modelo",
      "en": "Data Explorer - Tabular model review inside Revit"
    },
    "excerpt": {
      "es": "Data Explorer ofrece una vista tabular para inspeccionar elementos del modelo y sus parametros sin salir de Revit. Es una herramienta orientada a revision, control de datos y configuraciones reutilizables por perfil.",
      "en": "Data Explorer provides a table-based way to inspect model elements and their parameters without leaving Revit. It is aimed at review workflows, data control, and reusable profile-based configurations."
    },
    "markdown": {
      "es": "# Data Explorer - Revision tabular del modelo\n\nData Explorer ofrece una vista tabular para inspeccionar elementos del modelo y sus parametros sin salir de Revit. Es una herramienta orientada a revision, control de datos y configuraciones reutilizables por perfil.\n\n## Descripcion General\n\nEl add-in puede cargar elementos desde todo el modelo, la vista activa o la seleccion actual. Luego permite filtrar por categoria, definir columnas visibles, buscar valores, seleccionar filas en vista, aislar elementos y guardar configuraciones para futuras revisiones.\n\n### Caracteristicas Clave\n- **Origen flexible:** Trabaja sobre modelo completo, vista activa o seleccion actual.\n- **Filtro de categorias:** Reduce el conjunto de datos a lo realmente relevante.\n- **Columnas configurables:** Muestra solo los parametros utiles para cada revision.\n- **Configuraciones guardables:** Permite guardar, importar, exportar y publicar layouts de tabla.\n- **Acciones sobre el modelo:** Selecciona o aisla elementos directamente desde la tabla.\n\n## Procedimiento de Uso\n\n1. Abra Data Explorer y elija el origen de elementos.\n2. Defina categorias y configuracion de columnas.\n3. Cargue los elementos y revise la tabla resultante.\n4. Use busqueda, seleccion e isolacion para profundizar la revision.\n5. Guarde la configuracion si desea reutilizar ese layout en otros proyectos o equipos.",
      "en": "# Data Explorer - Tabular model review inside Revit\n\nData Explorer provides a table-based way to inspect model elements and their parameters without leaving Revit. It is aimed at review workflows, data control, and reusable profile-based configurations.\n\n## General Description\n\nThe add-in can load elements from the full model, the active view, or the current selection. It then lets users filter by category, define visible columns, search values, select rows in view, isolate elements, and save configurations for future reviews.\n\n### Key Features\n- **Flexible source:** Works on the full model, the active view, or the current selection.\n- **Category filtering:** Reduces the dataset to only what matters for the review.\n- **Configurable columns:** Shows only the parameters needed for each task.\n- **Savable configurations:** Supports saving, importing, exporting, and publishing table layouts.\n- **Model actions:** Selects or isolates elements directly from the data table.\n\n## Usage Procedure\n\n1. Open Data Explorer and choose the element source.\n2. Define categories and the column configuration.\n3. Load the elements and review the resulting table.\n4. Use search, selection, and isolation to inspect the model further.\n5. Save the configuration if you want to reuse that layout across projects or teams."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "quick-select",
    "addinName": "QuickSelect",
    "suiteId": "navigate",
    "suiteLabel": "Navigate",
    "title": {
      "es": "QuickSelect - Seleccion rapida por parametros",
      "en": "QuickSelect - Fast parameter-based selection"
    },
    "excerpt": {
      "es": "QuickSelect agiliza la seleccion de elementos en Revit a partir de los parametros de un elemento de referencia. Es una herramienta pensada para filtrar rapidamente elementos comparables sin construir reglas complejas a mano.",
      "en": "QuickSelect speeds up element selection in Revit by using the parameters of a reference element. It is designed to quickly find comparable elements without building complex filters manually."
    },
    "markdown": {
      "es": "# QuickSelect - Seleccion rapida por parametros\n\nQuickSelect agiliza la seleccion de elementos en Revit a partir de los parametros de un elemento de referencia. Es una herramienta pensada para filtrar rapidamente elementos comparables sin construir reglas complejas a mano.\n\n## Descripcion General\n\nEl add-in permite inspeccionar un elemento, revisar sus parametros y marcar cuales deben usarse como criterio de seleccion. Luego aplica esas reglas para seleccionar elementos de la misma categoria o, si se desea, limitar el resultado a la vista activa.\n\n### Caracteristicas Clave\n- **Elemento de referencia:** Parte de un elemento real del modelo para construir el filtro.\n- **Seleccion por parametros:** Usa parametros y valores como criterio de coincidencia.\n- **Misma categoria:** Puede restringir la busqueda a la categoria del elemento base.\n- **Vista activa:** Permite limitar la seleccion a lo visible en la vista actual.\n- **Parametros favoritos:** Facilita reutilizar campos de consulta frecuentes.\n\n## Procedimiento de Uso\n\n1. Abra `QuickSelect` y seleccione un elemento del modelo como referencia.\n2. Revise los parametros disponibles y marque los que participaran en el filtro.\n3. Active `Same category` o `Active view only` si aplica a su caso.\n4. Ejecute `Select` para obtener los elementos que cumplen las reglas.\n5. Revise el total seleccionado y ajuste el filtro si necesita refinarlo.",
      "en": "# QuickSelect - Fast parameter-based selection\n\nQuickSelect speeds up element selection in Revit by using the parameters of a reference element. It is designed to quickly find comparable elements without building complex filters manually.\n\n## General Description\n\nThe add-in lets users inspect an element, review its parameters, and mark which values should be used as selection criteria. It then applies those rules to select elements from the same category or, if desired, only those visible in the active view.\n\n### Key Features\n- **Reference element:** Starts from a real model element to build the filter.\n- **Parameter-based selection:** Uses parameter names and values as matching rules.\n- **Same category filter:** Can restrict the search to the source element category.\n- **Active view scope:** Limits the result to elements visible in the current view.\n- **Favorite parameters:** Helps reuse common query fields more efficiently.\n\n## Usage Procedure\n\n1. Open `QuickSelect` and pick a model element as the reference.\n2. Review the available parameters and check the ones that should drive the filter.\n3. Enable `Same category` or `Active view only` when needed.\n4. Run `Select` to collect the elements that match the rules.\n5. Review the selected count and refine the filter if needed."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "auto-stirrups",
    "addinName": "AutoStirrups",
    "suiteId": "structure-create",
    "suiteLabel": "Structure Create",
    "title": {
      "es": "AutoStirrups - Distribucion automatica de estribos",
      "en": "AutoStirrups - Automatic stirrup distribution"
    },
    "excerpt": {
      "es": "AutoStirrups automatiza la generacion de estribos en elementos estructurales de concreto a partir de una configuracion paramétrica o de estribos ya modelados. Esta herramienta acelera el detallado y reduce variaciones manuales entre elementos similares.",
      "en": "AutoStirrups automates stirrup generation in concrete structural elements using either a parametric setup or an existing stirrup from the model. The tool speeds up detailing and reduces manual variation between similar elements."
    },
    "markdown": {
      "es": "# AutoStirrups - Distribucion automatica de estribos\n\nAutoStirrups automatiza la generacion de estribos en elementos estructurales de concreto a partir de una configuracion paramétrica o de estribos ya modelados. Esta herramienta acelera el detallado y reduce variaciones manuales entre elementos similares.\n\n## Descripcion General\n\nEl add-in permite elegir entre creacion automatica o distribucion basada en un estribo existente del modelo. Incluye configuracion de barras, recubrimientos, offsets, espaciamientos uniformes o por zonas, rango de distribucion y escritura opcional de resultados en parametros.\n\n### Caracteristicas Clave\n- **Dos fuentes de trabajo:** Puede crear estribos automaticamente o usar un template del modelo.\n- **Configuracion de barras y recubrimiento:** Ajusta tipo de barra, ganchos y cover.\n- **Modos de espaciamiento:** Soporta distribucion uniforme, start plus center y layout por zonas.\n- **Rango personalizado:** Permite definir inicio y fin del tramo a reforzar.\n- **Escritura en parametro:** Puede guardar informacion de distribucion o capa en parametros del elemento.\n\n## Procedimiento de Uso\n\n1. Abra AutoStirrups y defina si trabajara en modo automatico o desde un estribo del modelo.\n2. Configure barras, recubrimientos, ganchos, offsets y modo de espaciamiento.\n3. Si es necesario, defina el rango personalizado y los parametros de salida.\n4. Ejecute la herramienta y seleccione el elemento estructural objetivo.\n5. Revise el mensaje final para confirmar cuantos estribos fueron creados.",
      "en": "# AutoStirrups - Automatic stirrup distribution\n\nAutoStirrups automates stirrup generation in concrete structural elements using either a parametric setup or an existing stirrup from the model. The tool speeds up detailing and reduces manual variation between similar elements.\n\n## General Description\n\nThe add-in lets users choose between automatic creation and distribution based on a model stirrup template. It includes bar, cover, offset, spacing, and distribution-range settings, plus optional writing of output values into model parameters.\n\n### Key Features\n- **Two working sources:** Can create stirrups automatically or use a stirrup already in the model.\n- **Bar and cover setup:** Adjusts bar type, hooks, and cover values.\n- **Spacing modes:** Supports uniform spacing, start plus center, and custom zone layouts.\n- **Custom distribution range:** Lets users define start and end points of the reinforced span.\n- **Parameter writing:** Can store distribution or layer data in element parameters.\n\n## Usage Procedure\n\n1. Open AutoStirrups and choose whether to work in automatic mode or from a model stirrup.\n2. Configure bars, cover, hooks, offsets, and spacing mode.\n3. If needed, define the custom range and output parameters.\n4. Run the tool and select the target structural element.\n5. Review the final message to confirm how many stirrups were created."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "premium",
      "purchaseUrl": "",
      "trialDays": 30,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": true,
      "isFree": false
    }
  },
  {
    "slug": "footing-rebar",
    "addinName": "FootingRebar",
    "suiteId": "structure-create",
    "suiteLabel": "Structure Create",
    "title": {
      "es": "Footing Rebar - Armado de zapatas aisladas",
      "en": "Footing Rebar - Isolated footing reinforcement"
    },
    "excerpt": {
      "es": "Footing Rebar automatiza la generacion de refuerzo para zapatas aisladas en Revit. La herramienta permite configurar mallas inferiores y superiores, barras por direccion, recubrimientos y asignacion de capas para acelerar el detallado estructural.",
      "en": "Footing Rebar automates reinforcement generation for isolated footings in Revit. The tool lets users configure bottom and top meshes, bar directions, covers, and layer assignment to speed up structural detailing."
    },
    "markdown": {
      "es": "# Footing Rebar - Armado de zapatas aisladas\n\nFooting Rebar automatiza la generacion de refuerzo para zapatas aisladas en Revit. La herramienta permite configurar mallas inferiores y superiores, barras por direccion, recubrimientos y asignacion de capas para acelerar el detallado estructural.\n\n## Descripcion General\n\nEl add-in trabaja sobre una o varias zapatas aisladas seleccionadas y crea juegos de armadura a partir de una configuracion parametrica. El usuario define tipo de recubrimiento, barras, espaciamientos, ganchos y si la zapata tendra solo malla inferior o malla inferior y superior.\n\n### Caracteristicas Clave\n- **Seleccion de zapatas aisladas:** Procesa una o varias zapatas estructurales compatibles.\n- **Configuracion de mallas:** Permite definir malla inferior y, si se requiere, malla superior.\n- **Control por direccion:** Configura barras, espaciamiento y ganchos en dos direcciones.\n- **Asignacion de capa:** Puede escribir valores de capa en un parametro definido.\n- **Resultado parametrico:** Crea conjuntos de armadura segun la geometria valida de la zapata.\n\n## Procedimiento de Uso\n\n1. Abra Footing Rebar y ajuste el perfil o los parametros de armadura.\n2. Defina recubrimiento, barras, espaciamiento y configuracion de malla.\n3. Elija si desea solo malla inferior o malla inferior y superior.\n4. Ejecute la herramienta y seleccione una o varias zapatas aisladas.\n5. Revise el mensaje final para confirmar cuantos juegos de armadura fueron creados.",
      "en": "# Footing Rebar - Isolated footing reinforcement\n\nFooting Rebar automates reinforcement generation for isolated footings in Revit. The tool lets users configure bottom and top meshes, bar directions, covers, and layer assignment to speed up structural detailing.\n\n## General Description\n\nThe add-in works on one or more selected isolated footings and creates rebar sets from a parametric configuration. Users define cover type, bar setup, spacing, hooks, and whether the footing uses only a bottom mesh or both bottom and top meshes.\n\n### Key Features\n- **Isolated footing selection:** Processes one or more compatible structural footings.\n- **Mesh configuration:** Supports bottom mesh only or bottom plus top mesh.\n- **Directional control:** Configure bars, spacing, and hooks in two directions.\n- **Layer assignment:** Can write layer values into a selected parameter.\n- **Parametric output:** Creates reinforcement sets based on valid footing geometry.\n\n## Usage Procedure\n\n1. Open Footing Rebar and adjust the profile or reinforcement parameters.\n2. Define cover, bars, spacing, and mesh configuration.\n3. Choose whether you need only bottom mesh or both bottom and top mesh.\n4. Run the tool and select one or more isolated footings.\n5. Review the final message to confirm how many rebar sets were created."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "host-sync",
    "addinName": "HostSync",
    "suiteId": "structure-modify",
    "suiteLabel": "Structure Modify",
    "title": {
      "es": "Host Sync - Sincronizacion de parametros con el anfitrion",
      "en": "Host Sync - Synchronize parameters from the host"
    },
    "excerpt": {
      "es": "Host Sync mantiene alineados ciertos parametros entre elementos anfitriones de concreto y sus armaduras asociadas. La herramienta ayuda a reducir errores de coordinacion al copiar informacion clave desde el host hacia el refuerzo.",
      "en": "Host Sync keeps selected parameters aligned between concrete host elements and their associated reinforcement. The tool helps reduce coordination issues by copying key information from the host into the rebar elements."
    },
    "markdown": {
      "es": "# Host Sync - Sincronizacion de parametros con el anfitrion\n\nHost Sync mantiene alineados ciertos parametros entre elementos anfitriones de concreto y sus armaduras asociadas. La herramienta ayuda a reducir errores de coordinacion al copiar informacion clave desde el host hacia el refuerzo.\n\n## Descripcion General\n\nEl add-in muestra una lista de parametros disponibles y permite definir cuales deben sincronizarse. Una vez activado el flujo, la informacion seleccionada puede copiarse desde el elemento anfitrion al refuerzo para mantener consistencia entre ambos.\n\n### Caracteristicas Clave\n- **Seleccion de parametros:** Elige exactamente que datos deben sincronizarse.\n- **Sincronizacion con host:** Copia informacion desde el anfitrion estructural hacia la armadura.\n- **Busqueda rapida:** Facilita encontrar parametros en listas largas.\n- **Guardado de configuracion:** Conserva la seleccion de parametros para el flujo de trabajo.\n\n## Procedimiento de Uso\n\n1. Abra Host Sync y revise la lista de parametros disponibles.\n2. Marque los parametros que deben copiarse desde el host.\n3. Guarde la configuracion con `Save`.\n4. Ejecute `Copy Parameters` dentro del flujo correspondiente.\n5. Verifique en las armaduras que los valores copiados coincidan con el anfitrion.",
      "en": "# Host Sync - Synchronize parameters from the host\n\nHost Sync keeps selected parameters aligned between concrete host elements and their associated reinforcement. The tool helps reduce coordination issues by copying key information from the host into the rebar elements.\n\n## General Description\n\nThe add-in displays the available parameters and lets users define which ones should be synchronized. Once the setup is saved, the selected data can be copied from the structural host into the reinforcement so both remain consistent.\n\n### Key Features\n- **Parameter selection:** Choose exactly which values should be synchronized.\n- **Host-based synchronization:** Copies information from the structural host into the rebar.\n- **Quick search:** Helps find parameters inside long lists.\n- **Saved setup:** Keeps the selected configuration for repeated use.\n\n## Usage Procedure\n\n1. Open Host Sync and review the list of available parameters.\n2. Check the parameters that should be copied from the host.\n3. Save the configuration with `Save`.\n4. Run `Copy Parameters` inside the intended workflow.\n5. Verify in the rebars that the copied values match the host."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "rebar-toggle",
    "addinName": "RebarToggle",
    "suiteId": "structure-modify",
    "suiteLabel": "Structure Modify",
    "title": {
      "es": "Rebar Toggle - Control rapido de visibilidad de armaduras",
      "en": "Rebar Toggle - Fast reinforcement visibility control"
    },
    "excerpt": {
      "es": "Rebar Toggle permite alternar la visibilidad de armaduras en la vista actual para facilitar coordinacion, revision y lectura del modelo. Es una utilidad orientada a cambiar de contexto rapidamente entre vistas limpias y vistas detalladas.",
      "en": "Rebar Toggle lets users switch reinforcement visibility in the active view to support coordination, review, and model readability. It is a utility designed to move quickly between clean views and detailed reinforcement views."
    },
    "markdown": {
      "es": "# Rebar Toggle - Control rapido de visibilidad de armaduras\n\nRebar Toggle permite alternar la visibilidad de armaduras en la vista actual para facilitar coordinacion, revision y lectura del modelo. Es una utilidad orientada a cambiar de contexto rapidamente entre vistas limpias y vistas detalladas.\n\n## Descripcion General\n\nEl add-in trabaja sobre la visibilidad de refuerzos en la vista activa. Segun el estado de las armaduras visibles u ocultas, ayuda a mostrar u ocultar barras de manera rapida para mejorar la lectura de elementos de concreto o enfocarse en el refuerzo.\n\n### Caracteristicas Clave\n- **Mostrar u ocultar rapidamente:** Cambia el estado visible de armaduras sin navegar por menus complejos.\n- **Enfoque por vista:** Actua sobre la vista actual para apoyar revision puntual.\n- **Mejor lectura del modelo:** Ayuda a limpiar vistas de concreto o a resaltar el refuerzo cuando hace falta.\n- **Apoyo a coordinacion:** Facilita revisar interferencias y presentaciones estructurales.\n\n## Procedimiento de Uso\n\n1. Abra Rebar Toggle en la vista donde desea trabajar.\n2. Ejecute la accion de mostrar u ocultar armaduras segun el contexto.\n3. Revise el resultado visual en la vista activa.\n4. Repita la alternancia cuando necesite cambiar entre lectura de concreto y lectura de refuerzo.",
      "en": "# Rebar Toggle - Fast reinforcement visibility control\n\nRebar Toggle lets users switch reinforcement visibility in the active view to support coordination, review, and model readability. It is a utility designed to move quickly between clean views and detailed reinforcement views.\n\n## General Description\n\nThe add-in works on rebar visibility within the active view. Depending on whether rebars are currently shown or hidden, it helps users toggle their visibility quickly to improve concrete reading or focus on reinforcement layouts.\n\n### Key Features\n- **Fast show/hide control:** Changes reinforcement visibility without navigating complex menus.\n- **View-based focus:** Acts on the active view for targeted review work.\n- **Improved model readability:** Helps clean concrete views or highlight reinforcement when needed.\n- **Coordination support:** Useful for clash review and structural presentation workflows.\n\n## Usage Procedure\n\n1. Open Rebar Toggle in the view where you want to work.\n2. Run the show or hide action depending on the current need.\n3. Review the visual result in the active view.\n4. Repeat the toggle whenever you need to switch between concrete reading and reinforcement reading."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  },
  {
    "slug": "solid-rebar",
    "addinName": "SolidRebar",
    "suiteId": "structure-modify",
    "suiteLabel": "Structure Modify",
    "title": {
      "es": "Solid Rebar - Visualizacion solida de armaduras en 3D",
      "en": "Solid Rebar - Solid 3D visualization for reinforcement"
    },
    "excerpt": {
      "es": "Solid Rebar mejora la lectura de armaduras en vistas 3D al cambiar su representacion visual y ayudar a inspeccionar refuerzos dentro de elementos de concreto. Es una utilidad orientada a coordinacion, revision y presentacion tecnica.",
      "en": "Solid Rebar improves reinforcement readability in 3D views by changing how rebars are displayed and helping teams inspect reinforcement inside concrete hosts. It is aimed at coordination, review, and technical presentation work."
    },
    "markdown": {
      "es": "# Solid Rebar - Visualizacion solida de armaduras en 3D\n\nSolid Rebar mejora la lectura de armaduras en vistas 3D al cambiar su representacion visual y ayudar a inspeccionar refuerzos dentro de elementos de concreto. Es una utilidad orientada a coordinacion, revision y presentacion tecnica.\n\n## Descripcion General\n\nEl add-in controla estados de visualizacion como armado solido y visibilidad no oculta. Esto permite revisar el refuerzo con mayor claridad en modelos 3D y adaptar la visualizacion segun la version de Revit y el tipo de analisis que se este realizando.\n\n### Caracteristicas Clave\n- **Visualizacion solida:** Cambia de lectura alambica a representacion solida.\n- **Rebar no oculto:** Mejora la visibilidad del refuerzo dentro del anfitrion de concreto.\n- **Apoyo a vistas 3D:** Facilita inspecciones espaciales y presentaciones tecnicas.\n- **Compatibilidad operativa:** Ayuda a mantener un comportamiento util entre distintas versiones de Revit.\n\n## Procedimiento de Uso\n\n1. Abra una vista 3D donde quiera revisar el refuerzo.\n2. Ejecute Solid Rebar para cambiar la representacion de las armaduras.\n3. Alterne entre estados solidos y estandar segun la necesidad de revision.\n4. Verifique el resultado visual antes de continuar con coordinacion o documentacion.",
      "en": "# Solid Rebar - Solid 3D visualization for reinforcement\n\nSolid Rebar improves reinforcement readability in 3D views by changing how rebars are displayed and helping teams inspect reinforcement inside concrete hosts. It is aimed at coordination, review, and technical presentation work.\n\n## General Description\n\nThe add-in controls visualization states such as solid display and unobscured reinforcement. This makes it easier to inspect reinforcement clearly in 3D models and adapt the display depending on the Revit version and the type of analysis being performed.\n\n### Key Features\n- **Solid display:** Switches reinforcement from wireframe-style reading to solid representation.\n- **Unobscured rebar:** Improves visibility of reinforcement inside the concrete host.\n- **3D review support:** Makes spatial inspection and technical presentations easier.\n- **Operational compatibility:** Helps keep a practical workflow across different Revit versions.\n\n## Usage Procedure\n\n1. Open a 3D view where you want to review the reinforcement.\n2. Run Solid Rebar to change how rebars are displayed.\n3. Toggle between solid and standard states depending on the review need.\n4. Verify the visual result before continuing with coordination or documentation."
    },
    "media": {
      "images": [],
      "youtubeUrl": "",
      "youtubeId": ""
    },
    "commerce": {
      "tier": "free",
      "purchaseUrl": "",
      "trialDays": 0,
      "activationEmail": "info@frataingenieros.com",
      "isPremium": false,
      "isFree": true
    }
  }
] as const;
