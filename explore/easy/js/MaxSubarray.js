/**
 * Given an integer array nums, find the contiguous subarray that has the largest sum and return its sum.
 * Definitely not the obvious approach of using a i and j pointer and finding max for each possible combination. That would be O(n^2). How would you break this down?
 * 
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
	let dp = [];
	dp[0] = nums[0];
	let max = dp[0];

	for (let i = 1; i < nums.length; i++) {
		// If the sum before it is not even positive, shouldn't use that as the start of the subarray.
		if (dp[i - 1] > 0) {
			dp[i] = nums[i] + dp[i - 1];
		} else dp[i] = nums[i];

		max = Math.max(max, dp[i]);
	}

	return max;
};

// How does this iteration work with [-2,1,-3,4,-1,2,1,-5,4]?
// Max is set as -2, the dp for each particular index is additive but only if it's positive. The result for index i is built from the previous one. For the start of 4, -1, 2, 1... dp[i] starts at 4 since the last one's sum is negative or 0 so we reset as the current value if it would be a sum. For -1 the dp[i-1] is still > 0 so dp[i] is now -1 + 4 = 3 which is still positive but doesn't increase max.
// This is a broken down into subproblems because the result of dp[i - 1] holds the sum from all the previous ones. So we don't need multiple passes because we have an array to hold the memory for the current sum instance.
// The largest value in the particular instance is just itself. Would it be better to check if nums[i] > dp[i - 1] instead of 0 check? No because if negative we don't want to add a negative since we care about sum.
