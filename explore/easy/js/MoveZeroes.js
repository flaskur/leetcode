/**
 * Given an array of numbers, move all the 0's to the end of the array while maintaining the relative order. You can only do this in place.
 * First train of thought is just swapping with the end index when we detect a zero. That has problems  though if we are swapping with another zero.
 * You could iterate through and set all the zeros to 1000 or something, then do a merge sort. Iterate again and set back to 0.
 * You could do a two pointers method and swap with the first instance of something that is not a zero. Though you would need to know how many swaps in total though so do an initial iteration through nums and count the amount of 0's.
 * The solution was to think about it more in terms of the nonzero values instead of the occurrences of zeros.
 * 
 * @param {number[]} nums
 * @return {void} only the value of nums.
 */
const moveZeroes = function(nums) {
	// Current implementation fails the time complexity case because it's O(n^2).
	// for (let i = 0; i < nums.length - 1; i++) {
	// 	// The goal here is to find the next occurrence of a nonzero if we find a zero here and swap with that.
	// 	let j = i + 1;
	// 	if (nums[i] === 0) {
	// 		console.log(`Current is ${nums}`);

	// 		// What if we never find the nonzero value?
	// 		while (nums[j] === 0 && j < nums.length) {
	// 			j += 1;
	// 		}

	// 		if (j === nums.length) {
	// 			// We never found a nonzero value, so return because the end is all zeroes.
	// 			return;
	// 		}

	// 		// Otherwise we swap.
	// 		[ nums[i], nums[j] ] = [ nums[j], nums[i] ];
	// 		console.log(`After swap is ${nums}`);
	// 	}
	// }

	// A better way is to detect the nonzero values instead and keep track of the position index.
	let position = 0;
	nums.forEach((num) => {
		if (num !== 0) {
			nums[position] = num;
			position += 1;
		}
	});

	// Fill the rest with zeroes. Fill is exclusive end index.
	nums.fill(0, position, nums.length);
};
