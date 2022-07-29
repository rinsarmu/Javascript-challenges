// Array is one of the data structure.

// All about using variables.'
// Variables holds single value.
const friend1 = "Boonaa";
const friend2 = "Soressa";
const friend3 = "Robera";
console.log(friend1);
console.log(friend2);
console.log(friend3);

// Arrays
// It hold muoltiple values

const friends = ["Boonaa", "Soressa", "Robera"];
console.log(friends);
console.log(friends[0]); // Output:> Boonaa
console.log(friends.length); // Counts number of elements in array start from 1

// const years = new Array(1991, 3003, 2022, 2000);

// While friends declared witch const
friends[2] = "Gadise"; // We can change it
// friends = ["boon", "soori"]; // We can't

const firstName = "Robera";
const robera = [firstName, "Insarmu", 2000, "Programmer", friends];

console.log(robera);

// Exercsise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 2000, 2022, 2303];
console.log(calcAge(years[1]), "Years");
