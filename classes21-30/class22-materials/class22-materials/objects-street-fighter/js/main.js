//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function SFMaker(name, gender, height, hairColor) {
    this.name = name
    this.gender = gender
    this.height = height
    this.hairColor = hairColor

    this.kick = function () {
        console.log(`${this.name} kicked!`)
    }
    this.punch = function () {
        console.log(`${this.name} punched!`)
    }
    this.jump = function () {
        console.log(`${this.name} jumped!`)
    }
}

