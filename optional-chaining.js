"use strict";

// OPtional Chaning
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, //OPen 24 Hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23,Firenze, Italy",
  categories: ["Italiana", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery(starterIndex, address, time, mainIndex) {
    console.log(
      `Order is received!${
        (this.starterMenu[starterIndex], this.mainMenu[mainIndex])
      } will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your deliceous pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza(ingrredient1, ...otherIngredient) {
    console.log(ingrredient1);
    console.log(otherIngredient);
  },
};

// console.log(restaurant.openingHours.Thu);
//with in optional chaining if certain object is not exist it print undefined rather than error.
// console.log(restaurant.openingHours.Mon);
if (restaurant.openingHours && restaurant.openingHours.Mon)
  console.log(restaurant.openingHours.Mon.open);

// With optional chaining(?)

//Property
console.log(restaurant.openingHours?.Mon?.open ?? "It is closed on this day.");

console.log(restaurant.openingHours?.Thu?.open ?? "It is closed on this day.");

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (const day of days) {
  console.log(day);

  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`Restaurant is opened on ${day} at ${open}`);
}

//Method

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderUndefined?.(0, 1) ?? "Method does not exist");
// Output: Method does not exist

// Arrays

const users = [
  {
    name: "Robera",
    email: "roba@gmail.com",
    job: "Programmer",
    experience: "3years experience",
  },
];

console.log(users[0]?.name ?? "User is empty");

// Finally optional chaining is work well with nullish operator. nullish operator only false value with null and undefined avalue.
