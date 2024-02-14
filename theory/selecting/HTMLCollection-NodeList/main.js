//HTMLCollection (Only Element Nodes) vs. NodeList (including elements nodes, attribute nodes, and text nodes )
const myApp = document.getElementById('app');
console.log(myApp);

//.children returns HTMLCollection
const childrensHTML = myApp.children;
console.log(childrensHTML);
const childNodesList = myApp.childNodes;
console.log(childNodesList);

//HTMLCollection cannot use forEach but can use for..of
for (const el of childrensHTML) {
  console.log(el);
}
//In case you want to use forEach with HTMLCollection object
Array.from(childrensHTML).forEach((element) => console.log(element));

//NodeList object can use forEach
childNodesList.forEach((element) => console.log(element));

//HTMLCollection(live) vs. NodeList (static)
const sectionDiv = document.getElementById('sections');
const sectionsbySelectorAll = document.querySelectorAll('.section');
const sectionsByClassName = document.getElementsByClassName('section');
console.log(sectionDiv);
console.log(sectionsbySelectorAll);
console.log(sectionsbySelectorAll.length);
console.log(sectionsByClassName);
console.log(sectionsByClassName.length);

//create a new div section
// <div class="section">Section 5</div>
const div = document.createElement('div');
div.classList = 'section';
div.innerHTML = 'section 5';
//div.textContent = 'section 5';
sectionDiv.appendChild(div);
