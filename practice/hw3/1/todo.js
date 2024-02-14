function init() {
  const addButtonElement = document.getElementById('addButton');
  addButtonElement.addEventListener('click', addTask);
}
function addTask() {
  const newLiElement = document.createElement('li');
  const inputElement = document.getElementById('todoInput');
  const ulElement = document.getElementById('todoList');

  newLiElement.textContent = inputElement.value;
  ulElement.appendChild(newLiElement);
  inputElement.value = '';
}

init();
