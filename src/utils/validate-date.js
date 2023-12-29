/**
 * Check if the given date is in YYYY-MM-DD format.
 * @param {string} date - The date.
 */
function isValidDate(date) {
  const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  return regex.test(date);
}

module.exports = isValidDate;
