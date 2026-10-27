const fibonacci = function (num) {
  let arr = [0, 1];
  if (typeof num === "number" && !isNaN(num) && num > 0) {
    for (let i = 2; i <= num; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[num];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
