4. // Types, Values, and Variables/ Arrays Instruction:
// - Check if arrays are empty.
    // Initiate code:
        // let value1 = [1, 2, 3];
        // let value2 = [];
        // let value3;
// XXXXX is the code to check each variable 
// console.log(XXXXX); // value1 false 
// console.log(XXXXX); // value2 true 
// console.log(XXXXX); // value3 false

    let value1 = [1, 2, 3]
    let value2 = []
    let value3

    console.log(Array.isArray(value1) && value1.length === 0) //false
    console.log(Array.isArray(value2) && value2.length === 0) //true
    console.log(Array.isArray(value3) && value3.length === 0) //false
console.log('--------------------------')
    console.log(value1?.length === 0)
    console.log(value2?.length === 0)
    console.log(value3?.length === 0)



