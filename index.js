// accessing the html elements
const addBook = document.getElementById("addBook")
const container = document.getElementById("container")

// create elements
let div = document.createElement('div')
let paragraph = document.createElement('p')


// where all books will be stored
const myLibrary = [{"title": "Introduction To Programming",
                    "author": "Nathan",
                    "datePublished": "2000",
}]

// user input book details
function addBookDetails() {

    let bookDetails = 
        {
        "title": (prompt("Enter book title:") || "N/A"),
        "author": prompt("Enter book author:") || "N/A",
        "datePublished": prompt("Enter date published:") || "N/A"
        // "values": function (){
        //     return [this.title,this.author,this.datePublished]
        // }
        }

    myLibrary.push(bookDetails)
    displayBooksInLibrary()
    return(myLibrary)
                
}


function displayBooksInLibrary(book) {
// awesome thing, when function is called it 
// clears the existing elements before adding others dynamically  
    container.innerHTML = ""

    myLibrary.forEach((book) => {
        let paragraph = document.createElement('p')
        paragraph.innerText = book.title
        container.append(paragraph)
        console.log(book.title)
    })


}

window.onload = displayBooksInLibrary()

// onclick let user add book details then display the books
addBook.addEventListener("click", ()=> {
   addBookDetails()
//    displayBooksInLibrary()
})

    






// addBookToLibrary(book(title,author,datePublished))