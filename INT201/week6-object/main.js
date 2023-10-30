// 1.Creat object by literal{}
console.log('1.Creat object by literal{}')

const student = {
    id:65130500056, 
    firstname: 'Pearmai', 
    lastname: 'Wannasiri'
}
console.log(student) //{ id: 65130500056, firstname: 'Pearmai', lastname: 'Wannasiri' }
console.log(typeof student) //object
console.log(Object.keys(student)) //[ 'id', 'firstname', 'lastname' ]
console.log(Object.values(student)) //[ 65130500056, 'Pearmai', 'Wannasiri' ]
console.log(Object.prototype.isPrototypeOf(student)) //true
console.log(Date.prototype.isPrototypeOf(student)) //false

const lecturer = {
    id: 65130500050, 
    firstname: 'Panipak', 
    lastname:'Jongsirivanich'
}

console.log(Object.prototype.isPrototypeOf(lecturer)) //true
console.log('----------------------------------')

// Way to get property value 
    // 1.(object.key) //
const someoneId = student.id
console.log(someoneId)
    // 2.(object.["key"]) //
const someoneFirstname = student['firstname']
console.log(someoneFirstname)

// Way to assign/set property value 
student.id = 65100000000
student['firstname'] = 'Yeonjun'
console.log(student.id)
console.log(student['firstname'])
console.log('----------------------------------')

//Dynamic property
    // add new property //
    //1.
        student['email'] = 'pearmaiiiiimap@gmail'
    //2.
        student.address = 'Bangkok, Thailand'
        console.log(student)

    // Delete existing property //
delete student.address
console.log(student)
console.log('----------------------------------')

// Nested object
student.advisor = lecturer
console.log(student)

console.log(student.advisor.firstname) //Panipak
console.log(student['advisor']['firstname']) //Panipak
console.log('----------------------------------')

// Function declaration
function doSomething() {
    
}
// Function expreesion
student.getFullName = function() {
    return `${this.firstname} ${this.lastname}` //this is current object
}
console.log(student.getFullName) //get property value of getFullName
console.log(student.getFullName()) //execute function getFullName()
console.log('----------------------------------')

const student2 = {id: 11111111111, firstname:'Beomgyu',lastname: 'TXT'}
student2.getFullName = function() {
    return `${this.firstname} ${this.lastname}` 
}
console.log(student.getFullName()) //Yeonjun Wannasiri
console.log(student2.getFullName()) //Beomgyu TXT
console.log('----------------------------------')

//
//
//
//
//

// 2.Creat object with Constructor function()
console.log('2.Creat object with Constructor function()')

function Person(id, firstname, lastname) {
    this.id = id
    this.fullname = `${firstname} ${lastname}`
}

const p1 = new Person(111,'Ohm','Naja')
const p2 = new Person(222,'Namnaow','Naka')
const p3 = new Person(333,'Pond','Nakub')
console.log(p1) //Person { id: 111, fullname: 'Ohm Naja' }
console.log(p2) //Person { id: 222, fullname: 'Namnaow Naka' }
console.log(p3) //Person { id: 333, fullname: 'Pond Nakub' }
console.log(Object.prototype.isPrototypeOf(p1)) //true
console.log(Object.prototype.isPrototypeOf(p2)) //true
console.log(Object.prototype.isPrototypeOf(p3)) //true
console.log(Person.prototype.isPrototypeOf(p3)) //true
console.log(Date.prototype.isPrototypeOf(p3)) //false
console.log('----------------------------------')
//
//
//
//
//

// 3.Creat object with Class - constructor() - have property , values
console.log('3.Creat object with Class - constructor()')

class Student {
    //constructor
    constructor(id, fn, ln) {
        this.id = id
        this.firstname = fn
        this.lastname = ln
    }
    //method
    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}
// st1 -> Student prototype -> Object prototype (Ancestor)
const st1 = new Student(1, 'Peach','Boo')
const st2 = new Student(2, 'Pin','Chabu')

console.log(st1) //Student { id: 1, firstname: 'Peach', lastname: 'Boo' }
console.log(st2) //Student { id: 2, firstname: 'Pin', lastname: 'Chabu' }
console.log(st1.getFullName()) //Peach Boo
console.log(st2.getFullName()) //Pin Chabu
console.log(Object.prototype.isPrototypeOf(st1)) //true
console.log(Student.prototype.isPrototypeOf(st2)) //true
console.log('----------------------------------')

// 4.Creat object by using Object.create() - สร้าง Object ผ่าน Object เดิม
console.log('4.Creat object by using Object.create()')

const undergratSt1 = Object.create(st1)
console.log(undergratSt1) //Student {}
console.log(undergratSt1.id) //1
console.log(undergratSt1.firstname) //Peach
console.log(undergratSt1.lastname) //Boo
console.log(Object.prototype.isPrototypeOf(undergratSt1)) //true
console.log(Student.prototype.isPrototypeOf(undergratSt1)) //true

    // add key //
undergratSt1.project = 'Web Application'
console.log(undergratSt1) // Student { project: 'Web Application' }
