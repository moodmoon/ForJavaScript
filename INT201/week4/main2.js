// Random number in a range 1 to 10
// Math.random() randoms in a range 0 ot 0.99999*
const rand = Math.random() * 10 // 0 to 9.99999 
console.log(rand)

console.log(Math.round(3.1))
console.log(Math.round(3.8))
console.log('-------')
console.log(Math.floor(3.1))
console.log(Math.floor(3.8))
console.log('-------')
console.log(Math.ceil(3.1))
console.log(Math.ceil(3.8))
console.log('-------')
console.log(Math.PI)
console.log(Math.pow(2,5))
console.log(Math.sqrt(9))

console.log('-------')

// Random number in a range 25 to 100
const rand1 = Math.random() * (100 - 25) + 25
//1. 75
//2. Math.random() 0 to 0.99999*
//3. 0*75  to 0.9999 * 75 = 0 to 74.999999
//4. +25 = 25 to 99.9999
console.log(rand1)

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let n1 = 25 ,
    n2 = 100

const rand2 = Math.floor(Math.random()*(n2 - n1 +1))+ n1
console.log(rand2)