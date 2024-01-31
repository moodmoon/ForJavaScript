//using a temporary
let a = 1 , b = 2
let tem = b
b = a
a = tem
console.log(a)
console.log(b)

function swaps1(a,b) {
    let tem = b
    b = a
    a = tem
    // return [a,b]
    return {a ,b}
}
console.log(swaps1(1,2))
// ---------------------------------------

console.log('---------------------------------------')
console.log('#Ans.')

function swaps2(a,b){
    return [b,a] //destructuring
}
console.log(swaps2(1,2))

console.log('---------------------------------------')
function swaps3(a,b){
    return [b,a]
}

const [c,d] = swaps3(4,5)
console.log(c)
console.log(d)
