const htmlElement = document.querySelector('html');
console.log(htmlElement.parentNode) //#document root node
console.log(htmlElement.parentElement) //null

const soupMenu = document.querySelector('#soup');
console.log(soupMenu);
const firstChildNode = soupMenu.firstElementChild;
console.log(firstChildNode);
const nextFirstChildNode = firstChildNode.nextElementSibling;
console.log(nextFirstChildNode);
const lastChildNode = soupMenu.lastElementChild;
console.log(lastChildNode);
const previousLastChildNode = lastChildNode.previousElementSibling;
console.log(previousLastChildNode);

let currentChildNode = soupMenu.firstElementChild;
while (currentChildNode !== null) {
  if (currentChildNode.nodeType === 1) {
    console.log(currentChildNode);
  }
  currentChildNode = currentChildNode.nextElementSibling;
}
