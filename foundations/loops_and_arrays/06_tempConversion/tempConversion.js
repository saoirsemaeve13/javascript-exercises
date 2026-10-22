const convertToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return +celsius.toFixed(1);
};

const convertToFahrenheit = (celsius) => {
  const fahrenheit = celsius * (9 / 5) + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
