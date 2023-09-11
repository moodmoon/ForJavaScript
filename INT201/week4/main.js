// function doSomething(msg) { console.log(x)  if (msg === null || msg === undefined) { let someone = 'guest' } let x = 1  //   console.log(someone)  return `hello, ${msg}`}doSomething()// console.log(msg)

// let x = 1
// if (x === 1) {
//     let x = 'unknow'
//     console.log(x)
// }
// console.log(x)

// let x = 1 
// let y = x === 1 ? Math.random()*1+3/5 : x
// console.log(x === 1 ? 1 : 0)

// let m = null

// Operation chaining (?.) - ทำให้ไปต่อได้
// console.log(m?.charAt(0))
// console.log(m?.[0])
// console.log(m?.id)

// Nullish Coalesing (??) - ดูค่าฝั่งซ้ายก่อน

let m = null
let n = m ?? 0 // equals to m! === null && m! === undefined? m : 0
console.log(n) // return 0 เพราะ n === m === null

let y = [] // array initialization with empty array
let z = {} // object initialization with no property
console.log(typeof y) // empty array (not null and not undefined)
console.log(typeof z) // empty object (not null and not undefined)

let a = []
a = a ?? y // a=y
console.log(a) // empty array[]

let b = [1,2,3,4]
b = b ?? y //   b=y
console.log(b) // [1,2,3,4]

