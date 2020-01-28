/**
 * Given two arrays compute their intersection.
 * So you need to basically build an array of all the elements that appear in both arrays.
 * The output looks like it needs to be sorted in the end, so if you iterate through the second array and not the count object, you'll need to sort. 
 * Can I define a merge sort function and call it as a helper?
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
	let intersectionArray = [];

	// Edge case if either arrays are empty, no intersection.
	if (nums1.length === 0 || nums2.length === 0) return intersectionArray;

	let numCount = {};

	nums1.forEach((num) => {
		if (numCount[num] === undefined) numCount[num] = 1;
		else numCount[num] += 1;
	});
	// The numCount JS object holds the count occurrences for the first array.

	// Check if the numCount is actually updated.
	for (let key in numCount) {
		console.log(`${key} count is ${numCount[key]}`);
	}

	// Iterate through the second array and check if it's it the numCount. Make sure to decrement the count for each case.
	nums2.forEach((num) => {
		if (numCount[num] > 0) {
			intersectionArray.push(num);
			numCount[num] -= 1;
		}
		// If it doesn't occur then do nothing.
	});
	// The intersection array should hold every common intersection in an unsorted list. Test it.
	console.log(intersectionArray);

	let unsortedArr = [ 9, 2, 3, 4, 8, 2, 15, 1 ];
	console.log(unsortedArr);
	console.log(mergeSort(unsortedArr));

	// Probably need to merge sort and return that.
	return mergeSort(intersectionArray);
};

const mergeSort = function(arr) {
	// The logic behind this is to break the arr into halves until you only have single components, then build it back together but do that recursively. It requires O(n) space.
	if (arr.length <= 1) return arr;

	// Middle favors the upper half.
	let middle = Math.ceil((arr.length - 1) / 2);

	// The slice method is exclusive on end index.
	let left = arr.slice(0, middle);
	let right = arr.slice(middle, arr.length);

	// Kinda hard to remember.
	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
};

const merge = function(arr1, arr2) {
	let mergedArr = [];

	// Have a index pointer for both arrays.
	let i = 0,
		j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			mergedArr.push(arr1[i]);
			i += 1;
		} else if (arr1[i] > arr2[j]) {
			mergedArr.push(arr2[j]);
			j += 1;
		}
	}

	// Fill in the leftover.
	while (i < arr1.length) {
		mergedArr.push(arr1[i]);
		i += 1;
	}
	while (j < arr2.length) {
		mergedArr.push(arr2[j]);
		j += 1;
	}

	return mergedArr;
};
