/**
 * Given a list of nums that are run length encoded, return the decompressed list.
 * Basically nums[i] refers to freq and nums[i+1] refers to the value, where i is even index of nums.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
	let arr = [];

	for (let i = 0; i < nums.length - 1; i += 2) {
		let freq = nums[i];
		let val = nums[i + 1];

		for (let i = 0; i < freq; i++) {
			arr.push(val);
		}
	}

	return arr;
};
