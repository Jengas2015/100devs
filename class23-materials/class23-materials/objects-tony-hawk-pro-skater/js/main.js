//Create a Tony Hawk Pro Skater constructor that makes a skating game character with 4 properties and 3 methods


function MakeSkater(name, gender, height, speed) {
    this.name= name
    this.gender= gender
    this.height= height
    this.speed= speed

    this.jump = () => console.log(`${name} jumped!`)
    this.kickflip = () => console.log(`${name} did a kickflip!`)
    this.threesixty = () => console.log(`${name} did a 360!`)
}

