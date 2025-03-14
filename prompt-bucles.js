
// const saludo = window.prompt("Escriba un saludo:")

// const alumno = " Alumno nro. " 
// // index++ operador acumulador
// for (let index = 0; index < 10; index++) {
//     if (saludo !== null) {
//         console.log(
//             saludo.concat(
//                 alumno.concat(index)
//             )
//         )
//     }
// }

// let response;

// while (response !== "8") {
//     response = window.prompt("Adivine el número entre 0 y 20:")
// }

// console.log("Has adivinado el número")

// Tenemos 10 cursos (EL primer curso arranca en 1) donde cada curso tiene 20 alumnos
// Imprimir en consola cada curso con sus alumnos

for (let course = 1; course <= 10 ; course++) {
    console.log(`Curso nro. ${course}`) //Template string
    for (let child = 1; child <= 15; child++) {
        console.log(`Alumno nro. ${child}`)
    }
}

const a = 99
console.log(`${ a < 100 ? "0" : "" }${a}`) // Condicional Ternario (caso true y caso false)