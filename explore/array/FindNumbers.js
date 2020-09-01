/**
 * Given an array of integers, return how many contain an even number of digits.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
	let evenCount = 0;
	nums.forEach((num) => {
		if (num.toString().length % 2 === 0) evenCount += 1;
	});

	return evenCount;
};
