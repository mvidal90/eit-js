
const saludo = window.prompt("Escriba un saludo:")

const alumno = " Alumno nro. " 
// index++ operador acumulador
for (let index = 0; index < 10; index++) {
    if (saludo !== null) {
        console.log(
            saludo.concat(
                alumno.concat(index)
            )
        )
    }
}

let response;

while (response !== "8") {
    response = window.prompt("Adivine el número entre 0 y 20:")
}

console.log("Has adivinado el número")
