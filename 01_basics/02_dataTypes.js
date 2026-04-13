"use strict" // treat all js code as modern js code

// alert (3+3) // we are using node JS not browser so alert will not work

console.log(3+3) // this will work in both browser and node JS

//Data type documentation 
// 1) ECMA = https://tc39.es/ecma262/
// 2) MDN = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures 
//https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

// Data types in JavaScript

let name = "Rushikesh" // String
let age = 28 // Number
let isEmployed = true // Boolean
let address = null // Null : it is standalone value that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property is intentionally empty.
let phoneNumber = undefined // Undefined : it represents the absence of a value for a variable that has been declared but not initialized.
let hobbies = ["coding", "traveling", "music"] // Array
let person = { name: "Rushikesh", age: 28 } // Object   

//number => 2 to power 53 -1
let bigNumber = 9007199254740991n // BigInt : to represent numbers larger than 2^53 -1
// mostly used in blockchain and cryptography, high precision calculations, and when working with large integers in JavaScript.

//Symbol : Unique and immutable data type that can be used as a key for object properties. It is often used to create private properties in objects or to define constants that cannot be changed. Each time you create a Symbol, it is guaranteed to be unique, even if it has the same description as another Symbol.
let sym1 = Symbol("id")
let sym2 = Symbol("id")

//object 

console.log(typeof "Rushikesh") // string
console.log(typeof age) // number
console.log(typeof isEmployed) // boolean
console.log(typeof null) // object (this is a known issue in JavaScript)
console.log(typeof undefined) // undefined
console.log(typeof hobbies) // object
console.log(typeof person) // object
console.log(typeof bigNumber) // bigint
console.log(typeof sym1) // symbol