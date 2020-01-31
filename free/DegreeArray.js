/**
 * Given an non empty array filled with non negative integers, you need to find the degree which is the maximum frequency of any one of its members. Then you need to find the smallest length of a contiguous subarray that also has that degree. So essentially you keep shrinking the original array and check if the degree thing holds. 
 * I would definitely represent the degree using a hash table that has count as the value and key as the numbers in string form.
 * Start with brute force and optimize it later.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums) {
	let maxDegree = 0;
	let countHash = {};
	// Iterate through the nums array and populate the countHash.
	nums.forEach((num) => {
		// If undefined, becomes 1, otherwise increments by 1.
		countHash[num] = countHash[num] + 1 || 1;

		if (countHash[num] > maxDegree) maxDegree = countHash[num];
	});

	// I expect max degree to hold that max frequency number and count hash to have the count of each number.
	// console.log('hash count print');
	for (let key in countHash) {
		console.log(`key: ${key}, value ${countHash[key]}`);
	}
	// console.log(`The max degree is ${maxDegree}`);

	// Spread syntax so that it is not reference to the same array.
	let currentArr = [ ...nums ];

	// Idea here is to continually shrink the array until it fails the maxDegree check. Wait the shrinking method doesn't seem to work... You should shrink the front until the degree part fails, then shrink the back until it fails. I can probably decrement the current count hash to keep track of the current array. I would have to iterate through it each time to check if maxDegree exists.

	let minLength = nums.length;

	// Shrink the front until failure.
	while (true) {
		console.log(`Current array is ${currentArr}`);
		// Assume that we do remove it. I can add it back later.
		let frontNum = currentArr.shift();
		console.log(`Current array is ${currentArr}`);
		countHash[frontNum] -= 1;

		let currentMaxDegree = 0;
		for (let key in countHash) {
			if (countHash[key] > currentMaxDegree) currentMaxDegree = countHash[key];
		}

		console.log(currentMaxDegree);
		if (currentMaxDegree !== maxDegree) {
			// We should not have shifted, it failed. Put it back.
			console.log('shift fails, revert back');
			countHash[frontNum] += 1;
			currentArr.unshift(frontNum);
			console.log(`Current array back to ${currentArr}`);
			break;
		} else {
			// Degree is maintain after taking from the front, update minLength.
			console.log('min length updates', minLength);
			minLength = currentArr.length;
		}
	}

	// Shrink from the back until failure.
	while (true) {
		console.log(`Current array is ${currentArr}`);
		let backNum = currentArr.pop();
		countHash[backNum] -= 1;

		let currentMaxDegree = 0;
		for (let key in countHash) {
			if (countHash[key] > currentMaxDegree) currentMaxDegree = countHash[key];
		}

		console.log('current max degree', currentMaxDegree);
		if (currentMaxDegree !== maxDegree) {
			console.log('pop fails, revert back');
			countHash[backNum] += 1;
			currentArr.push(backNum);
			console.log(`Current array back to ${currentArr}`);
			break;
		} else {
			console.log('min length updates', minLength);
			minLength = currentArr.length;
		}
	}

	console.log(`The final minlength is ${minLength}`);
	return minLength;
};

// Doesn't work at the moment, because you have to check the cose from back to front as well. Might update later.

// Updated with actual solution.
const findShortestSubArray = function(nums) {
	// Edge case...
	if (nums.length === 0 || nums === null) return null;

	// Populate a hash with key of number as a string and value as an array which holds the count, start, and end index.
	let hash = {};
	nums.forEach((num, index) => {
		if (hash[num] === undefined) {
			// Initialize count, start, and end.
			hash[num] = [ 1, index, index ];
		} else {
			hash[num][0] += 1;
		}
	});

	for (let key in hash) {
		console.log(`key ${key} value ${value}`);
	}

	// Main logic.
	let degree = -Infinity;
	let res = Infinity;

	for (let key in hash) {
		if (hash[key][0] > degree) {
			degree = hash[key][0];
			res = hash[key][2] - hash[key][1] + 1;
		} else if (hash[key][0] === degree) {
			res = Math.min(res, hash[key][2] - hash[key][1] + 1);
		}
	}

	return res;
};

// Okay, so now it makes a bit more sense. Basically, by keeping the start and end index, you can find the min subarray by taking the difference between the end and start index + 1, because end - start + 1 represents the number of elements between them, inclusive. If the degree updates, then you know that you should just overwrite since only care about largest degree. If the degree is the same, then it's a candidate number since the count is equal to degree, but we aren't sure if it's smaller than the current one, you need to check each time. The res variable just stands for number of elements between the start and end index inclusive.
