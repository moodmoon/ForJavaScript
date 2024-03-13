const nums = [1,3,5,7,9] //array
const st = {id : 655000101, names : "Niti" } //object
//objects in array
const students=[ { id:655000123 , name:'Somchai' }, st ,{ id:655000555 , name:'Somying' }] 

//spread operator (...)
const x = [0,...nums, 11]
console.log(x) //[0,1,3,5,7,9,11]

const y = {...st,  id:555, name:'XXX', email:'xxx@sit.kmutt.ac.th'}
console.log(y) // { id: 555, name: 'XXX', email: 'xxx@sit.kmutt.ac.th' }

//destructuring on array
const [ firstItem , , thirdItem ] = x
console.log(firstItem) //0
console.log(thirdItem) //3

//destructuring on object
const {names, id} = st
console.log(names) //Niti
console.log(id) //655000101