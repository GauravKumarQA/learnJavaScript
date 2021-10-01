"use strict";

const account1 = {
  name: "Gaurav",
  moments: [100, 30, 20, -50, -190, 100, 5000],
  interestRates: 1.7,
};

const account2 = {
  name: "Chandrika",
  moments: [-100, -30, -20, -50, -190, 100, 5000],
  interestRates: 0.7,
};

const account3 = {
  name: "Gauravika",
  moments: [200, 45, -20, -50, -190, 100, 1000],
  interestRates: 0.7,
};

const signIn = document.querySelector("#signinform > button");
const name = document.querySelector("body > div:nth-child(1) > h3");
name.textComponet;
const currentDate = document.querySelector("#currentBlnc > p");
const balanace = document.querySelector("#currentBlnc > h3.currentMoney");
const table = document.querySelector("table");

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

const appData = document.querySelector("#centerContent");

const getUserNamePassword = function () {
  signIn.addEventListener("click", function () {});
};
