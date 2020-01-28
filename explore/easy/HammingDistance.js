/**
 * Hamming distance is the number of positions where the bits differ.
 * I would do a XOR operation since all the like terms will become 0. Then iterate through each bit and check if the value is 1 using & 1.
 * 
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
	let num = x ^ y;
	let oneCount = 0;
	while (num !== 0) {
		if ((num & 1) === 1) oneCount += 1;
		num = num >>> 1;
	}

	return oneCount;
};
