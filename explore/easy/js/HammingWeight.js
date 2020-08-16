/**
 * Takes an unsigned integer and returns the number of 1 bits it has. Keep in mind that in JS, numbers are represented as signed integers, but you can model it as unsigned pretty easily.
 * 
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
	let num = n;
	let oneCount = 0;
	while (num != 0) {
		if (num & (1 === 1)) oneCount += 1;
		// Logical shift by one bit.
		num = num >>> 1;
	}

	return oneCount;
};
