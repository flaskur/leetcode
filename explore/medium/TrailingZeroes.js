/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * The simple solution would be to first find the factorial result, then do a modulus division and check if it's zero.
 * 
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
	let factorial = helper(n);
	console.log(`factorial is ${factorial}`);

	let counter = 0;
	while (factorial != 0) {
		lastDigit = factorial % 10;
		if (lastDigit === 0) counter += 1;
		else break;
		factorial = Math.floor(factorial / 10);
		console.log(`last ${lastDigit} fact ${factorial}`);
	}

	return counter;
};

const helper = function(n) {
	if (n <= 1) return n;
	else return n * helper(n - 1);
};
