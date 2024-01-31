12.// Functions / Arrays / Arrays Functions
    // Instruction:
    // - Write a function uniqueElements(arrayValue) to return array of the unique elements from an array.
    // Initiate code:
// let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
// Insert your code here
// array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

function uniqueElements(arrayValue){
    let unique = []
    arrayValue.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    })
    return unique
}

console.log(uniqueElements(numbers)) //[ 1, 3, 8, 21, 13, 7 ]