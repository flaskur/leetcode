/**
 * Given an array of nums, find the running sum.
 * runningSum[i] = sum(nums[0] ... nums[i])
 * It looks like you need to keep a counter to keep track of the value of each index and sum. This should probably just be one iteration and map through the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
// This approach maps through and assigns to new array using a current sum variable.
const runningSum = (nums) => {
	let currentSum = 0;

	let newNums = nums.map((num) => {
		let newValue = num + currentSum;
		currentSum += num;
		return newValue;
	});

	return newNums;
};

// This approach actively adds the previous indexed value, which works because it's a progressive sum each time.
const runningSum = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}

	return nums;
};
