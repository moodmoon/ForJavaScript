// const arr = [-1,0,1,2,3]
// const sum = arr.reduce( (now , next) => now + next)
// console.log(sum)
// const avg = sum / arr.length
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

// ---------------------------------------
// array[] use - for , foreach , forof

//function declaration
function intSum(nums){
    //console.log(nums)
    return nums
}

//arrow function and expresstion
const intSum2 = ( (nums) => {
    return nums
})

//array literal []
const x = intSum([1,2,-1,0,3.6])

//array variable
const value = [1,2,3,4,8]
value.push(100)

console.log(intSum(value))
console.log(intSum2(value))
// ---------------------------------------

console.log('---------------------------------------')
console.log('#Ans.')
    
    let sum = 0

function integerOp(nums){
    nums.forEach(element => {
        sum = sum + element //sum+=element
    })
    const avg = sum / nums.length
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    //return {sum : sum , avg : avg ,max : max , min : min}
    return {sum, avg, max ,min}
}

console.log(integerOp([0,-1,2,4]))
