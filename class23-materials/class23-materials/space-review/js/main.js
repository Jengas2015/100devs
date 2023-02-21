//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numsArray = [5, 2, 3, 1, 5, 10]

function arraySum(arr) {
    let sum = 0
    arr.forEach(number => sum+=number)
    return sum
}

console.log(arraySum(numsArray))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareMe(arr) {
    let squaredArray = arr.map(number => number**2)
    return squaredArray
}


//Create a function that takes string
//Print the reverse of that string to the console

function stringReversed(str) {
    let strArray = str.split('').reverse().join('')
    console.log(strArray) 
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeChecker(str) {
    let reversedStr = stringReversed(str)
    if (str === reversedStr) {
        console.log('this is a palindrome')
    } else {
        console.log('This is not a palindrome... :(')
    }
}