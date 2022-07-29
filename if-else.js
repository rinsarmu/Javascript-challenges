// check whether he  got driver license

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Robera can start driving license.");
} else {
  const yearsleft = 18 - age;
  console.log(`Robera is too young. Wait another ${yearsleft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(` ${century} Century`);
