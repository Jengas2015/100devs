//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function stopSnacking (num) {
    for (i=1; i<=num; i++) {
        document.getElementById('stops').innerText+= ` Stop snacking!`
    }
}

function onClick() {
    let inputValue = Number(document.querySelector('input').value);
    document.querySelector('#stops').innerText = ""
    stopSnacking(inputValue)
}

myheader = document.getElementById('help');

myheader.addEventListener('click', onClick);