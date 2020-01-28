/**
 * Take an unsigned integer and return the number of 1 bits it has.
 * @param {number} 
 * @return {number} number of 1's
 */
const hammingWeight = function(n) {
	let ones = 0;

	while (n != 0) {
		ones += n & 1;

		// Unsiged right shift. Arithmetic signed, logical unsigned.
		n = n >>> 1;
	}

	return ones;
};

// So basically n continues to check until 1 is nothing.
