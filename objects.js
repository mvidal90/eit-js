
// Objeto auto

const car = {
    brand: "FIAT",
    model: "Siena",
    quantityDoors: 4,
    color: "black",
    automatic: false,
    start: () => console.log("El auto está arrancando."),
    getBrandModel: function () {
        console.log(`${this.brand} ${this.model}`)
    }
}

car.start()
car.getBrandModel()

// Objeto Date -> tipo de dato

const today = new Date()

console.log(today)

console.log("date", today.getDate())
console.log("day", today.getDay())
console.log("year", today.getFullYear())
console.log("yesterday", 
    new Date(
        today.setDate(
            today.getDate() + 1
        ) 
    )
)