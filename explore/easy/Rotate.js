/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	// Copy by value
	let numsCopy = [ ...nums ];

	for (let i = 0; i < nums.length; i++) {
		nums[(i + k) % nums.length] = numsCopy[i];
		console.log('Value at index', (i + k) % nums.length, 'is now', numsCopy[i]);
	}
};
