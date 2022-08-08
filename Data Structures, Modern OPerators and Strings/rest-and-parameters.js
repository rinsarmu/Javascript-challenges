"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23,Firenze, Italy",
  categories: ["Italiana", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //OPen 24 Hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function (starterIndex, address, time, mainIndex) {
    console.log(
      `Order is received!${
        (this.starterMenu[starterIndex], this.mainMenu[mainIndex])
      } will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your deliceous pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function (ingrredient1, ...otherIngredient) {
    console.log(ingrredient1);
    console.log(otherIngredient);
  },
};
// spread used to unpack arrays
//Spread because on right side of array.
// Spread used to pass individual argument to the function.
const arr = [1, 2, ...[3, 4]];

console.log(arr);

// Rest on left side of equal sign.
const [a, b, ...others] = [1, 2, 43, 4, 5];

console.log(a, b, others);
// output: 1 2 (3) [43, 4, 5]

const [pasta, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pasta, risotto, otherFood);
// output: Pizza Risotto (5) ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad']

// note: Rest element must be at the last element
// only one rest element in an array.

//Object

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
//output: {thu: {…}, fri: {…}}

// Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 2, 4);
add(9, 3, 2, 2);

const x = [15, 3, 2, 4];
add(...x);

restaurant.orderPizza("mushrooms", "oniion", "olive", "spinach");
