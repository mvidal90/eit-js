
console.log("Hello Wrold!!");

console.log("Este valor es un número: ", 11);

// Operadores matemáticos:

console.log("Esta es una suma: ", 5 + 6);
console.log("Esta es una resta: ", 5 - 6);
console.log("Esta es una multiplicación: ", 5 * 6);
console.log("Esta es una división: ", 30 / 6);
console.log("Este es el módulo: ", 21 % 4);

console.log("ECMA script")

// Variables

var saludo = "Hola como estás?"; // Tipo string

console.log(saludo);

saludo = "Buenas noches a todos!!";

console.log(saludo);

saludo = 11; // Tipo number

console.log(saludo);

let resultado = 4 + 6;

console.log(resultado);

resultado = resultado + 5;

console.log(resultado);

const horario = "19 hs.  a 22 hs.";

console.log(horario)

const condition = true; // Tipo boolean
const notCondition = false; // boolean

console.log(condition)
console.log(notCondition)

if (notCondition) {
    console.log("Hoy es Jueves")
} else {
    console.log("Hoy es otro día de la semana.")
}

// Diferencia entre var y let

// var text; // undefined

// if (condition) {
//     text = "Hoy es jueves."
// } else {
//     text = "Hoy no es jueves."
// }

// console.log(text)


if (condition) {
    var text = "Hoy es jueves."
} else {
    var text = "Hoy no es jueves."
}

console.log(text)

// Operadores lógicos

const stg = "11";
const nmbr = 11;
const opIgual = stg == nmbr; // Operador no igual !=

if (opIgual) {
    console.log("Son iguales en valor", stg, nmbr)
}

const opExactIgual = stg === nmbr; // Operador no exactamente igual !==

if (opExactIgual) {
    console.log("Son iguales en valor, y en tipo", stg, nmbr)
} else {
    console.log("Son iguales en valor, pero no en tipo", stg, nmbr)
}

const a = 6;
const b = 4;
const c = 4;
console.log("a > b", a > b)
console.log("c > b", c > b)
console.log("c >= b", c >= b)
console.log("a < b", a < b)
console.log("c < b", c < b)
console.log("c <= b", c <= b)

// Quiero que "a" sea mayor a "b" Y "b" sea igual a "c"

if (a > b && b === c) {
    console.log("Se cumplió la condición")
}

// Quiero que "a" sea mayor a "b" O "b" sea menor a "c"

if (a > b || b < c) {
    console.log("Se cumplió la condición 2")
}

// Operador Not (!) -->> todo lo que es true pasa a false y todo lo que es false pasa a true

if (!(a > b && b === c)) {
    console.log("Se cumplió la condición")
} else {
    console.log("Caímos en el else, por el operador NOT.")
}