"Use strict";

//This file contains information about call and apply
const zamatoOrders = {
  name: "zamato",
  booking: [],
  printOrderFrom: function (firstName) {
    console.log(`You are odering from ${this.name} by user ${firstName}`);
  },
};

zamatoOrders.printOrderFrom();

const swiggyOrder = {
  name: "Swiggy",
};

const printFunction = zamatoOrders.printOrderFrom;

//To set the THIS keyword value we use call method
// when we pass the object in call this is is set to that object
printFunction.call(swiggyOrder);

//Same we can achieve this by applly method as well for same purpose  but the difference is . in call we pass multiple params
//by comma seprated , But in case of apply we need to pass the array

printFunction.apply(swiggyOrder);
