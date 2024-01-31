const book1 = {
    isbn: '1-23-4',
    title: 'JS',
    author: 'US',
    page: '300'
}

const book2 = {
    isbn: '5-67-8',
    title: 'JAVA',
}

//Spread(...) 
const mergBook = (book1,book2) => {
    return {...book1 , ...book2}
}

console.log(mergBook(book1,book2))