/**
 * Given an array of size n, find the majority element, which is the element that appears more than n/2 times. Majority element always exists.
 * Make a count hash, then check each count hash element to see if it's greater than n/2.
 * 
 * @param {number[]} n
 * @return {number}
 */
const majorityElement = (nums) => {
	let countHash = new Map(); // Better because elements are not strings.

	for (let num of nums) {
		countHash.get(num) ? countHash.set(num, countHash.get(num) + 1) : countHash.set(num, 1);
	}

	// Iterate through hash map and find count greater than n / 2.
	for (let [ key, value ] of countHash) {
		if (value > nums.length / 2) return key;
	}

	return null; // Not found.
};

// Clever approach, sorting the arr means majority element is always middles since it is guaranteed to exist.
const majorityElement = (nums) => {
	nums.sort();
	return nums[Math.floor(nums.length / 2)];
};

// Divide and conquer. Inintuitive. Works because if we know both halves have the same majority element, then it must be correct. Also majority element of length 1 array is trivial.
const majorityElement = (nums) => {
	const countRange = (nums, num, low, high) => {
		let counter = 0;

		for (let i = low; i <= high; i++) {
			if (nums[i] === num) counter++;
		}

		return counter;
	};

	const majorityElementRecursive = (nums, low, high) => {
		// Base case.
		if (low === high) return nums[low];

		let mid = low + (high - low) / 2; // Avoid overflow.

		let left = majorityElementRecursive(num, low, mid);
		let right = majorityElementRecursive(num, mid + 1, high);

		if (left === right) return left;

		// Otherwise count in range if they disagree.
		let leftCount = countRange(nums, left, low, high);
		let rightCount = countRange(nums, right, low, high);

		return leftCount > rightCount ? left : right;
	};

	return majorityElementRecursive(nums, 0, nums.length - 1);
};
