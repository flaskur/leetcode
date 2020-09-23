/**
 * Given a positive integer num consisting of only digits 6 and 9, return the maximum number you can get by changing at most one digit.
 * I don't see why you would ever want to change a 9 into a 6 because it just gets less than the original. Idea is to iterate through each digit and test if candidate number is greater than the ones already checked.
 * Wouldn't the first encounter of a changed 9 from left to right imply the greatest?
 */
const maximum69Number = (num: number): number => {
	// edge case
	if (num.toString().length === 0) {
		return -1;
	}

	// assign current max as just the number itself
	let max = num;
	let digits = num.toString();

	for (let i = 0; i < digits.length; i++) {
		// assume we replace current index with 9 as a candidate
		let candidate: number | string = digits.slice(0, i) + '9' + digits.slice(i + 1, digits.length);
		candidate = parseInt(candidate, 10);

		if (candidate > max) {
			max = candidate;
		}

		// if the placement was originally a 6, then moving from left to right, this update must be the max
		if (digits[i] == '6') return max;
	}

	return max;
};
