const submitButton = document.getElementById('submit-btn-01')
submitButton.addEventListener('click' , (e) => {
    e.preventDefault()
    console.log('submit clicked')

    // const input = document.getElementsByTagName("input");
    // let bothValid = Array.from(input).every((a) => a.value.length > 0);
    // if (bothValid) {
    //   document.querySelector("p").textContent = "success";
    // } else {
    //   document.querySelector("p").textContent = "fail empty";
    // }

    const inputElements = document.querySelectorAll('input')
    // console.log(inputElements[0].value)
    // console.log(inputElements[1].value)
    const pElement = document.querySelector('p')
    if (inputElements[0].value.length === 0 || inputElements[1].value.length === 0){
        pElement.textContent = 'some value are missing, please check'
    } else {
        pElement.textContent = ('Your input are complete')
    }
})