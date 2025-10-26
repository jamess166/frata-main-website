# Cómo Desplegar tu Aplicación en Firebase App Hosting

Esta guía te mostrará cómo desplegar tu aplicación Next.js en Firebase App Hosting.

## Prerrequisitos

1.  **Tener una cuenta de Firebase y un proyecto de Firebase.**
    *   Si aún no tienes uno, ve a la [Consola de Firebase](https://console.firebase.google.com/) para crear un proyecto.

2.  **Tener Node.js y npm instalados.**
    *   Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Pasos para el Despliegue

### 1. Instalar la Firebase CLI

Si no tienes instalada la Interfaz de Línea de Comandos (CLI) de Firebase, ábrela en tu terminal y ejecuta el siguiente comando para instalarla globalmente:

```bash
npm install -g firebase-tools
```

### 2. Iniciar Sesión en Firebase

Para conectar la CLI a tu cuenta de Firebase, ejecuta:

```bash
firebase login
```

Esto abrirá una ventana en tu navegador para que inicies sesión y autorices a la CLI.

### 3. Configurar el Proyecto

En la raíz de tu proyecto, ejecuta el siguiente comando para vincular tu código local con tu proyecto de Firebase:

```bash
firebase apphosting:backends:create
```

Sigue las instrucciones que aparecerán en la pantalla:
1.  Selecciona tu **proyecto de Firebase** de la lista.
2.  Elige una **ubicación** para tu backend (por ejemplo, `us-central1`). La CLI detectará la configuración en `apphosting.yaml`.
3.  Se creará un backend de App Hosting.

### 4. Desplegar la Aplicación

Una vez que el backend esté creado, puedes desplegar tu aplicación. Cada vez que quieras publicar una nueva versión de tu sitio, ejecuta el siguiente comando desde la raíz de tu proyecto:

```bash
firebase apphosting:deploy
```

La CLI empaquetará tu código, lo subirá a Firebase y lo desplegará. Después de unos minutos, tu aplicación estará disponible en la URL que te proporcionará la CLI.

¡Y eso es todo! Tu aplicación Next.js estará funcionando en vivo en Firebase App Hosting.
