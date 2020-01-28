// // Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// // So use two for loops right? Index i and j and traverse through each.
// // Assume that each input has only one solution, so we don't have to check for multiple.
// // You cannot use the same element twice.
// // We get an input number and array which is an object technically.
// // Loop through the indices of the array and find pairs. Not sure if forEach would help. Though I though forEach has implicit index parameter.
// // Should solve edge case where array size is very limited.

// // This works, but this is brute force method. Keep in mind that we go from nums.length - 1 for first index and nums.length for second index because we are using a less than operator. Made the mistake of doing -2 and -1 instead.
// let twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

/**
 * Given an array of integers, return the indices of two numbers such that they add up to a given target number.
 * So the brute force method is obviously just using a double for loop with pointers i and i + 1.
 * We know there is only one target value though. I think this is sliding window problem. We have pointers on both sides.
 * @param {number[]} nums is the array of integers.
 * @param {number} target is the sum of two integers in the array we are looking for.
 * @return {number[]} is an array which contains the two indices of the target pieces.
 */
const twoSum = function(nums, target) {
	// First doing the brute force method of a double for loop with one pointer.

	// We don't need storage because we will just be doing a direct return.

	// Remember that the i pointer does not need to go to last element because it is being paired with i + 1.
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			// We need the j pointer to check every single pair.
			if (nums[i] + nums[j] === target) return [ i, j ];
		}
	}
};
// The solution works, but the time complexity is O(n^2) from the double for loop.

const twoSum = function(nums, target) {
	// So this time we just pointers at the end and decide on which to increment or decrement based off the current target value.
	// If the current sum is less than the target, the i pointer needs to increase, but if the current target is greater than the target, the j pointer needs to decrease.

	// A while loop would make more sense since we don't know which pointer moves.
	let i = 0;
	let j = nums.length - 1;

	// I was assuming sorted, but it doesn't work if it's not sorted.
	numsCopy = nums.map((value) => value);
	sortedNums = numsCopy.sort(function(a, b) {
		return a - b;
	});
	console.log(`sorted nums is ${sortedNums}`);

	console.log(nums);
	console.log(numsCopy);

	console.log(nums.indexOf(2));

	while (i < j) {
		if (sortedNums[i] + sortedNums[j] === target) {
			console.log(`first is ${nums.indexOf(sortedNums[i])} second is ${nums.indexOf(sortedNums[j])}`);
			// handles the duplicate case I think. Nope doesn't work.
			if (sortedNums[i] === sortedNums[j])
				return [ nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[i]) ];
			return [ nums.indexOf(sortedNums[i]), nums.indexOf(sortedNums[j]) ];
		} else if (sortedNums[i] + sortedNums[j] < target) {
			// We know that the value is too small so the i pointer must increase.
			i++;
		} else if (sortedNums[i] + sortedNums[j] > target) {
			// We know that the valae is too large so the j pointer must decrease.
			j--;
		} else return null; // Should never happen.
	}
};
// So I kinda fucked up in the beginning because I assume sorted. Also some complication with finding index if numbers are duplicate. However, the end result has a slighty (20ms) better time complexity because of the way the pointers work.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} contains the index of the two nums
 */
const twoSum = (nums, target) => {
	// Create a hash so that you can refer to it again.
	let hash = {};
	let sumArray = [];

	for (let i = 0; i < nums.length; i++) {
		let numToFind = target - nums[i];

		if (hash[numToFind] != undefined) {
			sumArray.push(hash[numToFind]);
			sumArray.push(i);

			return sumArray;
		}

		hash[nums[i]] = i;
	}

	console.log('Something happened');
};
