---
title: "Cómo bloquear elementos en Revit para que nadie los modifique ni los borre"
date: "2026-11-03"
author: "Frata Ingenieros"
image: "/images/blog/bloquear-elementos-revit/portada.webp"
summary: "Fijar (Pin) evita que un elemento se mueva, pero se desfija con un clic. Te explicamos cómo bloquear y desbloquear elementos en Revit y cómo protegerlos de verdad contra cambios y borrados con Bloquear Elementos de BIMtools."
keywords:
  - cómo bloquear un elemento en revit
  - cómo desbloquear un elemento en revit
  - fijar elementos revit
  - pin revit
  - congelar elementos revit
  - proteger elementos revit
---

En un modelo de Revit compartido por varias personas, basta un clic de más para mover un eje, borrar un muro de cimentación o cambiar el nivel de una losa. Esos cambios accidentales casi nunca se notan en el momento: aparecen después, en planos descuadrados, en metrados que no cierran o en una interferencia que nadie esperaba.

Por eso es habitual querer **bloquear elementos en Revit**: ejes y niveles, el modelo de referencia, la topografía, los elementos estructurales ya aprobados. Revit trae una forma nativa de hacerlo, pero es bastante limitada. En este artículo te mostramos las dos opciones y cuándo conviene cada una.

## La forma nativa: Fijar (Pin)

Revit permite **fijar** un elemento para que no se mueva por error:

1. Selecciona el elemento (o varios).
2. En la pestaña **Modificar**, pulsa **Fijar** (el ícono de la chincheta), o usa el atajo **PN**.
3. Para **desbloquearlo**, selecciónalo y pulsa **Desfijar**, o usa el atajo **UP**.

También puedes activar o desactivar **Seleccionar elementos fijados** en la esquina inferior derecha de la pantalla, para que no se puedan seleccionar mientras trabajas.

Es una herramienta útil y rápida, pero se queda corta cuando de verdad necesitas proteger el modelo:

- **Está pensada para evitar desplazamientos**, no para proteger toda la información del elemento.
- **Se desfija con un clic.** Cualquier persona lo desbloquea con UP, a menudo sin darse cuenta de que estaba protegido por una razón.
- **No hay un control central.** Revit no trae un comando directo para seleccionar de una vez todos los elementos fijados del proyecto y revisar qué está protegido y qué no.
- **No explica el motivo.** Nada le indica a tu equipo por qué ese elemento está protegido ni a quién consultar antes de cambiarlo.

## La forma completa: Bloquear Elementos de BIMtools

Para proteger elementos de verdad desarrollamos **Bloquear Elementos (Freeze Elements)**, una herramienta de nuestra suite [BIMtools](/bimtools) para Revit. En lugar de solo fijar la posición, **congela** los elementos: Revit detiene **cualquier intento de modificarlos o eliminarlos**, incluidos los cambios de parámetros, con un error que no se puede ignorar y que explica qué pasa:

> "Some elements are frozen. Please unfreeze them or contact your BIM Manager."
>
> (En Revit en español: "Algunos elementos están congelados. Por favor descongélalos o contacta a tu BIM Manager.")

El cambio no se aplica hasta que alguien descongele el elemento de forma consciente.

### Qué puedes hacer con la herramienta

- **Congelar elementos:** agrega los elementos seleccionados a la lista de protegidos del proyecto.
- **Descongelar elementos:** los quita de la lista cuando realmente necesitas editarlos.
- **Seleccionar congelados:** selecciona de una vez todos los elementos protegidos del proyecto.
- **Aislar congelados:** los aísla en la vista activa para revisarlos rápidamente.

![Ventana Freeze de BIMtools en Revit con las opciones Congelar, Descongelar, Seleccionar e Aislar elementos congelados, y el error de Revit que impide modificar un elemento congelado](/images/blog/bloquear-elementos-revit/herramienta-congelar-elementos.webp)

*Ejemplo de cómo el add-in no permite modificar un elemento bloqueado: Revit muestra un error que no se puede ignorar y la única opción disponible es cancelar la modificación.*

La lista de elementos congelados **se guarda dentro del archivo de Revit**, así que viaja con el modelo: si se lo envías a otra persona o lo abre otro miembro del equipo, la protección sigue activa.

### Cómo bloquear elementos paso a paso

1. En la cinta **Frata**, abre el desplegable **Bloquear Elementos** del panel **Model**.
2. Elige **Congelar Elementos** (Freeze Elements), selecciona los elementos que quieres proteger y pulsa **Finalizar**.
3. Desde ese momento, cualquier intento de modificarlos o borrarlos se bloquea con el mensaje de advertencia, sea quien sea que trabaje en el modelo.
4. Usa **Seleccionar Congelados** o **Aislar Congelados** para revisar qué está protegido, por ejemplo antes de una entrega.

### Cómo desbloquear un elemento

Cuando necesites editar un elemento protegido, elige **Descongelar Elementos** (Unfreeze Elements), selecciónalo y haz tu cambio. Si el cambio es puntual, vuelve a congelarlo al terminar.

## Fijar vs. Bloquear Elementos

| | Fijar (Pin) de Revit | Bloquear Elementos (BIMtools) |
|---|---|---|
| Objetivo principal | Evitar desplazamientos accidentales | Bloquear cualquier modificación o eliminación |
| Bloquea cambios de parámetros | No es su objetivo | Sí |
| Mensaje que explica el bloqueo | No | Sí, con indicación de consultar al BIM Manager |
| Seleccionar todos los protegidos | No | Sí, con un clic |
| Aislar los protegidos en la vista | No | Sí |
| Se guarda en el modelo | Sí | Sí |

## Cuándo usar cada uno

- **Fijar (Pin)** es suficiente para cosas que solo no quieres mover por accidente mientras trabajas tú solo, como una imagen de referencia o un vínculo CAD.
- **Bloquear Elementos** conviene cuando el modelo lo usan varias personas y hay elementos que **no deben cambiar**: ejes y niveles del proyecto, cimentaciones y estructura aprobadas, topografía, elementos ya metrados o ya entregados en un informe.

Dos aclaraciones para usarla bien:

- **No es un sistema de permisos.** Cualquier persona que tenga el add-in puede descongelar un elemento. Su objetivo es evitar cambios accidentales, no controlar accesos dentro del equipo.
- **Protege el modelo activo.** No bloquea elementos de modelos vinculados; para eso hay que congelarlos dentro de su propio archivo.

## Pruébalo

Bloquear Elementos forma parte de **BIMtools Premium** e incluye **30 días de prueba**. Puedes leer el [manual completo de la herramienta](/bimtools/manual/freeze-elements), [descargar el instalador](/download) o ver los [planes de suscripción](/bimtools/suscripcion).

Si tu equipo necesita una herramienta a medida para controlar el modelo, también [desarrollamos addins para Revit](/services/custom-bim-software-development). [Escríbenos](/#contact) y lo conversamos.

## Preguntas frecuentes

**¿Cómo bloqueo un elemento en Revit sin instalar nada?**
Selecciónalo y pulsa **Fijar** en la pestaña Modificar (atajo **PN**). Evita que se mueva por error, pero cualquiera puede desfijarlo con **UP**.

**¿Cómo desbloqueo un elemento en Revit?**
Si está fijado, selecciónalo y pulsa **Desfijar** (atajo **UP**). Si lo congelaste con BIMtools, usa **Descongelar Elementos**.

**Me aparece "Some elements are frozen" o "Algunos elementos están congelados". ¿Qué hago?**
Intentaste modificar o borrar un elemento protegido con Bloquear Elementos. Descongélalo primero con **Descongelar Elementos** o consulta con el BIM Manager del proyecto.

**¿La protección se mantiene si envío el modelo a otra persona?**
Sí. La lista de elementos congelados se guarda dentro del propio archivo del proyecto.

**¿Puedo bloquear elementos de un modelo vinculado?**
No desde el modelo anfitrión. Abre el modelo vinculado y congela los elementos dentro de ese archivo.
