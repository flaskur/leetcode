/**
 * Given an integer array nums, find the contiguous subarray that has the largest sum and return its sum.
 * Must be done in O(n).
 * Two pointers method, but that would be O(n^2)
 * @param {number[]} nums
 * @return {number} largest sum
 */
const maxSubArray = function(nums) {
	let prev = 0;
	let max = -Number.MIN_VALUE;

	for (let i = 0; i < nums.length; i++) {
		prev = Math.max(prev + nums[i], nums[i]);
		max = Math.max(max, prev);
	}

	return max;
};

// On each iteration, the prev is set to the cumulative value if it is greater than the current total.

const maxSubArray = function(nums) {
	let maxSum = nums[0];
	let value = 0;

	nums.forEach((num) => {
		maxSum = Math.max(maxSum, (value += num));

		// Set ot 0 relates to logic of starting at that index.
		value = Math.max(value, 0);
	});

	return maxSum;
};
