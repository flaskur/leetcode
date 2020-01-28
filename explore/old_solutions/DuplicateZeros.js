/**
 * Given a fixed length array called arr, duplicate each occurrence of zero shifting the remaining elements to the right. Must be done in place.
 * @param {number[]} arr is an numbered array.
 * @return {void} Only modify the array in place.
 */
const duplicateZeros = function(arr) {
	// I still can't focus. It's done in place.

	for (let i = 0; i < arr.length; i++) {
		// See the hard part about this is that it has to be done in place. If I can't use more memory then maybe, I can just do a pop operation.
		if (arr[i] === 0) {
			// Insert a 0 into the array and pop the back since it cannot be expressed.
			// On edge case of the last element and it's zero, you splice in a zero which expands it past the last one, it doesn't matter since it's popped right after.
			arr.splice(i, 0, 0);
			arr.pop();

			// To prevent it from checking the zero that we just inserted, we need to increment the index by 1, essentially skipping that entry.
			i += 1;
		}
	}
};
