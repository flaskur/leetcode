/**
 * Reverse the bits of a given 32 bit unsigned integer. Reversing means actually moving the bit, not just flipping 0 and 1 in place. Kinda like a rotation but not really.
 * Strategy here is to probably create an empty array or string and populate it with the digits. Then do a parseInt() on the string we have, also giving binary radix.
 * 
 * @param {number} n
 * @return {number}
 */
const reverseBits = function(n) {
	let reverse = '';
	for (let i = 0; i < 32; i++) {
		reverse += (n & 1).toString();
		n = n >>> 1;
	}
	return parseInt(reverse, 2);
};
