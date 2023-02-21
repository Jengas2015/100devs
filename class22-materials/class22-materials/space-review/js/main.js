//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArray = [1, 2, 3, 4]
let arraySum = 0
numArray.forEach(number => arraySum+=number)
// alert (arraySum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareMe(arr) {

     let squaredArr=arr.map(number => Math.pow(number, 2))
     return squaredArr
}

let testSquareMe = [2, 3, 4]

console.log(squareMe(testSquareMe))
//Create a function that takes string
//Print the reverse of that string to the console

function strReverser (str) {
    return (str.toString().split('').reverse().join(''))
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeChecker(str) {
    if (str.toString()===strReverser(str)){
        console.log('This is a palindrome!')
    } else {
        console.log('This is not a palindrome... :(')
    }
}

const testStr = 1991


palindromeChecker(testStr)
