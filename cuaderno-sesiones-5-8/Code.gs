/**
 * RFD I — Cuaderno de Python (Sesiones 5-8)
 * App de Apps Script: editor de notebook en el navegador (Pyodide) +
 * guardado de progreso por alumno/a + entrega final.
 *
 * PRIMERA VEZ QUE LO DESPLIEGUES:
 * 1. script.google.com -> Proyecto nuevo.
 * 2. Crea dos archivos: "Code.gs" (pega este contenido) e "index.html"
 *    (pega el contenido del otro archivo que te he preparado).
 * 3. Implementar -> Nueva implementacion -> tipo "Aplicacion web".
 *    - Ejecutar como: "Yo"
 *    - Quien tiene acceso: "Cualquier usuario de [tu dominio g.educaand]"
 * 4. Copia la URL /exec que te da y compartela con el alumnado (por
 *    Classroom, como haces normalmente).
 * 5. La hoja de calculo de progreso se crea SOLA la primera vez que
 *    alguien guarda algo -- no hace falta prepararla a mano.
 */

var NOTEBOOK_CELLS = [{"id": "b7922bcd", "type": "markdown", "source": "# Python — Robótica y Fabricación Digital I\n### Cuaderno del bloque de programación (Sesiones 5-8)\n\n##### Adaptado por Manuel Romero Fraidía, profesor de Tecnología · IES Murillo (Sevilla)\n\nEste cuaderno está basado en el curso *\"Introducción a la Programación con Python\"* de [IEEE-ITBA](https://ieeeitba.org.ar/) (Instituto Tecnológico de Buenos Aires), distribuido bajo licencia [Creative Commons](https://creativecommons.org) CC-BY-NC-SA. Curso original completo: https://ieeeitba.org.ar/cursospython\n\nYa llevas varias semanas programando por bloques con MakeCode. En estas 4 sesiones vas a escribir esas mismas ideas — secuencias, decisiones, repeticiones — directamente en código Python.\n\n**Cómo se organiza este cuaderno:**\n- 🟦 **Sesión 5** — Variables, tipos de datos y entrada/salida\n- 🟩 **Sesión 6** — Operadores y la estructura `if`\n- 🟨 **Sesión 7** — Bucles `while` y `for`\n- 🟥 **Sesión 8** — Funciones y reto final\n\nAl final encontrarás también un **banco de retos opcionales** de distinta dificultad, por si quieres practicar más.\n\n**Importante:** guarda tus cambios de vez en cuando (`File > Save Notebook`, el icono del disco, o `Shift+S`)."}, {"id": "4ace1284", "type": "markdown", "source": "# 🟦 Sesión 5 — Variables, tipos de datos y entrada/salida"}, {"id": "bd3b1c4b", "type": "markdown", "source": "## ¿Qué es programar?\n\nProgramar es escribir instrucciones, paso a paso, para que un ordenador (o un microcontrolador, como el que ya conoces) haga exactamente lo que le pedimos. El ordenador las ejecuta una detrás de otra, en el orden exacto en que están escritas — por eso a esto se le llama **secuencia**, el mismo concepto que ya trabajaste al colocar bloques uno debajo de otro en MakeCode.\n\nExisten muchos lenguajes de programación (Python, C++, JavaScript, el propio lenguaje que genera MakeCode por debajo de los bloques...). Todos sirven para lo mismo — dar instrucciones a una máquina — pero cada uno tiene su propia sintaxis, es decir, sus propias reglas de escritura. Aprender uno nuevo, una vez que ya entiendes la lógica (secuencia, decisión, repetición), es sobre todo cuestión de aprender su vocabulario y su gramática.\n\nPython es uno de los lenguajes más usados del mundo — en ciencia de datos, inteligencia artificial, robótica y mucho más. Es un buen punto de partida porque su sintaxis es clara y se parece bastante al lenguaje natural: cuando escribes `print(\"Hola\")`, literalmente le estás diciendo al ordenador \"imprime (muestra) esto\".\n\n## ¡Hola, mundo!\n\nEl primer programa que se suele escribir en cualquier lenguaje es mostrar un mensaje en pantalla:"}, {"id": "d9c512cf", "type": "code", "source": "print(\"¡Hola, mundo!\")"}, {"id": "e5bc1d53", "type": "markdown", "source": "## Variables\n\nUna variable es un espacio con nombre donde guardamos un valor para poder usarlo más adelante — como cuando en MakeCode arrastrabas un bloque de \"variable\". Se crea con el signo `=`, que en programación no significa \"es igual a\" como en matemáticas, sino **\"asigna este valor a esta variable\"**. En Python se escribe así:"}, {"id": "edc42085", "type": "code", "source": "temperatura = 24\nprint(temperatura)"}, {"id": "4ca40854", "type": "markdown", "source": "Una vez creada, una variable puede cambiar de valor cuantas veces queramos a lo largo del programa — de ahí su nombre:"}, {"id": "5a7be423", "type": "code", "source": "temperatura = 24\nprint(\"Antes:\", temperatura)\n\ntemperatura = 30\nprint(\"Después:\", temperatura)"}, {"id": "0fd80cc1", "type": "markdown", "source": "### Tipos de datos\n\nLos valores que guardamos pueden ser de distinto tipo:\n- **Números enteros** (`int`): `22`\n- **Números decimales** (`float`): `22.5`\n- **Cadenas de texto** (`str`): `\"sensor de luz\"` (siempre entre comillas)\n- **Booleanos** (`bool`): `True` o `False` — muy útiles para representar el estado de un sensor (encendido/apagado, detecta/no detecta)\n\nPython reconoce el tipo automáticamente según cómo escribas el valor: si lleva comillas, es texto; si no las lleva y tiene un punto decimal, es `float`; si no las lleva y es un número entero, es `int`. Puedes comprobar el tipo de cualquier variable con la función `type()`."}, {"id": "136d4621", "type": "code", "source": "nombre_sensor = \"temperatura\"\nlectura = 22.5\nunidad = \"°C\"\nsensor_activo = True\n\nprint(nombre_sensor, lectura, unidad, sensor_activo)\nprint(type(nombre_sensor), type(lectura), type(sensor_activo))"}, {"id": "5539560a", "type": "markdown", "source": "### Buenas prácticas al nombrar variables\n\n- No pueden empezar por un número ni contener espacios (`2sensor` ❌, `mi sensor` ❌).\n- Se recomienda que sean descriptivas: `temperatura` es mejor que `t`.\n- En Python es habitual escribirlas en minúsculas, separando palabras con `_`: `lectura_sensor`."}, {"id": "a328f5b0", "type": "markdown", "source": "## 🧩 Mini-desafío: Variables\n\nImagina que tu micro:bit ha leído una temperatura de 22°C con su sensor integrado. Escribe un programa con dos variables:\n- `temperatura`, con el valor `22` (sin comillas)\n- `unidad`, con el texto `\"°C\"` (con comillas)\n\nY que muestre en pantalla, en una sola línea:\n> La temperatura es 22°C\n\n**Tip:** `print()` admite mostrar varios valores separados por comas en la misma línea."}, {"id": "ea08f7b5", "type": "code", "source": ""}, {"id": "aebff189", "type": "markdown", "source": "## Entrada de datos (`input`)\n\nHasta ahora los valores estaban fijos en el código, escritos directamente por nosotros. Con `input()` podemos pedir un dato mientras el programa se ejecuta — es el equivalente en texto a leer un sensor: el programa \"espera\" a que llegue un valor de fuera antes de continuar.\n\nLa función `input()` muestra el mensaje que le pasemos entre paréntesis, y **siempre devuelve lo que el usuario escriba como texto** (tipo `str`), aunque parezca un número. Por eso, si vamos a usar ese dato en un cálculo, hay que convertirlo explícitamente con `int()` (número entero) o `float()` (número decimal)."}, {"id": "8e532594", "type": "code", "source": "nombre = input(\"¿Cómo te llamas? \")\nedad = int(input(\"¿Cuántos años tienes? \"))\n\nprint(\"Hola\", nombre, \"- tienes\", edad, \"años\")"}, {"id": "f1b5aee6", "type": "markdown", "source": "Si intentas usar el resultado de `input()` en un cálculo sin convertirlo antes, Python dará un error — pruébalo tú mismo quitando el `int()` de la celda anterior y verás qué mensaje de error aparece. Aprender a leer esos mensajes de error es una habilidad clave que trabajaremos en la próxima sesión."}, {"id": "6d2588b4", "type": "markdown", "source": "## 🚩 Reto de la sesión: Ficha de un sensor\n\nEscribe un programa que:\n1. Pregunte al usuario el **nombre de un sensor** (texto) y su **última lectura** (número decimal).\n2. Guarde ambos datos en variables con nombres adecuados.\n3. Muestre en pantalla una frase con el formato:\n   > El sensor \"luz\" ha registrado un valor de 450.0\n\nEs una práctica para consolidar lo visto hoy — no hay que entregarla, pero enséñasela al profesor si te atascas."}, {"id": "00092664", "type": "code", "source": ""}, {"id": "49ed4578", "type": "markdown", "source": "# 🟩 Sesión 6 — Operadores y la estructura `if`"}, {"id": "30710c77", "type": "markdown", "source": "## Operadores aritméticos\n\nPython permite hacer cálculos con los operadores habituales: `+`, `-`, `*`, `/`. También tiene dos especiales:\n- `**` → potencia (`2 ** 3` es 2 elevado a 3)\n- `%` → módulo, el **resto** de una división (`7 % 2` da `1`, porque 7 entre 2 sobra 1)\n\nEl operador módulo es muy útil, por ejemplo, para saber si un número es par o impar (si `n % 2 == 0`, es par), o para repartir algo en grupos iguales sabiendo cuántos elementos sobran."}, {"id": "9038a41f", "type": "code", "source": "a = 7\nb = 2\nprint(a + b, a - b, a * b, a / b, a ** b, a % b)"}, {"id": "b0317b4f", "type": "markdown", "source": "## Operadores de comparación\n\nSirven para preguntar si algo se cumple, y el resultado siempre es `True` o `False`. A esto se le llama una **expresión booleana**:\n\n| Operador | Significado |\n|---|---|\n| `==` | igual a |\n| `!=` | distinto de |\n| `>` , `<` | mayor que, menor que |\n| `>=` , `<=` | mayor o igual, menor o igual |\n\n**Cuidado, es el error más común al empezar:** `=` asigna un valor a una variable; `==` compara dos valores. `temperatura = 30` guarda 30 en la variable; `temperatura == 30` pregunta si vale 30, sin cambiar nada."}, {"id": "b36a8f54", "type": "code", "source": "temperatura = 30\nprint(temperatura > 25)\nprint(temperatura == 30)"}, {"id": "40d91443", "type": "markdown", "source": "También se pueden combinar varias comparaciones con los operadores lógicos `and` (todas deben cumplirse), `or` (basta con que se cumpla una) y `not` (invierte el resultado):"}, {"id": "51157a7b", "type": "code", "source": "temperatura = 30\nhumedad = 45\n\nprint(temperatura > 25 and humedad < 50)  # ambas condiciones deben ser True\nprint(temperatura > 40 or humedad < 50)   # basta con que una sea True"}, {"id": "543bb96b", "type": "markdown", "source": "## 🧩 Mini-desafío: Operadores\n\nUn sensor de distancia de un robot ha medido `distancia = 15` (en cm). Escribe una línea de código que compruebe si esa distancia es **menor que 20** (lo que significaría \"obstáculo cerca\") y muestre el resultado (`True`/`False`)."}, {"id": "9d99d207", "type": "code", "source": ""}, {"id": "4df5bf36", "type": "markdown", "source": "## Control de flujo: la estructura `if`\n\nEl `if` permite que el programa tome decisiones, igual que el bloque \"si... entonces\" que ya conoces de MakeCode:\n\n```python\nif condicion:\n    # se ejecuta si la condición es True\nelif otra_condicion:\n    # se ejecuta si la anterior es False, pero esta es True\nelse:\n    # se ejecuta si ninguna de las anteriores se cumple\n```\n\nPuedes usar solo el `if`, un `if`/`else`, o encadenar varios `elif` entre medias tantos como necesites — Python los va comprobando en orden, de arriba a abajo, y en cuanto uno se cumple, ejecuta ese bloque y se salta el resto.\n\n**Muy importante:** en Python la sangría (los espacios al principio de la línea, normalmente 4) no es decorativa, es la forma que tiene el lenguaje de saber qué código pertenece a cada bloque. Si te olvidas de la sangría, o la pones donde no toca, Python dará un error."}, {"id": "683dcc24", "type": "code", "source": "luz = 150  # lectura del sensor de luz\n\nif luz < 100:\n    print(\"Hace falta luz artificial\")\nelif luz < 500:\n    print(\"Luz media, todo correcto\")\nelse:\n    print(\"Mucha luz, se puede apagar todo\")"}, {"id": "8fcdeb98", "type": "markdown", "source": "También se pueden anidar (meter un `if` dentro de otro) cuando una decisión depende de otra anterior:"}, {"id": "d93629e7", "type": "code", "source": "bateria = 20\nmovimiento_detectado = True\n\nif bateria > 15:\n    if movimiento_detectado:\n        print(\"Activando cámara\")\n    else:\n        print(\"En espera\")\nelse:\n    print(\"Batería insuficiente, no se activa nada\")"}, {"id": "33892adb", "type": "markdown", "source": "## 🧩 Mini-desafío: `if`\n\nUn robot tiene un sensor de temperatura. Escribe un programa que pida la temperatura actual con `input()` y muestre:\n- `\"¡Cuidado, sobrecalentamiento!\"` si es mayor de 60\n- `\"Temperatura normal\"` en caso contrario"}, {"id": "d27bfd8e", "type": "code", "source": ""}, {"id": "b8d44e5e", "type": "markdown", "source": "## 🚩 Reto de la sesión: Caza-fallos\n\nEl siguiente código tiene **3 errores** que le impiden funcionar (de sangría, de comparación y de tipo de dato). Léelo con calma, ejecútalo, fíjate en el mensaje de error, corrígelo y vuelve a ejecutar hasta que funcione correctamente."}, {"id": "3324cf60", "type": "code", "source": "distancia = input(\"Introduce la distancia detectada en cm: \")\n\nif distancia = 10:\nprint(\"¡Obstáculo justo delante!\")\nelif distancia < 30:\n    print(\"Obstáculo cerca, reduce la velocidad\")\nelse:\n    print(\"Camino libre\")"}, {"id": "deed2d41", "type": "markdown", "source": "**Pista:** el primer error lo verás nada más ejecutar (lee el mensaje). El segundo y el tercero solo aparecerán cuando escribas un número al ejecutar el programa — tenlo en cuenta al depurar."}, {"id": "8ca9489b", "type": "markdown", "source": "# 🟨 Sesión 7 — Bucles `while` y `for`"}, {"id": "b02617ac", "type": "markdown", "source": "## Estructura `while`\n\nEl bucle `while` repite un bloque de código **mientras** se cumpla una condición — como el bloque \"repetir hasta\" de MakeCode:\n\n```python\nwhile condicion:\n    # código que se repite\n    # normalmente algo que modifica la condición, para que el bucle termine\n```\n\nPython comprueba la condición **antes** de cada repetición: si es `True`, ejecuta el bloque y vuelve a comprobar; en cuanto sea `False`, sale del bucle y continúa con el resto del programa.\n\n**Cuidado:** si la condición nunca deja de cumplirse, el bucle no termina nunca (bucle infinito, y el programa se queda \"colgado\"). Siempre debe haber algo dentro del bucle que acerque el final — por ejemplo, una variable contador que aumenta, o una condición que puede pasar a ser `False` en algún momento. Si alguna vez se te queda un programa colgado, puedes detenerlo con el botón de \"stop\" (⏹) del notebook."}, {"id": "58e148a8", "type": "code", "source": "intentos = 0\nclave_correcta = False\n\nwhile not clave_correcta and intentos < 3:\n    clave = input(\"Introduce la clave de acceso al robot: \")\n    if clave == \"1234\":\n        clave_correcta = True\n        print(\"Acceso concedido\")\n    else:\n        intentos += 1\n        print(\"Clave incorrecta, intentos restantes:\", 3 - intentos)"}, {"id": "f50623b6", "type": "markdown", "source": "Fíjate en `intentos += 1`: es una forma abreviada de escribir `intentos = intentos + 1` (suma 1 al valor actual y lo vuelve a guardar en la misma variable). Existen abreviaturas parecidas para el resto de operaciones: `-=`, `*=`, `/=`."}, {"id": "39ce10b9", "type": "markdown", "source": "## 🧩 Mini-desafío: `while`\n\nEscribe un programa que simule una cuenta atrás de despegue: empieza en `5` y va mostrando el número, restando 1 cada vez, hasta llegar a `0`. Al terminar, muestra `\"¡Despegue!\"`."}, {"id": "f5ca757d", "type": "code", "source": ""}, {"id": "94077029", "type": "markdown", "source": "## Estructura `for`\n\nEl bucle `for` repite un bloque un número determinado de veces, recorriendo un rango de valores — como el bloque \"repetir 4 veces\" de MakeCode. Se usa cuando sabemos de antemano cuántas veces queremos repetir algo (a diferencia del `while`, pensado para cuando no sabemos cuántas veces hará falta):\n\n```python\nfor i in range(5):\n    # se ejecuta 5 veces, con i tomando los valores 0, 1, 2, 3, 4\n```\n\n`range(5)` genera los números del 0 al 4 (5 números en total, empezando en 0). También puedes indicar dónde empezar y de cuánto en cuánto avanzar: `range(2, 10, 2)` genera 2, 4, 6, 8."}, {"id": "26d2dc8d", "type": "code", "source": "for lectura in range(5):\n    print(\"Lectura número\", lectura, \"del sensor\")"}, {"id": "f17b995d", "type": "code", "source": "for angulo in range(0, 360, 90):\n    print(\"Girando el robot a\", angulo, \"grados\")"}, {"id": "8fa38c9d", "type": "markdown", "source": "## 🧩 Mini-desafío: `for`\n\nUn robot gira 90° cada vez que ejecuta un giro, y necesita dar exactamente una vuelta completa. Usa un `for` para mostrar 4 veces el mensaje `\"Girando 90°...\"`, y al terminar el bucle muestra `\"Vuelta completa\"`."}, {"id": "3a0a7c68", "type": "code", "source": ""}, {"id": "7ee8a5e8", "type": "markdown", "source": "## 🚩 Reto de la sesión: Mi reto completo\n\nEscribe un programa que combine **secuencia, decisión y bucle**: simula la lectura de un sensor de distancia 5 veces (usa `for` y un valor distinto simulado en cada vuelta, por ejemplo con `random`, o pídelo con `input()` si lo prefieres), y en cada lectura decide con un `if` si hay que **\"Frenar\"** (distancia < 20) o **\"Avanzar\"** (distancia >= 20)."}, {"id": "5f2d193a", "type": "code", "source": ""}, {"id": "179f6b9b", "type": "markdown", "source": "# 🟥 Sesión 8 — Funciones y reto final"}, {"id": "716eb038", "type": "markdown", "source": "## Funciones\n\nUna función es un bloque de código con nombre que podemos reutilizar todas las veces que queramos, pasándole distintos valores (llamados **parámetros**) cada vez — como crear tu propio bloque personalizado en MakeCode y usarlo después en distintos sitios del programa.\n\n```python\ndef nombre_funcion(parametro1, parametro2):\n    # código que hace algo con los parámetros\n    return resultado  # opcional\n```\n\n`def` (de *define*) indica que empieza la definición de una función; lo que hay entre paréntesis son los parámetros que recibirá; y `return` es opcional — se usa cuando la función debe devolver un resultado que luego queremos guardar o usar en otra parte del programa. Una función sin `return` simplemente ejecuta su código (por ejemplo, mostrar algo con `print`) y termina."}, {"id": "2c0ab0f1", "type": "code", "source": "def clasificar_temperatura(temp):\n    if temp < 15:\n        return \"Frío\"\n    elif temp < 28:\n        return \"Templado\"\n    else:\n        return \"Calor\"\n\nprint(clasificar_temperatura(10))\nprint(clasificar_temperatura(22))\nprint(clasificar_temperatura(32))"}, {"id": "f92218c7", "type": "markdown", "source": "Fíjate en que la función se **define** una sola vez, pero se **llama** (se usa) tantas veces como queramos, cada vez con un valor distinto — esa es justamente su utilidad: evitar repetir el mismo bloque de `if`/`elif`/`else` cada vez que necesitamos clasificar una temperatura."}, {"id": "4cca2426", "type": "markdown", "source": "## 🧩 Mini-desafío: Funciones\n\nEscribe una función `es_par(numero)` que reciba un número entero y devuelva `True` si es par y `False` si es impar (pista: usa el operador `%`). Pruébala con un par de números."}, {"id": "52e4030f", "type": "code", "source": ""}, {"id": "d1a56fca", "type": "markdown", "source": "## 🚩 Reto final a entregar (Evidencia CE1)\n\nElige **una** de las dos opciones. Cuando termines, documenta tu código con comentarios (`#`) explicando qué hace cada parte, guarda el notebook (`Shift+S`) y súbelo a la tarea correspondiente en Classroom.\n\n---\n\n### Opción A — Estación de sensores (nivel base, para todo el mundo)\n\nEscribe un programa que:\n1. Defina una función `clasificar_lectura(valor)` que reciba un número y devuelva `\"Frío\"`, `\"Templado\"` o `\"Calor\"` según los rangos que tú decidas.\n2. Use un bucle `while` que vaya pidiendo lecturas de temperatura con `input()`, mostrando la clasificación de cada una, **hasta que el usuario escriba `\"salir\"`**.\n3. Incluya comentarios explicando cada parte del programa.\n\n### Opción B — La conjetura del Dr. Lothar (nivel avanzado, opcional)\n\nEscribe un programa que reciba un número del usuario y repita el siguiente proceso usando un `while`:\n- Si el número es par, se divide por 2.\n- Si el número es impar, se multiplica por 3 y se suma 1.\n\nEsto se repite hasta llegar a 1, y entonces el programa muestra en pantalla cuántos pasos ha tardado.\n\n**Ejemplo:** con el número `6`: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (8 pasos).\n\n**Dato de color:** en 1937, [Lothar Collatz](https://es.wikipedia.org/wiki/Lothar_Collatz) conjeturó que este proceso siempre llega a 1, sin importar el número de partida — pero nadie ha conseguido demostrarlo todavía."}, {"id": "61b1511b", "type": "code", "source": "# Escribe aquí tu solución"}, {"id": "e58ece70", "type": "markdown", "source": "### ✅ Autocomprobación (solo si has elegido la Opción B)\n\nEjecuta esta celda para comprobar si tu solución de Collatz funciona correctamente. Si tu función se llama distinto a `pasos_collatz`, ajusta el nombre antes de ejecutar."}, {"id": "aafc174b", "type": "code", "source": "assert pasos_collatz(6) == 8, \"Revisa el caso con 6 (deberían ser 8 pasos)\"\nassert pasos_collatz(1) == 0, \"Revisa el caso con 1 (0 pasos, ya está en 1)\"\nprint(\"¡Correcto! 🎉\")"}, {"id": "689615ce", "type": "markdown", "source": "---\n# 🎁 Banco de retos opcionales\n\nSi terminas antes de tiempo o quieres seguir practicando por tu cuenta, aquí tienes algunos retos extra, ordenados por dificultad. Son completamente opcionales y no afectan a la evaluación."}, {"id": "9acf5f03", "type": "markdown", "source": "## ⭐ Fácil — Cálculo de promedio\n\nEscribe un programa que le pida al usuario 3 notas y calcule su promedio."}, {"id": "f77242e9", "type": "code", "source": ""}, {"id": "24d67f87", "type": "markdown", "source": "## ⭐⭐ Medio — Test de primalidad\n\nEscribe un programa que reciba un número y determine si es primo (solo es divisible por 1 y por sí mismo). Pista: usa un `for` y el operador `%`."}, {"id": "d4608d35", "type": "code", "source": ""}, {"id": "6a34c5dd", "type": "markdown", "source": "## ⭐⭐ Medio — Adivina adivinador\n\nEl programa elige (o tú fijas) un número secreto. El usuario va proponiendo números y el programa responde \"más alto\" o \"más bajo\" hasta que acierta, contando los intentos."}, {"id": "653596f4", "type": "code", "source": ""}, {"id": "874e0f3c", "type": "markdown", "source": "## ⭐⭐⭐ Difícil — La leyenda de Filius Bonacci\n\nLa sucesión de Fibonacci empieza en 0 y 1, y cada número siguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13...). Escribe una función que devuelva el término n-ésimo de la sucesión."}, {"id": "9f4e55e5", "type": "code", "source": ""}, {"id": "a1914069", "type": "markdown", "source": "---\n# 📎 Anexo A: Funciones con recursión (100% opcional)\n\nUna función puede llamarse a sí misma — a esto se le llama **recursión**. Por ejemplo, el factorial de un número (`5! = 5×4×3×2×1`) se puede calcular así:"}, {"id": "d0816485", "type": "code", "source": "def factorial(n):\n    if n <= 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(\"5! =\", factorial(5))"}, {"id": "51991df3", "type": "markdown", "source": "---\n# 📎 Anexo C: Python en la ingeniería electrónica (100% opcional)\n\nPython no se queda solo en la pantalla del ordenador: es uno de los lenguajes más usados para controlar hardware real. Con librerías como `pyserial` se puede comunicar un ordenador con una placa Arduino o ESP32 a través del puerto USB; con `machine` (en MicroPython, una versión reducida de Python) se puede programar directamente el microcontrolador para leer sensores y mover actuadores, de forma muy parecida a como ya lo haces con ArduinoBlocks; y en proyectos de análisis de datos, Python se usa para procesar y visualizar las lecturas que un sistema electrónico va registrando a lo largo del tiempo (por ejemplo, la temperatura de un invernadero durante varios días).\n\nSi te ha picado el gusanillo de la programación, esta es una buena pista de por dónde seguir explorando en 2º de Bachillerato."}];

var SHEET_NAME = "Progreso_RFD1_Python";
var SHEET_ID_PROPERTY = "PROGRESO_SHEET_ID";

// IMPORTANTE: correos con acceso al panel de correccion en /exec?vista=profesor
var PROFESOR_EMAILS = [
  "profe@tucentro.es"   // <-- CAMBIA ESTO: tu correo (puedes poner varios, separados por comas)
];

// Curso y tarea de Classroom vinculados a este cuaderno.
// Rellena el id del curso (lo ves en la URL de tu clase) y, despues de
// ejecutar crearTareaCuadernoPython, el id de la tarea que salga en los registros.
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
        .setTitle("Panel de corrección - RFD I Python")
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
      .setTitle("Python - Robotica y Fabricacion Digital I")
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
      sheet = null; // El ID guardado ya no es valido, se recrea abajo.
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

  // Migracion automatica: si la hoja es de antes de tener nota/feedback.
  var cabecera = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
  if (cabecera.length < 6) {
    sheet.getRange(1, 5, 1, 2).setValues([["nota", "feedback"]]);
  }

  return sheet;
}

function buscarFilaUsuario_(sheet, email) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      return i + 1; // fila real en la hoja (1-indexada, con cabecera)
    }
  }
  return -1;
}

/** Llamada desde el cliente: guarda el estado actual de las celdas. */
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
  if (!props.getProperty(SHEET_ID_PROPERTY)) return null; // aun no existe la hoja

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
  if (!props.getProperty(SHEET_ID_PROPERTY)) return []; // aun no existe la hoja

  var sheet = obtenerHoja_();
  var data = sheet.getDataRange().getValues();
  var resultado = [];

  for (var i = 1; i < data.length; i++) {
    var fila = data[i];
    if (!fila[0]) continue; // fila vacia
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
  if (PROFESOR_EMAILS.indexOf(email) === -1) {
    throw new Error("No autorizado.");
  }
  return listarProgresos_();
}

/** Llamada desde el panel de profesor: guarda nota y feedback de un alumno. */
function guardarCorreccion(emailAlumno, nota, feedback) {
  var email = Session.getActiveUser().getEmail();
  if (PROFESOR_EMAILS.indexOf(email) === -1) {
    throw new Error("No autorizado.");
  }

  var sheet = obtenerHoja_();
  var fila = buscarFilaUsuario_(sheet, emailAlumno);
  if (fila === -1) {
    throw new Error("No se encontró ninguna entrega de " + emailAlumno);
  }

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

/**
 * Vuelca la nota de un alumno concreto en Classroom (solo lo puede
 * ejecutar el profesorado, ya comprobado en guardarCorreccion).
 */
function publicarNotaEnClassroom_(emailAlumno, nota) {
  if (!CLASSROOM_COURSE_ID || !CLASSROOM_COURSEWORK_ID) {
    throw new Error("Falta configurar CLASSROOM_COURSE_ID y CLASSROOM_COURSEWORK_ID en Code.gs.");
  }
  var response = Classroom.Courses.CourseWork.StudentSubmissions.list(
    CLASSROOM_COURSE_ID, CLASSROOM_COURSEWORK_ID, { userId: emailAlumno }
  );
  var subs = response.studentSubmissions || [];
  if (subs.length === 0) {
    throw new Error("No se encontró la entrega de " + emailAlumno + " en Classroom (¿está matriculado en esa clase y tarea?).");
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
    // La nota ya ha quedado guardada aunque esto falle; solo afecta a
    // si Classroom la marca como "devuelta" formalmente.
  }
}

/** Llamada desde el panel de profesor: reabre una entrega ya cerrada. */
function reabrirEntrega(emailAlumno) {
  var email = Session.getActiveUser().getEmail();
  if (PROFESOR_EMAILS.indexOf(email) === -1) {
    throw new Error("No autorizado.");
  }

  var sheet = obtenerHoja_();
  var fila = buscarFilaUsuario_(sheet, emailAlumno);
  if (fila === -1) {
    throw new Error("No se encontró ninguna entrega de " + emailAlumno);
  }

  sheet.getRange(fila, 3, 1, 1).setValue(false); // columna 3 = entregado
  return { ok: true };
}

/** Utilidad para incluir el HTML del notebook dentro de la plantilla. */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
/**
 * Crea la tarea de Classroom DESDE ESTE MISMO proyecto de Apps Script.
 *
 * Es imprescindible crearla así (no a mano desde la web de Classroom):
 * la API de Classroom solo permite calificar por API las tareas que
 * fueron creadas por el mismo proyecto que hace la llamada de
 * calificación. Una tarea creada a mano en la web pertenece al
 * proyecto interno de Classroom, no al nuestro, y por eso el volcado
 * de notas fallaba con "ProjectPermissionDenied" aunque los permisos
 * estuvieran bien concedidos.
 *
 * CÓMO USARLO:
 * 1. Pega esta función en el MISMO proyecto donde está Code.gs (el de
 *    la app completa), ya que necesita el servicio Classroom ya
 *    activado y los ámbitos ya declarados en el manifiesto.
 * 2. Si ya tienes una tarea de prueba creada a mano, bórrala de
 *    Classroom primero (o simplemente ignórala, no pasa nada por
 *    tener una tarea de más).
 * 3. Ejecuta crearTareaCuadernoPython. Se crea como BORRADOR: no la verá
 *    el alumnado hasta que tú la publiques a mano desde Classroom,
 *    cuando lo consideres oportuno (un clic, como siempre haces).
 * 4. Mira "Ver" > "Registros de ejecución" para ver el id de la tarea
 *    NUEVA que se ha creado.
 * 5. Sustituye CLASSROOM_COURSEWORK_ID en Code.gs por ese nuevo id.
 */
function crearTareaCuadernoPython() {
  if (!CLASSROOM_COURSE_ID) throw new Error("Falta configurar CLASSROOM_COURSE_ID en Code.gs.");
  var courseId = CLASSROOM_COURSE_ID; // usa el mismo curso de pruebas que ya tienes configurado

  var tarea = {
    title: "Cuaderno de Python - Sesiones 5-8",
    description: "Actividad del bloque de Python de Robótica y Fabricación Digital I. " +
        "Se trabaja y se entrega desde la app del cuaderno, no hace falta adjuntar nada aquí.",
    workType: "ASSIGNMENT",
    state: "DRAFT", // borrador: la publicas tú a mano desde Classroom cuando quieras
    maxPoints: 10
  };

  var creada = Classroom.Courses.CourseWork.create(tarea, courseId);

  Logger.log("Tarea creada correctamente, como BORRADOR (no visible para el alumnado todavía).");
  Logger.log("id de tarea (nuevo CLASSROOM_COURSEWORK_ID): " + creada.id);
  Logger.log("Recuerda actualizar Code.gs con este id y volver a implementar.");
  Logger.log("Publícala desde Classroom cuando decidas asignarla.");
}