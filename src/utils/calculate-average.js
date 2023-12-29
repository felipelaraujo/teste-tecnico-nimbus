/**
 * Calculate and return the average of a given array of numbers.
 * @param {number[]} values - An array of numbers.
 */
function calculateAverage(values) {
  const total = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return Math.round(total / values.length);
}

module.exports = calculateAverage;
