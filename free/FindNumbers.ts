/**
 * Given an array of integers nums, return how many of them contain an even number of digits.
 * Plan is to iterate through each and determine digit count using string conversion, then length property.
 */
const findNumbers = (nums: number[]): number => {
	// edge case
	if (!nums.length) return 0;

	// counter
	let evens = 0;

	// iterate through each num and add to evens count depending on length
	nums.forEach((num) => {
		if (num.toString().length % 2 == 0) {
			evens += 1;
		}
	});

	return evens;
};
