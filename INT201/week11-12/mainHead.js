// headElement is a head element node
const headElement = document.head
console.log(headElement)

// ทุก node type ที่เป็นลูก 
//return the childen - NodeList
console.log(headElement.childNodes)

// เอาลูกที่เป็น element type เท่านั้น 
//return child element - HTMLcollection
console.log(headElement.children) 

// get try node ใช้ forEach - NodeList
// NodeList is an array , can use all array function
const headChildNodes = headElement.childNodes
headChildNodes.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

console.log('---- headElement.children ----')
// HTMLcollection is array-like (not real array) 
// ต้องแปลงก่อน covert to array before using array function
const headChildren = headElement.children
Array.from(headChildren).forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

//first child
console.log(headElement.firstElementChild)
console.log(headElement.firstChild) 
//last child
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)

//parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)

//previous sibling
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)

//next sibling
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)

const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs = headFirstElementChild.attributes
console.log(headFirstElementChildAttrs)
Array.from(headFirstElementChildAttrs).forEach((attr) => console.log(attr))