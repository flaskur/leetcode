/**
 * Implement int sqrt(x) where x is non negative integer. The return type is integer so truncate/floor the decimals.
 * The square root should be the number times itself equal to x. You do this by hand by knowing the square root ranges, seeing if it's in between, then taking the former which should be floored version. The problem with this is that it's not efficient for large numbers because essentially I am counting up to it until failure case.
 * 
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
	if (x === 0) return 0;

	let i = 1;
	while (Math.pow(i, 2) <= x) {
		i += 1;
	}

	return i - 1;
};
