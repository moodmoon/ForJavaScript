//1. create array with literal []
//initial x with empty
const x = [] //type of array is object
console.log(typeof x)

if(x.length === 0) console.log('empty array')
else console.log('not empty array ')
// console.log(x[0])

//x[index], add a new element by using index
x[0] = 1
x[1] = 3
x[2] = 5
//add a new element in the end of array by using push function
x.push(7) // push is function of array - ต่อท้าย
x.push(9)
console.log(x) // [ 1, 3, 5, 7, 9 ]

const y = [1,true,'beginer',2.5] //untype, mixed type
console.log(y)
console.log(y[0]) //1
console.log(y.length - 1) //3
console.log(y.length) //4

const z = [
    [2,4,6],
    [true,false],
    ['a','b','c']
]
console.log(z[0]) //[ 2, 4, 6 ]
console.log(z[z.length - 1]) //[ 'a', 'b', 'c' ]

const m =[
    { productId: 1, name:'pen', price:200 },
    { productId: 2, name:'notebook', price:100 },
    { productId: 3, name:'pencil', price:10 }
]
console.log(m[0]) // { productId: 1, name: 'pen', price: 200 } 
console.log(m.length) // 3
console.log(m.length - 1) //ตัวสุดท้าย // 2

const n = { productId: [1001,1002,1003], productPrice:[100,10,15] } //object not array but have array inside object
console.log(n.productPrice) // [ 100, 10, 15 ]