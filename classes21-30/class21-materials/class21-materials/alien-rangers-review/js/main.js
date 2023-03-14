//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Lost', 'Power Rangers', 'CLOY', 'Moon Knight']

tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

const numbers = [1, 5, 2, 4, 10, 23, 54]

let evenNums= arr => arr.filter(number => number % 2 === 0)

console.log(evenNums(numbers))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

/* function numbersArray (arr) {
    let sorted = arr.sort((a, b)=> a-b)
    alert (sorted[1] + sorted[sorted .length-2])
} */



let testArray = [4, 10, 5, 100, 21, 14, 15, 2]

testArray.sort((a, b) => a-b)