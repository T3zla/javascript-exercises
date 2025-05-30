const convertToCelsius = function(far) {
  let celsius = (far - 32) * 5/9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let fahrenheit = (cel * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
