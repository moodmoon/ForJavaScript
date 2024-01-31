19. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / Functions
// Instruction:
// - Write a JavaScript function, sumPositiveNumbers(numbers), that calculates the sum of all positive numbers in an array. 
// The function should return the sum of positive numbers. If the array is empty or contains no positive numbers, the function should return 0.
// Initiate code:
// Insert your code here

function sumPositiveNumbers(numbers) {
    let sum = 0
    numbers.forEach(element => {
        if (element > 0){
        sum = sum + element
        }
    })
    if (numbers === 0 || numbers < 0) {
        return 0
    }
    return sum
}


console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // 42
console.log(sumPositiveNumbers([-1, -2, -3])); // 0
console.log(sumPositiveNumbers([])); // 0

