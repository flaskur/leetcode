/**
 * The hamming distance between two integers is the number of positions in which the bits are different. Looks like a bitwise operation. Use xor leaves 1 for the cases that are different which we care about.
 * We assume that both integers are unsigned numbers. The hamming distance between 1 and 4 compares 001 and 100. The number of different ones is 2 which is done on a xor operation.
 * The plan is to use a while loop and continue to logical right shift the xored value until it is zero. However the counter should only trigger if the last digit is nonzero. How do I access the bitwise digits? You AND with 1 that's how.
 * 
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
	let xored = x ^ y;
	let hamDist = 0;

	while (xored !== 0) {
		if ((xored & 1) === 1) hamDist += 1;

		// Is >> logical or arithmetic?
		xored = xored >>> 1;
	}

	return hamDist;
};
