9. // Expressions, Operators, and Control Structures / Objects
    // Instruction:
    // - Compare three objects with name properties (case-insensitive).
// Initiate code:
// XXXXX is your code

let peopleObj1 = { name: "John", surname: "Doe" }
let peopleObj2 = { name: "Sarah", surname: "Wilson" }
let peopleObj3 = { name: "David", surname: "Brown" }

// console.log(peopleObj1.name === peopleObj2.name === peopleObj3.name)
// console.log(peopleObj1.name.length === peopleObj2.name.length === peopleObj3.name.length)

if( peopleObj1.name.length === peopleObj2.name.length || 
    peopleObj3.name.length === peopleObj2.name.length ||
    peopleObj3.name.length === peopleObj1.name.length
){
    console.log("These two objects have the same name."); 
}
