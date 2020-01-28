/**
 * Recursive function that accepts a number and adds up all the numbers from 0 to the number passed.
 * @param {number} num is the max limit that we range until.
 * @return {number} is the sum of the range from 0 to num inclusive.
 */
const recursiveRange = function(num) {
  if (num <= 1) return num;
  return num + recursiveRange(num - 1);
};