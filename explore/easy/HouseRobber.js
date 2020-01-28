/**
 * Avoid robbing two adjacent houses because police will be alerted.
 * The approach to this is understanding that the choice of robbing is max(rob(i - 2) + current, rob(i - 1)) where rob(i) stands for max profit possible at this point.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
	// Why does the memo length need to be nums.length + 1?
	let memo = new Array(nums.length + 1).fill(-1);
	return helper(nums, nums.length - 1, memo);
};

const helper = function(nums, i, memo) {
	// Meaning no profit possible for nonexistent index.
	if (i < 0) return 0;
	if (memo[i] >= 0) return memo[i];

	let result = Math.max(helper(nums, i - 2, memo) + nums[i], helper(nums, i - 1, memo));
	memo[i] = result;
	return result;
};

// Important to understand the approach of all dynamic programming problems. First understand the recursive case. In the case, the choice of robbing a particular house means that the profit from robbing the house + skipping the one before it outweight the profit from skipping the current and robbing the one before it. That by itself is pretty hard. But if you do that, you can memoize it using an array as a cache. The memoization step is necessary for this case because without it, the time limit is exceeded. Turning the recursive solution into an iterative solution is optimal.
// Top Down recursive vs Bottom Up iterative.

// Iterative approach.
const rob = function(nums) {
	if (nums.length === 0) return 0;
	let memo = [];
	memo[0] = 0;
	memo[1] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		let val = nums[i];
		memo[i + 1] = Math.max(memo[i], memo[i - 1] + val);
	}
	return memo[nums.length];
};
