/**
 * Balanced strings have equal amount of L and R characters. Given a balanced string, split it into the maximum amount of balanced strings and return the amount.
 * I guess the approach is to immediately reset and add to counter when the L and R counts are the same.
 * 
 * @param {string} s
 * @param {number}
 */
const balancedStringSplit = (s) => {
	let maxSplit = 0;

	let leftCount = 0;
	let rightCount = 0;

	for (let char of s) {
		if (char === 'L') leftCount++;
		if (char === 'R') rightCount++;

		if (leftCount === rightCount) {
			maxSplit++;
			leftCount = 0;
			rightCount = 0;
		}
	}

	return maxSplit;
};
