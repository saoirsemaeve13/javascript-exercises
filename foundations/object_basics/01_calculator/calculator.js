const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce((prev, current) => prev + current, 0);
};

const multiply = function (nums) {
  return nums.reduce((prev, current) => prev * current, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let answer = 1;
  for (let i = num; i >= 1; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
