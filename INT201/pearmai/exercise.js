//  ต้องการเขียนฟังก์ชันวันที่ไม่มีเรียน คือ ไม่มีเรียนเสาร์ อาทิตย์ โดยใช้ shift() 
function generateNoClass(daysOfWeek, numDays) {
    const noClassDay = []

    for (let i = 0; i < numDays; i++) {
        const day = daysOfWeek.shift() // นำวันแรกของ daysOfWeek ออก
        noClassDay.push(day) // เพิ่มวันนี้ลงในรายชื่อวันที่ไม่มีเรียน
    }

    return noClassDay
}


const daysOfWeek = [ "อาทิตย์" , "เสาร์" , "จันทร์" , "อังคาร" , "พุธ" , "พฤหัสบดี", "ศุกร์" ]
const numDays = 2

const noClassDay = generateNoClass(daysOfWeek, numDays)
console.log("วันที่ไม่มีเรียน:", noClassDay);
console.log("วันที่มีเรียน:", daysOfWeek /* , "ดังนั้น คุณมีเรียน" , daysOfWeek.unshift("เสาร์") , "วัน" */)

console.log(generateNoClass(daysOfWeek, numDays))

  