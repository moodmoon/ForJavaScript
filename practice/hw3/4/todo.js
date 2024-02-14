function init() {
  // <input type="text" placeholder="Enter a new task">
  // <button>Add</button>
  const div1Element = document.getElementsByTagName('div')[0];
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = 'Enter a new task';
  const newButton = document.createElement('button');
  newButton.textContent = 'Add';
  div1Element.appendChild(newInput);
  div1Element.appendChild(newButton);

  //<ul id="todoList"></ul>
  const div2Element = document.getElementsByTagName('div')[1];
  const newUl = document.createElement('ul');
  newUl.id = 'todoList';
  div2Element.appendChild(newUl);

  const addButtonElement = document.querySelector('button');
  addButtonElement.addEventListener('click', addTask);
}
function addTask() {
  const newLi = document.createElement('li');
  const inputElement = document.querySelector('input');
  const ulElement = document.querySelector('ul');
  newLi.textContent = inputElement.value;
  inputElement.value = '';
  ulElement.appendChild(newLi);
}
init();
