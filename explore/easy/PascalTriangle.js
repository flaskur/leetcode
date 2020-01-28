/**
 * Given a nonnegative number of rows, generate the rows of a pascals triangle.
 * A pascal triangle basically means that the sum of a particular spot is from the two above it. Hard to explain.
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
	let pascal = [];
	if (numRows <= 0) return pascal;

	pascal.push([ 1 ]);
	if (numRows === 1) return pascal;

	// I need to keep track of the previous row and build the current row on each iteration.
	let prev = [ 1 ];
	let current = [];
	for (let i = 2; i <= numRows; i++) {
		// You automatically know that the beginning and end are 1. i denotes the length of the array.
		current[0] = 1;
		current[i - 1] = 1;

		// To fill in the rest of the space you need to work in opposites until halfway point.
		// Don't you realize that you only need to do up to the halfway point.
		for (let j = 1; j <= Math.floor((i - 1) / 2); j++) {
			current[j] = prev[j - 1] + prev[j];
			current[i - 1 - j] = prev[j - 1] + prev[j];
		}

		console.log(`current is ${current}`);
		pascal.push(current);

		prev = current;
		current = [];
	}

	return pascal;
};

// Trick to this is to understand that a particular row is the sum of the index of the row before it + index - 1 row before it.
