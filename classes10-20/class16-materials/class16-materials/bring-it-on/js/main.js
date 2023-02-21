// *Variables*
// Create a variable and console log the value
let logMe = 21;
console.log(logMe);
// Create a variable, add 10 to it, and alert the value
alertMe =10;
alertMe+=10;
alert(alertMe);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function difference(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}


// Create a function that divides one number by another and returns the remainder

function remainder (num1, num2) {
    return num1%num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function conditionals (num1, num2) {
    let sum = num1 + num2
    if (sum> 50) {
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThree (num1, num2, num3) {
    let product = num1 * num2 * num3;
    if (product % 3===0) {
        alert("ZEBRA");
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopMe(word, number) {
    for (i=1; i<=number; i++) {
        console.log(word)
    }
}

