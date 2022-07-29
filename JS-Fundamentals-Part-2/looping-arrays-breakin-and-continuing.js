const roberaArray = [
  "Robera",
  "Insarmu",
  "Teacher",
  2022 - 1990,
  ["Boonaa", "Soressa", "Ebisa"],
  true,
];

const types = [];
for (let i = 0; i < roberaArray.length; i++) {
  // Reading array from ROberaArray
  console.log(roberaArray[i], typeof roberaArray[i]);

  // Filling types of the array from array.
  // types[i] = typeof roberaArray[i];
  types.push(typeof [i]);
}
console.log(types[1]);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statement
const newages = [];
for (let i = 0; i < years.length; i++) {
  if (years[i] < 2000) {
    continue;
  } else {
    newages.push(2037 - years[i]);
  }
}
console.log(newages);
