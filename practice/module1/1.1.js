// หา max min โดยไม่ใช้ Math
const nums = [-1,0,5,10,49]

let min = nums[0]
let max = nums[0]
//เก็บค่าตัวแรกเพื่อเอาไปเปรียบเทียบตัวถัดไป

nums.forEach( (num) => {
    if( min > num )
     min = num
    if( num > max )
     max = num
})

console.log(max,min)

console.log('------------------------------')

function findMin(items) {
    let min = items[0]
    items.forEach( (item) => {
        if (min > item) {
            min = item
        }
    })
    return min
}

function findMax(items) {
    let max = items[0]
    items.forEach( (item) => {
        if (item > max) {
            max = item
        }
    })
    return max
}

console.log(findMin(nums))
console.log(findMax(nums))