/**
 * Given an array nums and a value, remove all instances of that value in place and return the new length. The remove elements should be placed in the back. The order of the front ones don't matter.
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	if (nums.length === 1) {
		if (nums[0] === val) return 0;
		else return 1;
	}

	let finalLength = nums.length;

	let endPointer = nums.length - 1; // must make sure end isn't already val each time actually...

	for (let i = 0; i < endPointer; i++) {
		while (nums[endPointer] === val) {
			endPointer -= 1;
			finalLength -= 1;

			if (finalLength === 0) return 0;
		}

		if (nums[i] === val) {
			[ nums[i], nums[endPointer] ] = [ nums[endPointer], nums[i] ];
			endPointer -= 1;
			finalLength -= 1;
		}
	}

	return finalLength;
};
