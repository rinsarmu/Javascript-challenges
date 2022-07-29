const robera = [
  "Robera",
  "Insarmu",
  "Teacher",
  2022 - 1990,
  ["Boonaa", "Soressa", "Ebisa"],
  true,
];

// Looping from backwards
for (let i = robera.length - 1; i >= 0; i--) {
  console.log(robera[i]);
}

// loop in loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`===== Startign exercise ${exercise}`);
// }

// Multiplication table
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i * j);
  }
}
