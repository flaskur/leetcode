/**
 * Given an array nums of n integers, are there three elements a,b,c that sum to 0? Find all triplets in an array that give a sum of zero.
 * What would be the brute force manner? Would sorting help? Three pointers? Wait so the brute force method is just to do 3 for loops right? Might be beneficial to sort and move pointers based on that.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
	let result = [];
	let encounter = {};

	// Edge case of nums being an array of only 2 elements or less.
	if (nums.length <= 2) return result;

	// Brute force approach by using 3 for loops is terribly inefficient.
	// nums.sort();
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					// The includes method should return undefined if failed.
					// Includes doesn't pick up the arr because it's an object and compared using reference. How do I check by value?
					// I can use a hash to store the combination as a string.
					let store = nums[i].toString() + nums[j].toString() + nums[k].toString();
					console.log(`Will store ${store}`);
					// If undefined, means not encountered yet. If encountered, should be true.
					if (!encounter[store]) {
						for (let key in encounter) {
							console.log(`${key}: ${encounter[key]}`);
						}

						console.log(`Insert ${nums[i]} ${nums[j]} and ${nums[k]} as 0`);
						result.push([ nums[i], nums[j], nums[k] ]);
						encounter[store] = true;
					} else {
						console.log(`Duplicate ${nums[i]} ${nums[j]} and ${nums[k]} as 0`);
					}
				}
			}
		}
	}

	return result;
};
// Failed brute force case, doesn't work for nontrivial case for some reason.

// Given the hints... If we fix one of the numbers, we are left with the two sum problem. Remember that the two sum problem was finding a specific target and using a start and end pointer on a sorted list until we found the correct value. In this case we can do something similar. For sure you would need to sort it first. The target in this case would be the negative value of the fixed number.
// Since we know the target to be -x, then the number we want for z is y-x = z I think. Or I guess you could start with the traditional sorted method.
const threeSum = function(nums) {
	let result = [];
	if (nums.length <= 2) return result;

	// Avoid duplicates with a hash map string check.
	let encounter = {};

	nums.sort((a, b) => a - b);
	// console.log(`The sorted list is ${nums}`);

	for (let i = 0; i < nums.length - 2; i++) {
		// The second and third element should be equal to the target for sum to be 0.
		let target = -1 * nums[i];
		// console.log(`The target is ${target}`);

		// Two pointers...
		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			if (nums[j] + nums[k] === target) {
				// Why does this continue to repeat for the list? Because it's a repeat still?
				// console.log(`Target found from ${nums[j]} + ${nums[k]} = ${target}`);

				// Still need to check for duplicates so use a hash with string to avoid that.
				let store = nums[i].toString() + nums[j].toString() + nums[k].toString();
				if (!encounter[store]) result.push([ nums[i], nums[j], nums[k] ]);
				encounter[store] = true;
				// Forgot to increment here...
				j += 1;
				// console.log('Moved j pointer');
			} else if (nums[j] + nums[k] < target) {
				// The sum of the two pointer values is too small, so move the j pointer to increase. This works because it's a sorted list already.
				// console.log('Too small, moving j pointer up');
				j += 1;
			} else if (nums[j] + nums[k] > target) {
				// The sum of the two pointer values is too big, decrement the k pointer to reduce the sum.
				// console.log('Too small, moving k pointer down');
				k -= 1;
			} else {
				// If none of these cases work, that means it must not be possible with the current fixed i pointer. This actually might not happen at all to be honest.
				// console.log('Not possible, breaking and moving to next i pointer.');
				break;
			}
		}
	}

	return result;
};

// This approach worked. It's basically a harder version of the twoSum problem where we used two pointer to find the target which is the negative of the fixed number index in this case. One thing to note is that leetcode output does care about console logs and will time out if there are too many. Also the built in sort function when given no callback function doesn't do ascending for some reason. Might be based on string order. In any case, you should always give the callback whenever using the built in sort function. The hash table was necessary to avoid duplicates on the result array. The time complexity looks about O(n^2).
