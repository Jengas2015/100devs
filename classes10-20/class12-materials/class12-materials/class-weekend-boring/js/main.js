document.querySelector('#check').addEventListener('click', check);

let idOfCheck = document.getElementById('check');

let h2Content = document.getElementById("placeToSee");

idOfCheck.addEventListener('click', check);

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day.toLowerCase() === "Tuesday".toLocaleLowerCase() || day.toLocaleLowerCase() === "Thursday".toLocaleLowerCase()) {
    h2Content.innerText="Class Day!"
  } else if (day.toLowerCase()==="Monday".toLocaleLowerCase() || day.toLocaleLowerCase()=="Wednesday".toLocaleLowerCase() || day.toLocaleLowerCase() === "Friday".toLocaleLowerCase()) {
    h2Content.innerText="Boring Day..."
  }
  else if (day.toLocaleLowerCase()==="Saturday".toLocaleLowerCase() || day.toLocaleLowerCase()==="Sunday".toLocaleLowerCase()) {
    h2Content.innerText="The Weekend!"
  } else {
    h2Content.innerText="That's not the name of a day."
  }
}


document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
     check();
  }
})

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    idOfCheck.click();
  }
})