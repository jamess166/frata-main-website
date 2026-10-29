---
title: "Expediente técnico de obra pública con BIM: cómo trabajamos en el Estadio de Chepén"
date: "2026-10-28"
author: "Frata Ingenieros"
image: "/images/blog/estadio-chepen/render-tribuna.webp"
summary: "Como consultores BIM de un expediente técnico de inversión pública, asumimos el modelado BIM, la extracción de metrados y la generación de planos. Así lo hacemos: modelado LOD 3 hasta el acero de refuerzo, planos desde Revit, metrados entre Revit, Excel y Delphin, auditoría de modelos y nuestro propio entorno común de datos."
keywords:
  - expedientes técnicos de inversión pública con BIM
  - expedientes técnicos públicos con BIM
  - metrados BIM para expedientes técnicos de obra pública
  - expediente técnico BIM
  - Guía Nacional BIM
---

Elaborar un **expediente técnico con BIM** significa construir primero un modelo digital coordinado de todas las especialidades y obtener de él los planos, los metrados y el presupuesto, en lugar de dibujar y metrar cada especialidad por separado. El objetivo son planos compatibles, metrados trazables y menos adicionales en obra.

En este artículo contamos **cómo lo hacemos en la práctica**, con un proyecto de inversión pública en curso: el expediente técnico del **Estadio Municipal de Chepén**, en La Libertad.

## Nuestro rol: consultores BIM del expediente

En este proyecto participamos como **consultores BIM**. Durante la elaboración del expediente técnico asumimos tres frentes completos:

- El **modelado BIM**, con un modelo independiente por cada especialidad.
- La **extracción de metrados** desde los modelos.
- La **generación de planos** a partir de los modelos.

El servicio **se encuentra en ejecución**, así que lo que sigue describe la forma en que estamos trabajando, no un proyecto cerrado.

## Un Plan de Ejecución BIM alineado a la Guía Nacional BIM

El trabajo se rige por un **Plan de Ejecución BIM (BEP)** alineado a la **Guía Nacional BIM** del MEF y a la **NTP-ISO 19650**. En él se definen:

- Los **usos BIM**: levantamiento de condiciones existentes, diseño de especialidades, generación de documentación, coordinación mediante un entorno común de datos, estimación de cantidades y detección de interferencias.
- El **nivel de información necesaria (LOIN)** por entregable, con su nivel de detalle gráfico (LOD) y de información no gráfica (LOI).
- La **nomenclatura** de archivos y de objetos, la clasificación de elementos por especialidad, los parámetros compartidos, el origen de coordenadas, los códigos de colores y las plantillas.
- La matriz de interferencias, las pruebas de *clash detection* y el procedimiento de control de calidad.

## Modelado LOD 3, hasta el acero de refuerzo

No trabajamos con un único modelo: cada especialidad tiene **su propio modelo en Autodesk Revit**, todos con un nivel de detalle **LOD 3**, es decir, con elementos representados de forma precisa:

- **Estructuras**
- **Arquitectura**
- **Instalaciones eléctricas**
- **Instalaciones sanitarias**
- **Comunicaciones**
- **Evacuación y señalización**

Cada modelo se desarrolla y se controla por separado, con su responsable y su propia codificación según el Plan de Ejecución BIM. Los modelos se vinculan entre sí, por ejemplo arquitectura con estructuras para descontar columnas y vigas de los muros, y se integran en un **modelo federado** en Navisworks para coordinar las especialidades y detectar interferencias.

En el modelo de estructuras llevamos el concreto armado **hasta el acero de refuerzo**. Eso permite revisar en 3D la congestión de armaduras en nudos y graderías, y obtener del modelo las cantidades de acero que de otra forma se calculan a mano en planillas de corte y doblado.

![Modelo de acero de refuerzo de cimentaciones, muros y vigas en Revit](/images/blog/estadio-chepen/modelo-acero-refuerzo.webp)

Modelar el refuerzo a mano en Revit es muy lento, así que lo automatizamos con nuestras herramientas del panel **Frata**: *Footing Rebar*, *Column Rebar*, *Beam Rebar* y *WallRebar* generan el armado de zapatas, columnas, vigas y muros, y *Auto Stirrups* coloca los estribos. El modelo de acero se revisa en vistas 3D por elemento antes de pasar a los planos y metrados de estructuras.

![Interior de la cabina de prensa en el modelo BIM](/images/blog/estadio-chepen/render-cabina-prensa.webp)

## Simulación 4D

Los modelos también se vinculan al **cronograma**: cada grupo de elementos se asocia a su actividad, y así se simula en 4D la secuencia constructiva. Esto permite revisar el orden de ejecución, detectar actividades que se superponen en un mismo frente y comunicar el plan de obra de forma visual.

## Toda la información 2D sale del modelo

**No dibujamos planos aparte**. Plantas, cortes, elevaciones, detalles, cuadros y láminas se generan desde los modelos de Revit, con plantillas de vista, filtros por especialidad y membretes estandarizados. Si el modelo cambia, los planos cambian con él, y la compatibilidad entre especialidades viene del modelo federado y no de la revisión manual de láminas.

![Lámina de planta de arquitectura generada desde el modelo de Revit](/images/blog/estadio-chepen/planos-revit-arquitectura.webp)

Cada lámina se codifica según la nomenclatura del Plan de Ejecución BIM, que identifica el proyecto, el autor, el volumen, el nivel, el tipo de documento, la especialidad y un número correlativo. Además, cada lámina lleva su control de revisiones dentro del mismo modelo, de modo que el juego de planos queda ordenado y es fácil de rastrear en el entorno común de datos.

## Add-ins propios para llenar la información del modelo

Un modelo útil para el expediente no solo necesita geometría: cada elemento debe llevar los datos que luego piden los metrados y el presupuesto. Llenar eso a mano en miles de elementos es lento y propenso a errores, así que usamos **add-ins desarrollados por nosotros** para automatizarlo. Por ejemplo:

- Asignar a cada muro los **ejes** entre los que se ubica (*Grid Assigner*), para que el metrado se pueda ordenar y verificar como en una planilla tradicional (por ejemplo, "Eje A, entre 1 y 3").
- Asignar el **ambiente** al que pertenece cada elemento, lo que permite metrar acabados, pisos y tarrajeos por ambiente.
- Asignar **bloque, nivel, sector, partida y código** a los elementos mediante parámetros compartidos (*Parameter Filler*).
- Calcular el **área neta de los muros** de albañilería descontando columnetas, viguetas de confinamiento y sobrecimientos del modelo de estructuras vinculado (nuestro complemento *Measure Wall*).
- Descontar de las **graderías** el volumen de intersección con vigas y columnas mediante una rutina de Dynamo con Python, para que el concreto no se cuente dos veces.

## Metrados BIM para expedientes técnicos de obra pública: Revit, Excel y Delphin

Esta es la parte donde más tiempo se ahorra. Con nuestra aplicación **BIM 5D** para Revit, cada partida del presupuesto se vincula a los elementos del modelo que le corresponden y se define cómo se mide: qué parámetros se usan, cómo se agrupan (por bloque, nivel, eje o ambiente) y qué columnas de la planilla se llenan.

![Aplicación BIM 5D vinculando las partidas con el modelo de Revit](/images/blog/estadio-chepen/bim-5d-metrados.webp)

El flujo funciona así:

1. **Partidas**: se carga la estructura de partidas (por ejemplo, *muro de ladrillo de soga* o *tarrajeo en muros exteriores*).
2. **Configuración del *take-off***: para cada partida se indica qué elementos y parámetros alimentan el metrado y cómo se agrupan.
3. **Exportación a Excel**: la aplicación escribe el metrado directamente en el libro de metrados, **en el formato estándar de planilla de metrados de obra pública**: ítem, descripción, unidad, número de veces, largo, ancho, alto, parcial y total, con el detalle por ubicación.
4. **Presupuesto en Delphin**: los metrados se trasladan a **Delphin**, donde se trabajan el presupuesto y los análisis de precios unitarios.

Así se ve una planilla exportada desde Revit:

![Planilla de metrados exportada desde Revit, con el ID de cada elemento](/images/blog/estadio-chepen/metrado-excel-ids.webp)

El detalle se organiza por componente, sector, tipo de elemento y código de cada elemento. Cada línea es un elemento del modelo, con su cantidad, y en la columna de la derecha va su **ID de Revit**. Con ese número, cualquiera puede ubicar el elemento exacto en el modelo con *Select by ID* y verificar la cantidad.

Como cada cantidad sale de un elemento del modelo, el metrado es **trazable**: si alguien pregunta de dónde sale un número, la respuesta está en el modelo y no en una hoja de cálculo hecha a mano. Cuando el diseño cambia, se actualiza el modelo y se vuelve a exportar, sin rehacer planillas. Las partidas que no se pueden obtener del modelo se metran de forma manual, y el BEP deja definido cuáles son.

## Auditoría de la información con Data Explorer

Un metrado automático solo es tan bueno como la información del modelo. Por eso, antes de exportar cantidades o publicar un modelo, lo **auditamos con Data Explorer**, otra herramienta propia para Revit.

![Data Explorer: auditoría de parámetros del modelo en Revit](/images/blog/estadio-chepen/data-explorer.webp)

Data Explorer muestra en una tabla los elementos de la vista activa o de las categorías elegidas, con sus parámetros del proyecto (bloque, nivel, sector, elemento, código, número y nombre de partida, metrado). Se pueden filtrar, agrupar y guardar configuraciones de auditoría. Así se detectan rápidamente elementos sin partida, parámetros vacíos o valores inconsistentes antes de que lleguen al presupuesto.

Esta auditoría se complementa con:

- La **detección de interferencias** en Navisworks Manage sobre el modelo federado, con una matriz que clasifica cada conflicto por gravedad.
- El **control de errores de modelado** (elementos duplicados, discontinuos o mal ubicados), registrado en nuestra herramienta interna *Frata Issues* hasta su cierre.
- Un **formato de control de calidad** que valida cada modelo antes de entregarlo.

## Nuestro propio entorno común de datos: BIMHILL

La norma ISO 19650 pide gestionar la información en un **entorno común de datos (CDE)**. Para eso usamos **BIMHILL**, el CDE desarrollado por Frata Ingenieros.

![BIMHILL, el entorno común de datos de Frata Ingenieros](/images/blog/estadio-chepen/bimhill-cde.webp)

BIMHILL organiza la información del proyecto según los estados de la ISO 19650 (**En proceso, Compartido, Publicado y Archivado**) y administra la nomenclatura y los metadatos de cada documento y modelo. Reúne en un solo lugar la documentación, los modelos BIM, las tareas del equipo y el presupuesto, y permite compartir la información en modo de solo lectura, sin cuentas ni licencias adicionales.

## Qué aporta este enfoque

- **Planos compatibles** entre especialidades, porque todos salen de modelos coordinados.
- **Metrados trazables** en el formato que exige la obra pública, listos para el presupuesto en Delphin.
- **Menos trabajo manual**: los add-ins llenan la información y la exportación a Excel es automática.
- **Información auditada** antes de cada entrega.
- **Un solo lugar** para toda la información del proyecto, con control de versiones.

## ¿Tienes un expediente técnico de obra pública con requisitos BIM?

Si tu entidad o tu consorcio necesita cumplir los requisitos BIM de unos Términos de Referencia, podemos ayudarte con [expedientes técnicos de inversión pública con BIM](/expedientes-tecnicos-bim): el Plan de Ejecución BIM, el [modelado BIM integral](/services/comprehensive-bim-modeling), la coordinación de especialidades y la automatización de metrados con nuestras [herramientas para Revit](/bimtools). [Contáctanos](/#contact) y conversemos sobre tu proyecto.
