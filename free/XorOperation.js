/**
 * Given an integer n and an integer start, define an array nums where nums[i] = start + 2*i and n == nums.length
 * Return the bitwise XOR of all elements in nums.
 * 
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
	let nums = [];

	for (let i = 0; i < n; i++) {
		nums.push(start + 2 * i);
	}

	console.log(nums);

	let xor = nums[0];

	for (let i = 1; i < nums.length; i++) {
		xor ^= nums[i];
	}

	return xor;
};
