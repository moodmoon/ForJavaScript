17. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / Functions
// Instruction:
// - Create a function calculateGrade(scores) that takes an array of numerical scores and returns the corresponding letter grade (A, B, C, D, or F) based on the average score. 
// 17.1 Calculate the average score.
// 17.2 Based on the average score, determine the letter grade:
// • 90-100: A
// • 80-89: B
// • 70-79: C
// • 60-69: D
// • Below 60: F
// Return the letter grade.
// Initiate code:
// function calculateGrade(scores) {
// // Insert your code here
// }
// console.log(calculateGrade([80, 95, 90, 70, 100])); output

function calculateGrade(scores){
    let sum = 0
    scores.forEach(element => {
        sum = sum + element
    })
    const avg = sum / scores.length
    //console.log(avg)
    
    if (avg <= 100 && avg >= 90) {
        return 'A'

    } else if(avg <= 89 && avg >= 80) {
        return 'B'

    } else if(avg <= 79 && avg >= 70) {
        return 'C'

    } else if(avg <= 69 && avg >= 60) {
        return 'D'

    } else if(avg < 60) {
        return 'F'
    } 
    return avg
}

console.log(calculateGrade([80, 95, 90, 70, 100])); // B