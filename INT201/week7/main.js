const book = { 
    isbn:'123456789', 
    title:'Introduction to JS', 
    author: { 
        firstname: 'Adam', 
        lastname:'Lee' },
    publisher: {
        name: 'HarperCololins',
        location: {
            name: 'Silicon',
            country: 'USA'
        }
    }
}

const { title } = book
console.log(title)

const { publisher: publisherName, isbn: isbn_book } = book //store property value to new variable name
console.log(publisherName)
console.log(isbn_book)

const {
    publisher: {
      location: { country }
    }
  } = book

  console.log(country)