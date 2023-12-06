// const myCookie = document.cookie
// console.log(myCookie)

// document.cookie = 'course=INT201;expires=max-age=300'
// console.log(myCookie)

// document.cookie = `credit=3;expires=${new Date(Date.now()+1000*60*60*24)}`

// // new Date(year, monthIndex, day)
// document.cookie = `lecturer=Pearmai;expires=${new Date(2023, 11, 25)}`
// console.log(myCookie)

import { CookieUtil } from "./myLib/cookieUtil";

CookieUtil.set('course','INT201', new Date(2023, 11, 31))
CookieUtil.set('credit','2', new Date(2024, 0, 1))

console.log(CookieUtil.get('course'))
console.log(CookieUtil.get('credit'))

CookieUtil.unset('course') //cookie expired