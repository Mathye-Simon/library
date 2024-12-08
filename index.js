// accessing the html elements
const libraryContainer = document.getElementById("container")
const formContainer = document.getElementById("formContainer")
let addBook = document.getElementById('button')
addBook.innerText='Add Book'

let submitButton = document.createElement('input')
submitButton.type = 'button'
submitButton.value = 'Submit'



// create elements
let div = document.createElement('div')
let paragraph = document.createElement('p')


// where all books will be stored
const userLibrary = []

// user input book details
function userAddBook() {

    userLibrary.push(bookDetails)
    
    return(userLibrary)
                
}


function displayBooksInLibrary() {
// awesome thing, when function is called it 
// clears the existing elements before adding others dynamically  
    libraryContainer.innerHTML = ""
    let count = 0
    let rowOfBooks = document.createElement('div')
    rowOfBooks.setAttribute('class','row')

    let rowOfBooks2 = document.createElement('div')
    rowOfBooks2.setAttribute('class','row')


    userLibrary.forEach((book) => {
        count +=1
            // let rowOfBooks = document.createElement('div')
            // rowOfBooks.setAttribute('id','row1')

            let bookContainer = document.createElement('div')
            bookContainer.setAttribute('id','bookContainer')          //card/book Container
            bookContainer.setAttribute('class',`book${count}`)

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


            if (rowOfBooks.children.length < 3) {
                bookContainer.append(title,author,datePublished)  //each iter the book has its own div
                rowOfBooks.append(bookContainer)
                libraryContainer.append(rowOfBooks)
            }

            // add another row
            else if(rowOfBooks.children.length == 3) {
                bookContainer.append(title,author,datePublished)  //each iter the book has its own div
                rowOfBooks2.append(bookContainer)
                libraryContainer.append(rowOfBooks2)
            }
        })


        
    }




window.onload
   


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

    formContainer.append(form)
}

// add and generate form
addBook.addEventListener('click', () => {
    form.classList.remove('hidden')
    addBook.classList.add('hidden')
    formContainer.classList.remove('hidden')
    
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
    userLibrary.push(formData)
    form.innerHTML = ''
    form.classList.add ('hidden')
    addBook.classList.remove('hidden')
    formContainer.classList.add ('hidden')
    displayBooksInLibrary()
    
})