"use strict";

const account1 = {
  name: "Gaurav",
  moments: [100, 30, 20, -50, -190, 100, 5000],
  interestRates: 1.7,
  pass: "123",
};

const account2 = {
  name: "Chandrika",
  moments: [-100, -30, -20, -50, -190, 100, 5000],
  interestRates: 0.7,
  pass: "123",
};

const account3 = {
  name: "Gauravika",
  moments: [200, 45, -20, -50, -190, 100, 1000],
  interestRates: 0.7,
  pass: "123",
};

const listOfAccounts = [account1, account2, account3];

const userName = document.querySelector("input[placeholder='Username']");
const papssword = document.querySelector("input[placeholder='password']");
const signIn = document.querySelector("#signinform > button");
const name = document.querySelector("body > div:nth-child(1) > h3");
const currentDate = document.querySelector("#currentBlnc > p");
const balanace = document.querySelector("#currentBlnc > h3.currentMoney");
const table = document.querySelector("table");
const grettingHeading = document.querySelector(".greetings");

const transferButton = document.querySelector(
  "#trfr > h3:nth-child(2) > button"
);
const transferTo = document.querySelector("input[placeholder='Transfer To']");
const transferAmount = document.querySelector(
  "#trfr > h3:nth-child(2) > input[type=text]:nth-child(2)"
);

const loanRequestButton = document.querySelector("#loan > button");
const loanRequestAmount = document.querySelector("#loan > input[type=text]");

const closeAccountButton = document.querySelector(
  "#cls > h3:nth-child(2) > button"
);
const userClose = document.querySelector(
  "#cls > h3:nth-child(2) > input[type=text]:nth-child(1)"
);
const pinClose = document.querySelector(
  "#cls > h3:nth-child(2) > input[type=password]:nth-child(2)"
);

const app = document.querySelector("#centerContent");

const appEntries = document.querySelector(".entires");

const displayMoments = function (movements) {
  appEntries.innerHTML = "";
  movements.forEach(function (element, i) {
    const type = element > 0 ? "table-success" : "table-danger";
    const html = `<tr class="${type}">
    <th scope="row">${i + 1}</th>
    <td>Debit</td>
   <td>01/2/2992</td>
    <td>${element} $</td>
  </tr>`;
    appEntries.insertAdjacentHTML("beforeend", html);
  });
};

const updateGreeting = function (name) {
  grettingHeading.textContent = `Greeting ${name}`;
};

const updateBalance = function (moments) {
  balanace.textContent = moments.reduce((a, b) => a + b, 0) + "$";
};

const validateUser = function () {
  const currentUserName = userName.value;
  const currentPassword = papssword.value;
  listOfAccounts.forEach(function (element) {
    if (element.name === currentUserName && element.pass === currentPassword) {
      displayMoments(element.moments);
      updateBalance(element.moments);
      updateGreeting(element.name);
      app.setAttribute("style", "opacity:1");
    }
  });
};

signIn.addEventListener("click", validateUser);
