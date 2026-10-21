const repeatString = function (string, num) {
  const stringArray = [];
  if (num < 0) {
    return "ERROR";
  } else {
    for (i = 1; i <= num; i++) {
      stringArray.push(string);
    }
  }
  return stringArray.join("");
};

// Do not edit below this line
module.exports = repeatString;
