//destructuring array
//create array named nums
const nums = [1,3,5,7,9]

//destructuring not skip so index starting at 0 -- แยก เอาตัวแปลไปรับค่า
const[a,b,c] = nums //a=1 b=3 c=5
console.log(a)
console.log(b)
console.log(c)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

const [x]=nums
console.log(x) //1
//destructuring with skip some indexes
// const [, , , y , , z] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const [, , , y , , ...z] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(y) //20
console.log(z) //30 
               //[ 30, 35, 40, 45, 50 ]

const [...m] = nums
console.log(m) // [ 1, 3, 5, 7, 9 ]

const n = nums // memory address of nums to n
n[0] = 999
//all below are destructuring
const[o] = nums //999
const[, p] = nums //3
const[...q] = nums //[ 999, 3, 5, 7, 9 ]
console.log(o)
console.log(p)
console.log(q)