/**
 * Given a fixed length array of integers, duplicate each occurrence of zero, shifting the remianing elements to the right.
 * It's in place so you can't mutate using push/splice. Actually shifting the rest of the elements down is terrible for performance.
 * 
 * @param {number[]} arr
 * @return {void}
 */
const duplicateZeros = (arr) => {
	// last number doesn't matter
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === 0) {
			for (let j = arr.length - 1; j > i + 1; j--) {
				[ arr[j], arr[j - 1] ] = [ arr[j - 1], arr[j] ];
			}

			arr[i + 1] = 0;

			i += 1; // skip the duplicate
		}
	}
};

// actually swapping each pairwise is really bad performance wise, but since I can't use more memory or change the array length, this is the most obvious way to do this.
