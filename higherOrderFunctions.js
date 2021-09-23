"use strict";

//This file constains how to create higher level functions in js
const removeSpace = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirst = function (str) {
  const [firstword, ...others] = str.split(" ");
  return [firstword.toUpperCase(), ...others].join(" ");
};

const transformed = function (str, fn) {
  console.log("Orignal string is " + str);
  console.log("Transformed string is " + fn(str));
  console.log("Transformed by " + fn.name);
};

transformed("Gaurav is a learner", upperFirst);
