/**
 * Recursive function which accepts a base and exponent. It should return teh power of the base to the exponent. Essentially doing the same thing as Math.pow().
 * @param {number} base is the base number you raise power to.
 * @param {number} exp is the exponential power
 * @return {number} is the result after raising base to power.
 */
const power = function(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
};

console.log(power(4,3));