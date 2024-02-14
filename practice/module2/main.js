// document.getElementById - Single Node
// document.getElementsByClassName - HTMLCollection
// document.getElementsByTagName - HTMLCollection
// document.querySelector - First match Single Node
// document.querySelectorAll -All match (NodeList Collection)

//children - get child element node types (HTMLCollection)
//childNodes - get child node (every node type) (NodeList)

//Array Like - NodeList implement forEach
//Array Like - HTMLCollection does not implement forEach, using Array.from(HTMLColloction) when use forEach

// 1.query <div><p>...</p></div>
const divElementV1 = document.getElementsByTagName('div')
console.log(divElementV1)
console.log(divElementV1[1])

const divV1Children = divElementV1[1].children
console.log(divV1Children)

// HTMLCollection => Array
Array.from(divV1Children).forEach(element => {
    console.log(element)
})

const divElementV2 = document.querySelectorAll('div')
console.log(divElementV2)
console.log(divElementV2[1])

Array.from(divElementV2[1].children).forEach(element => {
    console.log(element)
})

const divElementV3 = document.querySelector('div.faculty') //class
console.log(divElementV3)
const divElementV4 = document.querySelector('div#div-faculty') //id
console.log(divElementV4) 

Array.from(divElementV4.children).forEach(element => {
    console.log(element)
})

// 2. query <p> under <div class="faculty" id="div-faculty">
const pElement1 = document.querySelectorAll('div.faculty>p')
console.log(pElement1)
pElement1.forEach(element => {
    console.log(element)
})

// 3. query elements with id="courses"
const coursesElement = document.getElementById('courses')
console.log(coursesElement)

// 4. query elements with class="lecturer"
const lecturerElement = document.getElementsByClassName('lecturer')
console.log(lecturerElement)

// 5.
const buttonElement = document.getElementsByTagName('button')
//const buttonElement = document.querySelectorAll('button')
console.log(buttonElement)
Array.from(buttonElement).forEach(element => {
    console.log(element)
})

// 6.
//const liElement = document.getElementsByTagName('li')
const liElement = document.querySelectorAll('ul#courses>li')
console.log(liElement)
Array.from(liElement).forEach(element => {
    console.log(element)
})

// 7.
console.log(liElement[0])
// const firstLiElement = document.querySelector('#courses>li')
// console.log(firstLiElement)

console.log(coursesElement.firstElementChild)
console.log(coursesElement.lastElementChild)