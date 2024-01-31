7. // Objects
    // Instruction:
    // - Create an object person with properties: name (a string), age (a number), and isStudent (a boolean).
    // 7.1 Add a new property hobbies, an array of strings, to the person object.
    // 7.2 Change the age property to a new value.
    // 7.3 Delete the isStudent property.

    // Initiate code:
// Insert your code here

const person = {name: 'Pearmai' , 
                age: 20 , 
                isStudent: true 
               }

        person.hobbies = ['Swimming', 'Dancing']
        // [ 'name', 'age', 'isStudent', 'hobbies' ]
        // [ 'Pearmai', 20, true, [ 'Swimming', 'Dancing' ] ]
        person.age = 19 
        // [ 'Pearmai', 19, true, [ 'Swimming', 'Dancing' ] ]
        delete person.isStudent
        // [ 'name', 'age', 'hobbies' ]

        console.log(person) // { name: 'Pearmai', age: 19, hobbies: [ 'Swimming', 'Dancing' ] }

console.log(Object.keys(person))
console.log(Object.values(person))