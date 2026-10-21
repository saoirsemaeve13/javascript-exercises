const sumAll = function (...arg) {
  if (!arg.every((item) => Number.isInteger(item) && item >= 0)) {
    return "ERROR";
  }

  arg.sort();
  let sum = 0;

  for (let i = arg[0]; i <= arg[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
