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
};
const arr = [7, 8, 9];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread array
const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);
// output:

const newMenu = [...restaurant.mainMenu, "Gnocci"];

// copy array
const newMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...newMenuCopy, ...restaurant.starterMenu];
// output: (8) ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad']
console.log(menu);

// Iterables: arrays, strinngs, maps, sets, notobject

const str = "Robera";
const letters = [...str, "", "I."];
console.log(letters);
// output: (8) ['R', 'o', 'b', 'e', 'r', 'a', '', 'I.']

// Real World Example
const ingredients = [
  // prompt("Let's make Pasta! Ingredient1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3"),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founder: "Giuseppe", ...restaurant, FoundedIn: 1998 };

console.log(newRestaurant);
