//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function numArray(arr) {
    let placeholderNum = 1

    for(i=0; i<arr.length; i++) {
        placeholderNum *= arr[i]
    }

    alert(placeholderNum);
}

const practiceArray = [1, 2, 3, 4]

numArray(practiceArray)