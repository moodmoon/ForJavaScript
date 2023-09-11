//5. create array with Array.from()
const x = [1,3,5]
const y = [2,4,6]
const z = Array.from(x)
//compared with spread operator
const a = [...x,...y]
console.log(a)

delete x[1]
console.log(x)
console.log(x.length)