"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//array splice :  this mehtod will generate the new modified array which is spliced and remove the element from the orignal
console.log(arr.splice(2, 4));
console.log(arr);

//Slice method
//Slice willl generate a shallow copy of the array and remain the orignal array unchanged
const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr2.slice(2, 4));
console.log(arr2);

//slice will also be used for creating the copy of an array.
console.log(arr2.slice());

//For more details go to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
