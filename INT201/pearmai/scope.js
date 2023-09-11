// let x = 1
// x = 2

// function doIt(x){
//     console.log(x)
// }

// console.log(x) 
// doIt(10)
// console.log(x)

// let x ='อร่อยจังเลย'
// console.log(`${x} กินข้าวอะไย`)

// let x = [1, 3, true, 'unknown']
// let y = [1, 3, true, 'unknown']
// let z = y
// console.log(x === y)
// console.log(z === y)
// console.log(x)

function Grade(scores) {
    if (scores < 0 || scores > 100) {return "invalid scores"} //ควรเขียนเป็น function
    if (scores > 70){return 'Very Good'} 
    if (scores > 40){return 'Good'} 
    return scores

    }

    console.log(Grade(30))