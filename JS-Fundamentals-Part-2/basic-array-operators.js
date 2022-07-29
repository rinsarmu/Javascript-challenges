const friends = ["Boonaa", "Soressa", "Robera"];
// Push -> add laastelement.
friends.push("Gadise"); // return length of array.
console.log(friends);

// Unshift => add element at the first.

friends.unshift("Milkessa");

// Remeove elemnts at the last
friends.push(); // Return remov  ed array.

// Remove element from the first array
friends.shift();

// IndexOf return index of given string.
console.log(friends.indexOf("Soressa"));

// Includes simple returns true if exist or false if its'nt exist. It checks strict equality(===)
friends.push(23);
console.log(friends.includes("Boonaa"));

if (friends.includes("Soressa")) {
  console.log("You have a friend called Soressa.");
}
