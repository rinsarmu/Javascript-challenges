const inputYear = "1991";
console.log(inputYear + 18);
// output -> 199118

console.log(Number(inputYear) + 18);
// output -> 2009

// NB NaN is not a number. that means it's still a number

//Type Coercions
console.log("I am " + 23 + " Years old!");
console.log("23" - "13" - "4");
// Output -> 6
console.log("23" * "2");
// Output -> 46

console.log("22" / "2");
// Output -> 11

console.log("23" > "2");
// Output -> true

let n = "1" + 1;
n = n - 1;
console.log();
// Output -> 10b
// tyoe coercion is not working on addition.
