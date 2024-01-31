1. // Types, Values, and Variables/ Functions
// Instruction:
// - Write function findMin(arr) : Find min number in an array : Return min number Initiate code:
        

let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];

let arr = []
const findMin = ( (arr) => {
    return arr = numbers.reduce( (previous , current) => previous < current ? previous : current )
} )

console.log(findMin(arr)) //1