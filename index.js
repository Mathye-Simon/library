// accessing the html elements
const addBook = document.getElementById("addBook")
const container = document.getElementById("container")

// create elements
let div = document.createElement('div')
let paragraph = document.createElement('p')


// where all books will be stored
const myLibrary = [
    {
    "title": "Introduction To Programming",
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
        //  return [this.title,this.author,this.datePublished]
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

        let bookContainer = document.createElement('div')   //card/book container
        
        let title = document.createElement('p')
        title.innerText = book.title

        let author = document.createElement('p')
        author.innerText = book.author

        let datePublished = document.createElement('p')
        datePublished.innerText = book.datePublished


        bookContainer.append(title,author,datePublished)  //each iter the book has its own div
        container.append(bookContainer)
        console.log(book.title)
    })


}

window.onload = displayBooksInLibrary()


addBook.addEventListener("click", ()=> {
   addBookDetails()
})
