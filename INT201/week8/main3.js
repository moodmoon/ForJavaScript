    // sorting - ตามค่า ASCII
// ค่าบวก = ตัวแรกมากกว่า
// ค่าลบ = ตัวแรกน้อยกว่า
// 0 = เท่ากั
const students = [{ id:1 , name: 'John Lee' },
                  { id:2 , name: 'adam Smith' }]

//sorting by id (ascending, descending)
console.log("sorting by id / ascending")
const sortId_asc = students.sort( (id1 , id2) => id1.id - id2.id )
console.log(sortId_asc)

console.log("sorting by id / descending")
const sortId_desc = students.sort( (id1 , id2 ) => id2.id - id1.id )
console.log(sortId_desc)

//sorting by name (ascending, descending)
console.log("sorting by name / ascending")
const sortName_asc = students.sort( (nameA , nameB) => nameA.name.localeCompare(nameB.name) )
console.log(sortName_asc)

console.log("sorting by name / descending")
const sortName_desc = students.sort( (nameA , nameB) => nameB.name.localeCompare(nameA.name) )
console.log(sortName_desc)
console.log("____________________________________")

console.log(students.sort( (st1 , st2) => {
    const name1 = st1.name.toLowerCase()
    const name2 = st2.name.toLowerCase()
        if(name1 > name2) return 1
        else if (name1 < name2) return -1
        else return 0
}))
console.log(students.sort( (st1 , st2) => {
    const name1 = st1.name.toLowerCase()
    const name2 = st2.name.toLowerCase()
        if(name1 < name2) return 1
        else if (name1 > name2) return -1
        else return 0
}))