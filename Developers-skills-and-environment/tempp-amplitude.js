// Problem
// We work for a company building a asmart home thermometer, Our modt recent tas is this: "Given an array of temperature of one day, cakcuate te temperature amplitude, keep in mind that someimes there might be a sensot error."

const temperature = [3, -3, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) uNDERSTANDING THE PROBLEM
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures
// - What's a sensor error> And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors+
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max(amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') {
      console.log('number');
      if (max < temps[i]) {
        max = temps[i];
      }
      if (min > temps[i]) {
        min = temps[i];
      }
    } else {
      continue;
    }
  }
  console.log(`Maximum temp ${max}`);
  console.log(`Maximum temp ${min}`);
};
console.log(typeof 3);
calcTempAmplitude(temperature);
