function arrayStat(arr) {
    // min, max, sum, avg
    let min = arr[0]
    let max = arr[0]
    let sum = 0
    let avg = 0

    for (let i = 0; i < arr.length; i++) {
        //min
        if(arr[i] < min) {
            min= arr[i]
        }
        //max
        if(arr[i] > max) {
            max= arr[i]
        }
        // sum
        sum += arr[i]
    }
    //avg
    avg = sum / arr.length
    return {min: min, max: max, sum:sum, avg: avg}
}

console.log(arrayStat([1,2,3,4,5]))
console.log(arrayStat([3,2,5,0]))