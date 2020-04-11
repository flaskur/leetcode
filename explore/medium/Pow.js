/**
 * Implement pow(x, n) that calculates x raised to power of n.
 * I think it's implied that you can't use Math.pow(). Do this power function is just adding n, x times which means the loop will be x iterations which has time complexity of O(x), pretty terrible. If x is negative then you just divide. A complication that can occur is the number limits for signed integers as -2^31 to 2^31 - 1. Try basic solution first.
 * 
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
const myPow = function(x, n) {
	if (n === 0) return 1;
	if (x === 0) return 0;

	let isPowPositive = n > 0 ? true : false;

	let num = x;
	let sum = 1;

	if (isPowPositive) {
		for (let i = 0; i < n; i++) {
			sum *= num;
		}
	} else if (!isPowPositive) {
		for (let j = 0; j < Math.abs(n); j++) {
			sum *= 1.0 / num;
		}
	}

	return sum;
};

const myPow = function(x, n) {
	if (n === 0) return 1;
	if (n < 0) {
		n = -n;
		x = 1 / x;
	}

	let sum = 1;
	while (n > 0) {
		if (n & 1) sum *= x;
		x *= x;
		n >>= 1;
	}

	return sum;
};

const myPow = (x, n) => {
	const inner = (x, n) => {
		if (n === 0) {
			return 1;
		}
		if (n === 1) {
			return x;
		}

		let result = myPow(x, n >> 1);

		if (n % 2 === 0) {
			return result * result;
		} else {
			return result * result * x;
		}
	};

	const result = inner(x, Math.abs(n));

	if (result >= -1 * Math.pow(2, 31) && result <= Math.pow(2, 31) - 1) {
		return n < 0 ? 1 / result : result;
	}

	return 0;
};
