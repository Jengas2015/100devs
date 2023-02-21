//--- Easy
//create a variable and assign it a number
let num = 5;
//minus 10 from that number
num -=10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input

//add 25 to that number
// inputVariable +=25
//alert that number
// alert (inputVariable);
//--- Hard
//create a variable that holds the h1
let h1Variable = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables

h1Variable.addEventListener('click', sum)

function sum () {
    let inputVariable = document.querySelector('#danceDanceRevolution').value;
    console.log (num + Number(inputVariable));
}

