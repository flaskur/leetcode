/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * The simple solution would be to first find the factorial result, then do a modulus division and check if it's zero.
 * Problem is that you can't represent the factorial with a pure number because of the numerical limits of the system. Normally you assume a 32 bit system so largest signed number is 2^31 - 1. Something like 30! exceeds this so a pure calculation doesn't work. I was thinking of storing it as a string or array, but that still requires a calculation to even know what to send. 
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

// Different discussion solution that uses multiples of 5.
const trailingZeroes = function(n) {
	let count = 0;
	while (n > 0) {
		count += Math.floor(n / 5);
		n /= 5;
	}
	return count;
};

// This approach works because the count of trailing zeros is determined by 10's and you consider the number of multiples of 5's.
