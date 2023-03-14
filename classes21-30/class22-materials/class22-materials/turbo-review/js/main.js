// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = 'coffee'
favDrink= favDrink.trim()

console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let multiWords = 'orange apple drink house dog'

if (multiWords.search('apple') !==-1) {
    console.log('Found the apple!')
} else{
    console.log('No apples here...')
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let randomNo = Math.floor(Math.random()*100)
    if (randomNo <33) {
        return "rock"
    } else if(randomNo< 66) {
        return "paper"
    } else if (randomNo< 100) {
        return "scissors"
    }
}

rockPaperScissors()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWIn(playerChoice) {
    let botChoice = rockPaperScissors()

    if ((playerChoice === 'rock' && botChoice ==='scissors')|| (playerChoice === 'paper' && botChoice ==='rock') || (playerChoice === 'scissors' && botChoice ==='paper')){
        console.log('You Win!')
    } else if (playerChoice === botChoice) {
        console.log('You tied.')
    } else {
        console.log('Fuck')
    }
}



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playALot(arr) {
    arr.forEach(choice => checkWIn(choice))
}

let testGames = ['scissors', 'scissors', 'paper', 'rock', 'paper', 'scissors']

playALot(testGames)
