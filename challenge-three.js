// let avgDolphins = (96 + 108 + 89) / 3;
// let avgKoalas = (88 + 91 + 110) / 3;

// let avgDolphins = (97 + 112 + 101) / 3;
// let avgKoalas = (109 + 95 + 123) / 3;

let avgDolphins = (86 + 112 + 101) / 3;
let avgKoalas = (98 + 95 + 106) / 3;
console.log("hello", avgDolphins, avgKoalas);
if (avgDolphins === avgKoalas) {
  if (avgDolphins >= 100) {
    console.log("Both are the winner.");
  } else {
    console.log("None of them is the winner.");
  }
} else if (avgDolphins >= avgKoalas) {
  if (avgDolphins >= 100) {
    console.log("Dolphin is the winner.");
  } else {
    console.log("Dolphin is the wiiner. but score less than 100");
  }
} else {
  if (avgKoalas >= 100) {
    console.log("Koalas is the winner.");
  } else {
    console.log("Koalas is the winner. but scroe less than 100.");
  }
}
