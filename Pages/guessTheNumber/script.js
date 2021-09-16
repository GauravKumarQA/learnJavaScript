"strict";
//Generte a random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore=0;
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
       
      if(score>highScore){highScore=score;  document.querySelector('.HighScore').textContent= 'Highscore is: ' + score;}
    
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
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor='black';
  document.querySelector(".Guess").textContent = "Start guessing...";
  document.querySelector(".Score").textContent='score: 20';
  document.querySelector('.hiddenNumber').textContent='?'
  document.querySelector(".numberInput").value = "";
  score = 20
});
