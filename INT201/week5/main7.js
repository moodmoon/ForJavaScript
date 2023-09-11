const x = [...'Hello World']
console.log(x)
// [
//    'H', 'e', 'l', 'l',
//    'o', ' ', 'W', 'o',
//    'r', 'l', 'd'
//  ]

console.log('-----------------')

for(const value of x.entries()){
    console.log(value)
}
// [ 0, 'H' ]
// [ 1, 'e' ]
// [ 2, 'l' ]
// [ 3, 'l' ]
// [ 4, 'o' ]
// [ 5, ' ' ]
// [ 6, 'W' ]
// [ 7, 'o' ]
// [ 8, 'r' ]
// [ 9, 'l' ]
// [ 10, 'd' ]

console.log('-----------------')

//destructuring array result [index, element] from entries()
for(const [index,value] of x.entries()){
    console.log(index)
    console.log(value)
}

// 0
// H
// 1
// e
// 2
// l
// 3
// l
// 4
// o
// 5
 
// 6
// W
// 7
// o
// 8
// r
// 9
// l
// 10
// d