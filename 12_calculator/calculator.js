
const add = function(num1, num2) {
  let total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
  let total = num1 - num2
  return total;	
};

const sum = function(array) {
  let total = 0;
  for (let i=0; i < array.length; i++){
    total = total + array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let i=0; i < array.length; i++){
    total = total * array[i];
  }
  return total;

};

const power = function(num1, num2) {
  let total = Math.pow(num1,num2);
  return total;
};

const factorial = function(num1) {
  let total = 1;
  for (let i = 1; i <= num1; i++){
    total = total * i;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
