// 1. Types, Values, and Variables/ Functions
// - Write function findMin(arr) : Find min number in an array : Return min number

let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];

function findMin(arr) {
    let min = arr[0] //34
    // arr.forEach( (item) => {
    //     if (min > item) {
    //         min = item
    //     }
    // })
    for (let i = 1; i < arr.length; i++) {
            if (min > i) {
             min = i
        }
    }
    return min
}

console.log(findMin(numbers)); //1

// function findMin(arr){
//     return arr = numbers.reduce( (pre,cur) => pre < cur ? pre : cur )
// }
// console.log(findMin(arr));