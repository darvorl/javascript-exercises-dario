const convertToCelsius = function(degrees) {
  const FARENHEIT_TO_CELCIUS = (degrees - 32) * 5/9
  return parseFloat(FARENHEIT_TO_CELCIUS.toFixed(1))
};

const convertToFahrenheit = function(degrees) {
  const CELCIUS_TO_FARENHEIT = (degrees * (9/5)) + 32
  return parseFloat(CELCIUS_TO_FARENHEIT.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
