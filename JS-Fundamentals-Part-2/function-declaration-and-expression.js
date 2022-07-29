// FUnctions declarations and expression

// We use function keyword called function to declare a function.
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);

// Function expression

// Function without a name is anonoymous function.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// The main difference between function expression and function declaration is we can call function before its defined in function declaration and we defined it later. in function expression we can't.(Hoisting)
