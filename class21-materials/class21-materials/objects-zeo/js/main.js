//Create a stopwatch object that has four properties and three methods

let stopwatch = {
    hours : 0,
    minutes: 30,
    seconds: 15,
    lap: 1,

    hoursMe: function method1() {
        console.log(`${this.hours} hours have passed`)
    },
    minutesMe: function method2() {
        console.log(`${this.minutes} minutes have passed`)
    },
    secondsMe: function method3() {
        console.log(`${this.seconds} seconds have passed`)
    } 

}