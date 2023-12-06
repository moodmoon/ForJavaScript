//1. select HTML objects
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')
const submitButton = document.querySelector('button')
function doSomething() {
  console.log('do something')
}
//multiple function handlers on the same HTML object and event type
submitButton.addEventListener('click', () => {
  console.log('submit clicked')
})
submitButton.addEventListener('click', doSomething)
//remove function handler
//it 's work
submitButton.removeEventListener('click', doSomething)
//does not work
submitButton.removeEventListener('click', () => {
  console.log('submit clicked')
})

