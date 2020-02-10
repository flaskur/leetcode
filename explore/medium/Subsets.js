/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set). The solution set must not contain duplicate subsets.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
	let result = [];
	helper(result, [], nums, 0);
	return result;
};

const helper = function(result, current, nums, start) {
	// Base case is all the time? The only thing is that order must be maintained but we don't know if we remove the current or not, so recursively do both scenarios. Either way end case is pushing to result regardless.
	result.push(current);

	for (let i = start; i < nums.length; i++) {
		current.push(nums[i]);
		// Really important that you pass a new value of current, NOT THE SAME REFERENCE!
		helper(result, [ ...current ], nums, i + 1);
		current.pop();
	}
};

// For subsets you should keep track of the starting index. Otherwise it's similar to the permutations but the base cases is always push to result array.
