// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'This is a test sentence?'

console.log(sentence.endsWith('?'))



//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let devstring = 'I\'m a jr. dev'

let newstring = devstring.replaceAll('jr. dev', 'software engineer')

console.log(newstring)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps () {
    let randomno = Math.floor(Math.random()* 100)

    if (randomno <=33) {
        return "rock"
    } else if(randomno < 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRps(choice) {
    let roboChoice = rps()
    if (choice === 'rock' && roboChoice==='scissors' || choice === 'paper' && roboChoice ==='rock' || choice === 'scissors' && roboChoice==='paper') {
        console.log('You win!')
    } else if(choice===roboChoice) {
        console.log("it's a draw :/")
    }
    else {
        console.log("You lose... :(")
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function playALot(arr) {
    for(i=0; i<arr.length; i++) {
        playRps(arr[i])
    }
}

let gamesArray = ['paper', 'rock', 'scissors', 'rock', 'rock']

playALot(gamesArray)