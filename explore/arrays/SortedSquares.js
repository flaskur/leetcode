/**
 * Given an array of integers, sorted in non decreasing order, return an array of the squares of each number.
 * 
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {
	let unsortedSquare = A.map((num) => Math.pow(num, 2));
	return unsortedSquare.sort((a, b) => a - b);
};

// You should probably remember one of the easier sort methods like bubble or insertion instead of relying on the built in one.

const insertionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) minIndex = j;
		}
		// swap with minIndex
		if (i !== minIndex) {
			[ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ];
		}
	}

	return arr;
};
