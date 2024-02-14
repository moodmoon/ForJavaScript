function init() {
  //const addButtonElement = document.getElementsByClassName('addButton');
  const addButtonElement = document.querySelector('.addButton');
  addButtonElement.addEventListener('click', addTask);
}
function addTask() {
  const newLiElement = document.createElement('li');
  const inputElement = document.querySelector('.todoInput');
  const ulElement = document.getElementById('todoList');

  newLiElement.textContent = inputElement.value;
  ulElement.appendChild(newLiElement);
  inputElement.value = '';
}
init();
