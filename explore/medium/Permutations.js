/**
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
	let result = [];

	let helper = function(current, remaining) {
		if (remaining.length <= 0) result.push(current.slice());
		else {
			for (let i = 0; i < remaining.length; i++) {
				current.push(remaining[i]);
				helper(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1)));
				current.pop();
			}
		}
	};

	helper([], nums);
	return result;
};
