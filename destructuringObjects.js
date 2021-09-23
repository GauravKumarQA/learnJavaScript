"use strict";

//Basic destructuring the java script objects
const objectToDestructure = {
  hotelName: "ItalianCorner",
  menuType: ["Starters", "mainCourse", "Bewrages"],
  openTime: 10,
  closeTime: 23,
};

const { hotelName, menuType, openTime } = objectToDestructure;

console.log(hotelName, menuType, openTime);

//If you want to rename the variable

const { hotelName: partyname, openTime: morningTime } = objectToDestructure;
console.log(partyname, morningTime);

//Providing default value
const {
  hotelName: partyname2 = "xyz",
  openTime: morningTime2 = "10",
  approvedBy = [],
} = objectToDestructure;

console.log(partyname2, approvedBy);
