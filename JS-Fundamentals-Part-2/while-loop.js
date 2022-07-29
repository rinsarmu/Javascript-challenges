const robera = [
  "Robera",
  "Insarmu",
  "Teacher",
  2022 - 1990,
  ["Boonaa", "Soressa", "Ebisa"],
  true,
];
let rep = 0;
while (rep < robera.length) {
  console.log(robera[rep]);
  rep++;
}

rep = 0;
let dice = Math.floor(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(dice);
  dice = Math.floor(Math.random() * 6) + 1;
}
