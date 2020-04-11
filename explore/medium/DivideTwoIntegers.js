/**
 * Given two integers, dividend and divisor, divide the two integers without using multiplication, division, or modulo. You should floor the result to truncate.
 * This is most likely a bitwise operation problem. 
 * 
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
	if (dividend === -Math.pow(2, 31)) return Math.pow(2, 31) - 1;

	if (dividend === divisor) return 1;
	else if (dividend === -divisor) return -1;

	let dividendPos = dividend > 0 ? 1 : -1;
	let divisorPos = divisor > 0 ? 1 : -1;

	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);

	if (dividend < divisor) return 0;

	let quotient = 0;

	while (dividend >= divisor) {
		dividend -= divisor;
		quotient += 1;
	}

	return dividendPos * divisorPos * quotient;
};

var divide = function(dividend, divisor) {
	if (divisor === 0) return 0;
	if (dividend === 0) return 0;
	if (dividend === -2147483648 && divisor === -1) return 2147483647;

	var isPositive = true;
	if (dividend > 0 !== divisor > 0) isPositive = false;

	divisor = Math.abs(divisor);
	dividend = Math.abs(dividend);

	var count = 1,
		result = 0,
		base = divisor;

	while (dividend >= divisor) {
		count = 1;
		base = divisor;
		while (base <= dividend >> 1) {
			base = base << 1;
			count = count << 1;
		}
		result += count;
		dividend -= base;
	}

	if (!isPositive) result = -result;
	return result;
};
