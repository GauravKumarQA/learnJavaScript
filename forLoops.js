// This js file contains information about the for loops used in java script
for (let i = 0; i < 10; i++) {
  console.log("Value is : " + i);
}

//Iterrate on object
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

for (let x in object1) {
  console.log("Keys is " + x + "value is : " + object1[x]);
}

//Iterrate with array
const types = [];
const array = [1, "Two", 3.0, false];
for (let x in array) {
  //console.log(x);
  console.log(array[x]);
  types.push(typeof array[x]);
}

console.table(types);
