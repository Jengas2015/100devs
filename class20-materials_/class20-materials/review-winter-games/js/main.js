//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function numArray(arr) {
    // forEach method
/*     let newArr = []
    arr.forEach(num => {
        if (num % 2 ===0) {
            newArr.push(num)
        }
    })
    return newArr; */

    // for Loop method

/*     let newArr = []

    for(i=0; i<arr.length; i++) {
        if (arr[i] % 2 ===0) {
            newArr.push(arr[i])
        }  
    }
    return newArr */

    //map method

/*     let mapMe = arr.map(num => {
        if(num % 2 === 0) {
            return num;
        } 
    })
    return mapMe; */

    //filter method

    return arr.filter(num => num % 2 ===0)
}

let testArray= [1, 2, 3, 4, 5, 6, 8, 10, 12, 13]

// console.log(numArray(testArray));

function countPositivesSumNegatives(input) {
    // your code here
    let arrResult = [0, 0];
    for (i=0; i<input.length; i++) {
      if (input[i] > 0) {
         arrResult[0]++
      } else if (input[i] < 0) {
         arrResult[1] += input[i]
      } 
    }
    return arrResult  
  }

  const testInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

  console.log(countPositivesSumNegatives(testInput))