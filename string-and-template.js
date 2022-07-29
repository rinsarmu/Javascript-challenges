const firstName = "Robera";
const job = "Programmer";
const birthYear = 1990;
const year = 2037;
const robera = "I'm " + firstName + ", a " + [year - birthYear] + " years old";

console.log(robera);

// using template string
const newRobera = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;

console.log(newRobera);
console.log(`Jus a regular strring...`);

// template sring also used for multiline string.
console.log(`
 
  hello \n
  this is multil\n
  ine template.`);
