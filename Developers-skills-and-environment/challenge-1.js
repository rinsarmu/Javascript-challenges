const data = [17, 21, 23];

const foreCastedTemp = function (temps) {
  let data = [];
  for (let i = 0; i < temps.length; i++) {
    data.push(`...${temps[i]} in ${i + 1} day`);
  }
  return data.toString();
};
console.log(foreCastedTemp(data));
