/**
 * Given two arrays, we when so sort them such that the relative ordering of items in arr1 are the same as in arr2. So basically we want to maintain the order of arr2 and just add the duplicate elements from arr1 onto the relative placement.
 * @param {number[]} arr1
 * @param {number[]} arr2 has all distinct numbers
 * @return {number[]} is the new sorted array that is relative to the ordering in array 2.
 * Arr2 determines the ordering of the array but doesn't actually make a difference on the final relative array.
 */
const relativeSortArray = function(arr1, arr2) {
	let relativeArray = new Array();

	arr2.forEach((element) => {
		for (mark of arr1) {
			if (mark === element) relativeArray.push(mark);
		}
	});

	// Now we need to add the ones that don't appear in the arr2 in ascending order.
	let missingArray = new Array();
	for (mark of arr1) {
		if (!relativeArray.includes(mark)) {
			missingArray.push(mark);
		}
	}

	missingArray.sort((a, b) => a - b);

	return relativeArray.concat(missingArray);
};
