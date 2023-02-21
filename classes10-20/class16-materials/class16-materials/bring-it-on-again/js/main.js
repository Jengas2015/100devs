// *Variables*
// Declare a variable, assign it a value, and alert the value
const alertMe = "Stuff"
alert(alertMe);

// Create a variable, divide it by 10, and console log the value

const logMe = 20;
console.log(logMe/10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNums(n1, n2, n3) {
    alert (n1 * n2 * n3)
}

multiplyThreeNums(1, 2, 3);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function doesStuff(n1, n2, n3, n4) {
    result = n1 + n2 - n3 - n4
    console.log(result);
}

doesStuff(1, 2, 3, 4);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function conditionals (n1, n2, n3) {
    result = (100 + n1 - n2) / n3
    if (result > 25) {
        console.log("WE HAVE A WINNNA")
    }
}

conditionals (500, 1, 1)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function weekendFinder(day) {
    let capDay  = day.toLowerCase()
    if (capDay==="saturday" || capDay === "sunday") {
        alert ("weekend")
    } else if (capDay==="monday" || capDay==="tuesday" || capDay==="wednesday" || capDay==="thursday" || capDay==="friday") {
        alert ("week day")
    } else {
        alert("Try Again")
    }
}


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function loopMe(num) {
    for (i=1; i<num; i+=3) {
        console.log(i)
    }
}


