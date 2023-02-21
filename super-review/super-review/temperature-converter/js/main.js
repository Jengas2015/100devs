//Write your pseduo code first! 

let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

function changeTemp() {
    let inputValue = Number(document.querySelector("#converter").value);
    let convertedValue= inputValue * (9/5) + 32;
    h2.innerText=convertedValue;
}

h1.addEventListener('click', changeTemp)