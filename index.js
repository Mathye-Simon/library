// accessing the html elements
const container = document.getElementById("container")
let addBook = document.createElement('button')
addBook.innerText='Add Book'

let submitButton = document.createElement('input')
submitButton.type = 'button'
submitButton.value = 'Submit'

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
function userAddBook() {

    myLibrary.push(bookDetails)
    
    return(myLibrary)
                
}


function displayBooksInLibrary() {
// awesome thing, when function sis called it 
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



const form = document.createElement('form')
form.setAttribute('class','hidden')
function generateForm (){
// create input fields
    for (let i = 1; i <= 3; i++) {
        let input = document.createElement('input')
        
        if (i == 1) {
            input.type = 'text';
            input.setAttribute('id', 'userTitle')
            input.placeholder = 'Enter Book Title'
        }
        else if (i == 2) {
            input.type = 'text';
            input.setAttribute('id', 'userAuthor')
            input.placeholder = 'Enter Book Author'
            
        }
        else if (i == 3) {
            input.type = 'date'
            input.setAttribute('id', 'userDatePublished')
            input.placeholder = 'Enter Date Published'
        }
        form.append(input)
    }

    

    form.append(submitButton)

    container.append(form)
}

// add and generate form
addBook.addEventListener('click', () => {
    form.classList.remove('hidden')
    addBook.classList.add('hidden')
    
    generateForm()
    form.reset()
})

function getFormValues () {

}

submitButton.addEventListener('click', ()=>{
    let userTitle = document.getElementById('userTitle').value
    let userDatePublished = document.getElementById('userDatePublished').value
    let userAuthor = document.getElementById('userAuthor').value

    const formData = {
        "title": userTitle,
        "author": userAuthor,
        "datePublished": userDatePublished
    }
    myLibrary.push(formData)
    form.innerHTML = ''
    form.classList.add ('hidden')
    addBook.classList.remove('hidden')
    displayBooksInLibrary()
    
})