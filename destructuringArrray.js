"Use strict";
//Destructuring an array is  a way to unfold or seprate element from the array

//Initializing an object
const myconstObj = ["name", "Age", "WifeName"];

//assigning x name value, y to wifeName and skipping second one with a hole.
let [x, , y] = myconstObj;

console.log(x, y);

//Swapping without tempvariable
[y, x] = [x, y];

console.log(x, y);

//We can also define default value while doing destructuring
let [f = 1, g = 1, h = 1] = [x, y];
console.log(f, g, h);
