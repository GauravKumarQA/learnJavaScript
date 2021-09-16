"strict";
//Generte a random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Initializing values
let score = 20;
let highScore = 0;

//Event listner for check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".numberInput").value);

  //If gues number is not valid
  if (!guess) {
    changeMessageValue("Please enter valid Number");
    setInputValue("");
  }
  //If guess number is equal to the secret number
  else if (guess === secretNumber) {
    changeMessageValue("Congratulations... Correct Answer");
    changeBodyColor("#2fb868");
    showHiddenNumber(secretNumber);

    //If the score vlue is higher than the highscore value
    if (score > highScore) {
      highScore = score;
      setHighScoreValue("Highscore is: " + score);
    }

    //If guess number is not same as the secret number, Decrease score by one and showing a message
  } else if (guess !== secretNumber) {
    document.querySelector(".Guess").textContent =
      guess > secretNumber ? "To high..." : "To Low...";
    score--;
    document.querySelector(".Score").textContent = "score:" + score;
  }
});

//Listner for the again button
document.querySelector(".again").addEventListener("click", function () {
  defaultPage();
});

const defaultPage = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
  changeMessageValue("Start guessing...");
  document.querySelector(".Score").textContent = "score: 20";
  document.querySelector(".hiddenNumber").textContent = "?";
  document.querySelector(".numberInput").value = "";
  score = 20;
};

const changeBodyColor = function (colorValue) {
  document.body.style.backgroundColor = "#2fb868";
};

const changeMessageValue = function (message) {
  document.querySelector(".Guess").textContent = message;
};

const setHighScoreValue = function (highScoreValue) {
  document.querySelector(".HighScore").textContent = highScoreValue;
};

const showHiddenNumber = function (numberValue) {
  document.querySelector(".hiddenNumber").textContent = numberValue;
};

const setInputValue = function (inputValue) {
  document.querySelector(".numberInput").value = inputValue;
};
