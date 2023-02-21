//Create an array of movies with at least three movies.
let moviesArray = ['Independence Day', 'You\'ve got mail', 'iRobot']
//Using the array from above, store the first movie in a variable
let movieOne = moviesArray[0]
//Get the length of the original array and store it in a new variable
const movielength = moviesArray.length;
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastElement = moviesArray[movielength-1];

console.log(lastElement)