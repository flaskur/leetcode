/**
 * Given an unsorted array of integers, find the length fo the longest increasing subsequence.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
	// edge case
	if (nums.length <= 1) {
		return nums.length;
	}

	maxLength = -Infinity;

	const helper = (current, index, max) => {
		if (index >= nums.length) {
			maxLength = Math.max(maxLength, current.length);
		}

		// you haven't checked index yet
		for (let i = index; i < nums.length; i++) {
			// only use candidate if strictly increasing
			if (nums[i] > max) {
				current.push(nums[i]);
				helper(current, i + 1, nums[i]);
				current.pop();
			}
		}

		maxLength = Math.max(maxLength, current.length);
	};

	helper([], 0, -Infinity);

	return maxLength;
};

// backtracking times out
