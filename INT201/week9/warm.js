const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]

function getAttendancerate (student) {
    con
}

console.log("-----------------")

function getAvgScore(student) {
    const avg = students.map( students => {
        student = students.testScores.reduce( (pre , post) => pre + post)
        return student
    } , 0 ) 
    return 'Their are average test score is ' + '(' + students[1]['testScores'] + ')' + '= ' + student / 5
}
console.log(getAvgScore())
console.log("-----------------")

function underPerformStudent (students) {
    
}