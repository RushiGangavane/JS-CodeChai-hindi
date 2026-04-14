// # primitive datatypes
// this are call by value datatypes because they store the actual value in the variable and when we assign a variable to another variable, 
// it creates a copy of the value and assigns it to the new variable. So, if we change the value of one variable, it does not affect the other variable. For example:

let a = 10
let b = a // b is assigned the value of a, which is 10
// console.log(a) // 10
// console.log(b) // 10

//7 types of primitive datatypes in JavaScript:
// 1) String : it is used to represent text and is enclosed in single quotes (' '), double quotes (" "), or backticks (` `). For example: "Hello, World!", 'JavaScript', `Template literals`.
// 2) Number : it is used to represent both integer and floating-point numbers. For example: 42, 3.14, -0.5.
// 3) Boolean : it is used to represent a logical entity and can have two values: true or false.
// 4) Undefined : it is a primitive datatype that represents the absence of a value. A variable declared without a value has the value undefined.
// 5) Null : it is a primitive datatype that represents the intentional absence of any object value. example: temprature = null (indicating that the temperature value is intentionally left empty or unknown)
// 6) Symbol : it is a unique and immutable primitive datatype, often used as an identifier for object properties.
// 7) BigInt : it is a primitive datatype that can represent integers larger than the maximum safe integer value (2^53 - 1).


//reference datatypes or Non-primitive datatypes
// these are call by reference datatypes because they store a reference to the value in the variable and when we assign a variable to another variable, it creates a reference to the same value and assigns it to the new variable. 
// So, if we change the value of one variable, it affects the other variable as well. For example:

//1) array
let arr1 = [1, 2, 3]
let arr2 = arr1 // arr2 is assigned the reference of arr1, which points to the same array in memory
// console.log(arr1) // [1, 2, 3]
// console.log(arr2) // [1, 2, 3]

//2) objects : it is a collection of key-value pairs where the keys are strings (or symbols) and the values can be of any datatype, including other objects. For example:
let person1 = 
{ name: "Rushikesh", 
    age: 28, }
let person2 = person1 // person2 is assigned the reference of person1, which points to the same object in memory
// console.log(person1) // { name: "Rushikesh", age: 28 }
// console.log(person2) // { name: "Rushikesh", age: 28 }

//3) functions : it is a block of code that performs a specific task and can be called or invoked to execute that task. Functions are also objects in JavaScript and can be assigned to variables, passed as arguments to other functions, and returned from functions. For example:
// function () {
// }; // this is a function declaration

const MyFunction = function() {
console.log("This is a function expression")
}

 // Note
// 
//    JavaScript is dynamically typed.
//    Types are associated with values, not variables.
//    This means a variable can change from a Number to a String.
// let data = "Hello!"; 

// symbol is a unique and immutable primitive datatype, often used as an identifier for object properties. Each time you create a Symbol, it is guaranteed to be unique, even if it has the same description as another Symbol. For example:
let sym1 = Symbol("123")
let sym2 = Symbol("123") 
//console.log(sym1 === sym2) // false : because sym1 and sym2 are different symbols, 
// even though they have the same description "123". 
// Each symbol is unique and immutable, so they are not equal to each other.
let bigInt1= 9007199254740991n

console.log(typeof sym1) // symbol
console.log(typeof MyFunction) // function
console.log(typeof arr1) // object
console.log(typeof person1) // object
console.log(typeof bigInt1) // bigint


