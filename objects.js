"strict";
// This js file contains basic implimentation of the objects in java script
//Object store value in kry value pair

const object1 = {
  Name: "Gaurav",
  Age: 27,
  Single: false,
  Hobbies: ["code", "dance", "etc", 7],
  getBirthYear: function () {
    return 2021 - this.Age;
  },
  getSummary: function () {
    return `Name of the candidate is ${this.Name} , Age is ${this.Age}`;
  },
};

console.log(object1.Name);
console.log(object1["Name"]);

const find = prompt("What do you want to know about Gaurav?");
if (object1[find]) {
  alert("Your answer is : " + object1[find]);
} else {
  alert("Please ask valid question");
}

console.log(object1.getBirthYear());
console.log(object1.getSummary());

//Adding a key value in object
object1.Color = "Black";
object1["Country"] = "Inda";

console.log(object1);
