// function func() {
//     const num = 5
//     return 5
//   }
//   const result = func()
//   console.log(result)


// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// firstLetterOfLastName = lastName[0]; 
// console.log(firstLetterOfLastName)

// let str = 'hello'
// console.log(str.toUpperCase())

// function list() {
//     const num = [3,5,6,9]
    
//     for (let num = 0; i < num.length; i++) {
//         sum += num[i];
//       }
//       return sum;
// }

// console.log(list())

function likes(names) {
    if (names.length === 0) return "no one likes this";
    if (names.length === 1) return `${names[0]} likes this`;
    if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    if (names.length === 3)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if (names.length > 3)
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  
  console.log(likes([]));
  console.log(likes(['Peter']));
  console.log(likes(['Jacob', 'Alex']));
  console.log(likes(['Max', 'John', 'Mark']));
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));