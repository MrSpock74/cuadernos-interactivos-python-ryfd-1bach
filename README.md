# Cuadernos interactivos de Python para Google Classroom

Dos aplicaciones de **Google Apps Script** que permiten al alumnado trabajar un cuaderno de Python **directamente en el navegador** (sin instalar nada), guardar su progreso, entregarlo, y al profesorado corregirlo y volcar la nota y la retroalimentación a **Google Classroom**.

Creadas por **Manuel Romero Fraidía** (Departamento de Tecnología, IES Murillo, Sevilla) para *Robótica y Fabricación Digital I* de 1º de Bachillerato, pero reutilizables en cualquier materia o nivel que quiera trabajar Python.

## Qué hace

- El cuaderno se ejecuta en el navegador con **Pyodide** (Python compilado a WebAssembly): no hace falta servidor, ni Colab, ni cuenta externa.
- El alumnado entra con su cuenta educativa de Google; la app lo identifica y **guarda su progreso** automáticamente.
- Entrega final desde la propia app, y el profesorado puede **reabrir** una entrega.
- **Panel del profesorado** para ver las entregas, ponerles nota y escribir retroalimentación.
- La nota se vuelca a **Google Classroom** y la tarea se crea como **borrador** para publicarla cuando quieras.
- El progreso queda en una hoja de cálculo que la app crea sola en **tu** Drive.

## Contenido

| Carpeta | Qué es |
|---|---|
| `cuaderno-sesiones-5-8/` | Cuaderno del bloque de programación (variables, operadores y `if`, bucles, funciones y reto final), con banco de retos opcionales. |
| `cuaderno-practica-extra/` | Cuaderno complementario de práctica (variables, entrada/salida, condiciones y bucles): 9 ejercicios de núcleo y 3 retos opcionales. |

Cada carpeta es una aplicación independiente con sus propios archivos:

| Archivo | Para qué sirve |
|---|---|
| `Code.gs` | Servidor: guardado de progreso, panel, Classroom. Incluye el cuaderno (variable `NOTEBOOK_CELLS`) y la configuración del principio. |
| `index.html` | Pantalla del alumnado: el cuaderno interactivo. |
| `profesor.html` | Pantalla del profesorado: corrección y notas. |
| `appsscript.json` | Manifiesto: servicio de Classroom, permisos y tipo de despliegue. |

> **Importante:** en Apps Script los archivos HTML deben llamarse exactamente `index` y `profesor` (en minúsculas), porque el código los busca por ese nombre.

## Instalación (una sola vez por cuaderno)

1. Entra en [script.google.com](https://script.google.com) y crea un **Nuevo proyecto**.
2. Pega el contenido de `Code.gs` en el archivo `Code.gs` del proyecto.
3. Crea dos archivos HTML con **+ → HTML**, llamados `index` y `profesor`, y pega el contenido de `index.html` y `profesor.html`.
4. En *Configuración del proyecto*, activa **Mostrar el archivo de manifiesto `appsscript.json`** y sustituye su contenido por el de `appsscript.json` de la carpeta.
5. En el menú izquierdo, **Servicios (+)**, añade **Google Classroom API**.
6. En `Code.gs`, sección de configuración, cambia `PROFESOR_EMAILS` por tu correo y rellena `CLASSROOM_COURSE_ID` con el id de tu curso de Classroom (aparece en la dirección de tu clase).
7. Ejecuta la función `crearTareaCuadernoPython` (en el cuaderno de las sesiones 5-8) o `crearTareaPracticaExtra` (en el de práctica extra) y acepta los permisos. Crea la tarea en Classroom **como borrador**. Copia el **id de tarea** que aparece en *Ver → Registros de ejecución* y pégalo en `CLASSROOM_COURSEWORK_ID`.
8. **Implementar → Nueva implementación → Aplicación web.** Ejecutar como: **Yo**. Acceso: usuarios de tu dominio. Copia la dirección que termina en `/exec` y compártela con el alumnado.
9. El profesorado, al entrar con esa misma dirección, va directo al panel. También puedes usar `?vista=profesor` o `?vista=alumno` al final de la dirección.

Si cambias el código después, usa **Implementar → Gestionar implementaciones → Nueva versión**; si no, la dirección sigue sirviendo la versión anterior.

## Usarlos con otro contenido

El cuaderno está dentro de `Code.gs`, en la variable `NOTEBOOK_CELLS`: una lista de celdas de tipo `markdown` o `code`. Cambia esas celdas por las tuyas, ajusta los criterios de corrección en `profesor.html` y los títulos de `Code.gs`.

## Requisitos y limitaciones

- Cuenta de Google Workspace for Education con **Classroom** y acceso a la **API de Classroom**. Algunos centros la tienen restringida por el administrador del dominio.
- **La tarea de Classroom tiene que crearla el propio proyecto de Apps Script** (paso 7). Una tarea creada a mano en Classroom no se puede calificar desde la API y da el error `ProjectPermissionDenied`.
- Pyodide y otras bibliotecas se cargan desde internet (`cdn.jsdelivr.net`). Si la red del centro bloquea ese dominio, el cuaderno no arrancará.
- Cada docente tiene que autorizar y desplegar **su propia copia**; no se actualiza sola.

## Protección de datos

El código no contiene datos de alumnado. La hoja de progreso que crea la aplicación guarda el **correo del alumno y el contenido de sus celdas**, y se crea en **tu** Drive: trátala como datos personales y no la subas a ningún repositorio.

## Licencia y créditos

© Manuel Romero Fraidía. Licencia [Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Consulta el archivo `LICENSE`.

El cuaderno de las sesiones 5-8 está **basado en el curso «Introducción a la Programación con Python» de [IEEE-ITBA](https://ieeeitba.org.ar/)** (Instituto Tecnológico de Buenos Aires), distribuido también con licencia CC BY-NC-SA. Curso original: <https://ieeeitba.org.ar/cursospython>.
