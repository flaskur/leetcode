/**
 * Given an integer, write a function to check if it's a power of three.
 * 
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
	if (n === 0) return false;
	if (n === 1) return true;

	for (let i = 1; Math.pow(3, i) <= n; i++) {
		if (Math.pow(3, i) === n) return true;
	}

	return false;
};
