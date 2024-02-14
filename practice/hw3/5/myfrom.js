function init() {
  const headElement = document.querySelector('head');
  const newTitle = document.createElement('title');
  newTitle.textContent = 'Registration Form';
  headElement.appendChild(newTitle);

  const bodyElement = document.querySelector('body');
  const newH2 = document.createElement('h2');
  newH2.textContent = 'Register';

  const div1 = document.createElement('div');
  const label1 = document.createElement('label');
  const input1 = document.createElement('input');
  label1.for = 'name';
  label1.textContent = 'Full Name:';
  input1.type = 'text';
  input1.id = 'name';
  input1.name = 'name';
  input1.required = true
  //input1.setAttribute('required', 'true');
  div1.appendChild(label1);
  div1.appendChild(input1);

  const div2 = document.createElement('div');
  const label2 = document.createElement('label');
  const input2 = document.createElement('input');
  label2.for = 'email';
  label2.textContent = 'Email Address:';
  input2.type = 'text';
  input2.id = 'email';
  input2.name = 'email';
  input2.required = true;
  //input2.setAttribute('required', 'true');
  div2.appendChild(label2);
  div2.appendChild(input2);

  const div3 = document.createElement('div');
  const buttons = document.createElement('button');
  buttons.type = 'submit';
  buttons.textContent = 'Register';
  div3.appendChild(buttons);

  //for show userRegister
  const div4 = document.createElement('div');

  bodyElement.appendChild(newH2);
  bodyElement.appendChild(div1);
  bodyElement.appendChild(div2);
  bodyElement.appendChild(div3);
  bodyElement.appendChild(div4);

  const registerButton = document.querySelector('button');
  registerButton.addEventListener('click', showUserRegister);
}
function showUserRegister() {
  const newP = document.createElement('p');
  const lastDivElement = document.getElementsByTagName('div')[3];
  const nameElement = document.getElementsByTagName('input')[0];
  const emailElement = document.getElementsByTagName('input')[1];
  newP.textContent = nameElement.value + ' ' + emailElement.value;
  lastDivElement.appendChild(newP);
}
init();
