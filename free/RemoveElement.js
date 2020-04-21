/**
 * Given an array nums and a value val, remove all instances of that value in place and return the new length. Do not allocate extra space for another array. The order of the elements can be changed.
 * One niave approach is to iterate through the array and keep at pointer at the end. Whenever you encounter the value, you should swap with the pointer at the end. The length returned should decrement by 1.
 * Well... you would actually still have to check the index again because the result could be the value as well, but you move the end pointer.
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	let returnLength = nums.length;
	let endPointer = nums.length - 1;

	let i = 0;
	while (i <= endPointer) {
		if (nums[endPointer] === val) {
			returnLength -= 1;
			endPointer -= 1;
			continue;
		} else if (nums[i] === val) {
			// value matches, swap with end pointer position
			[ nums[i], nums[endPointer] ] = [ nums[endPointer], nums[i] ];
			endPointer -= 1;
			returnLength -= 1;
			continue;
		}

		i += 1;
	}

	return returnLength;
};

// Solution is to use an endpointer and continue to move back an index if the value checks. It's the window approach with two pointers at the front and end. Edge case is all the same val in the array, so you need to check i <= endPointer as well.
