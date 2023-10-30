            // Function //
// arguments (special object like array = length , index ) - สรุป จำนวน และ รายการ ของ parameter
console.log("----------- arguments -----------")
function ops1(n1, n2, n3) {
    console.log(arguments) //special objects
    console.log(arguments.length)
    for (const a of arguments) {
      console.log(a)
    }
    arguments[0] = 555 //n1=555
    console.log(n1)
  }
ops1('a', true, 3)

// default Parameter
console.log("----------- default Parameter -----------")
function ops2(n1 = 0, n2 = false, n3 = 'unknown') {
    console.log(n1, n2, n3)
  }
ops2(1, undefined, 'umaporn')
ops2(undefined, undefined, undefined)
ops2(555, true, 'js')

// Rest Parameter - ยุบ แยกรายการออก ใช้ได้ครั้งเดียว และกับตัว param  สุดท้าย
console.log("----------- Rest Parameter -----------")
function ops3(n1 = 0, n2, ...n3) {
    // console.log(n1, n2, n3)
    console.log('length:', arguments.length)
    for (const ar of arguments) {
      console.log(ar)
    }
    console.log(arguments[2])
  }
ops3(5, 10, 40, 50)
// ops(5, 10, 40, 50, 100, 200, true)

// Spread Parameter - แยก items (n1 , n2, n3)
console.log("----------- Spread Parameter -----------")
function sum(n1 , n2, n3) {
    console.log(n1) // [ 10, 20, 30 ] , 10
    console.log(n2) // undefined , 20
    console.log(n3) // undefined , 30
    return n1 + n2 + n3
}

const nums = [10, 20, 30]
console.log(sum(nums)) // 10,20,30undefinedundefined
console.log(sum(...nums)) // 60

// Unpacking , (ไม่เอาอันดับ 1)
console.log("----------- Unpacking -----------")
// const a = [5, 8]
// const b = [2, 7]
// const [x1] = a
// const [y1] = b
// console.log(x1 + y1)
function arrayAdd1([x1], [y1]) {
    return x1 + y1
  }
  const a = [5, 8]
  const b = [2, 7]
  console.log(arrayAdd1(a, b)) // 7

// destructure Object Parameter
const student = { id: 645000101, name: 'Somchai Jaidee' }
const { id: studentId } = student
let { name: studentName } = student
console.log(studentId)
console.log(studentName)
studentName = 'John'
console.log(studentName) //John
console.log(student.name) //Somchai Jaidee
function doSomething({ id: studentId }) { //const { id: studentId } = student
  return studentId
}
console.log(doSomething(student)) //645000101