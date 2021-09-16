"strict";
//Generte a random number from 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
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
      document.body.style.backgroundColor='#2fb868';
      document.querySelector('.hiddenNumber').textContent=secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector(".Guess").textContent = "To high...";
    score--;
    document.querySelector(".Score").textContent = 'score:' + score;
  } else if (guess < secretNumber) {
    document.querySelector(".Guess").textContent = "To Low...";
    score--;
    document.querySelector(".Score").textContent = 'score:' + score;
  }
});

document.querySelector('.again').addEventListener('click',function() {
window.location.reload();
});
