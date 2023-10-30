//  ต้องการเขียนฟังก์ชันวันที่ไม่มีเรียน คือ ไม่มีเรียนเสาร์ อาทิตย์ โดยใช้ shift() 
function generateNoSchoolDays(daysOfWeek, numDays) {
    const noSchoolDays = []
  
    for (let i = 0; i < numDays; i++) {
      const day = daysOfWeek.shift() // นำวันแรกของ daysOfWeek ออก
      noSchoolDays.push(day) // เพิ่มวันนี้ลงในรายชื่อวันที่ไม่มีเรียน
    }

    // daysOfWeek.unshift(...noSchoolDays)
    return noSchoolDays;
  }
  
  const daysOfWeek = ["เสาร์","อาทิตย์","จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์",];
  const numDays = 2;
  
  const noSchoolDays = generateNoSchoolDays(daysOfWeek, numDays);
  console.log("วันที่ไม่มีเรียน:", noSchoolDays);
  console.log("วันที่มีเรียน:", daysOfWeek , "ดังนั้น คุณมีเรียน" , daysOfWeek.unshift() , "วัน");
  