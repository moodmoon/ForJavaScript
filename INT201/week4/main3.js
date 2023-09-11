let str1 = 'ant'
let str2 = 'Ant'
let str3 = 'ANT'
let str4 = 'ant'

// === - เอาคำนั้นเลย!
console.log(str1 === str2) //false , 'a' === 'A' ,
console.log(str1 !== str2) //true , 'a' === 'A' ,
console.log(str2 === str3) //false , 'A' === 'A' , 'n' === 'N' ,
console.log(str1 === str4) //true , 'a' === 'a' , 'n' === 'n' , 't' === 't' ,
console.log(str1 < str2) //false 'a' < 'A' , 97 < 65
console.log(str3 < str1) //true  'A' < 'a' , 65 < 97
console.log('-------')
// includes - ส่วนใดส่วนหนึ่ง
console.log(str1.includes('nt'))
console.log(str1.includes('Nt'))
console.log(str1.toLowerCase().includes('Nt'.toLowerCase()))
console.log(str1.toUpperCase().includes('Nt'.toUpperCase()))
console.log(str1.includes('ant'))