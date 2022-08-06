// var firstName = "Ebba";
// const robera = {
//   firstName: "Robera",

//   greet: () => {
//     console.log(this);
//     console.log(`hello ${this.firstName}`);
//   },
// };

// robera.greet();
// Dont ever use arrow function as a meethod.

const robera = {
  firstName: "Robera",
  year: 1991,

  greet: function () {
    console.log(this);
    console.log(`hello ${this.firstName}`);

    const isYoung = function () {
      console.log(`he is born in ${this.year}`);
    };

    isYoung();
  },
};

robera.greet();
