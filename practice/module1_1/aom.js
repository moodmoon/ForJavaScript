// let arr = [1,3,5,4,8,16,24,1,9,7,5,4]

// function divisibleNum(nums) {
//     //return nums.filter( (num) => num % 4 === 0 )
//     let number = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 4 === 0){
//             number.push(nums[i])
//         }
//     }
//     return number
// }

// console.log(divisibleNum(arr))

let friends = [
  { name: 'Panipak', stdid: 65050 },
  { name: 'Panuwat', stdid: 65060 },
  { name: 'Pearmai', stdid: 65056 },
  { name: 'Pond', stdid: 65007 },
];

function allFriend(students) {
//   const nameFilter = students.find(
//     (aom) => aom.name.toLowerCase() === 'panipak'
//   );
//   console.log(students.indexOf(nameFilter))
//   return nameFilter;
    return students.findIndex( (std) => { return std.name.toLowerCase() === fin })
}

console.log(allFriend(friends));
