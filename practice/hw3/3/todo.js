function init() {
  const addButtonElement = document.querySelector('button')
  addButtonElement.addEventListener('click', addTask);
}
function addTask() {
    const newLiElement = document.createElement('li');
    const inputElement = document.querySelector('input')
    const ulElement = document.getElementById('todoList');
  
    newLiElement.textContent = inputElement.value;
    ulElement.appendChild(newLiElement);
    inputElement.value = '';
}
init();
