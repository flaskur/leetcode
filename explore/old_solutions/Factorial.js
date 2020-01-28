/**
 * Recursive function which finds the factorial of a given number.
 * @param {number} num is the number factorial
 * @return {number} is the result after factorial
 * 
 * This cannot handle a negative number.
 */
const factorial = function(num) {
  // Have to account for 0 and 1. The factorial of 0 is equal to 1.
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};