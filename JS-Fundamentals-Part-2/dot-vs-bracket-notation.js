//Object literals Synthax
const roberaObject = {
  firstName: "Robera",
  lastName: "Insarmu",
  age: 2022 - 1990,
  job: "Teacher",
  friends: ["Boonaa", "Soressa", "Ebisa"],
};

console.log(roberaObject);
// We can access objects using dot and bracket notations.

console.log(roberaObject.lastName);
// Output: Insarmu

console.log(roberaObject["lastName"]);
//With in bracket notation we can do some operation.

const nameKey = "Name";
console.log(roberaObject["first" + nameKey]);
console.log(roberaObject["last" + nameKey]);

// We cant using dot notation.
// console.log(roberaObject.'first' + nameKey)

// const interestedIn = prompt(
//   "What do u want should know about Robera? Choose between firstname, lastName,age,job"
// );
// console.log(roberaObject[interestedIn]); //Output: Teacher

// if (roberaObject[interestedIn]) {
//   console.log(roberaObject[interestedIn]);
// } else {
//   console.log(`No properties called ${interestedIn}`);
// }

// Retreiving Object
roberaObject.location = "Buraayyuu";
roberaObject["twitter"] = "@rinsarmu";
console.log(roberaObject["twitter"], roberaObject.location);

// Challenge
// Robera has 3 friends. and his best friend is called Boonaa.

console.log(
  `${roberaObject.firstName} has ${roberaObject.friends.length} friends, and his best friend is called ${roberaObject.friends[0]}`
);
