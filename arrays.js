"strict";

//Arrays in java script
//Initialization
const arrays = ["Gaurav", "Chandrika", "Test"];
console.log("Printing a string array: " + arrays);

const array2 = new Array(1, 2, 3);
console.log("Printing an number array: " + array2);

console.log("Printing single element of an array " + arrays[0]);

//Changing an element of an array

arrays[1] = "Kumar";

console.log(arrays);

//Array insertion and deletion from corners
//We will use method push pop shift unshit
//Few more length,join,concat,splice,slice,
arrays.push("I am pushed");
console.log(arrays);

arrays.pop();
console.log("after poping kumar value from the array " + arrays);

console.log("Length of an array " + arrays.length);

arrays.shift();
console.log("array after shifting " + arrays);

arrays.unshift("I am first by unshift");
console.log("arrays after unshift " + arrays);

const concatinated = arrays.concat(array2);
console.log(concatinated);
