/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	// Convert nums to a set and compare the sizes.
	let numsSet = new Set(nums);

	// Will contain a duplicate if nums.size !== numsSet.size
	console.log(nums.length, numsSet.size);
	return nums.length !== numsSet.size;
};
