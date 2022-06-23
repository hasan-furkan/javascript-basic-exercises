let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Truthy values

/*
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true
*/

// Falsy values 
/*
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

let empty = null
console.log(empty)  // -> null , means no value

// Arithmetic Operators

/*

Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b

*/

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64


const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

let check = 4 > 3 && 10 > 5         // true && true -> true
check = 4 > 3 && 10 < 5         // true && false -> false
check = 4 < 3 && 10 < 5         // false && false -> false

check = 4 > 3 || 10 > 5         // true  || true -> true
check = 4 > 3 || 10 < 5         // true  || false -> true
check = 4 < 3 || 10 < 5         // false || false -> false


check = 4 > 3                     // true
check = !(4 > 3)                  //  false
isLightOn = true
isLightOff = !isLightOn           // false
isMarried = !false                // true

let count = 0
console.log(++count)        // 1
console.log(count)     

count = 0
console.log(count++)        // 0
console.log(count)   // 1

count = 0
console.log(--count) // -1
console.log(count)  // -1

count = 0
console.log(count--) // 0
console.log(count)   // -1


let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`) 

// 5 is a positive number
// -5 is a negative number

console.log("******** WINDOW METHODS ************");

// alert('Welcome to 30DaysOfJavaScript') 

// number = prompt('Enter number', 'number goes here')
// console.log(number)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

// const now = new Date()
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth()) 
// console.log(now.getDate()) 
// console.log(now.getDay()) 
// console.log(now.getHours())
// console.log(now.getMinutes()) 
// console.log(now.getSeconds()) 
// console.log(now.getTime()) 

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 