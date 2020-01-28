/**
 * Given an array of 2n integers, you want to group these integers inito n pairs such that the min sum of the pairs is maximized. The means you want to group the smallest number with the next smallest number so you don't lose as much value. 
 * One solution to this would be to sort the array beforehand. Good chance to use mergeSort on the array, then collect the sum min pairs and return that. I suppose you could also just find the min, and then the next min, etc. until you get to the end.
 * 
 * @param {number[]} nums is the array of numbers that you will use for calculation.
 * @return {number} is the sum min pair.
 */
const mergeStep = function(arr1, arr2) {
	let i = 0;
	let j = 0;
	let mergedArray = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			mergedArray.push(arr1[i]);
			i += 1;
		} else {
			mergedArray.push(arr2[j]);
			j += 1;
		}
	}

	while (i < arr1.length) {
		mergedArray.push(arr1[i]);
		i += 1;
	}
	while (j < arr2.length) {
		mergedArray.push(arr2[j]);
		j += 1;
	}

	return mergedArray;
};

const mergeSort = function(arr) {
	if (arr.length <= 1) return arr;

	let middle = Math.ceil((arr.length - 1) / 2);

	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle, arr.length));

	return mergeStep(left, right);
};

const arrayPairSum = function(nums) {
	let sortedNums = mergeSort(nums);

	console.log(nums);
	console.log(sortedNums);

	// The idea here is to take each pair so have a pointer that adds 2 each time.
	let total = 0;

	for (let i = 0; i < sortedNums.length - 1; i += 2) {
		total += Math.min(sortedNums[i], sortedNums[i + 1]);
	}

	return total;
};
