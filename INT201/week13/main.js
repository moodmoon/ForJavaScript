// 1. select HTML objects
const  outerDiv = document.getElementById('outer-div')
const  innerDiv = document.getElementById('inner-div')
const submitButton = document.querySelector('button')

// 2. select event type "click"
// 3. register event type to HTML objects

//คลิกหลายครั้ง
// function doSomething() {
//     console.log('do something')
// }

// outerDiv.addEventListener('click', doSomething)

//คลิกครั้งเดียว
outerDiv.addEventListener('click',(event) => {
    console.log('outer div is clicked')
    console.log(event.type) //click
    console.log(event.target) //<button>Submit</button>
    console.log(event.currentTarget) //<div id="outer-div">...</div>
    console.log(event.eventPhase) //3
},true) 

innerDiv.addEventListener('click',(event) => {
    console.log('inner div is clicked')
    console.log(event.type) 
    console.log(event.target) 
    console.log(event.currentTarget) 
    console.log(event.eventPhase) 
},true) 

submitButton.addEventListener('click',(event) => {
    console.log('submit button div is clicked')
    console.log(event.type) 
    console.log(event.target) 
    console.log(event.currentTarget) 
    console.log(event.eventPhase) 
},true) 