/**
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 * Effective way is to convert to string to access digits, calculate separately, then solve.
 * Alternatively, you could get each digit using mod 10 to get last digit and div 10 to get rest. 
 * 
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
	let product = 1;
	let sum = 0;

	for (let digit of n.toString()) {
		product *= parseInt(digit, 10);
		sum += parseInt(digit, 10);
	}

	return product - sum;
};

// Without string conversion...
const subtractProductAndSum = (n) => {
	let product = 1;
	let sum = 0;

	while (n > 0) {
		// n % 10 is last digit
		product *= n % 10;
		sum += n % 10;

		// Updates n to exclude last digit.
		n = Math.floor(n / 10);
	}

	return product - sum;
};
