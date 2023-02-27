//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}

document.querySelector('h2').innerText = `The score is ${localStorage.getItem('botScore')}`

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    let botScoreVal = Number (localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
    document.querySelector('h2').innerText = `The score is ${localStorage.getItem('botScore')}`
}

