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
};
console.log(restaurant.order());
restaurant.orderDelivery({
  time: "22:30",
  address: "via del sole, 21,",
  mainIndex: 2,
  starterIndex: 2,
});
// In objectorder of elements does not matters.

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// In another Way

// RestaurantName, hours, types are variables for declared objects in destructing way.
const {
  name: restaurantName,
  openingHours: hours,
  categories: types,
} = restaurant;
console.log(restaurantName, hours, types);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 222;
const obj = { a: 22, b: 7, c: 14 };
console.log(a, b);
// 111 222
({ a, b } = obj);
console.log(a, b);
// 22, 7

// nested objects

const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);
