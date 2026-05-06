# Frata - Sitio principal

Sitio web construido con Next.js. Incluye soporte para Tailwind CSS, Firebase y una sincronizacion automatica de manuales BIMtools desde el repositorio de addins.

**Resumen**
- Framework: Next.js
- Estilos: Tailwind CSS
- Integraciones: Firebase, Genkit
- Documentacion BIMtools: generada desde el repo fuente de addins

**Requisitos**
- Node.js 18+ recomendado
- npm
- Cuenta de Firebase si vas a desplegar

**Instalacion y ejecucion**
1. Entra a la raiz del proyecto:

```powershell
Set-Location -Path "D:\Developer\Web\frata-main-website"
```

2. Instala dependencias:

```powershell
npm install
```

3. Desarrollo local:

```powershell
npm run dev
```

4. Build:

```powershell
npm run build
```

5. Produccion local:

```powershell
npm run start
```

**Scripts disponibles**
- `npm run dev` inicia Next.js en desarrollo
- `npm run build` compila la app
- `npm run start` inicia la app compilada
- `npm run lint` ejecuta el linter
- `npm run typecheck` ejecuta chequeo de tipos
- `npm run sync:bimtools` regenera manuales BIMtools desde el repo fuente
- `npm run genkit:dev` y `npm run genkit:watch` para herramientas de Genkit

**BIMtools**
La web no guarda a mano los manuales de BIMtools. Los toma desde el repositorio fuente de addins:

`D:\Developer\Autodesk\Revit\frata-tools-revit\frata-tools-revit`

El script que hace esto es:

`scripts/sync-bimtools-manuals.mjs`

Este script:
- recorre las carpetas `Addins/` de cada suite
- detecta addins con archivos `.md`
- detecta automaticamente si un addin es `Gratis` o `Premium` segun su comando base
- genera `src/lib/generated/bimtools-manuals.ts`
- copia imagenes de manual a `public/bimtools-media/...`
- deja listas las paginas `/bimtools/manual` y `/bimtools/manual/[slug]`

**Cuando ejecutar `npm run sync:bimtools`**
- cuando agregues un addin nuevo
- cuando cambies el contenido de un manual `.md`
- cuando agregues o cambies imagenes del manual
- cuando agregues o cambies el video de YouTube de un addin

Tambien se ejecuta automaticamente antes de:
- `npm run dev`
- `npm run build`
- `npm run typecheck`

**Como agregar un manual nuevo**
1. Crea la carpeta del addin dentro de su suite en el repo fuente.
2. Dentro del addin agrega:
   - `nombre-es.md` y `nombre-en.md`, o
   - un solo `.md` si todavia no tienes ingles
3. Ejecuta:

```powershell
npm run sync:bimtools
```

El slug de la pagina se genera desde el nombre de la carpeta del addin.

Ejemplo:
- carpeta `SearchView`
- url generada `/bimtools/manual/search-view`

**Formato recomendado del manual**
```md
---
tier: premium
purchaseUrl: https://www.paypal.com/ncp/payment/TU_LINK
activationEmail: info@frataingenieros.com
trialDays: 30
---

# Titulo del addin

Primer parrafo corto. Este texto se usa como resumen en la web.

## Descripcion General

Explica que hace realmente el addin.

### Caracteristicas Clave
- Punto 1
- Punto 2
- Punto 3

## Procedimiento de Uso
1. Paso 1
2. Paso 2
3. Paso 3
```

**Notas sobre licencias y frontmatter**
- `tier` acepta `premium` o `free`
- `purchaseUrl` define el link de pago si quieres forzarlo desde el manual
- `activationEmail` define el correo que se mostrara para activacion
- `trialDays` define los dias de prueba que mostrara la web
- si no pones esos campos, la web intenta detectarlos desde el codigo del addin
- si el comando hereda de `PremiumFrataCommand`, la web lo marca como `Premium`
- si el comando hereda de `FrataCommand`, la web lo trata como `Gratis`

**Imagenes y video para cada addin**
Cada addin puede incluir material visual opcional. Si no existe, la pagina carga normal sin errores.

Dentro de la carpeta del addin puedes crear:
- `manual-assets/`
- `manual.meta.json`

Ejemplo:

```text
Navigate\Addins\SearchView\
  searchview-es.md
  searchview-en.md
  manual-assets\
    01-home.png
    02-results.png
  manual.meta.json
```

**Reglas para imagenes**
- Guarda las imagenes dentro de `manual-assets`
- Usa nombres ordenados como `01-`, `02-`, `03-`
- Formatos soportados: `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg`

**Reglas para video**
El archivo `manual.meta.json` puede contener:

```json
{
  "youtubeUrl": "https://www.youtube.com/watch?v=TU_VIDEO",
  "youtubeId": ""
}
```

o tambien:

```json
{
  "youtubeUrl": "",
  "youtubeId": "TU_VIDEO"
}
```

Si ambos campos estan vacios, no se muestra video.

**Que hace la web con esos medios**
- copia las imagenes a `public/bimtools-media/...`
- muestra la galeria al final de la pagina del addin
- inserta el video de YouTube debajo del contenido del manual
- si no hay imagenes o video, no renderiza esas secciones

**Estructura del proyecto**
- `src/app/` rutas y paginas
- `src/components/` componentes UI reutilizables
- `src/lib/` utilidades y logica compartida
- `src/lib/generated/` contenido generado automaticamente
- `public/` recursos estaticos
- `scripts/` scripts auxiliares

**Despliegue**
El repositorio incluye `apphosting.yaml`. Si necesitas despliegue detallado, revisa `DEPLOY.md`.

**Buenas practicas**
- Ejecuta `npm run typecheck` antes de cerrar cambios importantes
- Si cambias manuales BIMtools, corre `npm run sync:bimtools`
- No edites a mano `src/lib/generated/bimtools-manuals.ts`, porque se sobrescribe

**Licencia**
No se incluye una licencia en este repositorio. Agrega `LICENSE` si lo vas a publicar con una licencia concreta.
