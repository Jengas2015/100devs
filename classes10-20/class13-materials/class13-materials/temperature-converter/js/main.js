//Write your pseduo code first! 
/* listen for button click, take value from input, do math, display on screen*/

document.querySelector('#check').addEventListener('click', convert)



function convert () {
  const cel= document.querySelector('#celcius').value
  let newTemp = cel * 9/5 + 32
  document.getElementById('placeFHere').innerText=newTemp
}

