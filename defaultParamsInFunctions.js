"use strict";
//This java script file will talk about the how to pass default value to the parameters

const myInfo = function (
  name = "Please enter name",
  dateOfBirth = "No dob passed",
  mobileNumber = "Please enter dob"
) {
  console.log(
    `Name is ${name}, Date of birth is ${dateOfBirth} and your contact number is ${mobileNumber}`
  );
};
myInfo();
myInfo("Gaurav", "13/07/1994", "7374733789843");
