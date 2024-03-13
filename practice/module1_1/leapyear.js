function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
        return year % 400 === 0 // return ค่าได้เลยถ้าเอา boolean
    }
    return true
  } else {
    return false
  }
}

console.log(isLeapYear(2020)); //4 
console.log(isLeapYear(1900)); //4 100
console.log(isLeapYear(2000)); //4 100 400
console.log(isLeapYear(2021));
