const maxDiff = (arr) => {
  let max = 0;
  arr.forEach(value => {
    if (value > max) max = value;
  });
  let min = max;
  arr.forEach(value => {
    if (value < min) min = value;
  });
  return max-min;
};


