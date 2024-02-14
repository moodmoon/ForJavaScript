function formValidation() {
  const addEventHandler = () => {
    const saveButton = document.getElementById('save')
    const resetButton = document.getElementById('reset')

    saveButton.addEventListener('click', saveHandler)
    resetButton.addEventListener('click', resetHandler)
  }

  const saveHandler = () => {
    const fullnameElement = document.getElementById('fullname')
    const feedbackElement = document.getElementById('feedback')

    const pNameElement = document.getElementById('nameValidateMsg')
    const pFeedbackElement = document.getElementById('feedbackValidateMsg')

    if (fullnameElement.value.trim().length === 0) {
      pNameElement.textContent = 'please enter your name'
    } else {
      pNameElement.textContent = '' // clear
    }
    if (feedbackElement.value.trim().length === 0) {
      pFeedbackElement.textContent = 'please enter your feedback'
    } else {
      pFeedbackElement.textContent = '' // clear
    }
  }

  const resetHandler = () => {
    const fullnameElement = document.getElementById('fullname')
    const feedbackElement = document.getElementById('feedback')
    fullnameElement.value = ''
    feedbackElement.value = ''
  }

  return {
    addEventHandler,
  }
}

const { addEventHandler } = formValidation();
addEventHandler();
