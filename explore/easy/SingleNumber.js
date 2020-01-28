/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	// Use a JS object and keep track of count. Same logic as the duplicate.
	let numCount = {};

	// for each iteration doesn't do well with return statements.
	nums.forEach((num) => {
		if (numCount[num] === undefined) {
			numCount[num] = 1;
		} else numCount[num] += 1;
	});

	// Iterate through the count object and check key that has count of 1.
	for (let num in numCount) {
		if (numCount[num] === 1) return num;
	}

	return -1;
};
