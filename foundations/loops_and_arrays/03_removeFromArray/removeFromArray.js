const removeFromArray = function (array, ...removedElement) {
  for (i = 0; i <= array.length; i++) {
    if (removedElement.includes(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
