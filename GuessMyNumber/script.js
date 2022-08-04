const againBtn = document.querySelector(".again-btn"),
  checkBtn = document.querySelector(".check-btn"),
  msg = document.querySelector(".msg"),
  score = document.querySelector(".score"),
  highScore = document.querySelector(".high-score"),
  body = document.querySelector("body");
body.style.backgroundColor = "#333";
body.style.color = "#ddd";

let counter = 20;
let scorer = 0;
let randomNumber = Math.floor(Math.random() * 20 + 1);

// triggred again btn
const againFunction = function () {
  counter = 20;
  score.textContent = "Score: " + counter;
  msg.textContent = "Start Guessing...";
  body.style.backgroundColor = "#333";
  randomNumber = Math.floor(Math.random() * 20 + 1);
  let input = document.querySelector(".input");
  input.value = "";
  console.log("Random Number: ", randomNumber);
};

// Correct Input values
const correctFunction = function () {
  msg.textContent = "Correct Number";
  body.style.backgroundColor = "green";
  console.log("Correct Function is called");
  if (scorer < counter) {
    scorer = counter;
  }
  highScore.textContent = "High score: " + scorer;
};

// Check Input Number with Random Number
const checkFunction = function () {
  let input = Number(document.querySelector(".input").value);
  // Number(input);

  if (!input) {
    msg.textContent = "Not a Number!";
    counter--;
    console.log(input, "type of Input Values:g ", typeof input);
    if (!counter) {
      msg.textContent = "Game is over!!! \n Please try again!";
    }
  } else {
    if (randomNumber == input) {
      correctFunction(input);
    } else if (randomNumber > input) {
      msg.textContent = "Too low";
      counter--;
    } else {
      msg.textContent = "Too High";
      counter--;
    }
  }
  score.textContent = "Score: " + counter;
};

// Event Listeners
againBtn.addEventListener("click", againFunction);
checkBtn.addEventListener("click", checkFunction);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkFunction();
  } else if (e.key === "Escape") {
    againFunction();
  }
});
