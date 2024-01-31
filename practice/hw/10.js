10. // Arrays / Arrays Functions / Objects
    // Instruction:
    // - Display all the names of people objects (case-insensitive) that have the same name; 
    // return an array of strings with the names that are the same.
    // Initiate code:
// XXXXX is your code

let people = [
{ name: "John", surname: "Doe" },
{ name: "olivia", surname: "Smith" },
{ name: "john", surname: "Johnson" },
{ name: "Sarah", surname: "Wilson" },
{ name: "David", surname: "Brown" },
{ name: "Emily", surname: "Davis" },
{ name: "David", surname: "Miller" },
{ name: "Olivia", surname: "Taylor" },
{ name: "david", surname: "Anderson" }, 
{ name: "Sophia", surname: "Clark" } ];

// let result = people.filter( (names) => {
//    people.some( (othernames) => { names.name.toLowerCase() ===  othernames.name.toLowerCase() && names !== othernames} )
// })


// let result = people.map( (person) => { person.name.toLowerCase() } )
//                    .filter( (name , index , names) => { names.indexOf(name) !== index } )

// let result



// console.log(result); // ["john", "olivia", "david"]

let arr = []
people.forEach(element => {
  arr.push(element.name.toLowerCase())

})
let result = arr => arr.filter((item, index) => arr.indexOf(item) !== index && arr.lastIndexOf(item) === index);

console.log(countElements(arr))
//console.log(result); 
// ["john", "olivia", "david"]