const body = document.body
const bodyChildNodes = body.childNodes 
// NodeList:array-like (implement for each) 
// ใช้ for each ได้
// return children with all node type
const bodyChildren = body.children 
// HTMLCollection:array list (not implement foreach , cannot array methods) 
// แปลงเป็น array ก่อน
// return children with only ellement type

console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)

body.childNodes.forEach((bcn) => {
    console.log(bcn)
})

Array.from(bodyChildren).forEach((bcn) => {
    console.log(bcn)
})

console.log(body.firstChild)
console.log(body.firstElementChild)
console.log(body.lastChild)
console.log(body.lastElementChild)
// เปรียบเทียบ objects
console.log(body.firstChild === body.firstElementChild)
console.log(body.lastChild === body.lastElementChild)

console.log(document.documentElement) //root element
console.log(document.firstElementChild) //root element
console.log(document) //root node
console.log(document.documentElement === document.firstElementChild)
console.log(document.documentElement === document)

console.log('-------------------')

// query/select element by id
// return first node/element ที่หา = หาบน document
const course201Ele = document.getElementById('int201')
console.log(course201Ele)

const course101Ele = document.querySelector('#int101')
console.log(course101Ele)

const bscitCourses = document.querySelector('#int101,#bscit-courses')
console.log(bscitCourses)

const progCourses = document.querySelector('.programming')
console.log(progCourses)

// query/select a collection of elements

console.log('--- find with css selector ---')
const progEle = document.querySelectorAll('#int201 , .programming')
console.log(progEle) //Node-list
const liEle1 = document.querySelectorAll('li')
console.log(liEle1) //Node-list

console.log('--- find with tagname ---')
const liEle2 = document.getElementsByTagName('li')
console.log(liEle2) //HTMLCollection

console.log('--- find with classname ---')
const coursesEle = document.getElementsByClassName('courses')
console.log(coursesEle)

const divLectElement = document.querySelector('.lecturers')
//get <li> under div.lecturers
const liDivLect = divLectElement.querySelectorAll('li')
console.log(liDivLect)
//get <li> under document node
const allLi = document.querySelectorAll('li')
console.log(allLi)