const marks = {
  fullName: "Marks Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const jonas = {
  fullName: "Jonas Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

marks.calcBMI();
jonas.calcBMI();

if (marks.BMI > jonas.BMI) {
  console.log(
    `${marks.fullName} BMI (${marks.BMI}) is higher than ${jonas.fullName} BMI (${jonas.BMI})`
  );
} else if (marks.BMI < jonas.BMI) {
  console.log(
    `${jonas.fullName} BMI (${jonas.BMI})is higher than  ${marks.fullName} BMI (${marks.BMI}) `
  );
}
