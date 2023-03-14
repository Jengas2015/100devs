// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "pizza"
faveFood = 'sushi'
alert (faveFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secondChallenge = "string"
// alert (secondChallenge[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(n1, n2, n3) {
    let result = n1 / n2 * n3
    alert (result)
}

// threeNums(1, 2, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum (num) {
    console.log(Math.cbrt(num).toFixed(4))
}

oneNum(27)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function conditional(month) {
    let tinyMonth = month.toLowerCase();

    if (tinyMonth === "june" || tinyMonth === "july" || tinyMonth === "august") {
        alert("Yay")
    } else {
        alert ("Boo")
    }
}



//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function LoopMe (num) {
    for (i=1; i<=num; i++) {
        if (i%5) {
             console.log(i)
        } else {
            console.log("skip")
        }
    }
}


LoopMe(30)
