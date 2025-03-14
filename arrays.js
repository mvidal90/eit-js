

const colors = [
    "blue",
    "red",
    "yellow",
    "violet",
    "orange",
    "green"
];

const radomData = ["Hola", 23, undefined, NaN, colors, true]

console.log(`El array tiene ${colors.length} elementos.`)

for (let index = 0; index <= colors.length; index++) {
    const color = colors[index];
    console.log(`El color en la posición ${index} es el ${color}`)
}

console.log(colors[6])

const cars = [{
    brand: "FIAT"
},{
    brand: "VW"
},{
    brand: "BMW"
}]

console.log(cars[2]?.brand) // BMW
console.log(cars[3]?.brand) // undefined
console.log(cars[3].brand) // Error