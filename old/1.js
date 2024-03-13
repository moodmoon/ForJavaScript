function countCovidStatus(covidStatusArray) {
  let statusCount = {
    'negative and low risk': 0,
    positive: 0,
    'negative and high risk': 0,
  };

  if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined;
  }

  if (covidStatusArray.length === 0) {
    return {};
  }

  for (const status of covidStatusArray) {
    if (status === 'negative and low risk') {
      statusCount['negative and low risk']++;
    } else if (status === 'positive') {
      statusCount.positive++;
    } else if (status === 'negative and high risk') {
      statusCount['negative and high risk']++;
    }
  }

  let result = {};
  for (const key in statusCount) {
    if (statusCount[key] !== 0) {
      result[key] = statusCount[key];
    }
  }
  return result;
}

// ข้อ 1. ให้เขียน Function ชื่อ countCovidStatus (covidStatusArray)
// เพื่อ return object ที่แสดงรายการสถานะที่แตกต่างกันและจำนวนคนที่อยู่ในสถานะนั้น
// โดยสถานะโควิดของทุกคนเก็บอยู่ในพารามิเตอร์ covidStatusArray ซึ่งมี 3 สถานะ
// ได้แก่ 'negative and low risk', 'negative and high risk', 'positive' (case sensitive)

//กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
//กรณี covidStatusArray เป็น empty array [ ] ให้คืนเป็น empty object { }
//กรณี covidStatusArray ปรากฎรายการที่ไม่ใช่สถานะโควิดที่กำหนด ไม่ต้องนับรายการนั้น และถ้าไม่มีรายการอื่นที่ต้องนับ ให้คืนเป็น empty object { }

// covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk' ]
// return { 'negative and low risk': 3, positive: 2, 'negative and high risk': 1}
console.log(
  countCovidStatus([
    'negative and low risk',
    'positive',
    'negative and low risk',
    'negative and high risk',
    'positive',
    'negative and low risk',
  ])
);
// covidStatusArray = ['positive', 'negative and low risk', 'positive' ]
// return { 'negative and low risk’: 1, 'positive' : 2}
console.log(
  countCovidStatus(['positive', 'negative and low risk', 'positive'])
);
// covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', ' normal' ]
// return { 'negative and low risk’: 2, positive: 2, 'negative and high risk': 1}
console.log(
  countCovidStatus([
    'negative and low risk',
    'positive',
    'negative and low risk',
    'abnormal',
    'negative and high risk',
    'positive',
    ' normal',
  ])
);
// covidStatusArray = ['covid']
// return { }
console.log(countCovidStatus(['covid']));
// covidStatusArray = [ ]
// return { }
console.log(countCovidStatus([]));
// covidStatusArray = null
// return undefined
console.log(countCovidStatus(null));
// covidStatusArray = undefined
// return undefined
console.log(countCovidStatus(undefined));
