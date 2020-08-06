/**
 * Given a postive integer num, output its complement number. The complement is flipping the binary representation.
 * I think JS has ~ built in, but it assumes the front bits are 0 on whatever limit number type it I think 52 bits?
 * ~ will work but only if you consider the last x bits, meaning you need a bit mask of x bits using a shift and then & to get the real value.
 * You can find the bitmask length by right shifting num until it becomes 0.
 * 
 * @param {number} num
 * @return {number}
 */
// One's complement found by using built in ~ operator and applying a bitmask to ignore higher order bits.
const findComplement = (num) => {
	let bitmaskLength = 0;
	let numCopy = num;

	// Logical, not arithmetic, because no sign (not 2's complement)
	while (numCopy !== 0) {
		numCopy = numCopy >> 1;
		bitmaskLength++;
	}

	console.log(bitmaskLength);

	if (bitmaskLength === 0) {
		console.log('0 case?');
	}

	let bitmask = 1;
	for (let i = 1; i < bitmaskLength; i++) {
		bitmask = bitmask << 1;
		bitmask += 1;
	}
	console.log(bitmask.toString(2));

	return ~num & bitmask;
};
