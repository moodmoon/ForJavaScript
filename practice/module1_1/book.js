class Book {
  constructor(isbn, title = 'untitled', ebook = false) {
    this.isbn = isbn;
    this.title = title;
    this.ebook = ebook;
    this.authors = [];
  }

  addAuthor(fn, ln) {
    return this.authors.push({
      firstname: fn,
      lastname: ln,
    });
  }

  getFirstAuthor() {
    // const [firstAuthor, ] = this.authors
    // if (this.authors.length !== 0) {
    //   return firstAuthor;
    // } else {
    //   return undefined;
    // }
    return this.authors[0]
  }

  getLastAuthor(){
    return this.authors[this.authors.length - 1]
  }

  getCoAuthor() {
    // const [, ...coAuthor] = this.authors
    // if (this.authors.length !== 0) {
    //     return coAuthor
    //   } else {
    //     return [];
    //   }
    return this.authors.slice(1)
  }

  findAuthor(firstname, lastname) {
    return this.authors.find( (fullname) => fullname.firstname.toLowerCase() === firstname.toLowerCase() && fullname.lastname.toLowerCase() === lastname.toLowerCase()
     )
  }

  hasEbook() {
    return this.ebook;
  }
}

const book = new Book();
const book2 = new Book('1234-567', 'LOVE CAT&DOG', true)
console.log(book)
console.log(book2)
console.log(book2.addAuthor('Pearmai', 'Wannasiri'));
console.log(book2.addAuthor('Panipak', 'Jongsirirvanich'));
console.log(book2.addAuthor('Aom', 'Ba'));
console.log(book2)
console.log('author: ',book2.findAuthor('Pearmai', 'Wannasiri'));
console.log('firstAuthor: ', book2.getFirstAuthor());
console.log('lastAuthor: ', book2.getLastAuthor());
console.log('coAuthor: ', book2.getCoAuthor());
console.log(book2.hasEbook());

// console.log(book2.getFirstAuthor())
// console.log(book.getFirstAuthor());
// console.log(book.findAuthor('Pearmai', 'Wannasiri'));
// console.log(book.hasEbook());
