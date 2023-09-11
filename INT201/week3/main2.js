// a,b,c,e are global scope = อ้างได้หมด
let a = 1
const b = 2
var c = 3

// d,e are block scope = จำกัดภายใน อ้างได้แค่ใน block {}
{
    let d = 4
    const e = 5
    var f = 6
    console.log('block area')
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(f)
}
// h,i,j are function scope
function doIt() {
    let h = 7
    const i = 8
    var j = 9
    console.log('function area')
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(f)

    // console.log(d)
    // console.log(e)
}

doIt()
console.log('global area')
console.log(a)
console.log(b)
console.log(c)
console.log(f)

// console.log(d)
// console.log(e)

// console.log(h)
// console.log(i)
// console.log(j)