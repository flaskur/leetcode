/**
 * Given a 2 dimensional array, rotate by 90 degrees clockwise. Must be done in place
 * The matrix will be n by n, so it's a square.
 * Consider the first row, 00 -> 03, 01 -> 13, 02 -> 23, 03 -> 33. So notice that the first row all have column as index 3. It looks like it switches index and sets column index to 3.
 * Consider the second row. 10 -> 02, 11 -> 12, 12 -> 22, 13 -> 32. Notice that the column index is always 2 and the pattern is swapping index then changing to 2.
 * How would you even do that in place? It would be easier if you could make an empty matrix and fill that in.
 * Consider the third row. 20 -> 01, 21 -> 12, 22 -> 21, 23 -> 31. The j index is 1 for 1.
 * The fourth row has j of 0. So matrix.length - 1 - i
 * 
 * @param {number[][]} matrix
 * @return {void} modify matrix in place.
 */
const rotate = function(matrix) {
	// The problem is that arrays are objects in JS meaning they hold the same reference just like objects. Be careful with that.

	let newMatrix = [];
	for (let j = 0; j < matrix.length; j++) {
		newMatrix.push(new Array(matrix.length).fill(0));
	}

	// Should be nxn matrix of just 0's.
	console.log(newMatrix);

	console.log('test');
	newMatrix[0][0] = 44;

	console.log(newMatrix);

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			console.log('current val is', matrix[i][j]);
			console.log(`index of ${i} ${j} goes to ${j} ${matrix.length - 1 - i}`);
			newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
			console.log('matrix is now', newMatrix);
		}
	}

	console.log(newMatrix);

	// This changes the values that matrix points to which is appropriate compared to just changing the reference of matrix to newMatrix.
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			matrix[i][j] = newMatrix[i][j];
		}
	}
	console.log(matrix);
};

// Discussion solution has a reverse step, then taking the transpose but the transpose step uses j = i + 1 for some reason. But to summarize it suggests that you do a row flip step, then the swapping of indices. You did it just directly but that doesn't have pure pairwise swaps and required memory.
