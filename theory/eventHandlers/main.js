//Adding and Removing Event Handlers
const allInputEles = document.querySelectorAll('input');
console.log(allInputEles);
const resetBtn = document.getElementById('reset');
console.log(resetBtn);
const resetHandler = function (event) {
  console.log(`Event target: ${event.target}`);
  console.log(`Event Type: ${event.type}`);
  //   const first_name = document.getElementById('first_name');
  //   const password = document.getElementById('password');
  //   const repassword = document.getElementById('repassword');
  //   first_name.value = '';
  //   password.value = '';
  //   repassword.value = '';
  const allInputEles = document.querySelectorAll('input');
  allInputEles.forEach((ele) => {
    ele.value = '';
  });
};

allInputEles.forEach((inputEle) => {
  console.log(`Reset empty on ${inputEle.id}`);
  inputEle.value = '';
});

resetBtn.addEventListener('click', resetHandler, false);

const createBtn = document.getElementById('submit');
createBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const isValidInput = Array.from(allInputEles).every(
    (inputEle) => inputEle.value.length !== 0
  );
  const pEle = document.querySelector('p');
  if (isValidInput) {
    pEle.textContent = 'your account has been created!';
    pEle.style = 'color:green';
  } else {
    pEle.textContent = 'missing some values, please try again';
    pEle.style = 'color:red';
  }
});
