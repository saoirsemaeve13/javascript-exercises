const palindromes = function (string) {
  const stringUC = string.toUpperCase();
  const stringClean = stringUC.replace(/[^a-zA-Z0-9]/g, "");
  const arr = [...stringClean];
  const arrRev = arr.toReversed();
  const stringRev = arrRev.join("");
  return stringClean === stringRev;
};

// Do not edit below this line
module.exports = palindromes;
