import {
  // addTodoHandler,
  beforeUnloadHandler,
  loadHandler
} from './eventHandler/eventController.js'

window.addEventListener('load', () => {
  loadHandler()
})
window.addEventListener('beforeunload', (event) => {
  beforeUnloadHandler(event)
})

// const addButton = document.getElementById('addBtn')
// addButton.addEventListener('click', () => addTodoHandler())

// const inputTodo = document.querySelector('input')
// inputTodo.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') addTodoHandler()
// })

  //create +,- button
  const newDiv = document.getElementById('BtnTodo')

  const plusBtn = document.createElement('button')
  plusBtn.textContent = '+'
  plusBtn.addEventListener('click',() => {
    const sum = document.getElementById('number').innerHTML
      const value =  parseInt(sum) + 1
      document.getElementById('number').innerHTML = value
      localStorage.setItem('number', value)
      localStorage.getItem('number')
  })
  newDiv.appendChild(plusBtn)

  const pNew = document.createElement('p')
  pNew.id = 'number'
  //pNew.textContent = '0'
  pNew.textContent = localStorage.getItem('number') === 'NaN' || localStorage.getItem('number') === null || localStorage.getItem('number') === undefined ? 0 : localStorage.getItem('number')
  newDiv.appendChild(pNew)

  const minusBtn = document.createElement('button')
  minusBtn.textContent = '-'
  newDiv.appendChild(minusBtn)
  minusBtn.addEventListener('click',() => {
    const minus = document.getElementById('number').innerHTML
    const value =  parseInt(minus) - 1
    document.getElementById('number').innerHTML = value
    localStorage.setItem('number', value)
    localStorage.getItem('number')
  })

