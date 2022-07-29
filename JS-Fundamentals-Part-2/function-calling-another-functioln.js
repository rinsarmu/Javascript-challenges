"use strict";
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
// Review
/*
function fruitProcessor(apples, oranges) {
  ..
  ..
  ..
  return ...
}

const fruitProcess = fruitProcessor(3, 3)
Keyword => function
functionName => fruitProcessor
parameters => apples, oranges
              : Parameters are placeholders to receive input values. Like local variables of a function.

FUnction body :> block of code that we want to reuse. Processes tha function's input data. {}
return :> retrun a statement to ouput a value from the function and terminate executioon.

fruitProcess :> variable : to save returned value(function ouput)

(3,3) :> arguments : actual values of function paramaters, to input data.

fruitProcessor(3, 3) :> calling/running /invoking functions.
*/
