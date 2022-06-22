let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false


let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3

let nums = [1, 2, 3]
let number = [1, 2, 3]

console.log(nums == numbers)  // false

userOne ={
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false


let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true