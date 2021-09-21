"use strict";

const globalscopeValue = "I am global scope value 1";

function scopedFunction() {
  const value1 = "I am value one function scoped ";
  //Below line will give error because we are access the vaue which is initialized and defined after function call
  // console.log(` ${value1} and ${globalscopeValue} and ${globalscopeValue2}`);

  console.log(` ${value1} and ${globalscopeValue}`);

  function fif() {
    const value11 = "I am nested function value";
    console.log(`${value1} and ${globalscopeValue} from fif function`);
  }
  fif();

  if (value1) {
    var variableBlockScope = "I am variable within finction> if block";
    const constBlockedScope = "I am const within blocked scope";
  }

  //Below will give an error because we are printing constBlockedScope which are blocked scope
  //console.log(`${variableBlockScope} calling from outer function. ${constBlockedScope}`);

  console.log(`${variableBlockScope} calling from outer function.`);
}

scopedFunction();

const globalscopeValue2 = "I am global scope value 2";

const tata = function () {};
