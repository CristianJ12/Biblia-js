/*
========================== OBJETO WINDOW ==========================
El objeto `window` representa la ventana del navegador y contiene el documento DOM.
Es el objeto global en un navegador web, lo que significa que las variables y funciones
declaradas globalmente se convierten en propiedades y métodos del objeto window.
*/

/* ========================= MÉTODOS DEL OBJETO WINDOW ========================= */

/*
1. window.alert(mensaje)
Sirve para mostrar una ventana emergente con un mensaje de alerta y un botón "Aceptar".

- Parámetro:
  mensaje (string): El texto que se mostrará en la alerta.
*/

window.alert("¡Hola, bienvenido a la guía del objeto window!");

/*
2. window.prompt(mensaje, valorPorDefecto)
Muestra una ventana emergente con un mensaje y un campo de entrada para el usuario.

- Parámetros:
  mensaje (string): Texto que explica qué debe introducir el usuario.
  valorPorDefecto (string, opcional): Valor predefinido en el campo de entrada.
- Devuelve:
  El texto introducido por el usuario o `null` si el usuario cancela la entrada.
*/

let nombre = window.prompt("¿Cuál es tu nombre?", "Escribe aquí tu nombre");
console.log(`Nombre introducido: ${nombre}`);

/*
3. window.confirm(mensaje)
Muestra una ventana emergente con un mensaje y botones "Aceptar" y "Cancelar".

- Parámetro:
  mensaje (string): Texto para la confirmación.
- Devuelve:
  `true` si el usuario hace clic en "Aceptar", `false` si selecciona "Cancelar".
*/

let confirmar = window.confirm("¿Deseas continuar con esta operación?");
console.log(confirmar ? "Operación aceptada." : "Operación cancelada.");

/*
4. document.write(texto)
Escribe directamente en el documento HTML desde JavaScript. 

- Parámetro:
  texto (string): Contenido HTML o texto que se añadirá al documento.
- Advertencia:
  Si se usa después de que la página ya ha sido cargada, borrará el contenido existente.
*/

document.write("<p style='color:blue;'>¡Esto ha sido escrito con document.write!</p>");

/*
5. window.open(url, nombreVentana, especificaciones)
Abre una nueva ventana o pestaña con la URL especificada.

- Parámetros:
  url (string): La dirección web a abrir.
  nombreVentana (string): Nombre de la ventana (usado para referenciarla luego).
  especificaciones (string, opcional): Configuración de la ventana (tamaño, posición, etc.).
  
Ejemplo de especificaciones:
- width (ancho de la ventana)
- height (alto de la ventana)
- left, top (posición de la ventana)
*/

let nuevaVentana = window.open("https://www.example.com", "NuevaVentana", "width=600,height=400");
console.log("Nueva ventana abierta:", nuevaVentana);

/*
6. window.close()
Cierra la ventana abierta con `window.open()`. 

Nota:
- Solo funciona si la ventana fue abierta desde un script (por seguridad).
*/

if (nuevaVentana) {
  nuevaVentana.close();
  console.log("La ventana se ha cerrado.");
}

/* ========================= OTRAS PROPIEDADES ÚTILES ========================= */

/*
7. window.innerWidth y window.innerHeight
Devuelven el ancho y alto de la ventana del navegador (excluyendo barras de herramientas).

- Propiedades:
  window.innerWidth: Ancho en píxeles de la ventana visible.
  window.innerHeight: Alto en píxeles de la ventana visible.
*/

console.log(`Ancho de la ventana: ${window.innerWidth}px`);
console.log(`Alto de la ventana: ${window.innerHeight}px`);

/*
8. window.scrollTo(x, y)
Desplaza la ventana a una posición específica.

- Parámetros:
  x (number): Posición horizontal en píxeles.
  y (number): Posición vertical en píxeles.
*/

window.scrollTo(0, 100);
console.log("La ventana se desplazó a 100 píxeles verticalmente.");

/*
9. window.location
Proporciona información sobre la URL actual y permite redireccionar.

- Métodos y Propiedades:
  - window.location.href: Devuelve la URL actual.
  - window.location.reload(): Recarga la página actual.
*/

console.log(`URL actual: ${window.location.href}`);
// window.location.reload(); // Descomentar para recargar la página actual

/*
10. window.setTimeout(funcion, tiempo)
Ejecuta una función después de un tiempo específico (en milisegundos).

- Parámetros:
  funcion (function): La función a ejecutar.
  tiempo (number): Tiempo en milisegundos antes de ejecutar la función.
*/

setTimeout(() => {
  console.log("Esto se ejecutó después de 3 segundos.");
}, 3000);

/*
11. window.setInterval(funcion, tiempo)
Ejecuta una función repetidamente en intervalos de tiempo especificados.

- Parámetros:
  funcion (function): La función a ejecutar.
  tiempo (number): Intervalo de tiempo en milisegundos.
*/

let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`Intervalo ejecutado ${contador} veces.`);
  if (contador === 5) {
    clearInterval(intervalo); // Detiene el intervalo después de 5 ejecuciones
    console.log("Intervalo detenido.");
  }
}, 1000);

/*
========================== CONCATENACIÓN DE CADENAS ==========================

1. Concatenación usando el operador `+`
Sirve para unir cadenas de texto con variables.
- Sintaxis:
  "string " + variable + " string"
*/

let nombre = "Juan";
let saludo = "Hola, " + nombre + "! Bienvenido.";
console.log(saludo); // Salida: Hola, Juan! Bienvenido.

/*
2. Concatenación usando Template Literals (Backticks y ${})
Plantillas de cadena que permiten interpolar variables y expresiones dentro de una cadena.
- Sintaxis:
  `String ${variable} string string ${expresion}`
*/

let edad = 30;
let saludoTemplate = `Hola, ${nombre}! Tienes ${edad} años.`;
console.log(saludoTemplate); // Salida: Hola, Juan! Tienes 30 años.

/*
3. Ejemplo con una expresión
Permite evaluar expresiones directamente en la cadena.
*/

let num1 = 5;
let num2 = 10;
let resultado = `La suma de ${num1} y ${num2} es ${num1 + num2}.`;
console.log(resultado); // Salida: La suma de 5 y 10 es 15.

/* ========================== COMPARACIÓN EN JAVASCRIPT ========================== */

/*
1. Comparar Números
Se utilizan operadores de comparación para determinar relaciones entre números.
- Operadores:
  > : mayor que
  < : menor que
  >= : mayor o igual que
  <= : menor o igual que
  == : igual a (compara valor)
  === : estrictamente igual a (compara valor y tipo)
*/

let numero1 = 10;
let numero2 = 20;

console.log(numero1 > numero2);  // false
console.log(numero1 < numero2);  // true
console.log(numero1 >= numero2); // false
console.log(numero1 <= numero2); // true
console.log(numero1 == 10);      // true
console.log(numero1 === "10");   // false (diferente tipo)

/*
2. Comparar Cadenas de Texto
Se comparan alfabéticamente basándose en el orden Unicode.
- Operadores:
  == : igual a
  === : estrictamente igual a
  != : diferente de
  !== : estrictamente diferente de
*/

let texto1 = "hola";
let texto2 = "mundo";
let texto3 = "hola";

console.log(texto1 == texto2);  // false
console.log(texto1 === texto3); // true
console.log(texto1 != texto2);  // true
console.log(texto1 !== texto3); // false

/*
Comparación alfabética:
- Las minúsculas son mayores que las mayúsculas en el orden Unicode.
*/

let cadena1 = "a";
let cadena2 = "b";
let cadena3 = "A";

console.log(cadena1 < cadena2);  // true
console.log(cadena1 > cadena3);  // true (minúsculas > mayúsculas)

/* ========================= COMPARACIÓN DE ARRAYS ========================= */

/*
1. Comparar Referencias
En JavaScript, los arrays se comparan por su referencia en memoria, no por su contenido.
*/

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = array1;

console.log(array1 == array2);  // false (distintas referencias)
console.log(array1 === array2); // false
console.log(array1 == array3);  // true (misma referencia)
console.log(array1 === array3); // true

/*
2. Comparar Contenidos de Arrays
Para comparar los elementos de dos arrays, se debe iterar sobre ellos.
*/

function arraysIguales(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; // Longitudes diferentes
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false; // Diferencia encontrada
  }
  return true;
}

console.log(arraysIguales(array1, array2)); // true
console.log(arraysIguales(array1, array3)); // true

/* ========================= COMPARACIÓN DE OBJETOS ========================= */

/*
1. Comparar Referencias
Al igual que los arrays, los objetos se comparan por referencia.
*/

let obj1 = { nombre: "Juan", edad: 30 };
let obj2 = { nombre: "Juan", edad: 30 };
let obj3 = obj1;

console.log(obj1 == obj2);  // false (distintas referencias)
console.log(obj1 === obj2); // false
console.log(obj1 == obj3);  // true (misma referencia)
console.log(obj1 === obj3); // true

/*
2. Comparar Contenido de Objetos
Para comparar propiedades y valores de dos objetos, se debe verificar clave por clave.
*/

function objetosIguales(objA, objB) {
  let clavesA = Object.keys(objA);
  let clavesB = Object.keys(objB);

  if (clavesA.length !== clavesB.length) return false; // Diferentes cantidades de claves

  for (let clave of clavesA) {
    if (objA[clave] !== objB[clave]) return false; // Diferencia encontrada
  }
  return true;
}

console.log(objetosIguales(obj1, obj2)); // true
console.log(objetosIguales(obj1, obj3)); // true
/*
========================== OBJETO Math EN JAVASCRIPT ==========================

El objeto Math en JavaScript proporciona propiedades y métodos matemáticos.
- Es estático: No se instancia con `new Math()`.
- Sus propiedades y métodos se invocan directamente usando `Math`.

*/

/* ========================== PROPIEDADES DE Math ========================== */

/*
1. Math.PI
Descripción: Representa la constante π (pi), que es la relación entre la circunferencia
y el diámetro de un círculo.
*/
console.log("Math.PI:", Math.PI); // Salida: 3.141592653589793

/*
2. Math.SQRT2
Descripción: Representa la raíz cuadrada de 2 (~1.414).
*/
console.log("Math.SQRT2:", Math.SQRT2); // Salida: 1.4142135623730951

/* ========================== MÉTODOS DE Math ========================== */

/*
1. Math.pow(base, exponente)
Descripción: Calcula la potencia de una base elevada a un exponente.
Sintaxis: Math.pow(base, exponente)
*/
console.log("2^3:", Math.pow(2, 3)); // Salida: 8

/*
2. Math.sqrt(x)
Descripción: Devuelve la raíz cuadrada de un número positivo.
*/
console.log("Raíz cuadrada de 16:", Math.sqrt(16)); // Salida: 4

/*
3. Math.random()
Descripción: Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
*/
console.log("Número aleatorio entre 0 y 1:", Math.random()); // Ejemplo: 0.123456

/*
Generar un número aleatorio entre un rango específico [min, max]
*/
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Número aleatorio entre 1 y 100:", numeroAleatorio(1, 100));

/*
4. Math.min(...valores)
Descripción: Devuelve el menor de los valores proporcionados.
*/
console.log("Mínimo entre 10, 20, 30:", Math.min(10, 20, 30)); // Salida: 10

/*
5. Math.max(...valores)
Descripción: Devuelve el mayor de los valores proporcionados.
*/
console.log("Máximo entre 10, 20, 30:", Math.max(10, 20, 30)); // Salida: 30

/*
6. Math.round(x)
Descripción: Redondea un número al entero más cercano.
*/
console.log("Math.round(4.7):", Math.round(4.7)); // Salida: 5
console.log("Math.round(4.4):", Math.round(4.4)); // Salida: 4

/*
7. Math.floor(x)
Descripción: Redondea hacia abajo al número entero menor más cercano.
*/
console.log("Math.floor(4.7):", Math.floor(4.7)); // Salida: 4
console.log("Math.floor(-4.7):", Math.floor(-4.7)); // Salida: -5

/*
8. Math.ceil(x)
Descripción: Redondea hacia arriba al número entero mayor más cercano.
*/
console.log("Math.ceil(4.3):", Math.ceil(4.3)); // Salida: 5
console.log("Math.ceil(-4.3):", Math.ceil(-4.3)); // Salida: -4

/*
9. Math.abs(x)
Descripción: Devuelve el valor absoluto de un número.
*/
console.log("Valor absoluto de -10:", Math.abs(-10)); // Salida: 10

/*
10. Math.trunc(x)
Descripción: Devuelve la parte entera de un número, eliminando los decimales.
*/
console.log("Math.trunc(4.7):", Math.trunc(4.7)); // Salida: 4
console.log("Math.trunc(-4.7):", Math.trunc(-4.7)); // Salida: -4

/*
11. Math.sign(x)
Descripción: Devuelve el signo de un número:
- 1 si es positivo
- -1 si es negativo
- 0 si es cero
*/
console.log("Math.sign(10):", Math.sign(10)); // Salida: 1
console.log("Math.sign(-5):", Math.sign(-5)); // Salida: -1
console.log("Math.sign(0):", Math.sign(0));   // Salida: 0

/*
12. Ejemplo Completo de Cálculo Matemático

Calcular el área de un círculo con radio aleatorio entre 1 y 10:
Fórmula: Área = π * r^2
*/
let radio = numeroAleatorio(1, 10);
let area = Math.PI * Math.pow(radio, 2);
console.log(`Radio: ${radio}, Área del círculo: ${area.toFixed(2)}`);

/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== OBJETO Date EN JAVASCRIPT ==========================

El objeto `Date` permite trabajar con fechas y horas en JavaScript.
- Puede obtener, manipular y formatear fechas.
- Las fechas se cuentan desde el 1 de enero de 1970 (epoch).

*/

/* ========================== CREACIÓN Y OBTENCIÓN DE FECHAS ========================== */

/*
1. Crear una fecha actual
Descripción: `new Date()` crea una instancia con la fecha y hora actual.
*/
let hoy = new Date();
console.log("Fecha actual:", hoy); // Ejemplo: 2024-06-01T10:00:00.000Z

/*
2. Crear una fecha específica
Descripción: Pasa una fecha en formato 'YYYY-MM-DD' o 'YYYY/MM/DD'.
*/
let fechaEspecifica = new Date("2023-12-31");
console.log("Fecha específica:", fechaEspecifica);

/*
3. Crear una fecha usando valores numéricos:
new Date(año, mes, día, hora, minutos, segundos, milisegundos)
Nota: El mes va de 0 (enero) a 11 (diciembre).
*/
let fechaNumerica = new Date(2023, 0, 1, 12, 30, 0);
console.log("Fecha numérica:", fechaNumerica);

/* ========================== MÉTODOS PARA OBTENER DÍA, MES Y AÑO ========================== */

/*
1. Obtener Día, Mes y Año
Descripción: Métodos útiles para extraer componentes individuales.
*/
let fecha = new Date();
let dia = fecha.getDate();          // Día del mes (1-31)
let mes = fecha.getMonth() + 1;     // Mes (0-11, sumamos 1 para obtener 1-12)
let año = fecha.getFullYear();      // Año (4 dígitos)
console.log(`Día: ${dia}, Mes: ${mes}, Año: ${año}`);

/*
2. Obtener el nombre del mes
Descripción: Utiliza un array de nombres de meses.
*/
const nombresMeses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let nombreMes = nombresMeses[fecha.getMonth()];
console.log(`Mes: ${nombreMes}`);

/* ========================== COMPARAR Y RESTAR FECHAS ========================== */

/*
1. Comparar dos fechas
Descripción: Puedes usar los operadores de comparación directamente.
*/
let fecha1 = new Date("2023-01-01");
let fecha2 = new Date("2023-12-31");
console.log("Fecha1 < Fecha2:", fecha1 < fecha2); // true

/*
2. Restar fechas
Descripción: La diferencia entre fechas devuelve milisegundos.
*/
let diferenciaMs = fecha2 - fecha1;
let diasDiferencia = diferenciaMs / (1000 * 60 * 60 * 24); // Convertir a días
console.log("Diferencia en días:", diasDiferencia);

/* ========================== VALIDACIÓN Y CONVERSIÓN DE FECHAS ========================== */

/*
1. Validar si una fecha es válida
Descripción: Una fecha no válida devuelve NaN cuando se usa con `isNaN()`.
*/
let fechaInvalida = new Date("2023-13-01");
if (fechaInvalida instanceof Date && !isNaN(fechaInvalida)) {
  console.log("La fecha es válida.");
} else {
  console.log("La fecha no es válida."); // Se ejecuta
}

/*
2. Validar formato dd/mm/YYYY o dd-mm-YYYY usando Regex
*/
function esFechaValida(fecha) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])([\/-])(0[1-9]|1[012])\2\d{4}$/;
  return regex.test(fecha);
}
console.log("01/08/2023 es válida:", esFechaValida("01/08/2023")); // true

/*
3. Convertir String a Date (Formato dd/mm/YYYY)
*/
let fechaString = "01/08/2023";
let partes = fechaString.split("/");
let fechaConvertida = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);
console.log("Fecha convertida:", fechaConvertida);

/*
4. Convertir Date a String (Formato dd/mm/YYYY)
*/
let fechaActual = new Date();
let diaString = ("0" + fechaActual.getDate()).slice(-2);
let mesString = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
let añoString = fechaActual.getFullYear();
let fechaFormateada = `${diaString}/${mesString}/${añoString}`;
console.log("Fecha formateada:", fechaFormateada);

/* ========================== OTROS MÉTODOS ÚTILES ========================== */

/*
1. Obtener la hora actual
*/
let hora = fecha.getHours();    // Hora (0-23)
let minutos = fecha.getMinutes(); // Minutos (0-59)
let segundos = fecha.getSeconds(); // Segundos (0-59)
console.log(`Hora: ${hora}:${minutos}:${segundos}`);

/*
2. Añadir días a una fecha
*/
function añadirDias(fecha, dias) {
  let nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}
let nuevaFecha = añadirDias(fecha, 5);
console.log("Fecha con 5 días más:", nuevaFecha);

/*
3. Comparar si dos fechas son iguales (sin considerar hora)
*/
function sonFechasIguales(f1, f2) {
  return f1.toDateString() === f2.toDateString();
}
console.log("Fechas iguales:", sonFechasIguales(new Date(), new Date()));

/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== EXPRESIONES REGULARES (REGEX) ==========================

Las expresiones regulares son patrones utilizados para realizar búsquedas, validaciones y manipulaciones 
de texto en cadenas de JavaScript. Son potentes y se basan en una sintaxis específica.

*/

/* ========================== FORMAS DE CREAR UNA EXPRESIÓN REGULAR ========================== */

/*
1. Utilizando Literales de Regex (Recomendado para patrones estáticos)
*/
let regexLiteral = /patron/;
console.log("Literal Regex:", regexLiteral);

/*
2. Utilizando el Constructor `RegExp` (Útil para patrones dinámicos)
*/
let patron = "mundo";
let regexConstructor = new RegExp(patron, "g");
console.log("Constructor Regex:", regexConstructor);

/* ========================== MÉTODOS DE STRING QUE USAN REGEX ========================== */

/*
1. test()
Descripción: Comprueba si una cadena coincide con un patrón regex. Devuelve `true` o `false`.
*/
let texto = "Hola, mundo!";
let regexTest = /mundo/;
console.log("¿Contiene 'mundo'?:", regexTest.test(texto)); // true

/*
2. match()
Descripción: Busca coincidencias y devuelve un array con las coincidencias o `null` si no hay coincidencias.
*/
let regexMatch = /o/g; // Coincidencia global de la letra "o"
let coincidencias = texto.match(regexMatch);
console.log("Coincidencias encontradas:", coincidencias); // ["o", "o", "o"]

/*
3. replace()
Descripción: Reemplaza coincidencias con otra cadena o valor.
*/
let regexReplace = /mundo/;
let nuevoTexto = texto.replace(regexReplace, "universo");
console.log("Texto reemplazado:", nuevoTexto); // "Hola, universo!"

/*
4. split()
Descripción: Divide una cadena en un array basado en un patrón regex.
*/
let textoDividir = "manzana, banana, naranja";
let partes = textoDividir.split(/,\s*/);
console.log("Partes divididas:", partes); // ["manzana", "banana", "naranja"]

/* ========================== MODIFICADORES EN REGEX ========================== */

/*
1. Ignorar Mayúsculas y Minúsculas (`i`)
*/
let regexIgnoreCase = /hola/i;
console.log("Ignorar mayúsculas:", regexIgnoreCase.test("HOLA")); // true

/*
2. Coincidencia Global (`g`)
*/
let textoRepetido = "manzana, banana, manzana";
let regexGlobal = /manzana/g;
let coincidenciasGlobales = textoRepetido.match(regexGlobal);
console.log("Coincidencias globales:", coincidenciasGlobales); // ["manzana", "manzana"]

/*
3. Coincidencia Multilínea (`m`)
*/
let textoMultilinea = `Hola
mundo
hola`;
let regexMultilinea = /^hola$/im; // "im" = ignora mayúsculas y multilínea
console.log("Coincidencias multilinea:", textoMultilinea.match(regexMultilinea)); // ["Hola", "hola"]

/* ========================== PATRONES COMUNES EN REGEX ========================== */

/*
1. Patrones básicos:
^   : Comienza aquí
$   : Termina aquí
.   : Cualquier carácter excepto nueva línea
*/

console.log(/^Hola/.test("Hola, mundo!")); // true
console.log(/mundo$/.test("Hola, mundo")); // true

/*
2. Caracteres especiales:
\d  : Un dígito [0-9]
\D  : No es un dígito
\w  : Un carácter de palabra (letras, dígitos y guión bajo)
\W  : No es un carácter de palabra
\s  : Un espacio en blanco (espacio, tab, newline)
\S  : No es un espacio en blanco
*/

let cadena = "123ABC_";
console.log("\\d:", /\d/.test(cadena)); // true (contiene dígitos)
console.log("\\W:", /\W/.test(cadena)); // false (no tiene caracteres no-palabra)

/*
3. Cuantificadores:
a*  : 'a' aparece 0 o más veces
a+  : 'a' aparece 1 o más veces
a?  : 'a' aparece 0 o 1 vez
a{2}    : 'a' exactamente 2 veces
a{2,4}  : 'a' entre 2 y 4 veces
*/

console.log("a*:", /a*/.test("aaaa")); // true
console.log("a{2,4}:", /a{2,4}/.test("aa")); // true

/*
4. Grupos y Alternativas:
()  : Agrupa un patrón
|   : Operador OR
*/

let regexGrupo = /(manzana|banana)/;
console.log("Grupo:", regexGrupo.test("Tengo una banana")); // true

/* ========================== EJEMPLOS PRÁCTICOS ========================== */

/* ======================== 1. Validar un Email ======================== */
/*
Descripción: Verifica si el formato del email es válido. 
Debe contener texto, seguido de '@', un dominio y una extensión (.com, .org, etc.)
*/

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "correo@example.com";
console.log("¿Email válido?:", emailRegex.test(email)); // true

/* ======================== 2. Validar un Número de Teléfono ======================== */
/*
Descripción: Verifica números de teléfono con formato español (600-123-456).
Empieza por '6' y sigue con 2 dígitos, un guion, 3 dígitos, otro guion y 3 dígitos.
*/

let telefonoRegex = /^6\d{2}-\d{3}-\d{3}$/;
let telefono = "600-123-456";
console.log("¿Teléfono válido?:", telefonoRegex.test(telefono)); // true

/* ======================== 3. Validar un DNI (Formato Español) ======================== */
/*
Descripción: El DNI español consta de 8 números seguidos de una letra (ejemplo: 12345678A).
La letra final debe coincidir con el resto del número % 23.
*/

function validarDNI(dni) {
  const regexDNI = /^[0-9]{8}[A-Z]$/i;
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (regexDNI.test(dni)) {
    const numero = parseInt(dni.slice(0, 8));
    const letra = dni.charAt(8).toUpperCase();
    return letra === letras[numero % 23];
  }
  return false;
}

console.log("¿DNI válido?:", validarDNI("12345678Z")); // true

/* ======================== 4. Validar Códigos Postales (España) ======================== */
/*
Descripción: El código postal en España debe tener exactamente 5 dígitos.
*/

let codigoPostalRegex = /^\d{5}$/;
let codigoPostal = "28001";
console.log("¿Código postal válido?:", codigoPostalRegex.test(codigoPostal)); // true

/* ======================== 5. Extraer Letras de una Cadena ======================== */
/*
Descripción: Extrae todas las letras de una cadena de texto, ignorando números y símbolos.
*/

let cadena = "Hola 123, bienvenido!";
let letrasExtraidas = cadena.match(/[a-zA-Z]+/g).join(" ");
console.log("Letras extraídas:", letrasExtraidas); // "Hola bienvenido"

/* ======================== 6. Validar Nombres y Apellidos ======================== */
/*
Descripción: Valida nombres y apellidos que pueden incluir letras y espacios (mínimo 2 caracteres).
*/

let nombreRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,}$/;
let nombre = "Juan Pérez";
console.log("¿Nombre válido?:", nombreRegex.test(nombre)); // true

/* ======================== 7. Validar una URL ======================== */
/*
Descripción: Verifica si la cadena tiene el formato válido de una URL (http/https).
*/

let urlRegex = /^(https?:\/\/)?(www\.)?[\w\-]+(\.[a-zA-Z]{2,})(\/\S*)?$/;
let url = "https://www.google.com";
console.log("¿URL válida?:", urlRegex.test(url)); // true

/* ======================== 8. Validar Números Enteros y Decimales ======================== */
/*
Descripción: Verifica si la cadena representa un número entero o decimal.
*/

let numeroRegex = /^-?\d+(\.\d+)?$/;
let numero1 = "123";
let numero2 = "-45.67";
console.log("¿Número entero válido?:", numeroRegex.test(numero1)); // true
console.log("¿Número decimal válido?:", numeroRegex.test(numero2)); // true

/* ======================== 9. Validar una Hora (Formato hh:mm) ======================== */
/*
Descripción: Valida si la cadena sigue el formato de hora 24 horas (ejemplo: 14:30).
*/

let horaRegex = /^([01]\d|2[0-3]):[0-5]\d$/;
let hora = "14:30";
console.log("¿Hora válida?:", horaRegex.test(hora)); // true

/* ======================== 10. Validar una Tarjeta de Crédito ======================== */
/*
Descripción: Valida números de tarjeta de crédito en el formato 4 grupos de 4 dígitos.
*/

let tarjetaRegex = /^(\d{4}-){3}\d{4}$/;
let tarjeta = "1234-5678-9012-3456";
console.log("¿Tarjeta válida?:", tarjetaRegex.test(tarjeta)); // true

/* ======================== 11. Validar una Dirección IP ======================== */
/*
Descripción: Verifica direcciones IPv4 (ejemplo: 192.168.1.1).
*/

let ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
let ip = "192.168.1.1";
console.log("¿IP válida?:", ipRegex.test(ip)); // true

/* ======================== 12. Validar Texto Sin Caracteres Especiales ======================== */
/*
Descripción: Asegura que el texto no tenga caracteres especiales (sólo letras, números y espacios).
*/

let textoLimpioRegex = /^[a-zA-Z0-9\s]+$/;
let textoLimpio = "Texto limpio 123";
console.log("¿Texto limpio?:", textoLimpioRegex.test(textoLimpio)); // true

/* ======================== RESUMEN ========================
- **Validar Emails:** Formato estándar con "@" y dominio.
- **Teléfonos:** Formato con guiones.
- **DNI:** 8 números y 1 letra.
- **Código postal:** Exactamente 5 dígitos.
- **URLs:** Con http/https y dominio válido.
- **Horas:** Formato de 24 horas.
- **Tarjetas:** 4 grupos de 4 dígitos con guiones.
- **IPs:** Formato IPv4.
========================================================== */


/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== CLASE STRING (CADENAS) EN JAVASCRIPT ==========================

La clase String se utiliza para representar y manipular secuencias de caracteres en JavaScript.
Las cadenas son **inmutables**, lo que significa que no pueden modificarse una vez creadas.
En cambio, cualquier operación sobre una cadena devuelve una nueva cadena.
*/

/* ========================== MÉTODOS DE LA CLASE STRING ========================== */

/*
1. charAt()
Descripción: Devuelve el carácter en una posición especificada de la cadena.
Sintaxis: string.charAt(index)
*/

let texto = "Hola, mundo!";
console.log("charAt(0):", texto.charAt(0)); // "H"
console.log("charAt(5):", texto.charAt(5)); // ","
console.log("charAt último carácter:", texto.charAt(texto.length - 1)); // "!"

/*
2. toUpperCase()
Descripción: Convierte todos los caracteres de la cadena a mayúsculas.
Sintaxis: string.toUpperCase()
*/

let textoMinusculas = "hola, mundo!";
let textoMayusculas = textoMinusculas.toUpperCase();
console.log("toUpperCase:", textoMayusculas); // "HOLA, MUNDO!"

/*
3. toLowerCase()
Descripción: Convierte todos los caracteres de la cadena a minúsculas.
Sintaxis: string.toLowerCase()
*/

let textoMay = "HOLA, MUNDO!";
console.log("toLowerCase:", textoMay.toLowerCase()); // "hola, mundo!"

/*
4. includes()
Descripción: Comprueba si una cadena contiene otra cadena.
Sintaxis: string.includes(searchString, position)
*/

let frase = "El rápido zorro marrón salta sobre el perro perezoso.";
console.log("includes('rápido'):", frase.includes("rápido")); // true
console.log("includes('gato'):", frase.includes("gato")); // false
console.log("includes desde posición 10:", frase.includes("zorro", 10)); // false

/*
5. indexOf()
Descripción: Encuentra la posición de la primera ocurrencia de una cadena.
Sintaxis: string.indexOf(searchValue, fromIndex)
*/

console.log("indexOf('zorro'):", frase.indexOf("zorro")); // 10
console.log("indexOf('gato'):", frase.indexOf("gato")); // -1

/*
6. lastIndexOf()
Descripción: Encuentra la posición de la última ocurrencia de una cadena.
*/

console.log("lastIndexOf('el'):", frase.lastIndexOf("el")); // 31

/*
7. substring()
Descripción: Extrae una parte de la cadena entre dos índices.
Sintaxis: string.substring(startIndex, endIndex)
*/

let texto3 = "JavaScript es divertido";
console.log("substring(0, 10):", texto3.substring(0, 10)); // "JavaScript"
console.log("substring(11):", texto3.substring(11)); // "es divertido"

/*
8. slice()
Descripción: Similar a `substring()`, pero soporta índices negativos.
Sintaxis: string.slice(startIndex, endIndex)
*/

console.log("slice(0, 10):", texto3.slice(0, 10)); // "JavaScript"
console.log("slice(-9):", texto3.slice(-9)); // "divertido"

/*
9. replace()
Descripción: Reemplaza la primera coincidencia de un patrón con una nueva cadena.
Sintaxis: string.replace(pattern, replacement)
*/

let fraseReemplazo = "Hola, mundo!";
console.log("replace('mundo', 'universo'):", fraseReemplazo.replace("mundo", "universo")); // "Hola, universo!"

/*
10. split()
Descripción: Divide la cadena en un array utilizando un separador.
Sintaxis: string.split(separator, limit)
*/

let textoDividir = "manzana, banana, naranja";
console.log("split(', '):", textoDividir.split(", ")); // ["manzana", "banana", "naranja"]

/*
11. trim()
Descripción: Elimina los espacios en blanco al inicio y al final de la cadena.
*/

let textoEspacios = "   Hola, mundo!   ";
console.log("trim():", textoEspacios.trim()); // "Hola, mundo!"

/*
12. repeat()
Descripción: Devuelve una nueva cadena que contiene la cadena original repetida un número especificado de veces.
Sintaxis: string.repeat(count)
*/

let textoRepetir = "Hola ";
console.log("repeat(3):", textoRepetir.repeat(3)); // "Hola Hola Hola "

/*
13. startsWith() y endsWith()
Descripción: Comprueban si una cadena empieza o termina con una cadena específica.
*/

let saludo = "Hola, mundo!";
console.log("startsWith('Hola'):", saludo.startsWith("Hola")); // true
console.log("endsWith('mundo!'):", saludo.endsWith("mundo!")); // true

/* ========================== RECORRER UNA CADENA ========================== */

/*
Recorrer una cadena utilizando bucle `for`
*/

let cadena = "JavaScript";
for (let i = 0; i < cadena.length; i++) {
  console.log(`Posición ${i}:`, cadena[i]);
}

/*
Recorrer una cadena usando `for...of`
*/

for (let char of cadena) {
  console.log("Carácter:", char);
}

/* ========================== MÉTODOS AVANZADOS ========================== */

/*
1. Match con Expresiones Regulares
*/

let textoRegex = "El número 123 está en esta cadena.";
let numeros = textoRegex.match(/\d+/g);
console.log("Números encontrados:", numeros); // ["123"]

/*
2. Comparar dos cadenas (localeCompare)
Descripción: Devuelve -1, 0 o 1 si la cadena es menor, igual o mayor.
*/

let str1 = "manzana";
let str2 = "naranja";
console.log("Comparación localeCompare:", str1.localeCompare(str2)); // -1

/*
3. Convertir Cadenas a Array (Array.from)
*/

let textoArray = "JavaScript";
let arrayDeTexto = Array.from(textoArray);
console.log("Array desde cadena:", arrayDeTexto); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

/* ========================== EJEMPLOS PRÁCTICOS ========================== */

/*
1. Contar el número de ocurrencias de una palabra en una cadena.
*/

let fraseContar = "manzana, banana, manzana, naranja, manzana";
let ocurrencias = fraseContar.match(/manzana/g)?.length || 0;
console.log("Ocurrencias de 'manzana':", ocurrencias); // 3

/*
2. Verificar si una cadena es un palíndromo.
*/

function esPalindromo(cadena) {
  let limpia = cadena.toLowerCase().replace(/\s+/g, "").replace(/[^\w]/g, "");
  return limpia === limpia.split("").reverse().join("");
}

console.log("¿Es palíndromo 'Anita lava la tina'?:", esPalindromo("Anita lava la tina")); // true

/*
3. Crear una URL amigable (slug) desde un título.
*/

function crearSlug(titulo) {
  return titulo
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

console.log("Slug de título:", crearSlug("Hola Mundo! Bienvenidos a JS.")); // "hola-mundo-bienvenidos-a-js"

/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== COMPARACIÓN NUMÉRICA EN CADENAS ==========================

En JavaScript, las cadenas se comparan alfabéticamente por defecto. Para realizar 
comparaciones numéricas correctas con cadenas que contienen números, debemos convertirlas 
a tipo `Number` o usar funciones personalizadas.
*/

/* ========================== 1. Conversión Explícita con Number() ========================== */

/*
Descripción:
Cuando comparamos cadenas numéricas directamente, se comparan alfabéticamente.
Para obtener la comparación numérica real, usamos `Number()` o `parseFloat()`.

Ejemplo:
*/

let num1 = "10";
let num2 = "2";

console.log("Comparación alfabética:", num1.localeCompare(num2)); // 1 ("10" > "2")
console.log("Comparación numérica:", Number(num1) > Number(num2)); // false
console.log("Resta (numérica):", Number(num1) - Number(num2)); // 8

/* ========================== 2. Ordenar un Array Numéricamente ========================== */

/*
Descripción:
El método `sort()` en JavaScript ordena los elementos de un array **alfabéticamente** por defecto.
Para ordenarlos numéricamente, debemos proporcionar una función de comparación personalizada.

Ejemplo:
*/

let numeros = ["10", "2", "30", "1", "25"];

// Ordenar alfabéticamente (incorrecto)
numeros.sort();
console.log("Orden alfabético:", numeros); 
// Salida: ["1", "10", "2", "25", "30"]

// Ordenar numéricamente (correcto)
numeros.sort((a, b) => Number(a) - Number(b));
console.log("Orden numérico:", numeros); 
// Salida: ["1", "2", "10", "25", "30"]

/* ========================== 3. Comparación Mixta (Texto y Números) ========================== */

/*
Descripción:
Si un array contiene tanto números como texto, necesitamos una función que distinga 
entre ambos. Para los elementos que son números, realizamos una comparación numérica, 
y para el texto, usamos `localeCompare()`.

Ejemplo:
*/

let datos = ["10", "2", "manzana", "1", "100", "naranja"];

datos.sort((a, b) => {
  let numA = parseFloat(a);
  let numB = parseFloat(b);

  // Comparar como números si ambos son válidos
  if (!isNaN(numA) && !isNaN(numB)) {
    return numA - numB;
  } 
  // Comparar alfabéticamente en caso contrario
  return a.localeCompare(b);
});

console.log("Orden mixto numérico y alfabético:", datos); 
// Salida: ["1", "2", "10", "100", "manzana", "naranja"]

/* ========================== 4. Comparar Arrays Numéricos ========================== */

/*
Descripción:
La comparación de arrays numéricos implica recorrer los elementos y comparar uno a uno.
A continuación, se muestra una función personalizada para comparar dos arrays numéricos.
*/

function compararArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; // Longitudes diferentes
  for (let i = 0; i < arr1.length; i++) {
    if (Number(arr1[i]) !== Number(arr2[i])) return false;
  }
  return true;
}

let array1 = ["1", "2", "3"];
let array2 = ["1", "2", "3"];
let array3 = ["1", "2", "4"];

console.log("Comparar array1 y array2:", compararArrays(array1, array2)); // true
console.log("Comparar array1 y array3:", compararArrays(array1, array3)); // false

/* ========================== 5. Ordenar un Array Bidimensional ========================== */

/*
Descripción:
En un array bidimensional, podemos ordenar según una columna específica.
*/

let matriz = [
  ["Juan", "25"],
  ["Ana", "20"],
  ["Luis", "30"]
];

// Ordenar por edad (segunda columna)
matriz.sort((a, b) => Number(a[1]) - Number(b[1]));
console.log("Ordenar matriz por edad:", matriz);
/*
Salida:
[
  ["Ana", "20"],
  ["Juan", "25"],
  ["Luis", "30"]
]
*/

/* ========================== EJEMPLOS PRÁCTICOS ========================== */

/*
1. Filtrar números en un array mixto y ordenarlos.
*/

let mezcla = ["manzana", "5", "20", "naranja", "15"];

let soloNumeros = mezcla.filter(item => !isNaN(item)).map(Number);
soloNumeros.sort((a, b) => a - b);
console.log("Números ordenados del array mixto:", soloNumeros); // [5, 15, 20]

/*
2. Contar la cantidad de cadenas numéricas y no numéricas en un array.
*/

let contador = { numeros: 0, texto: 0 };

mezcla.forEach(item => {
  if (!isNaN(item)) {
    contador.numeros++;
  } else {
    contador.texto++;
  }
});

console.log("Conteo de elementos:", contador);
// Salida: { numeros: 3, texto: 2 }

/*
3. Ordenar un array mixto con prioridad a los números primero.
*/

let datosMixtos = ["10", "manzana", "2", "naranja", "30"];

datosMixtos.sort((a, b) => {
  let numA = parseFloat(a);
  let numB = parseFloat(b);

  if (!isNaN(numA) && !isNaN(numB)) return numA - numB; // Números primero
  if (!isNaN(numA)) return -1; // Prioridad para números
  if (!isNaN(numB)) return 1;  // Prioridad para números
  return a.localeCompare(b);   // Comparación alfabética
});

console.log("Números primero, luego texto:", datosMixtos);
// Salida: ["2", "10", "30", "manzana", "naranja"]

/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== ARRAYS EN JAVASCRIPT ==========================
Descripción: Estructura de datos para almacenar múltiples valores en una sola variable.
*/

/* ========================== EJEMPLOS PRÁCTICOS ADICIONALES ========================== */

/*
1. Encontrar el número más pequeño y el número más grande en un array.
*/

let numeros = [45, 12, 78, 3, 56, 99, 1];

let minimo = Math.min(...numeros);
let maximo = Math.max(...numeros);

console.log("Número más pequeño:", minimo); // 1
console.log("Número más grande:", maximo); // 99

/*
2. Aplanar un array multidimensional.
Descripción: Convierte un array de arrays (multidimensional) en un array plano.
*/

let matriz = [[1, 2], [3, 4], [5, [6, 7]]];

// Usando flat() para aplanar hasta 2 niveles
let arrayPlano = matriz.flat(2);
console.log("Array aplanado:", arrayPlano); // [1, 2, 3, 4, 5, 6, 7]

/*
3. Contar la cantidad de veces que aparece cada elemento en un array.
*/

let frutas = ["manzana", "pera", "manzana", "uva", "pera", "manzana"];

let contador = frutas.reduce((acumulador, fruta) => {
  acumulador[fruta] = (acumulador[fruta] || 0) + 1;
  return acumulador;
}, {});

console.log("Conteo de elementos:", contador);
// Salida: { manzana: 3, pera: 2, uva: 1 }

/*
4. Filtrar números pares e impares en un array.
*/

let numerosEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = numerosEnteros.filter(numero => numero % 2 === 0);
let impares = numerosEnteros.filter(numero => numero % 2 !== 0);

console.log("Números pares:", pares); // [2, 4, 6, 8, 10]
console.log("Números impares:", impares); // [1, 3, 5, 7, 9]

/*
5. Sumar elementos de un array que cumplen una condición.
Descripción: Sumar solo los números mayores a un valor específico.
*/

let numerosParaSumar = [10, 20, 5, 40, 15, 8];
let sumaMayores = numerosParaSumar
  .filter(numero => numero > 10) // Filtra números mayores a 10
  .reduce((acumulador, numero) => acumulador + numero, 0); // Suma los valores

console.log("Suma de números mayores a 10:", sumaMayores); // 75

/*
========================== MÉTODOS DE VALIDACIÓN ==========================
*/

/*
6. Validar si todos los elementos de un array cumplen una condición.
*/

let edades = [18, 22, 25, 30];

let todosAdultos = edades.every(edad => edad >= 18);
console.log("¿Todos son mayores de edad?", todosAdultos); // true

/*
7. Buscar el primer elemento que cumple una condición.
*/

let numerosBusqueda = [3, 7, 8, 12, 15];

let primerPar = numerosBusqueda.find(numero => numero % 2 === 0);
console.log("Primer número par encontrado:", primerPar); // 8

/*
8. Generar un array con números aleatorios únicos.
*/

function generarNumerosAleatorios(cantidad, max) {
  let numeros = new Set();
  while (numeros.size < cantidad) {
    numeros.add(Math.floor(Math.random() * max) + 1);
  }
  return [...numeros];
}

let numerosAleatorios = generarNumerosAleatorios(5, 20);
console.log("Números aleatorios únicos:", numerosAleatorios);

/*
9. Ordenar un array de objetos por una propiedad específica.
*/

let productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Monitor", precio: 200 },
];

// Ordenar por precio (ascendente)
productos.sort((a, b) => a.precio - b.precio);

console.log("Productos ordenados por precio:", productos);
/*
Salida:
[
  { nombre: "Monitor", precio: 200 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Laptop", precio: 800 }
]
*/

/*
10. Agrupar elementos de un array en categorías.
*/

let calificaciones = [85, 90, 75, 60, 95, 55];

let grupos = calificaciones.reduce((acumulador, calificacion) => {
  let categoria = calificacion >= 70 ? "Aprobados" : "Reprobados";
  acumulador[categoria] = (acumulador[categoria] || []).concat(calificacion);
  return acumulador;
}, {});

console.log("Agrupación de calificaciones:", grupos);
// Salida:
// {
//   Aprobados: [85, 90, 75, 95],
//   Reprobados: [60, 55]
// }

/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== ARRAYS DE OBJETOS EN JAVASCRIPT ==========================
Descripción: Un array de objetos es una estructura que permite almacenar múltiples objetos dentro de un array.
*/

/* ========================== EJEMPLOS PRÁCTICOS ========================== */

/*
1. Filtrar Objetos Basados en una Condición
Descripción: Filtrar personas mayores de 25 años.
*/

let personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 28 },
  { nombre: "María", edad: 24 }
];

let mayoresDe25 = personas.filter(persona => persona.edad > 25);
console.log("Personas mayores de 25 años:", mayoresDe25);
// Salida: [{ nombre: "Juan", edad: 30 }, { nombre: "Luis", edad: 28 }]

/*
2. Ordenar un Array de Objetos por una Propiedad
Descripción: Ordenar un array de objetos por la edad de menor a mayor.
*/

let ordenadosPorEdad = personas.sort((a, b) => a.edad - b.edad);
console.log("Personas ordenadas por edad:", ordenadosPorEdad);
// Salida: [{nombre: "Ana", edad: 22}, {nombre: "María", edad: 24}, {nombre: "Luis", edad: 28}, {nombre: "Juan", edad: 30}]

/*
3. Encontrar un Objeto Basado en una Propiedad
Descripción: Encontrar la primera persona llamada "Luis".
*/

let personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);
// Salida: { nombre: "Luis", edad: 28 }

/*
4. Sumar una Propiedad de Todos los Objetos
Descripción: Sumar la edad de todas las personas.
*/

let sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("Suma total de edades:", sumaEdades); // 104

/*
5. Añadir Nuevos Objetos al Array
Descripción: Añadir una nueva persona al array.
*/

personas.push({ nombre: "Carlos", edad: 35 });
console.log("Array después de añadir a Carlos:", personas);
// Salida: [..., { nombre: "Carlos", edad: 35 }]

/*
6. Modificar una Propiedad de los Objetos Existentes
Descripción: Incrementar la edad de todas las personas en 1 año.
*/

personas.forEach(persona => persona.edad += 1);
console.log("Personas con edad incrementada:", personas);

/*
7. Eliminar un Objeto Basado en una Condición
Descripción: Eliminar a las personas menores de 25 años.
*/

let mayoresDe25Final = personas.filter(persona => persona.edad >= 25);
console.log("Personas mayores de 25 años (eliminación):", mayoresDe25Final);

/*
8. Contar Objetos Basados en una Propiedad
Descripción: Contar cuántas personas tienen un nombre específico.
*/

let cuentaJuan = personas.filter(persona => persona.nombre === "Juan").length;
console.log("Cantidad de personas llamadas Juan:", cuentaJuan);

/*
9. Convertir un Array de Objetos a un Array de Valores
Descripción: Obtener solo los nombres de las personas.
*/

let nombres = personas.map(persona => persona.nombre);
console.log("Nombres de las personas:", nombres);
// Salida: ["Juan", "Ana", "Luis", "María", "Carlos"]

/*
10. Agrupar Objetos por una Propiedad
Descripción: Agrupar personas por edades mayores y menores de 30.
*/

let agrupados = personas.reduce((resultado, persona) => {
  let clave = persona.edad >= 30 ? "Mayores de 30" : "Menores de 30";
  (resultado[clave] = resultado[clave] || []).push(persona);
  return resultado;
}, {});

console.log("Personas agrupadas por edad:", agrupados);
/*
Salida:
{
  "Menores de 30": [ { nombre: "Luis", edad: 29 }, { nombre: "María", edad: 25 } ],
  "Mayores de 30": [ { nombre: "Juan", edad: 31 }, { nombre: "Carlos", edad: 36 } ]
}
*/

/* ========================== CLASES Y OBJETOS ========================== */

/*
Crear una Clase para un Array de Objetos
Descripción: Crearemos una clase para gestionar arrays de personas.
*/

class GestorPersonas {
  constructor() {
    this.personas = [];
  }

  agregarPersona(nombre, edad) {
    this.personas.push({ nombre, edad });
  }

  eliminarPersonaPorNombre(nombre) {
    this.personas = this.personas.filter(persona => persona.nombre !== nombre);
  }

  mostrarPersonas() {
    console.log("Lista de personas:", this.personas);
  }
}

// Uso de la clase GestorPersonas
let gestor = new GestorPersonas();
gestor.agregarPersona("Laura", 26);
gestor.agregarPersona("Pedro", 40);
gestor.mostrarPersonas();
gestor.eliminarPersonaPorNombre("Laura");
gestor.mostrarPersonas();

/* ========================== FIN DEL SCRIPT ========================== */
/*
========================== CLASES Y ARRAYS DE OBJETOS EN JAVASCRIPT ==========================
Descripción: Ejemplos de creación de clases, validaciones, herencia, comparación y ordenación.
*/

/* ========================== CLASE PERSONA ========================== */
class Persona {
  #dni;

  constructor(nombre, edad, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.#dni = this.#validarDNI(dni) ? dni : null;
  }

  // Validar DNI (formato español: 8 dígitos + 1 letra)
  #validarDNI(dni) {
    const regex = /^[0-9]{8}[A-Za-z]$/;
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (regex.test(dni)) {
      const numero = parseInt(dni.slice(0, 8), 10);
      const letra = dni.charAt(8).toUpperCase();
      return letra === letras.charAt(numero % 23);
    }
    return false;
  }

  // Getters
  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  getDNI() {
    return this.#dni;
  }

  // Métodos
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }

  // Comparar dos personas
  static compararPorEdad(persona1, persona2) {
    return persona1.edad - persona2.edad;
  }
}

/* ========================== SUBCLASES: ALUMNO Y PROFESOR ========================== */
class Alumno extends Persona {
  constructor(nombre, edad, dni, curso) {
    super(nombre, edad, dni);
    this.curso = curso;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, alumno de ${this.curso}.`);
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, dni, asignatura) {
    super(nombre, edad, dni);
    this.asignatura = asignatura;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, profesor de ${this.asignatura}.`);
  }
}

/* ========================== CLASE ANIMAL ========================== */
class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  emitirSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre, "perro");
    this.raza = raza;
  }

  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

class Gato extends Animal {
  constructor(nombre, color) {
    super(nombre, "gato");
    this.color = color;
  }

  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }
}

/* ========================== EJEMPLOS PRÁCTICOS ========================== */

// 1. Crear instancias de Persona, Alumno y Profesor
let persona1 = new Persona("Juan", 30, "12345678Z");
let alumno1 = new Alumno("Ana", 20, "87654321A", "3º ESO");
let profesor1 = new Profesor("María", 40, "11223344B", "Matemáticas");

persona1.saludar(); // "Hola, soy Juan y tengo 30 años."
alumno1.saludar();  // "Hola, soy Ana, alumno de 3º ESO."
profesor1.saludar(); // "Hola, soy María, profesor de Matemáticas."

console.log(`DNI de Juan: ${persona1.getDNI()}`);

// 2. Crear instancias de Perro y Gato
let perro1 = new Perro("Rex", "Labrador");
let gato1 = new Gato("Mishi", "Gris");

perro1.emitirSonido(); // "Rex dice: ¡Guau!"
gato1.emitirSonido();  // "Mishi dice: ¡Miau!"

// 3. Comparar y ordenar objetos en arrays
let personas = [persona1, new Persona("Luis", 25, "55667788C"), alumno1, profesor1];
let animales = [perro1, new Perro("Toby", "Beagle"), gato1, new Gato("Pelusa", "Blanco")];

// Ordenar personas por edad
personas.sort(Persona.compararPorEdad);
console.log("Personas ordenadas por edad:");
personas.forEach(persona => console.log(`${persona.getNombre()} - ${persona.getEdad()} años`));

// Ordenar animales por nombre
animales.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Animales ordenados por nombre:");
animales.forEach(animal => console.log(`${animal.nombre} (${animal.especie})`));

/* ========================== CREAR UN ARRAY MIXTO ========================== */
let datosMixtos = [...personas, ...animales];

// Mostrar información de personas y animales
console.log("\nInformación de Datos Mixtos:");
datosMixtos.forEach(obj => {
  if (obj instanceof Persona) {
    console.log(`Persona: ${obj.getNombre()} - ${obj.getEdad()} años`);
  } else if (obj instanceof Animal) {
    console.log(`Animal: ${obj.nombre} - Especie: ${obj.especie}`);
  }
});
/*
========================== CLASE PUNTO2D Y FIGURA2D ==========================
Descripción: Implementación de clases geométricas con métodos para cálculos
como distancia, perímetro y área. Incluye comparaciones y ordenación.
*/

/* ========================== CLASE PUNTO2D ========================== */

class Punto2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Método para calcular la distancia entre dos puntos
  static calcularDistancia(punto1, punto2) {
    return Math.sqrt(Math.pow(punto2.x - punto1.x, 2) + Math.pow(punto2.y - punto1.y, 2));
  }

  // Método para representar el punto como cadena
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

/* ========================== CLASE FIGURA2D ========================== */

class Figura2D {
  constructor(nombre) {
    this.nombre = nombre;
  }

  calcularArea() {
    throw new Error("Método calcularArea() debe ser implementado por la subclase.");
  }

  calcularPerimetro() {
    throw new Error("Método calcularPerimetro() debe ser implementado por la subclase.");
  }

  toString() {
    return `Figura: ${this.nombre}`;
  }
}

/* ========================== SUBCLASES: CÍRCULO Y RECTÁNGULO ========================== */

// Clase Círculo (derivada de Figura2D)
class Circulo extends Figura2D {
  constructor(centro, radio) {
    super("Círculo");
    this.centro = centro; // Instancia de Punto2D
    this.radio = radio;
  }

  // Método para calcular el área
  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }

  // Método para calcular el perímetro
  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }

  toString() {
    return `Círculo con centro en ${this.centro.toString()} y radio ${this.radio}`;
  }
}

// Clase Rectángulo (derivada de Figura2D)
class Rectangulo extends Figura2D {
  constructor(punto1, punto2) {
    super("Rectángulo");
    this.punto1 = punto1; // Esquina superior izquierda
    this.punto2 = punto2; // Esquina inferior derecha
  }

  // Métodos para calcular dimensiones
  getAncho() {
    return Math.abs(this.punto2.x - this.punto1.x);
  }

  getAlto() {
    return Math.abs(this.punto2.y - this.punto1.y);
  }

  // Método para calcular el área
  calcularArea() {
    return this.getAncho() * this.getAlto();
  }

  // Método para calcular el perímetro
  calcularPerimetro() {
    return 2 * (this.getAncho() + this.getAlto());
  }

  toString() {
    return `Rectángulo con vértices ${this.punto1.toString()} y ${this.punto2.toString()}`;
  }
}

/* ========================== EJEMPLOS PRÁCTICOS ========================== */

// 1. Crear puntos
let puntoA = new Punto2D(0, 0);
let puntoB = new Punto2D(3, 4);
let puntoC = new Punto2D(5, 5);

console.log("Punto A:", puntoA.toString()); // (0, 0)
console.log("Punto B:", puntoB.toString()); // (3, 4)

// 2. Calcular distancia entre dos puntos
let distancia = Punto2D.calcularDistancia(puntoA, puntoB);
console.log(`Distancia entre A y B: ${distancia}`); // 5

// 3. Crear un círculo y calcular su área y perímetro
let circulo = new Circulo(puntoA, 5);
console.log(circulo.toString());
console.log("Área del círculo:", circulo.calcularArea().toFixed(2));
console.log("Perímetro del círculo:", circulo.calcularPerimetro().toFixed(2));

// 4. Crear un rectángulo y calcular su área y perímetro
let rectangulo = new Rectangulo(puntoA, puntoC);
console.log(rectangulo.toString());
console.log("Área del rectángulo:", rectangulo.calcularArea());
console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());

// 5. Comparar y ordenar figuras por área
let figuras = [circulo, rectangulo, new Circulo(puntoB, 3)];
figuras.sort((a, b) => a.calcularArea() - b.calcularArea());

console.log("Figuras ordenadas por área:");
figuras.forEach(figura => {
  console.log(`${figura.toString()} - Área: ${figura.calcularArea().toFixed(2)}`);
});
/*
/*
======================== SELECCIÓN Y MANIPULACIÓN DE ELEMENTOS EN EL DOM ========================
Descripción: Métodos más usados para seleccionar, crear, modificar y eliminar elementos HTML usando JavaScript.
*/

/* ======================== 1. MÉTODOS DE SELECCIÓN ======================== */

/*
1. querySelector()
Descripción: Selecciona el primer elemento que coincida con el selector CSS.
*/
const primerParrafo = document.querySelector("p");
console.log("Primer párrafo:", primerParrafo);

/*
2. querySelectorAll()
Descripción: Selecciona todos los elementos que coincidan con el selector CSS. Devuelve una NodeList.
*/
const parrafos = document.querySelectorAll("p");
parrafos.forEach((p, i) => console.log(`Párrafo ${i + 1}:`, p));

/*
3. getElementById()
Descripción: Selecciona un elemento por su ID.
*/
const elementoId = document.getElementById("mi-id");
console.log("Elemento con ID 'mi-id':", elementoId);

/*
4. getElementsByClassName()
Descripción: Selecciona todos los elementos con una clase específica. Devuelve una HTMLCollection.
*/
const elementosClase = document.getElementsByClassName("mi-clase");
Array.from(elementosClase).forEach((el) => console.log("Elemento con clase 'mi-clase':", el));

/*
5. getElementsByTagName()
Descripción: Selecciona todos los elementos con una etiqueta específica.
*/
const divs = document.getElementsByTagName("div");
for (let div of divs) {
  console.log("Elemento <div>:", div);
}

/*
6. closest()
Descripción: Encuentra el ancestro más cercano que coincide con un selector.
*/
const hijo = document.querySelector(".hijo");
const padreCercano = hijo.closest(".padre");
console.log("Ancestro más cercano con '.padre':", padreCercano);

/* ======================== 2. MANIPULACIÓN DE CONTENIDO ======================== */

/*
1. textContent vs innerHTML
Descripción: Modifica el contenido textual o HTML.
*/
const elementoTexto = document.querySelector("h1");
elementoTexto.textContent = "Nuevo Título";
console.log("Nuevo título con textContent:", elementoTexto.textContent);

/*
2. setAttribute() y getAttribute()
Descripción: Modifica y obtiene atributos.
*/
const enlace = document.querySelector("a");
enlace.setAttribute("href", "https://www.google.com");
console.log("Atributo href:", enlace.getAttribute("href"));

/*
3. classList
Descripción: Añadir, quitar o alternar clases.
*/
enlace.classList.add("activo");
enlace.classList.toggle("destacado");
console.log("Clases del enlace:", enlace.classList);

/* ======================== 3. CREACIÓN Y ELIMINACIÓN DE ELEMENTOS ======================== */

/*
1. Crear y añadir un elemento al DOM
Descripción: Crea un elemento, configura atributos y lo añade al DOM.
*/
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Nuevo div dinámico";
nuevoDiv.className = "nuevo-div";
document.body.appendChild(nuevoDiv);
console.log("Nuevo elemento añadido:", nuevoDiv);

/*
2. Eliminar un elemento
Descripción: Elimina un elemento existente.
*/
nuevoDiv.remove();
console.log("Elemento eliminado del DOM");

/*
3. Reemplazar un elemento
Descripción: Reemplaza un hijo con otro.
*/
const lista = document.querySelector("ul");
const nuevoItem = document.createElement("li");
nuevoItem.textContent = "Reemplazo dinámico";
lista.replaceChild(nuevoItem, lista.firstElementChild);
console.log("Primer elemento reemplazado.");

/* ======================== 4. RECORRER ELEMENTOS ======================== */

/*
1. Recorrer una lista y modificar elementos
*/
const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.textContent = `Ítem ${index + 1}`;
  item.classList.add("modificado");
});

/*
2. Crear una lista dinámica de elementos
*/
const listaDinamica = document.createElement("ul");
["Elemento 1", "Elemento 2", "Elemento 3"].forEach((texto) => {
  const li = document.createElement("li");
  li.textContent = texto;
  listaDinamica.appendChild(li);
});
document.body.appendChild(listaDinamica);

/* ======================== 5. EJEMPLOS PRÁCTICOS COTIDIANOS ======================== */

/*
1. Crear una tarjeta con contenido dinámico
*/
const tarjeta = document.createElement("div");
tarjeta.className = "tarjeta";
tarjeta.innerHTML = `
  <h2>Tarjeta Dinámica</h2>
  <p>Esta tarjeta fue creada dinámicamente.</p>
  <button>Eliminar</button>
`;
document.body.appendChild(tarjeta);

tarjeta.querySelector("button").addEventListener("click", () => {
  tarjeta.remove();
  console.log("Tarjeta eliminada.");
});

/*
2. Mostrar/Ocultar un elemento
*/
const botonVisibilidad = document.createElement("button");
botonVisibilidad.textContent = "Mostrar/Ocultar";
document.body.appendChild(botonVisibilidad);

const parrafoOculto = document.createElement("p");
parrafoOculto.textContent = "Este párrafo puede ocultarse.";
document.body.appendChild(parrafoOculto);

botonVisibilidad.addEventListener("click", () => {
  parrafoOculto.style.display = parrafoOculto.style.display === "none" ? "block" : "none";
});

/*
3. Crear un contador dinámico
*/
let contador = 0;
const contadorElemento = document.createElement("div");
contadorElemento.textContent = `Contador: ${contador}`;
document.body.appendChild(contadorElemento);

const botonIncrementar = document.createElement("button");
botonIncrementar.textContent = "Incrementar";
document.body.appendChild(botonIncrementar);

botonIncrementar.addEventListener("click", () => {
  contador++;
  contadorElemento.textContent = `Contador: ${contador}`;
});

/*
4. Crear una galería dinámica de imágenes
*/
const galeria = document.createElement("div");
galeria.className = "galeria";

["img1.jpg", "img2.jpg", "img3.jpg"].forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Imagen dinámica";
  galeria.appendChild(img);
});
document.body.appendChild(galeria);

/*
5. Crear una tabla con datos
*/
const datos = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
];

const tabla = document.createElement("table");
tabla.innerHTML = `
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
`;

datos.forEach((persona) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${persona.nombre}</td>
    <td>${persona.edad}</td>
  `;
  tabla.appendChild(fila);
});

document.body.appendChild(tabla);
console.log("Tabla creada con datos:", tabla);
/*
======================== EXPORTACIONES E IMPORTACIONES DE MÓDULOS EN JAVASCRIPT ========================
Descripción: Ejemplos detallados de cómo exportar, importar y utilizar funciones, clases y variables.
*/

/* ======================== 1. EXPORTACIONES ======================== */

/*
1. Exportación Nombrada
Descripción: Exporta múltiples elementos, cada uno con su nombre.
*/

// Archivo: `funciones.js`
export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

export function despedir(nombre) {
  return `Adiós, ${nombre}!`;
}

export const PI = 3.14159;

export class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

export const operaciones = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
};

/*
2. Exportación por Defecto
Descripción: Exporta un único elemento como predeterminado.
*/

// Archivo: `operaciones.js`
export default function multiplicar(a, b) {
  return a * b;
}

/*
3. Exportar Todo
Descripción: Exporta múltiples elementos a la vez.
*/

// Archivo: `utilidades.js`
export const utilidades = {
  generarID: () => Math.random().toString(36).substr(2, 9),
  fechaActual: () => new Date().toLocaleDateString(),
};

/* ======================== 2. IMPORTACIONES ======================== */

/*
1. Importación de Exportaciones Nombradas
Descripción: Importa elementos específicos usando llaves.
*/

// Archivo: `main.js`
import { saludar, despedir, PI, Persona, operaciones } from "./funciones.js";

console.log(saludar("Juan")); // "Hola, Juan!"
console.log(despedir("Juan")); // "Adiós, Juan!"
console.log(`El valor de PI es ${PI}.`); // 3.14159

const persona = new Persona("Ana");
console.log(persona.saludar()); // "Hola, soy Ana"

console.log("Suma:", operaciones.suma(5, 3)); // 8
console.log("Resta:", operaciones.resta(5, 3)); // 2

/*
2. Importación de Exportación por Defecto
Descripción: Importa un elemento predeterminado sin usar llaves.
*/

import multiplicar from "./operaciones.js";

console.log("Multiplicación:", multiplicar(4, 5)); // 20

/*
3. Importar Todo con un Alias
Descripción: Importa todo el contenido del módulo y le asigna un alias.
*/

import * as utilidades from "./utilidades.js";

console.log("ID generado:", utilidades.utilidades.generarID()); // Ejemplo: "abc123def"
console.log("Fecha actual:", utilidades.utilidades.fechaActual()); // Ejemplo: "21/12/2023"

/* ======================== 3. EJEMPLOS PRÁCTICOS ======================== */

/*
1. Ejemplo de una Calculadora Modular
*/

// Archivo: `calculadora.js`
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export default function multiplicar(a, b) {
  return a * b;
}

// Archivo: `app.js`
import multiplicar, { sumar, restar } from "./calculadora.js";

console.log("Suma:", sumar(10, 5)); // 15
console.log("Resta:", restar(10, 5)); // 5
console.log("Multiplicación:", multiplicar(10, 5)); // 50

/*
2. Ejemplo de Gestión de Personas usando Clases
*/

// Archivo: `personas.js`
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

export class Profesor extends Persona {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }
  saludar() {
    return `${super.saludar()} Enseño ${this.materia}.`;
  }
}

export class Alumno extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
  saludar() {
    return `${super.saludar()} Estoy en el curso ${this.curso}.`;
  }
}

// Archivo: `app.js`
import { Profesor, Alumno } from "./personas.js";

const profesor = new Profesor("Laura", 35, "Matemáticas");
console.log(profesor.saludar()); // "Hola, soy Laura y tengo 35 años. Enseño Matemáticas."

const alumno = new Alumno("Carlos", 16, "4º ESO");
console.log(alumno.saludar()); // "Hola, soy Carlos y tengo 16 años. Estoy en el curso 4º ESO."

/*
3. Ejemplo de Galería Dinámica de Imágenes
*/

// Archivo: `galeria.js`
export const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg"];

export function crearGaleria(imagenes) {
  const galeria = document.createElement("div");
  galeria.classList.add("galeria");

  imagenes.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagen ${src}`;
    galeria.appendChild(img);
  });
  return galeria;
}

// Archivo: `main.js`
import { imagenes, crearGaleria } from "./galeria.js";

document.body.appendChild(crearGaleria(imagenes));

/*
4. Exportación de Funcionalidades de Fecha y Tiempo
*/

// Archivo: `fechas.js`
export function obtenerHoraActual() {
  return new Date().toLocaleTimeString();
}

export function obtenerFechaActual() {
  return new Date().toLocaleDateString();
}

// Archivo: `main.js`
import { obtenerHoraActual, obtenerFechaActual } from "./fechas.js";

console.log("Hora actual:", obtenerHoraActual());
console.log("Fecha actual:", obtenerFechaActual());

/*
5. Aplicación de Tareas Pendientes
*/

// Archivo: `tareas.js`
export class Tarea {
  constructor(nombre, completada = false) {
    this.nombre = nombre;
    this.completada = completada;
  }

  completar() {
    this.completada = true;
  }

  info() {
    return `${this.nombre} - ${this.completada ? "Completada" : "Pendiente"}`;
  }
}

// Archivo: `main.js`
import { Tarea } from "./tareas.js";

const tarea1 = new Tarea("Aprender JavaScript");
const tarea2 = new Tarea("Practicar módulos");

console.log(tarea1.info()); // "Aprender JavaScript - Pendiente"
tarea1.completar();
console.log(tarea1.info()); // "Aprender JavaScript - Completada"
console.log(tarea2.info()); // "Practicar módulos - Pendiente"
/*
======================== CREAR TABLA DINÁMICAMENTE EN EL DOM ========================
Descripción: Generar y mostrar una tabla HTML dinámica a partir de un array de objetos.
*/

/* ======================== DATOS ======================== */

const data = [
  { nombre: "Juan", edad: 30, profesion: "Ingeniero" },
  { nombre: "Ana", edad: 25, profesion: "Doctora" },
  { nombre: "Luis", edad: 28, profesion: "Abogado" },
  { nombre: "María", edad: 32, profesion: "Diseñadora" },
  { nombre: "Carlos", edad: 40, profesion: "Profesor" }
];

/* ======================== FUNCIÓN PARA CREAR TABLA ======================== */

/*
crearTabla(array)
Descripción: Crea una tabla HTML a partir de un array de objetos y la añade al DOM.
Parámetros:
- array: Array de objetos con los datos a mostrar.
*/

function crearTabla(array) {
  // 1. Crear los elementos base de la tabla
  const tabla = document.createElement("table");
  const cabecera = document.createElement("thead");
  const cuerpo = document.createElement("tbody");

  // 2. Crear la cabecera (thead)
  const claves = Object.keys(array[0]); // Extraer claves del primer objeto
  const filaCabecera = document.createElement("tr");

  claves.forEach((clave) => {
    const celdaCabecera = document.createElement("th");
    celdaCabecera.textContent = clave.toUpperCase();
    filaCabecera.appendChild(celdaCabecera);
  });

  cabecera.appendChild(filaCabecera);
  tabla.appendChild(cabecera);

  // 3. Crear el cuerpo (tbody)
  array.forEach((objeto) => {
    const fila = document.createElement("tr");

    claves.forEach((clave) => {
      const celda = document.createElement("td");
      celda.textContent = objeto[clave];
      fila.appendChild(celda);
    });

    cuerpo.appendChild(fila);
  });

  tabla.appendChild(cuerpo);

  // 4. Añadir estilos básicos a la tabla (opcional)
  tabla.style.width = "100%";
  tabla.style.borderCollapse = "collapse";
  tabla.querySelectorAll("th, td").forEach((celda) => {
    celda.style.border = "1px solid #ddd";
    celda.style.padding = "8px";
    celda.style.textAlign = "left";
  });
  tabla.querySelectorAll("th").forEach((th) => {
    th.style.backgroundColor = "#f4f4f4";
    th.style.fontWeight = "bold";
  });

  // 5. Insertar la tabla en el contenedor del DOM
  const contenedorTabla = document.querySelector("#contenedor-tabla");
  contenedorTabla.innerHTML = ""; // Limpiar contenido previo
  contenedorTabla.appendChild(tabla);
}

/* ======================== EJECUCIÓN ======================== */

// Crear la tabla y añadirla al contenedor
document.addEventListener("DOMContentLoaded", () => {
  crearTabla(data);
});

/*
======================== EJEMPLOS PRÁCTICOS ADICIONALES ========================
Descripción: Ejemplos avanzados usando la tabla dinámica creada.
*/

/*
1. Añadir una fila adicional dinámicamente
*/

function agregarFila(nombre, edad, profesion) {
  const nuevaFila = { nombre, edad, profesion };
  data.push(nuevaFila); // Añadir a los datos existentes
  crearTabla(data); // Re-crear la tabla actualizada
}

document.querySelector("#agregar-fila").addEventListener("click", () => {
  agregarFila("Pedro", 22, "Estudiante");
});

/*
2. Ordenar la tabla por una columna específica
*/

function ordenarTabla(clave) {
  data.sort((a, b) => (a[clave] > b[clave] ? 1 : -1));
  crearTabla(data);
}

document.querySelector("#ordenar-nombre").addEventListener("click", () => {
  ordenarTabla("nombre");
});

document.querySelector("#ordenar-edad").addEventListener("click", () => {
  ordenarTabla("edad");
});
/*
======================== TABLA DINÁMICA EN JAVASCRIPT ========================
Descripción: Generar, modificar y ordenar una tabla dinámica a partir de un array de objetos.
*/

/* ======================== DATOS INICIALES ======================== */

const data = [
  { nombre: "Juan", edad: 30, profesion: "Ingeniero" },
  { nombre: "Ana", edad: 25, profesion: "Doctora" },
  { nombre: "Luis", edad: 28, profesion: "Abogado" },
  { nombre: "María", edad: 32, profesion: "Diseñadora" },
  { nombre: "Carlos", edad: 40, profesion: "Profesor" },
];

/* ======================== FUNCIÓN PARA CREAR TABLA ======================== */

/*
crearTabla(array)
Descripción: Crea una tabla HTML a partir de un array de objetos y la inserta en el DOM.
Parámetros:
- array: Array de objetos con los datos a mostrar.
*/
function crearTabla(array) {
  // 1. Crear los elementos base de la tabla
  const tabla = document.createElement("table");
  const cabecera = document.createElement("thead");
  const cuerpo = document.createElement("tbody");

  // 2. Crear la cabecera (thead)
  const claves = Object.keys(array[0]); // Obtener las claves de los objetos
  const filaCabecera = document.createElement("tr");

  claves.forEach((clave) => {
    const celdaCabecera = document.createElement("th");
    celdaCabecera.textContent = clave.toUpperCase();
    filaCabecera.appendChild(celdaCabecera);
  });

  cabecera.appendChild(filaCabecera);
  tabla.appendChild(cabecera);

  // 3. Crear las filas del cuerpo (tbody)
  array.forEach((objeto) => {
    const fila = document.createElement("tr");
    claves.forEach((clave) => {
      const celda = document.createElement("td");
      celda.textContent = objeto[clave];
      fila.appendChild(celda);
    });
    cuerpo.appendChild(fila);
  });

  tabla.appendChild(cuerpo);

  // 4. Aplicar estilos básicos a la tabla
  tabla.style.width = "100%";
  tabla.style.borderCollapse = "collapse";
  tabla.querySelectorAll("th, td").forEach((celda) => {
    celda.style.border = "1px solid #ccc";
    celda.style.padding = "8px";
    celda.style.textAlign = "center";
  });
  tabla.querySelectorAll("th").forEach((th) => {
    th.style.backgroundColor = "#f4f4f4";
    th.style.fontWeight = "bold";
  });

  // 5. Insertar la tabla en el contenedor
  const contenedorTabla = document.querySelector("#contenedor-tabla");
  contenedorTabla.innerHTML = ""; // Limpiar contenido previo
  contenedorTabla.appendChild(tabla);
}

/* ======================== FUNCIÓN PARA AGREGAR FILAS ======================== */

/*
agregarFila(nombre, edad, profesion)
Descripción: Agrega una nueva fila a la tabla.
Parámetros:
- nombre: Nombre de la persona.
- edad: Edad de la persona.
- profesion: Profesión de la persona.
*/
function agregarFila(nombre, edad, profesion) {
  const nuevaFila = { nombre, edad, profesion };
  data.push(nuevaFila); // Añadir a los datos existentes
  crearTabla(data); // Re-crear la tabla actualizada
}

/* ======================== FUNCIÓN PARA ORDENAR LA TABLA ======================== */

/*
ordenarTabla(clave)
Descripción: Ordena la tabla según una columna específica.
Parámetros:
- clave: La clave del objeto por la cual ordenar (ej. "nombre" o "edad").
*/
function ordenarTabla(clave) {
  data.sort((a, b) => (a[clave] > b[clave] ? 1 : -1));
  crearTabla(data);
}

/* ======================== EVENTOS ======================== */

document.addEventListener("DOMContentLoaded", () => {
  crearTabla(data); // Crear la tabla inicial al cargar la página

  // Evento para agregar una nueva fila
  document.querySelector("#agregar-fila").addEventListener("click", () => {
    const nombre = prompt("Ingrese el nombre:");
    const edad = parseInt(prompt("Ingrese la edad:"), 10);
    const profesion = prompt("Ingrese la profesión:");
    if (nombre && !isNaN(edad) && profesion) {
      agregarFila(nombre, edad, profesion);
    } else {
      alert("Datos inválidos. Intente nuevamente.");
    }
  });

  // Evento para ordenar por nombre
  document.querySelector("#ordenar-nombre").addEventListener("click", () => {
    ordenarTabla("nombre");
  });

  // Evento para ordenar por edad
  document.querySelector("#ordenar-edad").addEventListener("click", () => {
    ordenarTabla("edad");
  });
});
/*
======================== FUNCIONES FLECHA EN JAVASCRIPT ========================
Descripción: Las funciones flecha proporcionan una sintaxis más corta para escribir funciones en JavaScript.
Son ideales cuando no necesitas un contexto propio de `this`.
*/

/* ======================== 1. SINTAXIS BÁSICA ======================== */

/*
Declaración de una función flecha con parámetros
Sintaxis: const nombreFuncion = (parametros) => { cuerpo de la función }
*/

// Ejemplo: Sumar dos números
const sumar = (a, b) => {
  return a + b;
};
console.log("Suma de 2 + 3:", sumar(2, 3)); // Salida: 5

/*
Cuando el cuerpo de la función tiene sólo una línea, puedes omitir las llaves `{}` y la palabra clave `return`.
*/

// Ejemplo: Multiplicar dos números
const multiplicar = (a, b) => a * b;
console.log("Multiplicación de 4 * 5:", multiplicar(4, 5)); // Salida: 20

/* ======================== 2. FUNCIONES FLECHA CON UN PARÁMETRO ======================== */

/*
Si la función tiene un solo parámetro, puedes omitir los paréntesis `()`.
*/

// Ejemplo: Saludar a una persona
const saludar = nombre => `Hola, ${nombre}!`;
console.log(saludar("Juan")); // Salida: Hola, Juan!

/* ======================== 3. USO DE FUNCIONES FLECHA CON MÉTODOS DE ARRAYS ======================== */

/*
Las funciones flecha son muy útiles cuando trabajas con métodos de arrays como map(), filter(), y reduce().
*/

// Ejemplo 1: Filtrar números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares:", numerosPares); // Salida: [2, 4, 6, 8, 10]

// Ejemplo 2: Mapear valores para crear un nuevo array
const cuadrados = numeros.map(numero => numero ** 2);
console.log("Cuadrados de los números:", cuadrados); // Salida: [1, 4, 9, ..., 100]

// Ejemplo 3: Sumar todos los elementos con reduce()
const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma total de los números:", sumaTotal); // Salida: 55

/* ======================== 4. FUNCIONES FLECHA SIN PARÁMETROS ======================== */

/*
Si no hay parámetros, debes utilizar `()` antes de la flecha `=>`.
*/

// Ejemplo: Devolver un saludo
const saludoGeneral = () => "¡Hola a todos!";
console.log(saludoGeneral()); // Salida: ¡Hola a todos!

/* ======================== 5. FUNCIONES FLECHA Y EL CONTEXTO DE THIS ======================== */

/*
Las funciones flecha **no tienen su propio contexto `this`**.
Heredan el valor de `this` del ámbito donde fueron creadas.
*/

// Ejemplo comparativo:
const objeto = {
  nombre: "Ana",
  saludarNormal: function () {
    console.log(`Hola, soy ${this.nombre}`); // `this` apunta al objeto
  },
  saludarFlecha: () => {
    console.log(`Hola, soy ${this.nombre}`); // `this` no apunta al objeto, sino al ámbito global
  },
};

objeto.saludarNormal(); // Salida: Hola, soy Ana
objeto.saludarFlecha(); // Salida: Hola, soy undefined

/*
La función normal utiliza `this` correctamente en el contexto del objeto,
pero la función flecha toma el `this` del ámbito donde fue definida (global o superior).
*/

/* ======================== 6. EJEMPLOS PRÁCTICOS ======================== */

/*
1. Crear una lista de objetos a partir de un array
*/

const nombres = ["Juan", "Ana", "Pedro"];
const personas = nombres.map(nombre => ({ nombre }));
console.log("Lista de personas:", personas); 
// Salida: [{ nombre: "Juan" }, { nombre: "Ana" }, { nombre: "Pedro" }]

/*
2. Filtrar objetos por propiedad
*/

const empleados = [
  { nombre: "Carlos", edad: 35, salario: 2500 },
  { nombre: "María", edad: 28, salario: 1800 },
  { nombre: "Luis", edad: 45, salario: 3000 },
];

const empleadosAltos = empleados.filter(emp => emp.salario > 2000);
console.log("Empleados con salario mayor a 2000:", empleadosAltos);
// Salida: [{ nombre: "Carlos", ... }, { nombre: "Luis", ... }]

/*
3. Encontrar el primer elemento que cumpla una condición
*/

const primerEmpleadoMayor30 = empleados.find(emp => emp.edad > 30);
console.log("Primer empleado mayor de 30 años:", primerEmpleadoMayor30);

/*
4. Contar ocurrencias de elementos
*/

const letras = ["a", "b", "c", "a", "b", "a"];
const contador = letras.reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1;
  return acc;
}, {});

console.log("Contador de letras:", contador); // Salida: { a: 3, b: 2, c: 1 }

/*
5. Ordenar un array de objetos
*/

const productos = [
  { nombre: "Manzana", precio: 2 },
  { nombre: "Naranja", precio: 1 },
  { nombre: "Plátano", precio: 3 },
];

const productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:", productosOrdenados);
// Salida: [{ nombre: "Naranja" }, { nombre: "Manzana" }, { nombre: "Plátano" }]
/*
======================== USO DE setTimeout Y setInterval EN JAVASCRIPT ========================
Descripción: Métodos para ejecutar funciones después de un tiempo específico (`setTimeout`) o repetidamente en intervalos específicos (`setInterval`).
*/

/* ======================== 1. setTimeout() ======================== */

/*
Descripción: Ejecuta una función después de un retraso específico (en milisegundos).
Sintaxis: setTimeout(función, tiempo);
*/

// Ejemplo 1: Mostrar un mensaje después de 2 segundos
const saludar = () => {
  console.log("Hola, este mensaje aparece después de 2 segundos.");
};
setTimeout(saludar, 2000); // Ejecuta la función después de 2000 ms (2 segundos)

/*
Ejemplo 2: Ejecutar una función anónima directamente en setTimeout
*/
setTimeout(() => {
  console.log("Este mensaje también aparece después de 3 segundos.");
}, 3000);

/* ======================== 2. setInterval() ======================== */

/*
Descripción: Ejecuta una función repetidamente en intervalos de tiempo específicos (en milisegundos).
Sintaxis: setInterval(función, tiempo);
*/

// Ejemplo 1: Mostrar la hora actual cada 3 segundos
const mostrarHora = () => {
  const ahora = new Date();
  console.log(`La hora actual es: ${ahora.toLocaleTimeString()}`);
};
setInterval(mostrarHora, 3000); // Repite la función cada 3000 ms (3 segundos)

/*
Ejemplo 2: Crear un contador ascendente
*/
let contador = 0;
const incrementarContador = () => {
  contador++;
  console.log(`Contador: ${contador}`);
};
setInterval(incrementarContador, 1000); // Incrementa y muestra el contador cada segundo

/* ======================== 3. Limpiar setTimeout y setInterval ======================== */

/*
Descripción: Puedes detener la ejecución de setTimeout o setInterval usando `clearTimeout` y `clearInterval`.
*/

// Ejemplo: Detener un intervalo después de un tiempo
let contadorDetenido = 0;
const incrementarYDetener = () => {
  contadorDetenido++;
  console.log(`Contador Detenido: ${contadorDetenido}`);
};

const intervalo = setInterval(incrementarYDetener, 1000); // Incrementa cada segundo

// Detener el intervalo después de 5 segundos
setTimeout(() => {
  clearInterval(intervalo);
  console.log("El intervalo ha sido detenido después de 5 segundos.");
}, 5000);

/* ======================== 4. Ejemplo Combinado: setTimeout + setInterval ======================== */

/*
Descripción: Usar setTimeout para iniciar un intervalo después de un retraso inicial.
*/

// Ejemplo: Mostrar un mensaje después de 5 segundos y luego cada 5 segundos
const mostrarMensaje = () => {
  console.log("Este mensaje se muestra después de 5 segundos y luego cada 5 segundos.");
};

setTimeout(() => {
  mostrarMensaje(); // Mostrar el primer mensaje
  setInterval(mostrarMensaje, 5000); // Repetir cada 5 segundos
}, 5000);

/* ======================== 5. EJEMPLOS PRÁCTICOS ======================== */

/*
1. Crear un temporizador regresivo
*/
const temporizadorRegresivo = (segundos) => {
  let tiempoRestante = segundos;

  const intervalo = setInterval(() => {
    console.log(`Tiempo restante: ${tiempoRestante} segundos`);
    tiempoRestante--;

    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      console.log("¡Tiempo finalizado!");
    }
  }, 1000);
};

// Iniciar un temporizador de 10 segundos
temporizadorRegresivo(10);

/*
2. Mostrar una animación simulada con setInterval
*/
const puntos = ["-", "\\", "|", "/"];
let indice = 0;

const animacion = setInterval(() => {
  process.stdout.write(`\rCargando ${puntos[indice]}`); // Actualiza la línea en consola
  indice = (indice + 1) % puntos.length;
}, 200);

// Detener la animación después de 5 segundos
setTimeout(() => {
  clearInterval(animacion);
  console.log("\nCarga completada.");
}, 5000);

/*
3. Generar una notificación periódica
*/
const notificarUsuario = () => {
  console.log("🔔 ¡Recuerda tomar un descanso!");
};
setInterval(notificarUsuario, 6000); // Recordatorio cada 6 segundos

/*
4. Simular una cuenta atrás antes de ejecutar una acción
*/
const cuentaAtras = (tiempo, accion) => {
  let contador = tiempo;

  const intervalo = setInterval(() => {
    console.log(`Cuenta atrás: ${contador} segundos`);
    contador--;

    if (contador < 0) {
      clearInterval(intervalo);
      accion();
    }
  }, 1000);
};

cuentaAtras(5, () => {
  console.log("🚀 ¡Acción ejecutada después de la cuenta atrás!");
});

/*
5. Crear una alerta emergente cada cierto tiempo
*/
setInterval(() => {
  alert("¡Recuerda guardar tu progreso!");
}, 10000); // Aparece cada 10 segundos (sólo funciona en navegadores)

/* ======================== RESUMEN ========================
- **setTimeout**: Ejecuta una función después de un retraso.
- **setInterval**: Ejecuta una función repetidamente a intervalos.
- **clearTimeout** y **clearInterval**: Permiten detener setTimeout y setInterval respectivamente.
- **Ejemplos comunes**: Temporizadores regresivos, animaciones, recordatorios y notificaciones.
=========================================================== */
/*
======================== BUCLES EN JAVASCRIPT ========================
Descripción: Los bucles permiten repetir un bloque de código mientras se cumpla una condición.
*/

/* ======================== 1. BUCLE FOR ======================== */

/*
Descripción: Ejecuta un bloque de código un número determinado de veces.
Sintaxis: for (inicio; condición; incremento) { código a ejecutar }
*/

for (let i = 1; i <= 5; i++) {
  console.log(`Iteración ${i}`); // Salida: 1, 2, 3, 4, 5
}

/*
Ejemplo Práctico: Sumar todos los números de un array.
*/

const numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Suma total:", suma); // Salida: 15

/* ======================== 2. BUCLE WHILE ======================== */

/*
Descripción: Ejecuta un bloque de código mientras la condición sea verdadera.
Sintaxis: while (condición) { código a ejecutar }
*/

let contador = 1;
while (contador <= 5) {
  console.log(`Número: ${contador}`);
  contador++;
}

/*
Ejemplo Práctico: Buscar un número en un array.
*/

let encontrado = false;
let i = 0;
while (i < numeros.length && !encontrado) {
  if (numeros[i] === 3) encontrado = true;
  i++;
}
console.log("Número encontrado:", encontrado); // Salida: true

/* ======================== 3. BUCLE DO...WHILE ======================== */

/*
Descripción: Similar al bucle while, pero garantiza que el código se ejecute al menos una vez.
Sintaxis: do { código } while (condición);
*/

let valor = 1;
do {
  console.log(`Valor: ${valor}`);
  valor++;
} while (valor <= 5);

/* ======================== 4. BUCLE FOR...IN ======================== */

/*
Descripción: Itera sobre las propiedades de un objeto.
Sintaxis: for (let clave in objeto) { código a ejecutar }
*/

const persona = { nombre: "Juan", edad: 30, profesion: "Ingeniero" };
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
} // Salida: nombre: Juan, edad: 30, profesion: Ingeniero

/* ======================== 5. BUCLE FOR...OF ======================== */

/*
Descripción: Itera sobre elementos iterables como arrays.
Sintaxis: for (let variable of iterable) { código a ejecutar }
*/

for (let numero of numeros) {
  console.log("Número:", numero);
} // Salida: 1, 2, 3, 4, 5

/* ======================== 6. forEach() ======================== */

/*
Descripción: Ejecuta una función para cada elemento del array.
*/

numeros.forEach((num, index) => console.log(`Índice ${index}: ${num}`));

/*
Ejemplo Práctico: Filtrar números pares de un array.
*/

const pares = numeros.filter((num) => num % 2 === 0);
console.log("Números Pares:", pares); // Salida: [2, 4]

/* ======================== 7. PROMESAS ======================== */

/*
Descripción: 
Las **promesas** en JavaScript permiten manejar operaciones asíncronas, como solicitudes HTTP o temporizadores. 
Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Estados de una Promesa:
1. **Pendiente (Pending):** La operación aún no ha finalizado.
2. **Resuelta (Resolved/Fulfilled):** La operación se completó con éxito.
3. **Rechazada (Rejected):** La operación falló.

Métodos Importantes:
- `then()`: Se ejecuta cuando la promesa se resuelve exitosamente.
- `catch()`: Se ejecuta si la promesa es rechazada.
- `finally()`: Se ejecuta siempre, independientemente de si la promesa fue resuelta o rechazada.
*/

/* ======================== EJEMPLO BÁSICO ======================== */

const miPromesa = new Promise((resolve, reject) => {
  let exito = true; // Simulación de éxito o error
  if (exito) resolve("✅ Operación exitosa!");
  else reject("❌ Error en la operación.");
});

miPromesa
  .then((mensaje) => console.log("Resultado:", mensaje)) // Éxito
  .catch((error) => console.error("Error:", error))     // Error
  .finally(() => console.log("Promesa completada."));   // Siempre se ejecuta

/* ======================== EJEMPLOS PRÁCTICOS ======================== */

/*
1. Simulación de una Solicitud HTTP (Fetch API)
*/

const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = { nombre: "Juan", edad: 30 };
      resolve(datos); // Simulación de éxito
    }, 2000);
  });
};

obtenerDatos()
  .then((datos) => console.log("Datos recibidos:", datos))
  .catch((error) => console.error("Error al obtener datos:", error));

/*
2. Manejo de Error en Promesas
*/

const promesaConError = new Promise((resolve, reject) => {
  setTimeout(() => reject("¡Algo salió mal!"), 1000);
});

promesaConError
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error("Error capturado:", error));

/*
3. Encadenamiento de Promesas
*/

const paso1 = () => new Promise((resolve) => resolve("Paso 1 completado"));
const paso2 = () => new Promise((resolve) => resolve("Paso 2 completado"));

paso1()
  .then((mensaje1) => {
    console.log(mensaje1);
    return paso2();
  })
  .then((mensaje2) => console.log(mensaje2))
  .catch((error) => console.error("Error en algún paso:", error));

/*
4. Usar finally() para Limpieza
*/

const miPromesaConFinally = new Promise((resolve) => {
  setTimeout(() => resolve("Tarea finalizada"), 1500);
});

miPromesaConFinally
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error))
  .finally(() => console.log("Limpieza de recursos completada."));

/*
5. Ejecutar Múltiples Promesas Simultáneamente (Promise.all)
*/

const promesa1 = Promise.resolve("Promesa 1 completada");
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa 2 completada"), 2000));
const promesa3 = new Promise((resolve) => setTimeout(() => resolve("Promesa 3 completada"), 1000));

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => console.log("Todas las promesas completadas:", resultados))
  .catch((error) => console.error("Error en alguna promesa:", error));

/* ======================== RESUMEN ========================

- Las **promesas** permiten manejar código asíncrono de forma ordenada.
- Estados:
  - Pending: Operación en progreso.
  - Fulfilled: Operación exitosa (then).
  - Rejected: Operación fallida (catch).

- Métodos Importantes:
  - `.then()`: Se ejecuta si la promesa tiene éxito.
  - `.catch()`: Maneja errores de promesas rechazadas.
  - `.finally()`: Se ejecuta siempre, independientemente del resultado.

- Herramientas adicionales:
  - **Encadenamiento:** Permite ejecutar promesas secuenciales.
  - **Promise.all():** Ejecuta múltiples promesas en paralelo y devuelve resultados cuando todas se completan.

=========================================================== */


/* ======================== 8. FETCH API ======================== */

/*
Descripción: Permite realizar solicitudes HTTP de manera asíncrona.
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("Datos obtenidos:", data))
  .catch((error) => console.error("Error:", error));

/* ======================== 9. ASYNC / AWAIT ======================== */

/*
Descripción: Simplifica el manejo de promesas usando una sintaxis más limpia.
*/

async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const datos = await respuesta.json();
    console.log("Datos con async/await:", datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
obtenerDatos();

/* ======================== 10. MANEJO DE EVENTOS ======================== */

window.onload = () => {
  const boton = document.createElement("button");
  boton.textContent = "Haz clic aquí";
  document.body.appendChild(boton);

  boton.addEventListener("click", () => alert("¡Botón clicado!"));
};

/* ======================== 11. LOCALSTORAGE ======================== */

/*
Descripción: 
El objeto `localStorage` permite almacenar datos de forma **persistente** en el navegador del usuario. 
Los datos permanecen almacenados incluso si la página se recarga o si el navegador se cierra y se vuelve a abrir.

Características:
- Los datos se almacenan en **pares clave-valor**.
- Solo se puede almacenar **strings** (se deben convertir objetos a JSON si es necesario).
- El almacenamiento es limitado (aproximadamente 5-10 MB dependiendo del navegador).
- Para datos temporales, se puede usar `sessionStorage`.

Métodos importantes:
1. `setItem(key, value)`: Almacena un valor con una clave específica.
2. `getItem(key)`: Obtiene el valor asociado a una clave.
3. `removeItem(key)`: Elimina un elemento almacenado por su clave.
4. `clear()`: Elimina todos los elementos almacenados en `localStorage`.
5. `key(index)`: Devuelve la clave en una posición específica.
6. `length`: Propiedad que devuelve el número total de claves almacenadas.
*/

/* ======================== 1. Almacenar Datos ======================== */

localStorage.setItem("nombre", "Juan");
localStorage.setItem("edad", "30");
console.log("Nombre desde localStorage:", localStorage.getItem("nombre")); // Salida: Juan
console.log("Edad desde localStorage:", localStorage.getItem("edad"));     // Salida: 30

/* ======================== 2. Actualizar Datos ======================== */

localStorage.setItem("nombre", "Ana"); // Sobrescribe la clave existente
console.log("Nuevo nombre:", localStorage.getItem("nombre")); // Salida: Ana

/* ======================== 3. Eliminar Datos ======================== */

localStorage.removeItem("edad"); // Elimina la clave 'edad'
console.log("Edad después de eliminar:", localStorage.getItem("edad")); // Salida: null

/* ======================== 4. Eliminar Todos los Datos ======================== */

localStorage.clear(); // Borra todos los datos almacenados
console.log("Nombre después de limpiar:", localStorage.getItem("nombre")); // Salida: null

/* ======================== 5. Recorrer el localStorage ======================== */

// Añadir algunos datos de ejemplo
localStorage.setItem("ciudad", "Madrid");
localStorage.setItem("país", "España");

// Recorrer todas las claves almacenadas
console.log("Recorriendo localStorage:");
for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  console.log(`Clave: ${clave}, Valor: ${localStorage.getItem(clave)}`);
}

/* ======================== 6. Almacenar Objetos ======================== */

/*
Descripción: 
Como `localStorage` solo admite strings, necesitamos **convertir objetos a JSON** usando `JSON.stringify()` 
y luego parsearlos con `JSON.parse()` al recuperarlos.
*/

const usuario = { nombre: "Laura", edad: 27, ciudad: "Barcelona" };

// Guardar el objeto en localStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar el objeto y parsearlo
const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));
console.log("Usuario recuperado:", usuarioRecuperado);
// Salida: { nombre: "Laura", edad: 27, ciudad: "Barcelona" }

/* ======================== 7. Contador Persistente ======================== */

/*
Ejemplo práctico: Crear un contador que persista en el localStorage.
*/

let contador = localStorage.getItem("contador") ? parseInt(localStorage.getItem("contador")) : 0;

const incrementarContador = () => {
  contador++;
  localStorage.setItem("contador", contador);
  console.log(`Contador: ${contador}`);
};

// Incrementar el contador 3 veces
incrementarContador();
incrementarContador();
incrementarContador();
// Al recargar la página, el valor del contador seguirá siendo persistente.

/* ======================== 8. Lista de Tareas con localStorage ======================== */

// Ejemplo práctico: Guardar una lista de tareas y mostrarla en la consola
const tareas = ["Estudiar JavaScript", "Practicar DOM", "Revisar localStorage"];
localStorage.setItem("tareas", JSON.stringify(tareas));

// Recuperar y mostrar las tareas
const tareasRecuperadas = JSON.parse(localStorage.getItem("tareas"));
console.log("Lista de tareas:");
tareasRecuperadas.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`));

/* ======================== 9. Validar si una clave existe ======================== */

if (localStorage.getItem("usuario")) {
  console.log("La clave 'usuario' existe en localStorage.");
} else {
  console.log("La clave 'usuario' no existe en localStorage.");
}

/* ======================== 10. Notificación de Espacio Usado ======================== */

// Mostrar el espacio ocupado por localStorage
const espacioUsado = JSON.stringify(localStorage).length;
console.log(`Espacio usado en localStorage: ${espacioUsado} bytes`);


/* ======================== 12. EJEMPLOS PRÁCTICOS ======================== */

// 1. Generar una tabla de multiplicar dinámicamente
const numeroTabla = 5;
console.log(`Tabla del ${numeroTabla}`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
}

// 2. Temporizador regresivo usando setInterval
let tiempoRestante = 10;
const temporizador = setInterval(() => {
  console.log(`Tiempo restante: ${tiempoRestante} segundos`);
  tiempoRestante--;

  if (tiempoRestante < 0) {
    clearInterval(temporizador);
    console.log("¡Tiempo terminado!");
  }
}, 1000);

/* ======================== RESUMEN ========================
- **Bucles**: for, while, do...while, for...in, for...of, forEach.
- **Promesas**: Manejo de operaciones asíncronas.
- **Fetch API**: Realización de solicitudes HTTP.
- **Async/Await**: Manejo simplificado de promesas.
- **LocalStorage**: Almacenamiento persistente de datos.
- **Manejo de Eventos**: Captura de acciones del usuario.
=========================================================== */
/* ======================== ARRAYS DE OBJETOS ======================== */
/*
Descripción: Un **array de objetos** es una estructura de datos que combina arrays y objetos. 
Se utiliza para almacenar colecciones donde cada elemento es un objeto con propiedades clave-valor.
*/

/* ======================== 1. Iterar Claves y Valores con Object.keys() ======================== */

/*
Descripción: `Object.keys()` devuelve un array con las claves (propiedades) de un objeto. 
Se puede usar para iterar sobre las claves y acceder a sus valores.
*/

const arrayDeObjetos = [
  { nombre: "Juan", edad: 30, ciudad: "Madrid" },
  { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
  { nombre: "Carlos", edad: 35, ciudad: "Valencia" }
];

console.log("=== Iteración usando Object.keys() ===");
for (const obj of arrayDeObjetos) {
  for (const key of Object.keys(obj)) {
    console.log(`Clave: ${key}, Valor: ${obj[key]}`);
  }
}

/*
Salida:
Clave: nombre, Valor: Juan
Clave: edad, Valor: 30
Clave: ciudad, Valor: Madrid
...
*/

/* ======================== 2. Iterar Claves y Valores con Object.entries() ======================== */

/*
Descripción: `Object.entries()` devuelve un array de arrays donde cada sub-array contiene la clave y el valor del objeto.
*/

console.log("=== Iteración usando Object.entries() ===");
for (const obj of arrayDeObjetos) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`Clave: ${key}, Valor: ${value}`);
  }
}

/*
Salida:
Clave: nombre, Valor: Juan
Clave: edad, Valor: 30
Clave: ciudad, Valor: Madrid
...
*/

/* ======================== 3. Iterar Solo Valores con Object.values() ======================== */

/*
Descripción: `Object.values()` devuelve un array con los valores de un objeto, ignorando las claves.
*/

console.log("=== Iteración usando Object.values() ===");
for (const obj of arrayDeObjetos) {
  for (const value of Object.values(obj)) {
    console.log(`Valor: ${value}`);
  }
}

/*
Salida:
Valor: Juan
Valor: 30
Valor: Madrid
...
*/

/* ======================== 4. Filtrar un Array de Objetos ======================== */

/*
Descripción: Podemos usar `filter()` para obtener elementos que cumplan con una condición específica.
Ejemplo: Filtrar personas mayores de 30 años.
*/

console.log("=== Filtrar personas mayores de 30 años ===");
const mayoresDe30 = arrayDeObjetos.filter((persona) => persona.edad > 30);
console.log(mayoresDe30);

/*
Salida:
[{ nombre: "Carlos", edad: 35, ciudad: "Valencia" }]
*/

/* ======================== 5. Buscar un Elemento con find() ======================== */

/*
Descripción: `find()` devuelve el primer elemento que cumple con una condición.
Ejemplo: Buscar a una persona llamada "Ana".
*/

console.log("=== Buscar a una persona llamada Ana ===");
const personaAna = arrayDeObjetos.find((persona) => persona.nombre === "Ana");
console.log(personaAna);

/*
Salida:
{ nombre: "Ana", edad: 25, ciudad: "Barcelona" }
*/

/* ======================== 6. Ordenar un Array de Objetos ======================== */

/*
Descripción: `sort()` ordena un array de objetos según una propiedad específica.
Ejemplo: Ordenar las personas por edad de menor a mayor.
*/

console.log("=== Ordenar personas por edad (ascendente) ===");
const ordenadoPorEdad = arrayDeObjetos.sort((a, b) => a.edad - b.edad);
console.log(ordenadoPorEdad);

/*
Salida:
[
  { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
  { nombre: "Juan", edad: 30, ciudad: "Madrid" },
  { nombre: "Carlos", edad: 35, ciudad: "Valencia" }
]
*/

/* ======================== 7. Mapear un Array de Objetos ======================== */

/*
Descripción: `map()` transforma cada elemento del array en uno nuevo. 
Ejemplo: Crear un array con los nombres de todas las personas.
*/

console.log("=== Crear un array con los nombres ===");
const nombres = arrayDeObjetos.map((persona) => persona.nombre);
console.log(nombres);

/*
Salida:
["Juan", "Ana", "Carlos"]
*/

/* ======================== 8. Reducir un Array de Objetos ======================== */

/*
Descripción: `reduce()` permite reducir un array a un solo valor.
Ejemplo: Calcular la suma total de las edades.
*/

console.log("=== Sumar todas las edades ===");
const sumaEdades = arrayDeObjetos.reduce((total, persona) => total + persona.edad, 0);
console.log(`Suma total de edades: ${sumaEdades}`);

/*
Salida:
Suma total de edades: 90
*/

/* ======================== 9. Actualizar Valores de un Array de Objetos ======================== */

/*
Descripción: Podemos usar `map()` para actualizar propiedades de un objeto en el array.
Ejemplo: Aumentar la edad de todas las personas en 1 año.
*/

console.log("=== Aumentar la edad en 1 año ===");
const actualizados = arrayDeObjetos.map((persona) => {
  return { ...persona, edad: persona.edad + 1 };
});
console.log(actualizados);

/*
Salida:
[
  { nombre: "Juan", edad: 31, ciudad: "Madrid" },
  { nombre: "Ana", edad: 26, ciudad: "Barcelona" },
  { nombre: "Carlos", edad: 36, ciudad: "Valencia" }
]
*/

/* ======================== 10. Eliminar un Objeto del Array ======================== */

/*
Descripción: Usamos `filter()` para excluir un elemento específico del array.
Ejemplo: Eliminar a la persona llamada "Carlos".
*/

console.log("=== Eliminar a Carlos del array ===");
const sinCarlos = arrayDeObjetos.filter((persona) => persona.nombre !== "Carlos");
console.log(sinCarlos);

/*
Salida:
[
  { nombre: "Juan", edad: 30, ciudad: "Madrid" },
  { nombre: "Ana", edad: 25, ciudad: "Barcelona" }
]
*/

/* ======================== RESUMEN ======================== */
/*
1. **Object.keys()**: Itera las claves de un objeto.
2. **Object.entries()**: Itera las claves y valores de un objeto.
3. **Object.values()**: Itera solo los valores de un objeto.
4. **filter()**: Filtra elementos del array que cumplan una condición.
5. **find()**: Encuentra el primer elemento que cumple una condición.
6. **sort()**: Ordena los elementos del array.
7. **map()**: Transforma el array en uno nuevo.
8. **reduce()**: Reduce el array a un solo valor.
9. **Actualizar Valores**: Usa `map()` para modificar propiedades de objetos.
10. **Eliminar Elementos**: Usa `filter()` para eliminar objetos específicos.
*/

/* ======================== TIPOS DE EVENTOS EN JAVASCRIPT ======================== */
/*
Descripción: Los eventos son acciones o sucesos que ocurren en el navegador, como un clic, movimiento del ratón, 
presionar una tecla o cargar una página. JavaScript permite escuchar y responder a estos eventos usando **event listeners**.
*/

/* ======================== 1. EVENTOS DE RATÓN ======================== */

/*
Descripción: Eventos que ocurren cuando el usuario interactúa con el ratón.
*/

/* 1.1 click - Se dispara cuando se hace clic en un elemento */
const btnClick = document.querySelector("#btnClick");
btnClick.addEventListener("click", () => {
  console.log("Se hizo clic en el botón.");
});

/* 1.2 dblclick - Se dispara cuando se hace doble clic */
const btnDblClick = document.querySelector("#btnDblClick");
btnDblClick.addEventListener("dblclick", () => {
  console.log("Se hizo doble clic en el botón.");
});

/* 1.3 mouseover y mouseout - Cuando el ratón entra o sale de un elemento */
const cajaHover = document.querySelector("#cajaHover");
cajaHover.addEventListener("mouseover", () => {
  cajaHover.style.backgroundColor = "yellow";
  console.log("Ratón sobre la caja.");
});
cajaHover.addEventListener("mouseout", () => {
  cajaHover.style.backgroundColor = "";
  console.log("Ratón fuera de la caja.");
});

/* 1.4 mousedown y mouseup - Cuando se presiona o suelta un botón del ratón */
const cajaMouseDown = document.querySelector("#cajaMouseDown");
cajaMouseDown.addEventListener("mousedown", () => {
  console.log("Botón del ratón presionado.");
});
cajaMouseDown.addEventListener("mouseup", () => {
  console.log("Botón del ratón liberado.");
});

/* 1.5 mousemove - Se dispara mientras el ratón se mueve sobre un elemento */
const cajaMouseMove = document.querySelector("#cajaMouseMove");
cajaMouseMove.addEventListener("mousemove", () => {
  console.log("El ratón se está moviendo sobre la caja.");
});

/* ======================== 2. EVENTOS DE TECLADO ======================== */

/*
Descripción: Eventos relacionados con la interacción del teclado.
*/

/* 2.1 keydown - Se dispara cuando una tecla es presionada */
document.addEventListener("keydown", (event) => {
  console.log(`Tecla presionada: ${event.key}`);
});

/* 2.2 keyup - Se dispara cuando una tecla es liberada */
document.addEventListener("keyup", (event) => {
  console.log(`Tecla liberada: ${event.key}`);
});

/* 2.3 input - Captura cada cambio en un campo de texto */
const inputTexto = document.querySelector("#inputTexto");
inputTexto.addEventListener("input", () => {
  console.log(`Valor del campo: ${inputTexto.value}`);
});

/* ======================== 3. EVENTOS DE FORMULARIO ======================== */

/*
Descripción: Eventos asociados a formularios y elementos de formulario.
*/

/* 3.1 submit - Se dispara cuando se envía un formulario */
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío del formulario
  console.log("Formulario enviado.");
});

/* 3.2 change - Se dispara cuando un input pierde el foco después de modificar su valor */
const inputCambio = document.querySelector("#inputCambio");
inputCambio.addEventListener("change", () => {
  console.log(`Nuevo valor del input: ${inputCambio.value}`);
});

/* ======================== 4. EVENTOS DE VENTANA ======================== */

/*
Descripción: Eventos relacionados con la ventana del navegador.
*/

/* 4.1 load - Se dispara cuando la página y sus recursos han terminado de cargarse */
window.addEventListener("load", () => {
  console.log("Página completamente cargada.");
});

/* 4.2 resize - Se dispara cuando la ventana cambia de tamaño */
window.addEventListener("resize", () => {
  console.log(`Tamaño de la ventana: ${window.innerWidth}x${window.innerHeight}`);
});

/* 4.3 scroll - Se dispara cuando el usuario desplaza la página */
window.addEventListener("scroll", () => {
  console.log(`Desplazamiento vertical: ${window.scrollY}`);
});

/* ======================== 5. EVENTOS DE DRAG & DROP ======================== */

/*
Descripción: Eventos relacionados con la funcionalidad de arrastrar y soltar.
*/

const dragItem = document.querySelector("#dragItem");
const dropZone = document.querySelector("#dropZone");

dragItem.addEventListener("dragstart", (event) => {
  console.log("Elemento arrastrado.");
  event.dataTransfer.setData("text/plain", dragItem.id);
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault(); // Necesario para permitir el drop
  console.log("Elemento sobre la zona de drop.");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  const id = event.dataTransfer.getData("text/plain");
  const elemento = document.getElementById(id);
  dropZone.appendChild(elemento);
  console.log("Elemento soltado en la zona de drop.");
});

/* ======================== 6. EVENTOS DE CONTEXTO ======================== */

/*
Descripción: Eventos relacionados con el clic derecho.
*/

/* 6.1 contextmenu - Se dispara al hacer clic derecho en un elemento */
const cajaContextMenu = document.querySelector("#cajaContextMenu");
cajaContextMenu.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log("Menú contextual deshabilitado.");
});

/* ======================== 7. EVENTOS DE FOCO ======================== */

/*
Descripción: Eventos cuando un elemento obtiene o pierde el foco.
*/

/* 7.1 focus - Se dispara cuando un elemento recibe el foco */
inputTexto.addEventListener("focus", () => {
  console.log("El campo de texto tiene el foco.");
});

/* 7.2 blur - Se dispara cuando un elemento pierde el foco */
inputTexto.addEventListener("blur", () => {
  console.log("El campo de texto perdió el foco.");
});

/* ======================== 8. EJEMPLO PRÁCTICO: LIMPIAR ELEMENTOS ======================== */

/*
Descripción: Evento que borra el contenido de un textarea y elimina elementos dinámicos.
*/

const btnBorrarTodo = document.querySelector("#btnBorrarTodo");
const textoArea = document.querySelector("#textoArea");
const main = document.querySelector("#main");

btnBorrarTodo.onclick = function () {
  textoArea.value = ""; // Limpia el contenido del textarea
  const arrayDivsMain = main.querySelectorAll("div");

  for (let i = 4; i < arrayDivsMain.length; i++) {
    arrayDivsMain[i].remove(); // Elimina todos los divs después del cuarto
  }
  console.log("Contenido y elementos borrados.");
};

/* ======================== RESUMEN ======================== */
/*
1. **Eventos de ratón**: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove.
2. **Eventos de teclado**: keydown, keyup, input.
3. **Eventos de formulario**: submit, change.
4. **Eventos de ventana**: load, resize, scroll.
5. **Eventos de drag & drop**: dragstart, dragover, drop.
6. **Eventos de contexto**: contextmenu.
7. **Eventos de foco**: focus, blur.

**Uso común**: Crear interactividad en formularios, manejar acciones del usuario como clics o movimientos, 
gestionar la carga y el tamaño de la ventana, y desarrollar funcionalidades avanzadas como drag & drop.
*/
/* ======================== TIPOS DE EVENTOS EN JAVASCRIPT ======================== */
/*
Descripción: Ejemplos prácticos adicionales de manejo de eventos en JavaScript
*/

/* ======================== 1. EVENTOS DE RATÓN - CAMBIAR COLOR DE FONDO ======================== */

/*
Descripción: Cambia el color de fondo del cuerpo de la página al hacer clic en un botón.
*/
const btnColorFondo = document.querySelector("#btnColorFondo");
btnColorFondo.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f0f0";
  console.log("Color de fondo cambiado a gris claro.");
});

/* ======================== 2. EVENTOS DE TECLADO - MOSTRAR TEXTO EN TIEMPO REAL ======================== */

/*
Descripción: Muestra el texto que el usuario escribe en un input en un párrafo.
*/
const inputRealTime = document.querySelector("#inputRealTime");
const outputTexto = document.querySelector("#outputTexto");

inputRealTime.addEventListener("input", () => {
  outputTexto.textContent = `Texto ingresado: ${inputRealTime.value}`;
});

/* ======================== 3. EVENTO SCROLL - MOSTRAR BOTÓN DE IR ARRIBA ======================== */

/*
Descripción: Muestra un botón "Ir arriba" cuando se hace scroll en la página.
*/
const btnIrArriba = document.querySelector("#btnIrArriba");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnIrArriba.style.display = "block";
  } else {
    btnIrArriba.style.display = "none";
  }
});

btnIrArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("Volviendo al inicio.");
});

/* ======================== 4. EVENTO SUBMIT - VALIDACIÓN DE FORMULARIO ======================== */

/*
Descripción: Evita el envío del formulario si el campo está vacío.
*/
const formValidar = document.querySelector("#formValidar");
const inputNombre = document.querySelector("#inputNombre");
const mensajeError = document.querySelector("#mensajeError");

formValidar.addEventListener("submit", (e) => {
  if (inputNombre.value.trim() === "") {
    e.preventDefault();
    mensajeError.textContent = "El campo no puede estar vacío.";
    console.log("Formulario no enviado, campo vacío.");
  }
});

/* ======================== 5. EVENTO HOVER - MOSTRAR IMAGEN AMPLIADA ======================== */

/*
Descripción: Muestra una versión ampliada de una imagen cuando el ratón pasa por encima.
*/
const imgThumbnail = document.querySelector("#imgThumbnail");
const imgAmpliada = document.querySelector("#imgAmpliada");

imgThumbnail.addEventListener("mouseover", () => {
  imgAmpliada.style.display = "block";
  console.log("Imagen ampliada visible.");
});

imgThumbnail.addEventListener("mouseout", () => {
  imgAmpliada.style.display = "none";
  console.log("Imagen ampliada oculta.");
});

/* ======================== 6. EVENTO RESIZE - CAMBIO DINÁMICO DE TEXTO ======================== */

/*
Descripción: Cambia el texto dinámicamente cuando se redimensiona la ventana.
*/
const textoResize = document.querySelector("#textoResize");

window.addEventListener("resize", () => {
  textoResize.textContent = `Ancho de la ventana: ${window.innerWidth}px`;
  console.log("Tamaño de ventana ajustado.");
});

/* ======================== 7. EVENTO CONTEXTMENU - BLOQUEAR MENÚ CONTEXTUAL ======================== */

/*
Descripción: Bloquea el menú contextual del navegador en una imagen.
*/
const imgBloqueada = document.querySelector("#imgBloqueada");
imgBloqueada.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("El clic derecho está deshabilitado en esta imagen.");
  console.log("Menú contextual bloqueado.");
});

/* ======================== 8. EVENTOS DE DRAG & DROP - CAMBIAR POSICIÓN DE ELEMENTOS ======================== */

/*
Descripción: Permite arrastrar y soltar un elemento a una zona específica.
*/
const elementoArrastrable = document.querySelector("#elementoArrastrable");
const dropArea = document.querySelector("#dropArea");

elementoArrastrable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", elementoArrastrable.id);
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  const idElemento = e.dataTransfer.getData("text/plain");
  const elemento = document.getElementById(idElemento);
  dropArea.appendChild(elemento);
  console.log("Elemento soltado en el área de drop.");
});

/* ======================== 9. EVENTOS DE FOCO - CAMBIAR BORDE AL INPUT ======================== */

/*
Descripción: Resalta el borde de un input cuando obtiene o pierde el foco.
*/
const inputResaltado = document.querySelector("#inputResaltado");

inputResaltado.addEventListener("focus", () => {
  inputResaltado.style.border = "2px solid blue";
  console.log("Input enfocado.");
});

inputResaltado.addEventListener("blur", () => {
  inputResaltado.style.border = "1px solid #ccc";
  console.log("Input perdió el foco.");
});

/* ======================== 10. EVENTO INPUT - SIMULACIÓN DE BÚSQUEDA ======================== */

/*
Descripción: Filtra elementos de una lista en tiempo real mientras el usuario escribe.
*/
const inputBusqueda = document.querySelector("#inputBusqueda");
const listaElementos = document.querySelectorAll(".elementoLista");

inputBusqueda.addEventListener("input", () => {
  const textoBusqueda = inputBusqueda.value.toLowerCase();
  listaElementos.forEach((item) => {
    if (item.textContent.toLowerCase().includes(textoBusqueda)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  console.log(`Texto de búsqueda: ${textoBusqueda}`);
});

/* ======================== RESUMEN ======================== */
/*
1. **Eventos de ratón**: click, mouseover/mouseout para cambiar estilos y mostrar imágenes.
2. **Eventos de teclado**: input en tiempo real, validaciones y eventos keydown/keyup.
3. **Eventos de formulario**: submit con validaciones.
4. **Eventos de ventana**: scroll para mostrar botones, resize para cambiar contenido.
5. **Eventos de drag & drop**: Permite mover elementos dinámicamente.
6. **Eventos de foco**: focus/blur para resaltar inputs.
7. **Eventos input**: Filtro de listas en tiempo real.

**Uso común**: Validación de formularios, animaciones visuales, actualización de contenido dinámico y funcionalidades de usuario.
=========================================================== */
