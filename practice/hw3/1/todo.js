function init() {
  //your code here
  const btn = document.getElementById('addButton');
  btn.addEventListener('click', addTask);

  const rmbtn = document.getElementById('rmButton');
  rmbtn.addEventListener('click', removebtn);

  const rmbtnAll = document.getElementById('rmButtonAll');
  rmbtnAll.addEventListener('click', removebtnAll);
}
function addTask() {
  //your code here
  const inp = document.getElementById('todoInput');
  const ulEle = document.getElementById('todoList');
  const newli = document.createElement('li');
  if (!inp.value) {
    return (newli.textContent = '');
  } else {
    newli.textContent = inp.value;
  }
  inp.value = '';
  ulEle.appendChild(newli);
}

function removebtn() {
  const ulEle = document.getElementById('todoList');
  ulEle.lastElementChild.remove();
}
function removebtnAll() {
  const ulEle = document.getElementById('todoList');
  Array.from(ulEle.children).forEach((element) => {
    element.remove();
    console.log(ulEle.children);
  });
  // ulEle.textContent = ''
}

init();
