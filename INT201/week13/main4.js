document.addEventListener('DOMContentLoaded' , () => {
    console.log('DOM is loaded')
})

window.addEventListener('load' , () => {
    console.log('load')
})

window.addEventListener('beforeunload' , () => {
    console.log('before unload')
    localStorage.setItem('myCat' , 'Milo')
})

const inputElements = document.querySelectorAll('input')

inputElements[0].addEventListener('blur' , () => {
    console.log('input blured')
})

//keyup on password input

inputElements[0].addEventListener('keydown', (event) => {
    console.log('code:', event.code, ', key:', event.key)
})

inputElements[1].addEventListener('keyup', (event) => {
    console.log('code:', event.code, ', key:', event.key)
})