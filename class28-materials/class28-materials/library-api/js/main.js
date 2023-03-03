//Enter ISBN of the book, and get the title of the book back.
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').textContent = localStorage.getItem('books')

function getFetch(){
  const isbn = document.querySelector('input').value
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`

  //test isbn: 0201558025
  // born a crime: 0399588175

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        let title = data[`ISBN:${isbn}`].title

        if (!localStorage.getItem('books')) {
            localStorage.setItem('books', title)
            
        } else {
            let books = localStorage.getItem('books') + " ; " + title
            localStorage.setItem('books', books)
        }


        document.querySelector('h2').textContent = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

