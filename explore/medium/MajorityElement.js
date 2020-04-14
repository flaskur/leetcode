/**
 * Given an array of size n, find majority element which appears more then n/2 times. A majority element always exists.
 * I would use a count hash and iterate through the nums array, but I would check intermittently.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
	let countHash = {};

	nums.forEach((num) => {
		countHash[num] ? countHash[num]++ : (countHash[num] = 1);
	});

	for (let key in countHash) {
		if (countHash[key] > nums.length / 2) return key;
	}
};
