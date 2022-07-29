//every value may be object or primitive/
// there are 7 primitive data types.
/*
1. Numbers
2. String
3. Boolean
4.undefined
5.symbol
6.NUll 
7. BigInt
*/

// Numbers: uesed for decimal numbers and integers.
let age = 24;

// String: sequence of charachters specially used for text enclosed by single or double quotation mark.
let firstName = "Robera";

// Logical: LOgical type can only be true or false - used for taking decision,
let isCharged = true;

// Undefined: Value taken by a variable that is not yet defined(empty value)
let children;

// Null: also meand 'empty value'

// BigInt: (ES2020) Larger integers than the Number type can hold.

// Javascript has dynamic typing: We dont have to manually declare data type of declared variable it holds as value. it determined automatically.
let grade = 2;
console.log(grade);
grade = "two";
console.log(grade);
// COMMENTING

console.log("we can comment using // or for multi-line comment using /* */");

// we can show type of the dataType using typeof()
let undef;
console.log(typeof true);
console.log(typeof grade);
console.log(typeof 2);
console.log(typeof undef);
console.log(typeof undefined);
// Output: UNdefined

console.log(typeof null);
// output: Object

// Let, const and var
// LEt we use let keyword for variable changed later. we can mutate the variable.
let ages = 30;
age = 31;

// Const: value with const cannot changed
const birthYear = 1991;
// we can't birthYear = 1993;

// var is used in es5. this doesnot display error eventhough we didn't use let, const or var.
