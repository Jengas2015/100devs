//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(carafe, milk, sugar, temp) {
    this.carafe = carafe
    this.milk= milk
    this.sugar=sugar
    this.temp=temp
    }
    boil() {
        console.log("boiling")
    }
    acceptPayment() {
        console.log("processing transaction")
    }
    addWater() {
        console.log("drip, drip")
    }
}