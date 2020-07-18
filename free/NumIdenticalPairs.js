/**
 * Given an array of integers, return the number of good pairs.
 * A good pair (i, j) if nums[i] == nums[j] and i < j.
 * Double for loop basically with two pointers.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
	let identicalCount = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) identicalCount++;
		}
	}

	return identicalCount;
};
