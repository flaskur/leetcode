/**
 * Given the array nums, for each nums[i] find out how many nums in the array are smaller than it.
 * You for sure need to iterate through the array once, but then you need to compare the other values.
 * Brute force of double for loop ignoring index i is possible but O(n^2).
 * 
 * @param {number[]} nums
 * @param {number}
 */
const smallerNumbersThanCurrent = (nums) => {
	let resultArr = [];

	for (let i = 0; i < nums.length; i++) {
		let counter = 0;

		for (let j = 0; j < nums.length; j++) {
			if (i === j) continue; // skip iteration

			if (nums[i] > nums[j]) counter++;
		}

		resultArr.push(counter);
	}

	return resultArr;
};

// Method where we sort the array and use the index to determine which values are less than the current. Use a hashmap as index reference. O(nlogn) because of sort.
const smallerNumbersThanCurrent = (nums) => {
	let map = new Map();
	let copy = [ ...nums ];
	copy.sort((a, b) => a - b);

	// Works because when sorted, index references the exact amount less than or equal to current value.
	for (let i = 0; i < nums.length; i++) {
		map.get(copy[i]) === undefined && map.set(copy[i], i); // put if absent
	}

	for (let i = 0; i < nums.length; i++) {
		copy[i] = map.get(nums[i]);
	}

	return copy;
};
