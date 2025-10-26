# Frata — Sitio principal

Sitio web construido con Next.js. Incluye soporte para Genkit AI, Tailwind CSS y despliegue pensado para Firebase App Hosting.

Resumen rápido
- Framework: Next.js
- Estilos: Tailwind CSS
- Integraciones: Firebase, Genkit

Requisitos
- Node.js (16+ recomendado)
- npm
- Cuenta de Firebase (para despliegue)

Instalación y ejecución (PowerShell)

1. Clona el repositorio y sitúate en la raíz del proyecto:

```powershell
Set-Location -Path "D:\Developer\Web\frata-main-website"
# o: cd D:\Developer\Web\frata-main-website
```

2. Instala dependencias:

```powershell
npm install
```

3. Desarrollo (servidor local):

```powershell
npm run dev
```

4. Build de producción:

```powershell
npm run build
```

5. Iniciar la versión de producción localmente:

```powershell
npm run start
```

Scripts disponibles (en `package.json`)
- `dev` — inicia Next.js en modo desarrollo
- `build` — compila la app para producción
- `start` — inicia la app compilada
- `lint` — ejecuta el linter
- `typecheck` — chequeo de tipos TypeScript
- `genkit:dev`, `genkit:watch` — herramientas relacionadas con Genkit (IA)

Despliegue
- Este repositorio incluye un `apphosting.yaml` y una guía de despliegue. Consulta `DEPLOY.md` para instrucciones detalladas de despliegue desde local (PowerShell) a Firebase App Hosting.

Configuración y variables de entorno
- Si el proyecto requiere claves o credenciales (Firebase, Genkit u otras APIs), usa un fichero `.env` en la raíz (no lo subas al repositorio).
- Revisa `src/` para ver qué variables espera la app.

Estructura del proyecto (resumen)
- `src/app/` — rutas y páginas de Next.js (app router)
- `src/components/` — componentes UI reutilizables
- `src/lib/` — utilidades y lógica compartida
- `public/` — recursos estáticos (imágenes, sample.ifc, videos)
- `docs/` — documentación adicional

Notas y buenas prácticas
- Mantén actualizadas las dependencias y los parches en `patches/`.
- Usa `npm run lint` y `npm run typecheck` antes de abrir PRs.
- Si vas a añadir CI/CD, puedo ayudarte a crear un workflow de GitHub Actions que haga build y despliegue.

Contacto y mantenimiento
- Mantenedor: revisa el repositorio en la plataforma donde lo alojes para ver los colaboradores.

Licencia
- No se incluye una licencia en este repositorio. Añade un archivo `LICENSE` si quieres compartirlo públicamente con una licencia específica.

¿Quieres que añada un `deploy.ps1` con los pasos de despliegue automatizados, badges de estado, o un workflow de GitHub Actions para despliegue automático?
