//array

const myArray1 = [0,1,2,3,4,43]

const myHeros =[ "Shaktiman", "junior G", "Hatim"]

const myArr2 = new Array(22,33,44)

//console.log(myHeros[1])
//console.log(myArr2[0])
console.log(myArray1);

// array methods

// myArray1.push(6) // insert value at the last of array
//  myArray1.push(8)
//myArray1.pop() // remove last position value

//myArray1.shift() //Shift oth position to 1 i.e +1 for all position. 
//myArray1.unshift(99) // unshift add 

// console.log(myArray1.includes(1)); // it checks values is in array or not? output is boolean

// console.log(myArray1.indexOf(43)); // we asking value we passed position at which index location.

// const newArray = myArray1.join() // this converts all array value into string

// console.log(newArray) // all array values  are in string
// console.log(typeof newArray) // type is string

// slice , splice

// slice:
//The end index of the specified portion of the array. 
// This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
//  For example, -2 refers to the second to last element of the array.

const myNAslice = myArray1.slice(1,3) 

console.log("Slice" , myNAslice);


console.log("Original Array After SLICE myArray1: " , myArray1);

const myNAsplice = myArray1.splice(1,3)
console.log("Splice:",myNAsplice);
console.log("Original Array after SPLICE myArray1: " , myArray1);

// difference 
// 1) is splice is removing values in original array. 
// 2) splice consider last value as well but slice exclude




