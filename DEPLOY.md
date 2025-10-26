# Cómo desplegar tu aplicación en Firebase App Hosting (desde tu máquina local)

Esta guía describe cómo desplegar este proyecto Next.js en Firebase App Hosting desde tu equipo local (Windows PowerShell). Asume que el archivo `apphosting.yaml` ya está presente en la raíz del repositorio (ya incluido en este proyecto).

## Prerrequisitos

1.  **Cuenta de Firebase y proyecto de Firebase.**
    *   Si aún no tienes uno, crea un proyecto en la [Consola de Firebase](https://console.firebase.google.com/).

2.  **Node.js y npm instalados.**
    *   Descárgalos desde [nodejs.org](https://nodejs.org/).

3.  **Firebase CLI instalada.**
    *   Instalación global (PowerShell):

```powershell
npm install -g firebase-tools
```

## Flujo recomendado para desplegar desde local (PowerShell)

Estos son los pasos comunes para desplegar desde tu máquina local.

1) Inicia sesión en Firebase (una sola vez por máquina/account):

```powershell
firebase login
```

2) Asegúrate de estar en la raíz del proyecto (donde está `apphosting.yaml` y `package.json`):

```powershell
Set-Location -Path "D:\Developer\Web\frata-main-website"
# o simplemente: cd D:\Developer\Web\frata-main-website
```

3) (Opcional, pero recomendado) Instala dependencias y crea una build de producción del sitio Next.js. Dependiendo de cómo configures Firebase App Hosting, puede que Firebase empaquete automáticamente, pero es buena práctica construir localmente:

```powershell
npm install
npm run build
```

Nota: `npm run build` usa los scripts definidos en `package.json` del proyecto. Para este repositorio Next.js con `app/` router, `next build` es lo habitual.

4) (Sólo la primera vez) Crear el backend de App Hosting en Firebase (si aún no lo hiciste). La CLI te guiará; la configuración se toma de `apphosting.yaml`:

```powershell
firebase apphosting:backends:create
```

Sigue las indicaciones en pantalla: selecciona tu proyecto Firebase y la región para el backend.

5) Desplegar la aplicación desde local al backend de App Hosting:

```powershell
firebase apphosting:deploy
```

Este comando empaquetará tu código (usando la configuración de `apphosting.yaml`), subirá los artefactos y desplegará la aplicación en el backend que hayas configurado.

6) Verifica la URL que la CLI imprime al terminar; suele tardar unos minutos en propagar.

## Comandos útiles adicionales

- Listar proyectos disponibles y verificar el projectId actual:

```powershell
firebase projects:list
firebase use --add
```

- Probar localmente (emulador) — opcional y depende de si has configurado emuladores en `firebase.json`:

```powershell
firebase emulators:start
```

## Notas y recomendaciones

- Mantén `apphosting.yaml` actualizado: define rutas, runtimes y la configuración del backend usada por App Hosting.
- Si tu sitio usa SSR o funciones específicas de Next.js, la integración con App Hosting puede requerir la creación de backends (Cloud Functions / App Engine o App Hosting backends). `firebase apphosting:backends:create` sólo es necesario una vez por backend.
- Si necesitas un despliegue rápido para pruebas en un canal de previsualización (si tu proyecto lo soporta), consulta la documentación de Firebase o usa `firebase hosting:channel:deploy` para hosting clásico.

Si quieres, puedo adaptar las instrucciones a un flujo alternativo (por ejemplo, despliegue automático con GitHub Actions) o añadir comandos concretos extra para validar la build localmente.
