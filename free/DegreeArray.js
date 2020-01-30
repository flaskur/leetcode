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
