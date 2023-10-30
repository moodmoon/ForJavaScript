const circle = {
    radius: 2,
    area: function() {
        // return Math.pow(Math.PI,2)
        return Math.PI * Math.pow(this.radius,2) //12.566370614359172
    } ,

    // or
    /* 
    area() {return Math.pow(Math.PI,2)}
    */
   equals(compareCircle){
    return this.radius === compareCircle.radius
   }
}

console.log(circle) //{ radius: 2, area: [Function: area] }
                    //{ radius: 2, area: [Function: area], equals: [Function: equals] }
console.log(circle.radius) //2
console.log(circle.area()) //12.566370614359172
console.log(circle.equals({radius: 2})) //true
console.log(circle.equals({radius: 3})) //false
console.log('----------------------------------')

//Check empty object - JSON.stringify(circle)
// circle = {}
console.log(JSON.stringify(circle))
if (JSON.stringify(circle) === '{}') console.log('empty object')
else console.log('not empty object')

//Spread(...) - Copy