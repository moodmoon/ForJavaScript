function x(y) {
    return y
}
function doIt() {
    console.log('do it')
}
x(doIt) // รันผ่านแต่ไม่ได้ผลลัพธ์
// --------------------------------
var m = 1
{
    const o = 'ok'
    console.log(o)
}
function fn() {
    let p = 5
    // console.log(p) //
}
let n = true
console.log(m) // 1
console.log(n) // true
// --------------------------------
console.log('--------------------------------')
let s = 'A'
const y = 'B'
var z = 'C'
{
    x = 'Somchai'
    z = 'Somsri'
}
console.log(s) //A
console.log(y) //B
console.log(z) //Somsri
// --------------------------------
console.log('--------------------------------')
let pear
console.log(pear?.[0]) //undefined
console.log('--------------------------------')
let w = 'Good Bye'
let e = [...w]
console.log(e) //[ 'G', 'o', 'o','d', ' ', 'B','y', 'e']
console.log('--------------------------------')
let num = [1,2,3,4,5]
console.log(num[num[1]]) //3
console.log('--------------------------------')
