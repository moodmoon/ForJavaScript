5.
// Instruction:
// - Create class Elevator with the following specifications: Class Elevator:
    // Constructor
        // • Constructor(maxFloor, minFloor): This initializes the properties
        // 'maxFloor', 'minFloor' and set 'currentFloor' to 0
    // Properties
        // • currentFloor: The floor where the elevator currently is. , type number
        // • maxFloor: The highest floor the elevator can go to. , type number
        // • minFloor: The lowest floor the elevator can go to , type number
    // Methods
        // • goUp(): Increases currentFloor by 1, but not above maxFloor.
        // • goDown(): Decreases currentFloor by 1, but not below minFloor.
        // • goToFloor(floor): Takes a floor number and sets currentFloor to that floor if it's within range.
        // • displayFloor(): Prints the current floor to the console.

class Elevator{
    constructor(maxFloor, minFloor){
        this.maxFloor = maxFloor
        this.minFloor = minFloor
        this.currentFloor = 0
    }
    goUp(){
        if (this.currentFloor < this.maxFloor) {
            return this.currentFloor = this.currentFloor + 1
        }
        return this.currentFloor
    }
    goDown(){
        if (this.currentFloor > this.minFloor) {
            return this.currentFloor = this.currentFloor - 1
        }
        return this.currentFloor
    }
    goToFloor(floor){
        return this.currentFloor = floor
    }
    displayFloor(){
        return this.currentFloor
    }
}

const myElevator = new Elevator(3,0,1)
console.log(myElevator.goUp())
console.log(myElevator.goUp())
console.log(myElevator.goUp())

console.log(myElevator.goDown())
console.log(myElevator.goDown())
console.log(myElevator.goDown())

console.log(myElevator.goToFloor())
console.log(myElevator.goToFloor())

console.log(myElevator.displayFloor())

// console.log(myElevator.goDown())
// console.log(myElevator.goToFloor())
// console.log(myElevator.displayFloor())