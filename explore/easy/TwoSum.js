/**
 * Given an array of integers, return the indices of the two numbers that add up to the target.
 * Better solution is by using two pointers that meet each other in the middle based on progression of the sorted array. This doesn't work if it's not sorted so assume merge sort complexity of O(logn) even though the standard library one has a worse complexity. The return requires the indices so you need to make a hash map of the indices in the unsorted array first. The tricky part are the instances of duplicates and how you need the property to be an array to hold duplicate indices. Total complexity looks like n + nlogn + n. Still better than brute force of n^2.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} pair array with indices.
 */
const twoSum = function(nums, target) {
	// Brute Force
	// for (let i = 0; i < nums.length - 1; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === target) return [ i, j ];
	// 	}
	// }

	let indexObj = {};
	nums.forEach((num, index) => {
		if (indexObj[num] === undefined) {
			indexObj[num] = [];
			indexObj[num].push(index);
		} else {
			indexObj[num].push(index);
		}
	});

	// The array is not sorted, so we have to sort it first.
	nums.sort((a, b) => a - b);

	console.log('sorted array is', nums);
	// This destroys the index that is held by the number, so you probably need to make a hash map to hold the index for all the values but that would require an O(n) iteration.

	// Under the assumption that the array is sorted already.
	let i = 0;
	let j = nums.length - 1;
	while (i < j) {
		let sum = nums[i] + nums[j];
		console.log(`sum is ${sum}`);
		if (sum === target) {
			if (nums[i] == nums[j]) {
				return [ indexObj[nums[i]][0], indexObj[nums[j]][1] ];
			}
			return [ indexObj[nums[i]][0], indexObj[nums[j]][0] ];
		} else if (sum < target) {
			console.log('i pointer moved up');
			i += 1;
		} else if (sum > target) {
			console.log('j pointer moved down');
			j -= 1;
		}
	}

	console.log('Reaches bottom somehow');
};

// Better solution is to just go linearly through the array and just add everything to the hash map. Instead of comparing two values, subtract using target - nums[i] and look if the hash map hash has that difference already. This method doesn't require sorting of any kind.
