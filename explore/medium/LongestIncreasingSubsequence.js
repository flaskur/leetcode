/**
 * Given an unsorted array of integers, find the length of the longest increasing subsequence. Use dynamic programming techniques.
 * So I guess the most basic way to solve this is by doing two for loops. Basically on pointer is i and another is i + 1 until it is no longer increasing. Subsequence means that you can skip. You should keep going until the end.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
	let longestLength = 0;

	for (let i = 0; i < nums.length; i++) {
		let counter = 1;
		let current = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			let next = nums[j];
			if (next > current) {
				// increasing, keep going.
				counter += 1;
				current = next;
			}
		}

		longestLength = Math.max(longestLength, counter);
	}

	return longestLength;
};
// Flawed brute force approach doesn't even try dynamic programming.

// Recursive solution times out.
const lengthOfLIS = function(nums) {
	return helper(nums, -Infinity, 0);
};

const helper = function(nums, previous, position) {
	if (position === nums.length) return 0;

	let taken = 0;

	if (nums[position] > previous) {
		taken = 1 + helper(nums, nums[position], position + 1);
	}

	let notTaken = helper(nums, previous, position + 1);

	return Math.max(taken, notTaken);
};

const lengthOfLIS = function(nums) {
	let memo = [];
	for (let i = 0; i < nums.length; i++) {
		memo.push(new Array(nums.length).fill(0));
	}

	memo.forEach((mem) => {
		console.log(mem);
	});

	helper(nums, -1, 0, memo);
};

// recursive memo, error in implementation
const helper = function(nums, prevIndex, position, memo) {
	if (position === nums.length) return 0;

	if (memo[prevIndex + 1][position] > 0) return memo[prevIndex + 1][position];

	let taken = 0;

	if (prevIndex < 0 || nums[position] > nums[prevIndex]) {
		taken = 1 + lengthOfLIS(nums, position, position + 1, memo);
	}

	let notTaken = lengthOfLIS(nums, prevIndex, position + 1, memo);
	memo[prevIndex + 1][position] = Math.max(taken, notTaken);

	return memo[prevIndex + 1][position];
};

// DP solution
const lengthOfLIS = function(nums) {
	if (nums.length === 0) return 0;

	let dp = new Array(nums.length).fill(1);

	for (let i = 1; i < dp.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], 1 + dp[j]);
			}
		}
	}

	console.log(dp);
	return Math.max(...dp);
};
