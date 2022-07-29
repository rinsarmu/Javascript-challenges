// Object holds diffrent types of data types
// We can add function to ojects.
const robera = {
  firstName: "Robera",
  lastName: "Insarmu",
  age: 2037 - 1990,
  birthYear: 2000,
  job: "Teacher",
  friends: ["Boonaa", "Soressa", "Ebisa"],
  hasDriverLicense: true,
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummer: function () {
    const roba = `${this.firstName} is a ${this.age} years old ${this.job}`;

    if (this.hasDriverLicense) {
      return roba + " and he has a driver License's";
    } else {
      return roba + " and he has nodriver License's";
    }
  },
};

// console.log(robera.calcAge());
// console.log(robera["calcAge"]());
console.log(robera.age);

// Challenge
// Robera is a 46 - year old teacher, and he has a drivers' license
console.log(robera.getSummer());
