/**
 * Alice and Bob both have candy bars of various different sizes. They want to exchange one candy bar each so that they have the same amount after. Return a 2 element array that correspond to size that must be exchanged.
 * I can calculate the mean first by finding the sum of both and dividing by 2. Then you know the difference from mean for both cases which is the target sum. Then do a double for loop to find a valid pair.
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]}
 */
const fairCandySwap = (A, B) => {
	let totalA = A.reduce((total, current) => {
		return total + current;
	}, 0);

	let totalB = B.reduce((total, current) => {
		return total + current;
	}, 0);

	let mid = (totalA + totalB) / 2;

	// find a pair that makes both totals even
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			if (B[j] - A[i] + totalA === mid) {
				return [A[i], B[j]];
			}
		}
	}
};