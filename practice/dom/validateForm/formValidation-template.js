function formValidation() {
  const addEventHandler = () => {
    const saveButton = document.getElementById('save');
    const resetButton = document.getElementById('reset');
    // console.log(saveButton)
    // console.log(resetButton)
    saveButton.addEventListener('click', saveHandler);
    resetButton.addEventListener('click', resetHandler);
  };

  const saveHandler = () => {
    const fullname = document.getElementById('fullname');
    const feedback = document.getElementById('feedback');
    const pName = document.getElementById('nameValidateMsg');
    const pFeedback = document.getElementById('feedbackValidateMsg');

    if (fullname.value.trim() === '') {
      pName.textContent = 'please enter your name';
    } else {
      pName.textContent = '';
    }

    if (feedback.value.trim() === '') {
      pFeedback.textContent = 'please enter your feedback';
    } else {
      pFeedback.textContent = '';
    }

  }

  const resetHandler = () => {
    const fullname = document.getElementById('fullname');
    const feedback = document.getElementById('feedback');
    fullname.value = '';
    feedback.value = '';
  };

  return {
    addEventHandler,
  };
}

const { addEventHandler } = formValidation();
addEventHandler();
