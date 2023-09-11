// // synchronous programming
// //interpreter translator
// function greeting(someone) {
//     return 'hello, ' + someone
// }

// let _myName = 'Pearmai Wannasiri'
// _myName = 10 // weekly and dynamic data stype
// console.log('Starting..')

// // asynchronous programming
// setTimeout(() => {
//     console.log('more complex task finish..')
// }, 10000) // 10s

// console.log(greeting(_myName))
// setTimeout(() => {
//     console.log('simple task finish..')
// }, 2000) // 2s

// console.log('Goodbye..')

// let msg = "I'am student."
// console.log(msg)

 let a = null
 console.log(a)
 let total
 console.log(total)

 if (total === undefined) console.log('varible does not have initial value')

 if (a === null) console.log('variable has null value') 

 // backtick
 if ('2' == 2) console.log(`'2' == 2' :${'2' == 2}`)
 if ('2' === 2) console.log(`'2' == 2' :${'2' === 2}`)

 // object sample
 const obj = { id: 1001, name: 'pen', price: 100 }
 const obj2 = { id: 2001 }
 // obj = obj2 // object cannot change reference value

 obj.id = 999 // but can update its properties

 let str = 'hello'
 str = str.toUpperCase()
 console.log(str)