//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

/* let age = 30
if (age < 16) {
    console.log('they can not drive')
} else if (age < 18) {
    console.log("they can't hate from outside the club, because they can't even get in")
} else if (age < 21) {
    console.log("they can not drink")
} else if (age < 25) {
    console.log("they can not rent cars affordably")
}
else if (age < 30) {
    console.log("they can not rent fancy cars affordably")
}
else if (age >= 30) {
    console.log("there is nothing left to look forward to, which is a lie")
} */

function checkAge(age) {

    let pSelector=document.querySelector('p');

    if(age<16) {
        pSelector.innerText="You can't drive";
    } else if (age <18) {
        pSelector.innerText= "You can't hate from outside the club, because you can't even get in"
    } else if (age < 21) {
        pSelector.innerText= "You can't drink"
    } else if (age < 25) {
        pSelector.innerText="You can't rent cars affordably"
    } else if (age < 30) {
        pSelector.innerText="You can not rent fancy cars affordably"
    } else if (age >= 30) {
        pSelector.innerText="There is nothing left to look forward too"
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph




const myHeader = document.querySelector('h1');

function onClickHandler () {
    const inputValue = document.getElementById('danceDanceRevolution').value
    checkAge(inputValue)
}

myHeader.addEventListener('click', onClickHandler);
