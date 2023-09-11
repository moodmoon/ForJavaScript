let scores = 20
let grade = 'F'
//<40 'F, 41-70 'Good', 71-100 'Very Good'
if (scores < 0 || scores > 100) grade = 'invalid scores'
else if (scores > 70) grade = 'Very Good'
else if (scores > 40) grade = 'Good'

console.log(grade)

const month = 1
let monthName = ''
switch (month) {  // 1===1  
    case 1: monthName = 'Jan'
        break
    case 2: monthName = 'Feb'
        break
    case 3: monthName = 'Mar'
}
console.log(monthName) //Feb

// const ch = 'b'
// let isVowel = falseswitch(ch) {
//     case 'A':  
//         case 'a':  
//         case 'E':  
//         case 'e':  
//         case 'I':  
//         case 'i':  
//         case 'O':  
//         case 'o':  
//         case 'U':  
//         case 'u': isVowel = true    
//         break  
//         case '*': isVowel = 'star'    
//         break  
//         default: isVowel = false 
//     }
//         console.log(isVowel)
        
        for (let i = 1; i <= 10; i++) 
        console.log(i)
    
    //array data type
    let x = [1, 3, true, 'unknown']
    console.log('----')
    //print element in X
    //1. for...i
    for (let i = 0; i < x.length; i++)
     console.log(x[i])
    //2. for...of
    for (const data of x) {  
        console.log(data)
    }
    //3. for...each
    x.forEach((element) => {  
        console.log(element)
    })

    //object data type
    let m = { id: 1, title: 'pen' }
    //for..in
    for (const key in m) {  
        console.log(key) 
        //print  property name  
        console.log(m[key]) //print  property value
    }

