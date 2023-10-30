//every and some functions

const names = ['alice', 'John', 'Bob', 'Ann']
//all names start with 'A' or 'a'
const isStartWithALetter = names.every(
  (name) => name.toLowerCase().startsWith('a') //false
)
console.log(isStartWithALetter)
console.log('-------------------------------every()')

//at least one name start with 'A' or 'a'
 
const isSomeStartWithALetter = names.some(
  (name) => name.toLowerCase().startsWith('a') //true
)
console.log(isSomeStartWithALetter)
console.log('-------------------------------some()')

// reduce() - การลดรูป
const nums = [5,2,3,4,7]
const total = nums.reduce( (sum , num) => sum + num , 0)
console.log(total)

const namess = ['Alice', 'Bob' , 'Ann' , 'Cath']
const string = namess.reduce( (concat , str) => concat + str.charAt(0) , '')
console.log(string)

const buyProductd = [{ price:50, quantity:2 } , 
                     { price:299, quantity:10 } ,
                     { price: 15, quantity: 5 }
                    ]
const sum = buyProductd.reduce( (p , q) => p + (q.price * q.quantity), 0)
console.log(sum)

console.log('-------------------------------reduce()')

// ability + input + output
// push()
// pop()
// shift()
// unshift()