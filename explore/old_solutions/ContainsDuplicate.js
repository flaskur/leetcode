/**
 * Given an array of integers, find if the array contains any duplicates.
 * The brute force way would be to do a double for loop. The shortcut way would be to convert the array into a set which doesn't allow duplicates and then compare the lengths.
 */
const containsDuplicate = function(nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] == nums[j]) return true;
		}
	}

	return false;
};

const containsDuplicate = function(nums) {
	if (nums.length <= 1) return false;

	let someSet = new Set(nums);

	console.log(someSet.size, nums.length);

	return someSet.size != nums.length;
};

// SET USES SIZE INSTEAD OF LENGTH.
