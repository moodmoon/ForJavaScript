// splice() - remove / replace / add
const number = [10, 3, 75, 1, 30, 100] 
//1. splice to remove
//return array of deleted elements
//splice ( startIndex , the number of delete element)
const removeEles = number.splice(2,3)
console.log(removeEles)

console.log(number)
//2. splice to add three new elements at Index 3 , return emtry array
const addEles = number.splice(3 , 0 , 111 , 555 , 888) // สุดท้าย
console.log(number)
const addEles2 = number.splice(2 , 0 , 222) // แทรก
// console.log(addEles) // emtry array
console.log(number)

//3. splice to replace at Index 1 with [200,400]
const replaceEles = number.splice(1, 3 , 200, 400)
console.log(replaceEles)
console.log(number)
console.log('-------------------------------splice()')

// slice() - start to end (end not included) ใส่เลข Index < ติดลบ นับจากท้าย >
// fill(num, start fill, length)

//replase nagative number to zero
const nums = [-5 , -6, 7 , 8, 9 , -1 ,0]
const removeNeg = nums.map( (num) => {
    return num < 0 ? 0 : num
})
console.log(removeNeg)
console.log('-------------------------------map()')
console.log(nums.fill(0 , 0 , 2) && nums.fill(0, 5))
console.log('-------------------------------fill()')

// includes() for sting 
const msg = 'Today is a present'
console.log(msg.includes('Re')) //false
console.log(msg.includes('re')) //true
console.log(msg.includes('day')) //true
console.log(msg.includes('present')) //true
console.log('-------------------------------includes() for sting')

// includes() for array 
const newMsg = msg.split(' ')
console.log(newMsg) //[ 'Today', 'is', 'a', 'present' ]
console.log(newMsg.includes('re')) //false
console.log(newMsg.includes('day')) //false
console.log(newMsg.includes('today')) //false
console.log(newMsg.includes('Today')) //true
console.log('-------------------------------includes() for array')

// reverse() - ใช้ array เดิม
const numss = [-5, -6, 7, 8, 9, -1, 0]
console.log('before', numss)
numss.reverse()
console.log('after', numss)
console.log('-------------------------------reverse()')

// join()
const numStr = numss.join(' * ')
console.log(numStr)
console.log('-------------------------------join()')

// sort()
console.log(numss.sort()) // ใช้ sting มา sort

numss.sort((num1, num2) => num1 - num2) // น้อยไปมาก ascending
console.log(numss)

numss.sort((num1, num2) => num2 - num1) // มากไปน้อย descending
console.log(numss)
console.log('-------------------------------sort()')

// concat() - เอา array มาต่อกัน
// IndexOf() - first index เขียนเลย สามารถเลือกตำแหน่งได้ด้วย
// join() - เปลี่ยน array เป็น string


