// diffrence between statements and expressions.

//  3 + 4 is an expression
// 1991 an expression even if its single value.
// true && false && !false
// So by default expression produce values.

// Statements are bigger piece of code and that cannot be produce a value by default. they are just like complete sentences.

// if(), switch() are the statements.

if (23 > 10) {
  // statements
  const str = "23 is bigger"; // statement but 23 is bigger is an expresion.
}

// Statemets ends with semicolon.
// in template literals we can insert expression rather than statements.
console.log(`I am ${2037 - 333} years old.`);
