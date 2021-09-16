//Basic java script function
function add(firstValue, secondValue) {
  return firstValue + secondValue;
}

//Function as an expresion

const functionStore = function (firstValue, secondValue) {
  return firstValue + secondValue;
};

//Arrow functions
const arrowFunction = (firstValue, secondValue) => {
  return firstValue + secondValue;
};

console.log(add(1, 2));
console.log(functionStore(1, 3));
console.log(arrowFunction(1, 5));
