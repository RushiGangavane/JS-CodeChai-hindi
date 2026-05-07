const score =400
// console.log(score) // 400

const balance =new Number (400)
// console.log(balance) // [Number: 400]
//console.log(typeof balance) // object

// console.log(balance.toString()) // "400" : converts the number to a string
// console.log(balance.toFixed(2)) // "400.00" : formats the number to 2 decimal places and returns a string
// console.log(balance.toExponential(2)) // "4.00e+2" : formats the number in exponential notation with 2 digits after the decimal point and returns a string

const num2 =123.89742312
// console.log(num2.toPrecision(5)) // "123.90" : formats the number to a specified precision (number of significant digits) and returns a string

const hundred = 100000000
 //console.log(hundred.toLocaleString('en-US')) // "1,000,000,000" : formats the number according to the locale and returns a string with appropriate separators for thousands, millions, etc.
//Indian locale
//console.log(hundred.toLocaleString('en-IN')) // "1,00,00,000" : formats the number according to the Indian locale and returns a string with appropriate separators for thousands, lakhs, etc.

//+++++++++++ Maths ++++++++++++++
// console.log(Math) // Math is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions. It is not a function object, so it cannot be called as a function. Instead, you can use its properties and methods to perform various mathematical operations. For example:
// console.log(Math.abs(-5)) // 5 : returns the absolute value of a number
// console.log(Math.ceil(4.2)) // 5 : rounds a number up to the nearest integer
// console.log(Math.floor(4.7)) // 4 : rounds a number down to the nearest integer
// console.log(Math.round(4.5)) // 5 : rounds a number to the nearest integer
// console.log(Math.max(1, 5, 3)) // 5 : returns the largest of zero or more numbers
// console.log(Math.min(1, 5, 3)) // 1 : returns the smallest of zero or more numbers
// console.log(Math.pow(2, 3)) // 8 : returns the base to the exponent power, that is, base^exponent
// console.log(Math.sqrt(16)) // 4 : returns the square root of a number

// random number example

console.log(Math.random()) // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10)+1) // returns a random number between 1 (inclusive) and 11 (exclusive) by multiplying the random number by 10 and adding 1 to shift the range from 0-10 to 1-11.
console.log(Math.floor (Math.random()*10)+1) // returns a random integer between 1 (inclusive) and 10 (inclusive) by multiplying the random number by 10, adding 1 to shift the range from 0-10 to 1-11, and then using Math.floor() to round down to the nearest integer.

//Betweeen range we want random number ex: between 10 to 20
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) // returns a random integer between min (inclusive) and max (inclusive) by multiplying the random number by the range (max - min + 1), adding min to shift the range from 0-(max-min) to min-max, and then using Math.floor() to round down to the nearest integer.