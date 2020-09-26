/**
 * Given an array of integers nums, start with an initial positive value. Calculate step by step the sum of startValue such that the step by step sum is never less than 1.
 * Idea is to iterate through the num array and find the minimum sum. The min sum for the example was -4 so 5 worked.
 * If the min is a positive number then just leave it at 1.
 */
const minStartValue = (nums: number[]): number => {
	// edge case
	if (nums.length === 0) {
		return 1;
	}

	// two variable to keep track of current sum and min value reached
	let sum = 0;
	let min = Infinity;

	// iterate and update values
	nums.forEach((num) => {
		sum += num;

		if (sum < min) {
			min = sum;
		}
	});

	// if the nums in the array were all non negative, return 1 for first positive
	if (min >= 0) {
		return 1;
	}

	// otherwise return the abs value + 1 which is value need to get to 1
	return 1 - min;
};
