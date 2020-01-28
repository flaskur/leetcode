/**
 * Given a non negative integer call num, for every number i in the range 0 to num inclusive, find the number of 1's int thier binary representation and return as an array.
 */
const countBits = function(num) {
	let onesArray = new Array(num + 1);
	let onesCount = 0;

	for (let i = 0; i <= num; i++) {
		// i is the literal value that we need to find the ones count for.
		let place = i;

		while (place != 0) {
			onesCount += place & 1;
			place = place >>> 1;
			console.log(onesCount, place);
		}

		onesArray[i] = onesCount;
		onesCount = 0;
		console.log('Added and reset');
	}

	return onesArray;
};
