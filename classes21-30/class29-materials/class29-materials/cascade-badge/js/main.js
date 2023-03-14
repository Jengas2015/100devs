//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reversePokemon(arr) {
    return arr.reverse()
}


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSquares(a, b) {
    let aSquaredSummed = a.reduce((accu, curr) => {
        return accu + Math.pow(curr, 2)
    }, 0)

    let bCubedSummed = b.reduce((accu, curr) => {
        return accu + Math.pow(curr, 3)
    }, 0)
    
    console.log(aSquaredSummed>bCubedSummed)
}

testArrayA = [2, 3, 4, 5]
testArrayB = [1, 1, 1, 1]

compareSquares(testArrayA, testArrayB)

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function doesMathyStuff(arr) {
    let resultArray = []

    for (let i = 0; i<arr.length; i++) {
        if(arr[i] % i === 0) {
            resultArray.push(arr[i])
        }
    }
    console.log(resultArray)
}

const testMathyStuffArray = [68, -1, 1, -7, 10, 10]

doesMathyStuff(testMathyStuffArray)


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function numberfy(arr) {
    let arrayInt = arr.map(elem => Number(elem))
    return arrayInt.reduce((accu, curr)=> {
        return Number(accu + curr)
    })
}

let testNumberfyArray = [1, '1']

console.log(numberfy(testNumberfyArray))