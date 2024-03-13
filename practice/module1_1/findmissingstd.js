let students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eva' },
  { id: 6, name: 'Fiona' },
  { id: 7, name: 'George' },
  { id: 8, name: 'Hannah' },
  { id: 9, name: 'Ian' },
  { id: 10, name: 'Jenny' },
];

let checkInStudentId = [10, 8, 2, 3, 5, 6]; // 1, 4, 7, 9

function findMissingStudent(checkInStudentId) {
  let missStudent = [];

  const std = students.map((studentId) => {
    return studentId.id; // [1,2,3,4,5,6,7,8,9,10]
  });

  const check = std.filter((miss) => {
    return !checkInStudentId.includes(miss) //[1,4,7,9]
  });

  students.forEach((student) => { //{id:..,name:...}
    check.forEach((missStd) => { //1,4,7,9
        if (student.id === missStd) {
            missStudent.push(student)
        }
    })
  });

  return missStudent
}

console.log(findMissingStudent(checkInStudentId));
