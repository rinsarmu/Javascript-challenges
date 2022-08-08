"use strict";
const restaurant = {
  name: "Aadaa Wallaggaa",
  location: "Naqamtee, Wallaggaa, Oromiyaa",
  categories: [
    "cororsaa Giddaa",
    "caccabsaa Galiilaa",
    "cumboo",
    "Buna qalaa lixaa",
    "ukkaamsaa Dambi Doolloo",
    "Ancootee",
  ],
  starterMenu: ["dhadhaa", "daakuu midhaanii", "qocqocaa"],
  mainMenu: ["caccabsaa", "Cumboo", "Marqaa"],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring Array.
const [x, y, z] = arr;

console.log(x, y, z);
let [main, secondary] = restaurant.categories;

console.log(main, secondary);
//If switch between the two rather we use temp method we can destruct using,
[main, secondary] = [secondary, main];
console.log(main, secondary);
