// accessing the html elements
const container = document.getElementById("container")
let addBook = document.createElement('button')
addBook.innerText='Add Book'

// create elements
let div = document.createElement('div')
let paragraph = document.createElement('p')


// where all books will be stored
const myLibrary = [
    {
    "title": "Introduction To Programming",
    "author": "Mathye Tsakane",
    "datePublished": "2000-02-24",
    },
    { 
    title: "To Kill a Mockingbird",
    author: "Harper Lee", 
    datePublished: "1960-07-11" 
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
    let count = 0

    myLibrary.forEach((book) => {
        count +=1
        let bookContainer = document.createElement('div')   //card/book container
        bookContainer.setAttribute('class',`book${count}`)
        bookContainer.setAttribute('id','bookContainer')       


        
        let title = document.createElement('p')
        title.setAttribute('class',`title${count}`)
        title.setAttribute('id','title')       
        title.innerText = book.title

        let author = document.createElement('p')
        author.setAttribute('class',`author${count}`)
        author.setAttribute('id','author')       
        author.innerText = book.author

        let datePublished = document.createElement('p')
        datePublished.setAttribute('id','datePublished')       
        datePublished.setAttribute('class',`datePublished${count}`)
        datePublished.innerText = book.datePublished


        bookContainer.append(title,author,datePublished)  //each iter the book has its own div
        container.append(bookContainer,addBook)
        console.log(book.title)
    })


}

window.onload = displayBooksInLibrary()


// addBook.addEventListener("click", ()=> {
//    addBookDetails()
// })

let form = document.createElement('form')
function generateForm (){
// create input fields
    for (let i = 1; i <= 3; i++) {
        let input = document.createElement('input')
        
        if (i == 1) {
            input.type = 'text';
            input.placeholder = 'Enter Book Title'
        }
        else if (i == 2) {
            input.type = 'text';
            input.placeholder = 'Enter Book Author'
            
        }
        else if (i == 3) {
            input.type = 'date'
            input.placeholder = 'Enter Date Published'
        }
        form.append(input)
    }

    
    let submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.value = 'Submit'
    form.append(submitButton)


    
    container.append(form)
}

addBook.addEventListener('click', () => {
    form.style.display = 'flex'
})
generateForm()