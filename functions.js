
function suma(a, b) {
    return a + b;
}

const result = suma(7, 10)

const suma2 = (a, b) => a + b

const logger = param => {
    console.log(param)
} 

logger( result )
logger( suma2(10, 8) )

const genararSaludo = () => {
    const saludo = window.prompt("Escriba un saludo:")
    logger(saludo)
}