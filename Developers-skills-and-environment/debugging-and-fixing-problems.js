const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    value: Number(prompt('Degree Celcius')),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1. IDENTIFY

console.log(measureKelvin());
