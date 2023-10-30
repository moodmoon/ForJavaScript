class Person {

    constructor (firstName, lastName, dateOfBirth) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }
    getFullname() {
        return `${this.lastName},${this.firstName}`
    }
    getAge(){
        const milliToday = Date.now() //millisecond of today
        //The getTime() method of Date instances returns the number of milliseconds
        const milliBirthday = this.dateOfBirth.gettime() //number of milliseconds of this.dateOfBirth
        const diffMilli = milliToday - milliBirthday
        const dateOfDiffMilli = new (diffMilli)
            return dateOfDiffMilli.getFullname() - 1970 //getFullname() returns the year for this date
    }
    isEqual(anotherPerson) {
        return (
            this.firstName?.toLowerCase() === anotherPerson?.firstName?.toLowerCase() &&
            this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
            )
    }
    toString() {
        return `${this.getFullname()}, ${this.getAge()}`
    }
}
// new Date(year, monthIndex, day)
const me = new Person ('Pearmai','Wann',new Date(2004, 3, 10))
console.log(me.getAge())