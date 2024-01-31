// let x = 'racecer'
// let word = [...x]

function isPalindromes(word){
    const chars = [...word]
    for (let i = 0 , j = chars.length - 1; j>=i ; i++ , j--) {
        if( chars[i] !== chars[j])
        return false
    }
    return true
}

console.log(isPalindromes('racecer'))
console.log(isPalindromes('radar'))
console.log(isPalindromes('noon'))