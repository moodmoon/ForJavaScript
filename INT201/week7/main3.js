//Array Iterator Methods

//forEach() - ไม่ return ค่า พาเข้าไปทุก element
const friuts = ['apple','mango','orange','pineapple']
friuts.forEach((friut) => console.log(friut.charAt(0)))

let allFruits = ''
friuts.forEach((friut) =>
    allFruits += friut + ' ') //concat
    console.log(allFruits) 
console.log('-------------------------------forEach()')

//filter() - คืนค่า 
const students = [
    {id: 1, firstname: 'Somsak', lastname: 'Jaidee'},
    {id: 2, firstname: 'Somchai', lastname: 'Dee'},
    {id: 3, firstname: 'Somying', lastname: 'Jai'}
]
const jaiStudents =
students.filter((student) => student.lastname.toLowerCase().startsWith('jai'))
console.log(jaiStudents)

    //student who has firstname or lastname include 'de' with case insensitive
const deStudent = students.filter((student) => student.firstname.toLowerCase().includes('de') ||
                                               student.lastname.toLowerCase().includes('de'))
console.log(deStudent)
console.log('-------------------------------filter()')

//map() คืนค่า
const ids = students.map( (student) => student.id)
console.log(ids)

    //return all students' fullname, fullname format is "lastname,firstname"
const fullName = students.map( 
    (student) => `${student.lastname}, ${student.firstname}`)
console.log(fullName)

    //return all student ids in the format 'entry year' follow with student id, for examples, 
    //{id: 1, firstname: 'Somsak', lastname: 'Jaidee'} => 20231
const newIds = students.map((student) => {
    const currentYear = new Date(Date.now()).getFullYear()
    return currentYear + '' + student.id
} )
console.log(newIds)
console.log('-------------------------------map()')

//find()
const findJaiFirstname = students.find((student => student.lastname.toLowerCase().startsWith('jai')))
console.log(findJaiFirstname)

const findJaiId = students.map((student) => student.id)
console.log(findJaiId)
console.log('-------------------------------find()')

//findIndex() - first index เขียน callback
const findJaiFirstnameIndex = students.findIndex((student => student.lastname.toLowerCase().startsWith('jai')))
console.log(findJaiFirstnameIndex) //0
console.log('-------------------------------findIndex()')

//every() - return true ทุกตัว
    //return boolean that chack all student ids who have id value than zero
const EveryIds = students.every((student) => student.id > 0)
console.log(EveryIds)
console.log('-------------------------------every()')

//some() - เจอ true return true
    //return boolean that chack at least one (some) student firstnames whether end eith 'sak' 
const SomeIds = students.some((student) => student.firstname.toLowerCase().endsWith('sak'))
console.log(SomeIds)
console.log('-------------------------------some()')

