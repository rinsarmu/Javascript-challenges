// type of operators
// 1.mathematical operators
const now = 2022;
const ageRoba = now - 1980;
const ageSarah = now - 2000;
console.log(ageRoba, ageSarah);

console.log(ageRoba * 2, ageRoba / 10, 2 ** 3);

const firstName = "Robera";
const lastName = "Insarmu";
const space = " ";

console.log(firstName + space + lastName);
// output: Robera Insarmu

// Assignment operators
let x = 10 + 5;
console.log(x);
// output 15

x += 10; //means x = x + 10
console.log(x);
// output: 25

x *= 4; //output 100
x++; // x = x+ 1 -> 101
x--; // x = x - 1 -> 100

// Comparison operators <, > , =
console.log(ageRoba > ageSarah);
// output -> true

console.log(ageSarah >= 18);
// AgeSarah is 20.

// Operators precedence
console.log(now - 1991 > now - 2018);
