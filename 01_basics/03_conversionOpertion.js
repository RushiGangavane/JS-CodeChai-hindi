let score = "33"
let scoreMix= "123Abc"
let scoreNull = null
let scoreUndefined = undefined
let scoreBoolean = true
/*
console.log(score) // "33"
console.log(typeof score) // string
console.log(typeof(score))
console.log(scoreMix) // "123Abc"
console.log(typeof scoreMix) // string
console.log(scoreNull) // null
console.log(typeof scoreNull) // object (this is a known issue in JavaScript)
console.log(scoreUndefined) // undefined
console.log(typeof scoreUndefined) // undefined
console.log(scoreBoolean) // true
console.log(typeof scoreBoolean) // boolean


// type conversion
console.log("Type conversion 33 string to number result is 33")
let valueInNumber = Number(score) // converts string to number
console.log(valueInNumber) // 33
//console.log(typeof valueInNumber) // number

console.log("Type conversion 123Abc string to number result is NaN")
let valueInNumberMix = Number(scoreMix) // converts string to number but since it has non-numeric characters it will return NaN (Not a Number)
console.log(valueInNumberMix) // NaN : it is a special value that represents the result of an invalid mathematical operation or an undefined value in JavaScript. It is often used to indicate that a value is not a valid number or that a mathematical operation has failed. NaN is a property of the global object and is of type number.
//console.log(typeof valueInNumberMix) // number

console.log("Type conversion null to number result is 0")
let valueInNumberNull = Number(scoreNull) // converts null to 0
console.log(valueInNumberNull) // 0
//console.log(typeof valueInNumberNull) // number 

console.log("Type conversion undefined to number result is NaN")
let valueInNumberUndefined = Number(scoreUndefined) // converts undefined to NaN
console.log(valueInNumberUndefined) // NaN
//console.log(typeof valueInNumberUndefined) // number

console.log("Type conversion true to number result is 1")
let valueInNumberBoolean = Number(scoreBoolean) // converts true to 1 and false to 0
console.log(valueInNumberBoolean) // 1
//console.log(typeof valueInNumberBoolean) // number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
console.log(typeof booleanIsLoggedIn) // boolean

let isLoggedInEmptyString = ""
let booleanIsLoggedInEmptyString = Boolean(isLoggedInEmptyString)
console.log(booleanIsLoggedInEmptyString) // false

let isloggedInNonEmptyString = "Rushikesh"
let booleanIsLoggedInNonEmptyString = Boolean(isloggedInNonEmptyString)
console.log(booleanIsLoggedInNonEmptyString) // true

//Notes Boolean conversion rules in JavaScript:
// 1) Falsy values: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN are considered falsy and will convert to false when using Boolean().
// 2) Truthy values: All other values, including non-empty strings, non-zero numbers, objects, and arrays, are considered truthy and will convert to true when using Boolean().
// 3) 1=> true and 0 => false when converting numbers to boolean using Boolean().
// 4) Empty strings ("") are false
// 5) Non-empty strings are true when converting to boolean using Boolean().
// 6) null and undefined are false when converted to boolean using Boolean().
// 7) NaN is false when converted to boolean using Boolean().
// 8) Objects and arrays are always truthy, even if they are empty. For example, {} and [] will convert to true when using Boolean().
// 

// string conversion
 
let someNumber = 123
let stringSomeNumber = String(someNumber) // converts number to string
console.log(stringSomeNumber) // "123"
console.log(typeof stringSomeNumber) // string
*/


//**********************************Operations***************************************** */

let value=3
let negValue = -value
// console.log(negValue) // -3

// console.log(3+3) //Addition : 6
// console.log(3-3) // Subtraction : 0
// console.log(3*3) // Multiplication : 9
// console.log(2**3) // Exponentiation (power) : 8
// console.log(10/3) // Division : 3.3333333333333335
// console.log(10%3) // Modulus (remainder) : 1

// let str1 = "Rushikesh  "
// let str2 = "Gangavane"
// console.log(str1+ str2) // String concatenation : "Rushikesh  Gangavane"
// console.log( "1" + 2) // String concatenation : "12"
// console.log(1 + "2") // String concatenation : "12"
// console.log(1 + 2 + "3") // String concatenation : "33" (1+2 is evaluated first to 3, then concatenated with "3")
// console.log("1" + 2 + 3) // String concatenation : "123" ("1" + 2 is evaluated first to "12", then concatenated with 3)

console.log(true)
console.log(+true) // 1 : unary plus operator converts true to 1
console.log(+"") // 0 : unary plus operator converts empty string to 0
console.log(+"123") // 123 : unary plus operator converts string "123" to number 123
console.log(+"123abc") // NaN : unary plus operator tries to convert string "123abc" to number but fails and returns NaN

let num1 , num2, num3

num1 =num2 =num3 = 2 + 2 // 2+2 is evaluated first to 4, then assigned to num3, num2, and num1 This is wrong way to assign values to multiple variables because it can lead to confusion and unintended consequences. It is better to assign values to each variable separately for clarity and maintainability. For example:


