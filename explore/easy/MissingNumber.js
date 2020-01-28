/**
 * Given an array containing n distinct numbers from 0 to n, find the one that is missing from the array.
 * This seems like a time complexity problem. The brute force way is to have a counter to act like an expectation and check upto n. It seems like the given array is not sorted at all.
 * Would it be easier to just take the summation and then find the difference from the expected? I would keep track of max then to know the expected.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
	// Edge case.
	let encounteredZero = false;

	let max = -Infinity;
	let missingSum = 0;

	nums.forEach((num) => {
		if (num === 0) encounteredZero = true;
		if (num > max) max = num;
		missingSum += num;
	});

	// The expected sum is the summation operation done on the largest number. There's no easy math term for it like factorial but you can just use a for loop.
	let expectedSum = 0;
	for (let i = 1; i <= max; i++) {
		expectedSum += i;
	}

	if (!encounteredZero) return 0;

	// If the missing number is not inbetween that means expected = missing so the missing should be max + 1.
	if (expectedSum === missingSum) return max + 1;

	// The difference between the expected sum and the missing sum is the actual number.
	return expectedSum - missingSum;
};

// Solved the general case by finding the max number to generate the expected summation and the actual sum from the array. If the number is inbetween the difference between expected and actual should give you the answer. The edge cases are if the missing numbers are at the end. If zero was missing I used a flag on the array iteration. If the sum did not differ then I returned the max + 1.
