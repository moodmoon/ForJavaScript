const rootNode = document //root node
console.log(rootNode) //document
console.log(rootNode.nodeName) //document
console.log(rootNode.nodeType) //9
console.log(rootNode.nodeValue) //null

console.log(document.documentElement) //root element = html
console.log(document.documentElement.nodeType) //1

console.log(document.body) //html > body
console.log(document.body.nodeType) //1
console.log(document.head) //html > head
console.log(document.head.nodeType) //1
console.log(document.title) //html > head > title
                            //Introduction to DOM
console.log(document.title.nodeType) //undefined