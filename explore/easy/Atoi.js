/**
 * Implement the atoi which converts a string into an integer. The exact process discards as many whitespace characters as necesssary until first non whitespace is found. Then optional + or - followed by numerics. There can be characters after the numbers but it should be ignored. Return 0 on failure.
 * Way too many test cases to handle.
 * If you try to convert Number(), then on failure you get NaN which can use isNaN
 */
const myAtoi = function(str) {
	let sample = str.trim();
	// Handles empty string of only whitespace or nothing.
	if (sample.length === 0) return 0;

	// Handle - case.
	if (sample[0] === '-' && (isNaN(Number(sample[1])) || sample[1] === ' ')) return 0;
	// Handle + case.
	if (sample[0] === '+' && (isNaN(Number(sample[1])) || sample[1] === ' ')) return 0;

	// Handle case where the initial character is not + or - or a number.
	if (sample[0] !== '-' && sample[0] !== '+' && isNaN(Number(sample[0]))) return 0;

	// At this point it means the first value must be (-/+/empty) followed by a number.
	sample = sample.split('');

	let sign = 0;
	if (sample[0] === '-' || sample[0] === '+') {
		sign = sample.shift();
	}

	let numString = '';

	let addZero = false;
	for (let char of sample) {
		if (char === '0' && !addZero) continue;
		if (!isNaN(Number(char)) && char !== ' ') {
			numString += char;
			addZero = true;
		} else break;
	}

	// Overflow Handling
	if (numString.length > 10 && sign === '-') {
		return -1 * Math.pow(2, 31);
	} else if (numString.length > 10 && sign === '+') {
		return Math.pow(2, 31) - 1;
	}

	if (sign === '-' && Number(numString) > Math.pow(2, 31)) return -1 * Math.pow(2, 31);
	if (sign === '+' && Number(numString) > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
	if (sign === 0 && Number(numString) > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

	return sign === '-' ? -1 * Number(numString) : Number(numString);
};
