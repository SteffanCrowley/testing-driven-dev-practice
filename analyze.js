function analyze(array) {
  if (array.length === 0) {
    return null;
  }
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg = avg + array[i];
  }
  avg = avg / array.length;

  let lng = array.length;
  let minA = Math.min(...array);
  let maxA = Math.max(...array);

  return {
    average: avg,
    min: minA,
    max: maxA,
    length: lng,
  };
}

module.exports = analyze;
