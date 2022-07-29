let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
 
let BMIJohn = massJohn / heightJohn ** 2;
let BMIMark = massMark / heightMark ** 2;

console.log("John BMI: ", "\n", BMIJohn, BMIMark);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
