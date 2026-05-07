// console.log(2>1)    // true : because 2 is greater than 1
// console.log(2<1)    // false : because 2 is not less than 1

// console.log(2==2)   // true : because 2 is equal to 2
// console.log(2!=2)   // false : because 2 is not unequal to 2
// console.log(2<=2)   // true : because 2 is less than or equal to 2

//Avoid this type of conversions written below because it is unpredictable and can lead to unexpected results.

// console.log("2">1)    // true : because "2" is converted to number 2 and 2 is greater than 1
// console.log("02">1)   // true : because "02" is converted to number 2 and 2 is greater than 1

// //Note : Make sure while comparision datatype should be same otherwise it will lead to type coercion and unexpected results. It is always better to use strict equality operator (===) and strict inequality operator (!==) to avoid type coercion and get accurate results. For example:

// console.log(2=="2")   // true : because == operator performs type coercion and converts "2" to number 2 before comparison
// console.log(2==="2")  // false : because === operator does not perform type coercion and compares both value and type, so number 2 is not equal to string "2"



console.log(null>0)    // false : because null is converted to 0 and 0 is not greater than 0
console.log(null==0)   // false : because null is only equal to undefined and not equal to any other value
console.log(null>=0)   // true : because null is converted to 0 and 0 is greater than or equal to 0 

 //Reason is that equility check (==) and comparison operators (>, <, >=, <=) have different type conversion rules in JavaScript.
//  When using comparison operators, null is converted to 0, but when using equality check (==), null is only equal to undefined and not equal to any other value. 
// This is why null>0 is false, null==0 is false, and null>=0 is true.

// value conversion rules for null in comparison operators:
// 1) null is converted to 0 when compared with numbers using >, <, >=, and <= operators.
// 2) null is not equal to any value except undefined when using == operator. It is not equal to 0 or any other value.
// 3) null is considered less than any number when using < operator, but it is not considered greater than any number when using > operator. This is because null is converted to 0 in comparison with numbers, and 0 is less than any positive number but not greater than any negative number or zero.

console.log(undefined>0)    // false : because undefined is converted to NaN and NaN is not greater than 0
console.log(undefined==0)   // false : because undefined is only equal to null and not equal to any other value
console.log(undefined>=0)   // false : because undefined is converted to NaN and NaN is not greater than or equal to 0  

// === strict equality operator : it compares both value and type without performing type coercion. It returns true if both value and type are the same, and false otherwise. For example:

console.log(2===2)   // true : because both value and type are the same (number 2)
console.log(2==="2")  // false : because value is the same but type is different (number 2 and string "2")
console.log(null===undefined) // false : because value is different (null and undefined) and type is also different (object and undefined)
console.log(null==undefined) // true : because null and undefined are considered equal when using == operator, even though they are of different types (object and undefined)