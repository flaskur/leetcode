/**
 * Given two number arrays called nums and index, create the target array following a couple rules.
 * From left to right, insert at index index[i] the value nums[i] into target array.
 * Seem like you select nums[i] and place into index[i] for the target arr, which means it might be useful to fill the target arr with 0's already.
 * 
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
	let target = [];

	for (let i = 0; i < nums.length; i++) {
		target.splice(index[i], 0, nums[i]);
	}

	return target;
};
