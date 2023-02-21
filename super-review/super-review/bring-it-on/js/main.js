// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num)
// Create a variable, add 10 to it, and alert the value
let newNum = 10;
newNum+=10;
alert(newNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function difference(n1, n2, n3, n4) {
    alert (n1-n2-n3-n4)
}


// Create a function that divides one number by another and returns the remainder

function remainder (n1, n2) {
    return n1%n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function conditionals(n1, n2) {
    if(n1+n2 > 50) {
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyMe(n1, n2, n3) {
    if((n1 * n2 * n3)% 3===0) {
        alert("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopMe (word, number) {
    for (i=1; i<=number; i++) {
        console.log(word)
    }
}

