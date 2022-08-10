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

  numGuests: 0,
};
//  feature of es2020
// Nullish: null or undefined not 0 or ''
// with in ullish only undefined and null is falsy value.
// eg
let nullish = null;
console.log(nullish ?? 0);

const guests = restaurant.numGuests ?? 10;
console.log(guests);
// output: 0
