// weakly and dynamic types = ไม่ควรทำ
let num = 1
console.log(typeof num)

num = true
console.log(typeof num)

// typeof เปรียบเทียบที่เป็น string
if (typeof(num) === 'boolean') console.log('num is boolean type')

let a = 1n // n -> bigint
console.log(typeof a)

let b = 3.2 // number
console.log(typeof b)

//let c = 'A'
let c = `A-${b / 2 + 1}`
console.log(typeof c)

// implicit type conversion (string to boolean) 
// ดูชนิดข้อมูล 
if('1') console.log('1 is a boolean true')
else console.log('1 is not a boolean')

if(0) console.log('value is zero')
else console.log('value is not zero')

if(2) console.log('value is two')
else console.log('value is not two')

let msg = 'a'

if(msg) console.log('an empty string')
else console.log('not empty string')

// sample array data type []
const nums = [1, 3, 5, 7, 9]
//nums[nums.length - 1] = 11
nums[nums.length] = 11
//nums.push(9)
console.log(nums.length)
//nums[0] = 11 // mutable เปลี่ยนรูปได้
console.log(nums)
console.log(typeof nums)

// sample object data type: collection of properties {}
const obj = { id: 1, price: 100 }
// obj = nums // const not allow ทำไม่ได้นะ 
obj.id = 555
console.log(obj)
console.log(typeof obj)

// function doSomething(activity) {
//     if(activity === null || activity === undefined)
//     return 'no activity'
//     else return `${activity} is done`
// } 

function doSomething(activity) {
    if(activity === null ) return 'activity is null'
    if(activity === undefined) return 'activity is undefined'
    return `${activity} is done`
} 
console.log(typeof doSomething)
let act1 //undefined
let act2 = null //null
let act3 = 'JS leaning' //string
console.log(doSomething(act1)) //no activity
console.log(doSomething(act2)) //no activity
console.log(doSomething(act3))  //JS leaning is done
console.log(doSomething()) //no activity //parameter is undefined

let aa,
    bb = 0,
    cc = null

console.log(aa) //undefined
console.log(bb) //0
console.log(cc) //null

if(a) console.log('a')
else console.log('not a')