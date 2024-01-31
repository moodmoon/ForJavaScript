16. // Expressions, Operators, and Control Structures
// Instruction:
// - Create a function named multiplicationTable(number) that generates a multiplication table based on the provided number. 
//The function should return the results as an array of strings.
// Initiate code:


function multiplicationTable(number){
    let multi = []
    for (let i = 1; i <= 12; i++) {
        multi.push(`${number} x ${i} = ${number * i}`)
    }
    return multi
}

console.log(multiplicationTable(2)); 

// output
// [
// "2 x 1 = 2",
// "2 x 2 = 4",
// "2 x 3 = 6",
// "2 x 4 = 8",
// "2 x 5 = 10",
// "2 x 6 = 12",
// "2 x 7 = 14",
// "2 x 8 = 16",
// "2 x 9 = 18",
// "2 x 10 = 20",
// "2 x 11 = 22",
// "2 x 12 = 24",
// ]