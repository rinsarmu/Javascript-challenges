// const avgDolphins = () => (44 + 23 + 71) / 3;
// const avgkoalas = () => (65 + 54 + 49) / 3;
"use strict";
const avgDolphins = (a, b, c, d) => (a + b + c) / d;
const avgkoalas = (a, b, c, d) => (a + b + c) / d;

const scoreDolphins = avgDolphins(85, 54, 49, 3);
const scoreKoalas = avgkoalas(23, 24, 37, 3);
function checkWinner(dolphin, koalas) {
  if (dolphin >= koalas * 2) {
    return `Dolphin is the winner`;
  } else if (dolphin * 2 <= koalas) {
    return `Koalas is the winner`;
  } else {
    return `None of the two is the winner.`;
  }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));
