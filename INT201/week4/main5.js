// array data type
let x = [1, 3, true, 'unknown']

//object data type
let m = { id: 1, title: 'pen' }

let scores = 70
let grade = 'F'
// < 40 'F' , 41-70 'Good' , 71-100 'Very Good'
if (scores < 0 || scores > 100) grade = "invalid scores" //ควรเขียนเป็น function
if (scores > 70) grade = 'Very Good'
if (scores > 40) grade = 'Good'
console.log(grade)

const month = 1
let monthName = ''
switch (month) {  
    // 1===1  
    case 1:    
    monthName = 'Jan'    
    break  
    case 2:    
    monthName = 'Feb'    
    break  
    case 3:    
    monthName = 'Mar'
}
console.log(monthName) //Feb

