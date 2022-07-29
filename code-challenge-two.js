let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let BMIJohn = massJohn / heightJohn ** 2;
let BMIMark = massMark / heightMark ** 2;

let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Marks BMI is higher than John's BMI.`);
} else {
  console.log(`John's BMI is higher than Mark's.`);
}

console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`);
