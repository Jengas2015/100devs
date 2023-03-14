//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = [' Independence Day', ', Jumanji', ', Frozen', ', iRobot']

let h2 = document.querySelector('h2')

movies.forEach(element => h2.innerText+=element)

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let numsArray = [10, 20, 30, 40]

numsArray.forEach((num, i)=> {
    numsArray[i] +=3
})

console.log(numsArray)

//Find the average of all the numbers from question two

let sum = 0

numsArray.forEach((num) => sum+=num)

sum = sum / numsArray.length

console.log(sum)