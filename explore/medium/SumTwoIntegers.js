/**
 * Calculate the sum of two integers a and b without + or -
 * Handling negatives might be weird. This is probably bitwise operations. 0010 + 0011 = 0101. On carry, you do a xor operation.
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
	if (a === 0) return b;
	if (b === 0) return a;

	while (b !== 0) {
		let carry = a & b;
		a = a ^ b;
		b = carry << 1;
	}

	return a;
};
