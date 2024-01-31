20. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / Functions
// Instruction:
// - Write a JavaScript function sameNumbers(numArray1, numArray2) 
// to receive two arrays of numbers and return an array that contains the numbers from both arrays without repeating numbers.
// Initiate code:
// // Insert your code here 
//console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8])); output
// [
// 1,2, 3, 4,
// 5, 8, 47, 56 ]

function sameNumbers(numArray1, numArray2){
    let unique = []
    numArray1.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    })
    numArray2.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    })
    return unique
}

console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]))