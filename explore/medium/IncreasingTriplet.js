/**
 * Given an unsorted array, return whether an increasing subsequence of length 3 exists in the array or not. Formally it is arr[i]<arr[j]<arr[k] where i,j,k represent the possible indices in the array.
 * The time complexity must be O(n) and have a space complexity of O(1) meaning you shouldn't try to sort beforehand because that is at least O(nlogn).
 * One possible though is have a max set as the start and traverse through. If at the end of the traversal you get a counter triggered twice from being greater than max, then it's increasing.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
	// Edge case of not enough elements...
	if (nums.length < 4) return false;

	let counter = 0;

	// Logic here is that the current max must change twice for there to be an increasing triplet subsequence.
	// The start at i should only go to < nums.length - 2 because j should run through at least 2 elements.
	for (let i = 0; i < nums.length - 2; i++) {
		console.log(`current is ${nums[i]}`);
		let currentMax = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			// Should continue to run until it meets a failure case, break then.
			if (nums[j] > currentMax) {
				console.log(`${nums[j]} > ${currentMax}`);
				currentMax = nums[j];
				counter += 1;

				if (counter === 2) return true;
			}
		}
		counter = 0;
	}

	// if (currentMax > start && counter >= 2) {
	// 	console.log(`currentmax ${currentMax} > start ${start} and counter = ${counter}`);
	// 	return true;
	// }
	console.log('not found, return false');
	return false;
};
// Fails [2,5,3,4,5] because I missed the part where you should ignore the next and still maintain the increasing subsequence. If you encounter a greater number, how do you tell if you should skip or not? Use two pointers and have a j = i + 1 runner until it fails. That is O(n^2) though.
// This doesn't work, the logic is just wrong.

// Discussion solution.
const increasingTriplet = function(nums) {
	let small = Infinity;
	let big = Infinity;

	for (let num of nums) {
		if (num <= small) small = num;
		else if (num <= big)
			// Implies that n must be greater than small and that small < n < big
			big = num;
		else return true;
	}

	return false;
};
// This works because a triplet sequence occurs when there exists a number that is greater than the current min and max value in the array. I was overthinking the problem when you just needed to know this relationship.
