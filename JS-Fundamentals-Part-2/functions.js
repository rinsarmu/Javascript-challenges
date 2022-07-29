// Function is a building blocks of js
// It's a piece of code that we use reuse again in our code.
// Function hold one or more than one complete code.

function logger() {
  console.log("My name is Robera");
}

// to use the function we call/invoke/running it.
logger();
logger();
logger();
// We have called many times.

// with in function we may pass data and return it.

// Parameters are speciifc to the functions.
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(3, 1);
// 3 , 1 are arguments
console.log(appleJuice);

// NB. Not all function needs parameters and return the value.
