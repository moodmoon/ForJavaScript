1.
// Instruction:
// - Write class Book. Then, add a method to the object that outputs information about the book.
    // Class Book
    // Constructor
        // • Constructor(title, author, yearPublished): This initializes the properties
        // 'title', 'author', and 'yearPublished'. 
        //If they are empty, it assigns 'no title', 'no author', and 0 respectively. 
    //Properties
        // • title: type String
        // • author: type String
        // • yearPublished: type number
    // Methods
        // • getInfo(): This method return a string that combines the book's title, author, and year of publication.
// Initiate code:
// Creating class Book
// Insert your code here

 class Book {
    constructor(title, author, yearPublished){
        this.title = title
        this.author = author
        this.yearPublished = yearPublished
    }
    getInfo(){
        if(this.title === null || this.title === undefined || this.title === ''){
            return 'no title'
        }
        if (this.author === null || this.author === undefined || this.author === '') {
            return 'no author'
        }
        if (this.yearPublished === null || this.yearPublished === undefined || this.yearPublished === '') {
            return 0
        }
        return `title: ${this.title} , author: ${this.author} , yearPublished: ${this.yearPublished} `
        //return {title: this.title, author: this.author, yearPublished: this.yearPublished }
    }
 }

 let myBook1 = new Book( 'NOW I UNDERSTAND' , 'ต้นกล้า นัยนา' , 2551 );
 let myBook2 = new Book( '' , 'ALVIN TOFFLER' , 2554 ); //no title
 let myBook3 = new Book( 'ขอบฟ้าที่ไม่ว่างเปล่า' , '' , 2559 ); //no author
 let myBook4 = new Book( 'Six Degrees' , 'มาร์ก ไลนัส' ); //0 (no year)

 console.log(myBook1.getInfo())
 console.log(myBook2.getInfo())
 console.log(myBook3.getInfo())
 console.log(myBook4.getInfo())

//console.log(myBook.getInfo({ title: 'this.title', author: 'this.author', yearPublished: 3 })
