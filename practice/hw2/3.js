3.
// Instruction:
// - Creating a library system using class Book and Library. 

//Class Book:
    // Constructor
        // • Constructor(title, author, pages, genre): This initializes the properties 'title','author' , 'pages' and 'genre'.
    // Properties
        // • title: type string
        // • author: type string
        // • pages: type number
        // • genre: type string
    // Methods
        // • getSummary() - Returns a string summary of the book ex: .
        // "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"

// Class Library: 
    //Constructor
        // • Constructor(name): This initializes the properties 'name' and creates an empty array in the property books
    // Properties
        // • name: type string
        // • books: type array of Book objects, initially empty.
    // Methods
        // • addBook(newBook) - Accepts a Book object and adds it to the books array.
        // • getBooksByGenre(genre) - Returns an array of books that match the specified genre.
        // • getTotalPagesByGenre(genre) - Returns the total number of pages for all books of a specified genre.

class Book {
    constructor(title, author, pages, genre){
        this.title = title
        this.author = author
        this.pages = pages
        this.genre = genre
    }
    getSummary(){
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`
    }
}

class Library {
    constructor(name){
        this.name = name
        this.books = []
    }
    addBook(newBook){
        return this.books.push(newBook)
    }
    getBooksByGenre(genre){
        return this.books.filter( (book) => book.genre === genre )
    }
    getTotalPagesByGenre(genre){
        const total = this.getBooksByGenre(genre)
        return total.reduce( (page , book) => page = book.pages , 0)
    }
}


const book1 = new Book('JS', 'INT201', 200, 'Study')
const book2 = new Book('Java', 'INT204', 500, 'Study')
const book3 = new Book('Conan', 'Tokyo', 1000, 'Manga')
console.log(book1.getSummary())
console.log(book2.getSummary())
console.log(book3.getSummary())

const myLibrary = new Library()
console.log(myLibrary.addBook(book1))
console.log(myLibrary.addBook(book2))
console.log(myLibrary.addBook(book3))

const mangaBooks = myLibrary.getBooksByGenre('Manga')
console.log(mangaBooks)
const studyBooks = myLibrary.getBooksByGenre('Study')
console.log(studyBooks)

const mangatotalPages = myLibrary.getTotalPagesByGenre('Manga')
console.log(mangatotalPages)
const studytotalPages = myLibrary.getTotalPagesByGenre('Study')
console.log(studytotalPages)