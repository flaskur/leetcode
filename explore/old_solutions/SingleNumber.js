/**
 * So given a numbers array that is non empty, we need to find the element that appears twice except for one. We need to find the exact one that doesn't hav ea duplicate.
 * The algorithm should be in linear time and no extra memory.
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
	// Okay so the brute force way to do this is by having an object that stores all the values and keeps track of the count. That would take extra memory though.
	// If we are checking for a single one, we can use a flag and trigger it if it every occurs, but that doesn't handle every case.

	// Just try the object implementation first.

	const numCount = new Object();

	nums.forEach((number) => {
		if (numCount[number] === undefined) {
			numCount[number] = 1;
		} else numCount[number] += 1;
	});

	for (numKey in numCount) {
		if (numCount[numKey] === 2) return numKey;
	}

	// This solution is O(n) but it requires the extra memory which kinda fails the task.
	// I could do a O(n^2) implementation without memory but that sucks for time complexity.
};

// Here is the actual answer. You are suppose to use the XOR operator which cancels duplicates out.

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}
