const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
let total = [];

const calcTip = function (bill) {
  if (bill < 300 && bill > 150) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

for (let i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
  total.push(tip[i] + bill[i]);
}
console.log(bill);
console.log(tip);
console.log(total);

// Bonus challenge

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
111111111;
1111;
