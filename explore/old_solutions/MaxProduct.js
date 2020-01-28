/**
 * Given an integer array nums, find the contiguous subarray which has the largest product. Same logic as max subarray?
 * @param {number[]} nums
 * @return {number} max product
 */
const maxProduct = function(nums) {
	if (!nums.length) return 0;
	max = -Infinity;
	value = 1;

	for (let i = 0; i < nums.length; i++) {
		value *= nums[i];
		max = Math.max(max, value);

		value = Math.max(1, value);

		console.log(max, value);
	}

	return max;
};

// 1,
