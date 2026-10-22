/**
 * RFD I — Cuaderno de Practica Extra (Variables, E/S, condiciones y bucles)
 * App de Apps Script: editor de notebook en el navegador (Pyodide) +
 * guardado de progreso por alumno/a + entrega final + correccion +
 * vuelco de notas a Classroom.
 *
 * Es la MISMA arquitectura que la app del cuaderno de las sesiones 5-8,
 * aplicada a este segundo cuaderno. Ver las notas de aquella app para
 * el detalle de cada decision de diseno.
 *
 * PRIMERA VEZ QUE LO DESPLIEGUES:
 * 1. script.google.com -> Proyecto nuevo.
 * 2. Crea tres archivos: "Code.gs" (este contenido), "index" (igual
 *    que en la app anterior, es identico) y "profesor" (el de este
 *    cuaderno en concreto, con sus propios criterios de correccion).
 * 3. Panel izquierdo -> Servicios (+) -> anade "Google Classroom API".
 * 4. Configuracion del proyecto -> activa "Mostrar archivo de manifiesto"
 *    y anade el mismo oauthScopes que en la otra app:
 *      https://www.googleapis.com/auth/userinfo.email
 *      https://www.googleapis.com/auth/spreadsheets
 *      https://www.googleapis.com/auth/classroom.coursework.me
 *      https://www.googleapis.com/auth/classroom.coursework.students
 * 5. Ejecuta crearTareaPracticaExtra (abajo del todo) para crear la
 *    tarea en Classroom DESDE ESTE PROYECTO (imprescindible, o el
 *    volcado de notas fallara con ProjectPermissionDenied). Copia el
 *    id de tarea que salga en los registros y pegalo en
 *    CLASSROOM_COURSEWORK_ID mas abajo.
 * 6. Implementar -> Nueva implementacion -> Aplicacion web.
 *    - Ejecutar como: "Yo"
 *    - Quien tiene acceso: cualquier usuario de tu dominio g.educaand
 */

var NOTEBOOK_CELLS = [{"id": "41cd70ec", "type": "markdown", "source": "# Práctica extra — Variables, entrada/salida, condiciones y bucles\n### Cuaderno complementario · Robótica y Fabricación Digital I\n\nEste cuaderno es continuación del que ya trabajaste en las sesiones 5-8. Aquí vas a reforzar los mismos conceptos —variables, entrada/salida, condiciones (`if`) y bucles (`while`/`for`)— con ejercicios algo más variados, para consolidarlos bien.\n\n**Cómo se organiza:**\n- 🧩 **Núcleo** (9 ejercicios) — para entregar todo el mundo.\n- 🏆 **Retos opcionales** (3 ejercicios) — más exigentes, para quien quiera ir más allá.\n\n**Importante:** guarda tus cambios de vez en cuando (`Shift+S`)."}, {"id": "980b6354", "type": "markdown", "source": "# 🧩 Núcleo — para todo el mundo"}, {"id": "07dd44e6", "type": "markdown", "source": "## Variables"}, {"id": "3e90c670", "type": "markdown", "source": "### Ejercicio 1 — Conversor de temperaturas\n\nCrea una variable `C` con el valor `30`, que representa una temperatura en grados Celsius. Calcula en otra variable `F` su equivalente en grados Fahrenheit y muéstralo por pantalla.\n\nFórmula: °C a °F → multiplica por 9, divide entre 5, y suma 32. El resultado debe ser `86`.\n\nDespués, haz la conversión contraria: asigna `F = 77` y calcula `C` (°F a °C → resta 32, multiplica por 5, divide entre 9). El resultado debe ser `25`."}, {"id": "6e4b51ba", "type": "code", "source": ""}, {"id": "90a197cf", "type": "markdown", "source": "## Entrada y salida de datos"}, {"id": "65b6a504", "type": "markdown", "source": "### Ejercicio 2 — Área de un círculo\n\nEscribe un programa que pida al usuario el radio de un círculo (`input()`) y calcule su área ($\\pi r^2$, usa `3.1416` como valor de $\\pi$).\n\nEl resultado debe mostrarse con un formato parecido a:\n> El área de un círculo de radio 4.0 es 50.2656"}, {"id": "d94a07c4", "type": "code", "source": ""}, {"id": "00eeca98", "type": "markdown", "source": "### Ejercicio 3 — Ecuación de segundo grado\n\nEscribe un programa que pida los tres coeficientes `A`, `B` y `C` de una ecuación de segundo grado ($Ax^2+Bx+C=0$) y muestre sus dos soluciones, usando la fórmula:\n\n$$x = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}$$\n\n**Pista:** para la raíz cuadrada puedes elevar a `0.5` (`** 0.5`)."}, {"id": "cac6cec3", "type": "code", "source": ""}, {"id": "83f398ba", "type": "markdown", "source": "## Condiciones"}, {"id": "8e3ade4c", "type": "markdown", "source": "### Ejercicio 4 — ¿Están en orden?\n\nEscribe un programa que lea tres números enteros e indique si están o no en orden ascendente (es decir, si el primero es menor o igual que el segundo, y el segundo menor o igual que el tercero)."}, {"id": "0ccceecc", "type": "code", "source": ""}, {"id": "e143ad24", "type": "markdown", "source": "### Ejercicio 5 — Nota media y calificación\n\nEscribe un programa que pida 4 notas (números enteros entre 0 y 100), calcule la media aritmética y muestre la media junto con su calificación asociada, según esta tabla:\n\n- 90-100 → A\n- 80-89 → B\n- 70-79 → C\n- 60-69 → D\n- 0-59 → E\n\n**Ojo con el orden de las comprobaciones**: si compruebas primero `media >= 60`, nunca vas a llegar a comprobar si es un 90."}, {"id": "bd2c6c0b", "type": "code", "source": ""}, {"id": "88091727", "type": "markdown", "source": "## Bucle `while`"}, {"id": "ec76fc3f", "type": "markdown", "source": "### Ejercicio 6 — Solo números positivos\n\nEscribe un programa que pida un número entero repetidamente **hasta que el usuario introduzca uno positivo**, y que entonces muestre ese número. Si introduce uno negativo o cero, debe avisar y volver a pedirlo."}, {"id": "e5b49517", "type": "code", "source": ""}, {"id": "83d1a4ee", "type": "markdown", "source": "### Ejercicio 7 — División por restas sucesivas\n\nDados dos números enteros `a` (dividendo) y `b` (divisor, mayor que 0), calcula el cociente y el resto de su división **sin usar `//` ni `%`** — solo restando `b` de `a` repetidamente con un `while`, contando cuántas restas haces (eso es el cociente) hasta que lo que quede sea menor que `b` (eso es el resto).\n\nEjemplo: con `a=17` y `b=3` → cociente `5`, resto `2`."}, {"id": "45d6e957", "type": "code", "source": ""}, {"id": "134747e2", "type": "markdown", "source": "## Bucle `for`"}, {"id": "d2f969f9", "type": "markdown", "source": "### Ejercicio 8 — Múltiplos de 3\n\nEscribe un programa que muestre todos los múltiplos de 3 menores que 100 (0, 3, 6, 9...), usando un `for` con `range()` y el argumento de paso (step)."}, {"id": "b09bde25", "type": "code", "source": ""}, {"id": "627a9c01", "type": "markdown", "source": "### Ejercicio 9 — Pares e impares en un intervalo\n\nPide dos números enteros `a` y `b`, y muestra todos los números del intervalo [a, b] indicando si cada uno es par o impar, con un formato como:\n\n```\n10 (par)\n11 (impar)\n12 (par)\n```"}, {"id": "87dced43", "type": "code", "source": ""}, {"id": "d96bc6bb", "type": "markdown", "source": "---\n# 🏆 Retos opcionales\n\nLos tres siguientes son más exigentes. Resuélvelos si terminas el núcleo y quieres un desafío extra — no son obligatorios."}, {"id": "292b43b5", "type": "markdown", "source": "### Reto A — ¿Es primo? (con `while`)\n\nDado un número natural `n`, determina si es primo o no, usando un bucle `while` (no `for`) para buscar divisores. Recuerda que el 1 no se considera primo.\n\n**Pistas:**\n- Usa una variable `divisor` que empiece en `2`.\n- Mientras `n % divisor` no sea `0` (es decir, mientras `divisor` no divida a `n`), suma `1` a `divisor` y vuelve a comprobar.\n- Cuando el bucle termine, `divisor` será el primer número que divide a `n`. Si ese número es el propio `n`, es que no has encontrado ningún divisor menor — entonces `n` es primo."}, {"id": "83ec4616", "type": "code", "source": ""}, {"id": "3524857b", "type": "markdown", "source": "### Reto B — Perfecto, abundante o defectivo\n\nDado un número natural `n`, clasifícalo según la suma de sus divisores propios (todos excepto él mismo):\n- **Perfecto** si la suma es igual a `n` (ej: 6 = 1+2+3)\n- **Abundante** si la suma es mayor que `n` (ej: 12, ya que 1+2+3+4+6 > 12)\n- **Defectivo** si la suma es menor que `n` — en este caso, indica además si `n` es primo (lo es si la suma de sus divisores propios es exactamente 1)\n\nEjemplo de salida: `El número 11 es defectivo y primo`\n\n**Pistas:**\n- Recorre con un `for` los números de `1` a `n-1` (no incluyas `n`, porque no cuenta como divisor propio).\n- Por cada uno, comprueba con `n % numero == 0` si es divisor; si lo es, súmalo a una variable `suma` que empieza en `0`.\n- Al terminar el bucle, compara `suma` con `n` para decidir si es perfecto, abundante o defectivo."}, {"id": "312d96b6", "type": "code", "source": ""}, {"id": "5929b19a", "type": "markdown", "source": "### Reto C — Rectángulo de asteriscos\n\nDado un número `n`, muestra por pantalla un cuadrado de `n` filas, con `n` asteriscos en cada fila. Por ejemplo, con `n=4`:\n\n```\n****\n****\n****\n****\n```\n\n**Pistas:** vas a necesitar un bucle `for` dentro de otro bucle `for` (bucles anidados) — es un concepto nuevo que no hemos visto todavía en las sesiones, ¡buena oportunidad para explorarlo!\n- El bucle **exterior** controla las filas: se repite `n` veces, una por cada fila.\n- El bucle **interior**, dentro del anterior, controla los asteriscos de esa fila: también se repite `n` veces, y en cada vuelta escribe un asterisco.\n- Usa `print(\"*\", end=\"\")` dentro del bucle interior para que los asteriscos no salten de línea entre sí, y añade un `print()` (sin nada dentro) después del bucle interior para saltar a la fila siguiente."}, {"id": "2e835796", "type": "code", "source": ""}];

var SHEET_NAME = "Progreso_RFD1_PracticaExtra";
var SHEET_ID_PROPERTY = "PROGRESO_PRACTICA_SHEET_ID";

// IMPORTANTE: correos con acceso al panel de correccion en /exec?vista=profesor
var PROFESOR_EMAILS = [
  "profe@tucentro.es"   // <-- CAMBIA ESTO: tu correo (puedes poner varios, separados por comas)
];

// Curso y tarea de Classroom vinculados a este cuaderno.
// Rellena el id del curso (lo ves en la URL de tu clase).
// CLASSROOM_COURSEWORK_ID hay que rellenarlo DESPUES de ejecutar
// crearTareaPracticaExtra (ver abajo).
var CLASSROOM_COURSE_ID = "";      // <-- CAMBIA ESTO: id de tu curso de Classroom
var CLASSROOM_COURSEWORK_ID = "";  // <-- CAMBIA ESTO: id de la tarea creada por esta app

function doGet(e) {
  var email = Session.getActiveUser().getEmail();
  var esProfesor = PROFESOR_EMAILS.indexOf(email) !== -1;
  var vistaParam = e && e.parameter && e.parameter.vista;
  // Si el correo es de profesorado y no se pide explícitamente otra
  // vista, el enlace normal (sin parámetros) lleva directo al panel.
  var vista = vistaParam || (esProfesor ? "profesor" : "alumno");

  if (vista === "profesor") {
    if (!esProfesor) {
      return HtmlService.createHtmlOutput(
        "<p style='font-family:sans-serif;padding:40px'>Acceso restringido. " +
        "Esta vista es solo para el profesorado.</p>"
      );
    }
    var templateProfesor = HtmlService.createTemplateFromFile("profesor");
    templateProfesor.notebookCellsJson = JSON.stringify(NOTEBOOK_CELLS);
    templateProfesor.progresosJson = JSON.stringify(listarProgresos_());
    templateProfesor.appUrl = ScriptApp.getService().getUrl() + "?vista=alumno";
    return templateProfesor.evaluate()
        .setTitle("Panel de corrección - Práctica Extra Python")
        .addMetaTag("viewport", "width=device-width, initial-scale=1")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  var progreso = obtenerProgresoUsuario_(email);

  var template = HtmlService.createTemplateFromFile("index");
  template.notebookCellsJson = JSON.stringify(NOTEBOOK_CELLS);
  template.savedProgressJson = progreso ? JSON.stringify(progreso.celdas) : "null";
  template.entregado = progreso ? progreso.entregado : false;
  template.userEmail = email;
  template.nota = (progreso && progreso.nota !== null && progreso.nota !== undefined && progreso.nota !== "")
      ? progreso.nota : "null";
  template.feedbackJson = JSON.stringify(progreso ? (progreso.feedback || "") : "");

  return template.evaluate()
      .setTitle("Python - Práctica Extra - Robótica y Fabricación Digital I")
      .addMetaTag("viewport", "width=device-width, initial-scale=1")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Devuelve o crea la hoja central de progreso. */
function obtenerHoja_() {
  var props = PropertiesService.getScriptProperties();
  var sheetId = props.getProperty(SHEET_ID_PROPERTY);
  var ss, sheet;

  if (sheetId) {
    try {
      ss = SpreadsheetApp.openById(sheetId);
      sheet = ss.getSheetByName(SHEET_NAME);
    } catch (err) {
      sheet = null;
    }
  }

  if (!sheet) {
    ss = SpreadsheetApp.create(SHEET_NAME);
    sheet = ss.getActiveSheet();
    sheet.setName(SHEET_NAME);
    sheet.appendRow(["email", "ultima_actualizacion", "entregado", "celdas_json", "nota", "feedback"]);
    sheet.setFrozenRows(1);
    props.setProperty(SHEET_ID_PROPERTY, ss.getId());
    return sheet;
  }

  var cabecera = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
  if (cabecera.length < 6) {
    sheet.getRange(1, 5, 1, 2).setValues([["nota", "feedback"]]);
  }

  return sheet;
}

function buscarFilaUsuario_(sheet, email) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === email) return i + 1;
  }
  return -1;
}

function guardarProgreso(celdasObj, entregado) {
  var email = Session.getActiveUser().getEmail();
  if (!email) {
    throw new Error("No se ha podido identificar al usuario.");
  }

  var sheet = obtenerHoja_();
  var fila = buscarFilaUsuario_(sheet, email);
  var celdasJson = JSON.stringify(celdasObj);
  var ahora = new Date();

  if (fila === -1) {
    sheet.appendRow([email, ahora, !!entregado, celdasJson]);
  } else {
    sheet.getRange(fila, 2, 1, 3).setValues([[ahora, !!entregado, celdasJson]]);
  }

  return { ok: true, guardadoEn: ahora.toISOString() };
}

/** Devuelve el progreso guardado de un usuario, o null si no hay nada. */
function obtenerProgresoUsuario_(email) {
  if (!email) return null;
  var props = PropertiesService.getScriptProperties();
  if (!props.getProperty(SHEET_ID_PROPERTY)) return null;

  var sheet = obtenerHoja_();
  var fila = buscarFilaUsuario_(sheet, email);
  if (fila === -1) return null;

  var valores = sheet.getRange(fila, 1, 1, 6).getValues()[0];
  return {
    entregado: valores[2],
    celdas: JSON.parse(valores[3]),
    nota: valores[4] === "" ? null : valores[4],
    feedback: valores[5] || ""
  };
}

/** Lista todas las entregas/progresos guardados (uso interno). */
function listarProgresos_() {
  var props = PropertiesService.getScriptProperties();
  if (!props.getProperty(SHEET_ID_PROPERTY)) return [];

  var sheet = obtenerHoja_();
  var data = sheet.getDataRange().getValues();
  var resultado = [];

  for (var i = 1; i < data.length; i++) {
    var fila = data[i];
    if (!fila[0]) continue;
    resultado.push({
      email: fila[0],
      actualizado: fila[1] ? new Date(fila[1]).toISOString() : "",
      entregado: !!fila[2],
      celdas: fila[3] ? JSON.parse(fila[3]) : {},
      nota: fila[4] === "" ? null : fila[4],
      feedback: fila[5] || ""
    });
  }
  return resultado;
}

/** Llamada desde el panel de profesor: recarga la lista de entregas. */
function obtenerProgresosParaProfesor() {
  var email = Session.getActiveUser().getEmail();
  if (PROFESOR_EMAILS.indexOf(email) === -1) throw new Error("No autorizado.");
  return listarProgresos_();
}

/** Llamada desde el panel de profesor: guarda nota y feedback de un alumno. */
function guardarCorreccion(emailAlumno, nota, feedback) {
  var email = Session.getActiveUser().getEmail();
  if (PROFESOR_EMAILS.indexOf(email) === -1) throw new Error("No autorizado.");

  var sheet = obtenerHoja_();
  var fila = buscarFilaUsuario_(sheet, emailAlumno);
  if (fila === -1) throw new Error("No se encontró ninguna entrega de " + emailAlumno);

  sheet.getRange(fila, 5, 1, 2).setValues([[nota, feedback]]);

  var classroomOk = false;
  var classroomError = "";
  try {
    publicarNotaEnClassroom_(emailAlumno, nota);
    classroomOk = true;
  } catch (err) {
    classroomError = err.message;
  }

  return { ok: true, classroomOk: classroomOk, classroomError: classroomError };
}

function publicarNotaEnClassroom_(emailAlumno, nota) {
  if (!CLASSROOM_COURSE_ID || !CLASSROOM_COURSEWORK_ID) {
    throw new Error("Falta configurar CLASSROOM_COURSE_ID y CLASSROOM_COURSEWORK_ID en Code.gs.");
  }
  var response = Classroom.Courses.CourseWork.StudentSubmissions.list(
    CLASSROOM_COURSE_ID, CLASSROOM_COURSEWORK_ID, { userId: emailAlumno }
  );
  var subs = response.studentSubmissions || [];
  if (subs.length === 0) {
    throw new Error("No se encontró la entrega de " + emailAlumno + " en Classroom.");
  }

  var submissionId = subs[0].id;
  var payload = { assignedGrade: nota, draftGrade: nota };

  Classroom.Courses.CourseWork.StudentSubmissions.patch(
    payload, CLASSROOM_COURSE_ID, CLASSROOM_COURSEWORK_ID, submissionId,
    { updateMask: "assignedGrade,draftGrade" }
  );

  try {
    Classroom.Courses.CourseWork.StudentSubmissions["return"](
      {}, CLASSROOM_COURSE_ID, CLASSROOM_COURSEWORK_ID, submissionId
    );
  } catch (err) {
    // La nota ya ha quedado guardada aunque esto falle.
  }
}

/** Llamada desde el panel de profesor: reabre una entrega ya cerrada. */
function reabrirEntrega(emailAlumno) {
  var email = Session.getActiveUser().getEmail();
  if (PROFESOR_EMAILS.indexOf(email) === -1) throw new Error("No autorizado.");

  var sheet = obtenerHoja_();
  var fila = buscarFilaUsuario_(sheet, emailAlumno);
  if (fila === -1) throw new Error("No se encontró ninguna entrega de " + emailAlumno);

  sheet.getRange(fila, 3, 1, 1).setValue(false);
  return { ok: true };
}

/**
 * Crea la tarea de Practica Extra en Classroom DESDE ESTE PROYECTO.
 * Ejecutar una sola vez al configurar la app (o de nuevo si cambias
 * de curso). Copia el id que salga en los registros y ponlo en
 * CLASSROOM_COURSEWORK_ID, arriba del todo de este archivo.
 */
function crearTareaPracticaExtra() {
  if (!CLASSROOM_COURSE_ID) throw new Error("Falta configurar CLASSROOM_COURSE_ID en Code.gs.");
  var courseId = CLASSROOM_COURSE_ID;

  var tarea = {
    title: "Práctica extra - Variables, E/S, condiciones y bucles",
    description: "Cuaderno complementario de Python: 9 ejercicios obligatorios + 3 retos opcionales. " +
        "Se trabaja y se entrega desde la app del cuaderno, no hace falta adjuntar nada aquí.",
    workType: "ASSIGNMENT",
    state: "PUBLISHED",
    maxPoints: 10
  };

  var creada = Classroom.Courses.CourseWork.create(tarea, courseId);
  Logger.log("Tarea creada correctamente.");
  Logger.log("id de tarea (nuevo CLASSROOM_COURSEWORK_ID): " + creada.id);
}