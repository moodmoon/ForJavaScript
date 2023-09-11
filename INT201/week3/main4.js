//optional chaining ?. ความเสี่ยง null
let a //undefined
//with array
console.log(a?.[0])

//with object
let s
console.log(s?.id)

let b = { id: 1, fullname: 'Pearmai'}
// 1. use ?. before property name
console.log(b?.id)
// 2. use ['property name'] in []
console.log(b['id'])
