"strict";
//Generte a random number from 1 to 20
const secretNumber = Math.random() * 20;
console.log(secretNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".numberInput").value);
  if (!guess) {
    document.querySelector(".Guess").textContent = "Please enter valid Number";
    document.querySelector(".numberInput").value = "";
  } else if (guess === secretNumber) {
    document.querySelector(".Guess").textContent =
      "Congratulations... Correct Answer";
  } else if (guess > secretNumber) {
    document.querySelector(".Guess").textContent = "To high...";
    score--;
    document.querySelector(".numberInput").value;
  } else if (guess < secretNumber) {
    document.querySelector(".Guess").textContent = "To Low...";
    score--;
  }
});
