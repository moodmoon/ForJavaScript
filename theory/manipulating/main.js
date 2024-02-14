let langs = ['HTML', 'JavaScript', 'Nodejs'];
const langElement = document.querySelector('#programlang');
//const langElement = document.getElementById('programlang');
console.log(langElement);

//create <p> element with text node
pElement = document.createElement('p');
console.log(pElement);
pElement.setAttribute('id', 'pId');
//pElement.id = 'pId';
//console.log(`attr: ${pElement.getAttribute('id')}`);

const msg = document.createTextNode('Hello, Text Node');
console.log(msg);
pElement.appendChild(msg);
document.body.insertBefore(pElement, langElement);

//child node of p is text node
console.log(`The first child of <p> : ${pElement.firstChild}`); //text

//create comment node
const commentNode = document.createComment(
  'This is comment before <li> created'
);
langElement.appendChild(commentNode);
console.log(commentNode);

//create <li> node list
for (const lang in langs) {
  let li = document.createElement('li');
  li.innerText = lang;
  langElement.appendChild(li);
  console.log(li);
}

//child node of <ul> is comment node
console.log(`first child node: ${langElement.firstChild}`); //comment node
//child element of <ul> is <li> element node
console.log(`first child element: ${langElement.firstElementChild}`); // <li> node

const firstLangElement = langElement.firstElementChild;
console.log(firstLangElement);
const newLangNode = document.createElement('li');
newLangNode.innerHTML = 'Java';
langElement.insertBefore(newLangNode, firstLangElement);
console.log(newLangNode);

const newLastLangNode = document.createElement('li');
newLastLangNode.innerHTML = 'C++';
langElement.insertBefore(newLastLangNode, null);
console.log(newLastLangNode);

langElement.replaceChild(newLastLangNode, newLangNode);
langElement.removeChild(langElement.firstElementChild);
