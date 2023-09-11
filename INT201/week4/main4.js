// Compare object types including object and array data types
// array data type
let x = [1,3, true, 'unknown']
let y = [1,3, true, 'unknown']
let z = x // give memory address from x to z
console.log(x === y) //false memory address of x === memory address of y
console.log(x === z) //true memory address of x === memory address of z

z[0] = 'A'
x[0] = 'B'
y[0] = 'A'

console.log(x) // [ 'B', 3, true, 'unknown' ]
console.log(y) // [ 'A', 3, true, 'unknown' ]
console.log(z) // [ 'B', 3, true, 'unknown' ]

//object data type
let m = { id: 1, title: 'pen'}
let n = { id: 1, title: 'pen'}

let o = m // give memory address from m to o
console.log(m === n) //false memory address of m === memory address of n
console.log(o === m) //true memory address of o === memory address of m
o.id = 888
console.log(m)
console.log(o)

//primitive type
let a = 5
let b = 5
let c = a // give data 5 from a to c
console.log(a === b) //true 5 === 5
console.log(a === c) //true 5 === 5