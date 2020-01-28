/**
 * Given an m X n matrix, if an element is 0, set its entire row and column to 0. Do it in place without any extra memory.
 * Kinda, like bomberman, any 0 that you encounter destroys the blocks in rows and columns. There can be multiple 0's as well, but you should find all the zero's first and then edit.
 * Brute force would probably be to iterate through every element in each array and check if zero. If it is zero then you should store the index. Then do another iteration but set everything to 0 if the index aligns. You will most likely need to separate the row and column index though.
 * 
 * @param {number[][]} matrix
 * @return {void}
 */
const setZeroes = function(matrix) {
	console.log(`Orignal Matrix: ${matrix}`);
	let rowIndex = {};
	let columnIndex = {};

	// Iterate through every element and store the row and column indices...
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			// Encountered a zero.
			if (matrix[i][j] === 0) {
				console.log(`Found zero at row ${i} and column ${j}`);
				if (!rowIndex[i.toString()]) rowIndex[i.toString()] = true;
				if (!columnIndex[j.toString()]) columnIndex[j.toString()] = true;
			}
		}
	}

	// Print out the offending row and column indices. Remember that the key are strings.
	console.log('row');
	for (let row in rowIndex) {
		console.log(row);
	}
	console.log('column');
	for (let column in columnIndex) {
		console.log(column);
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (rowIndex[i.toString()] === true || columnIndex[j.toString()] === true) {
				matrix[i][j] = 0;
			}
		}
	}

	console.log(`Final Matrix: ${matrix}`);

	return matrix;
};
// This solution works but is not good complexity wise since it's O(n^2) and it uses extra memory to store the indices. Apparently it's possible with only constant space (variables) with better than O(n^2).

// If I use a different marker and wipe the entire row, how do I detect if the value was 0? What if I multiply by -1, so the only values that will be 0 are still the bombs. Then the negative values can be traversed again and set to zero. Hints suggest to use a flag at the start of each row and column.
const setZeroes = function(matrix) {
	// row/column/both clear for the first element is an edge case for the flag.
	let behavior;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			// The goal here is to set the start of each column, row to a specific flag, so you set it later. Remember that the point is to avoid using O(n) memory.
			if (matrix[i][j] === 0) {
				// No way to know if first element should be column or row clear. I need a variable to tell if the first element should be row or column clear. What if it's both? 1 row 2 column 3 both.
				if (i === 0 && j === 0) {
					behavior = 3;
				} else if (i === 0 && j !== 0) {
					// row clear
					behavior = 1;
				} else if (i !== 0 && j === 0) {
					// column clear
					behavior = 2;
				}

				// Setting the flags.
				matrix[i][0] = -1;
				matrix[0][j] = -1;
			}
		}
	}

	console.log(`Marked Matrix: ${matrix}`);

	// Row changed.
	for (let i = 1; i < matrix.length; i++) {
		if (matrix[i][0] === -1) {
			for (let j = 0; j < matrix[0].length; j++) {
				if (matrix[i][j] !== -1) matrix[i][j] = 0;
			}
		}
	}
	// Column changed.
	for (let j = 1; j < matrix[0].length; j++) {
		if (matrix[0][j] === -1) {
			for (let i = 0; i < matrix.length; i++) {
				if (matrix[i][j] !== -1) matrix[i][j] = 0;
			}
		}
	}

	// Problem is that it's arbitrary whether to clear row or column if first element. So one solution would be only set begin flag if now 0 index?
	if (matrix[0][0] === -1 && behavior === 3) {
		for (let i = 1; i < matrix.length; i++) {
			if (matrix[i][0] === -1) {
				for (let j = 0; j < matrix[0].length; j++) {
					if (matrix[i][j] !== -1) matrix[i][j] = 0;
				}
			}
		}
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[0][j] === -1) {
				for (let i = 0; i < matrix.length; i++) {
					if (matrix[i][j] !== -1) matrix[i][j] = 0;
				}
			}
		}
	} else if (matrix[0][0] === -1 && behavior === 1) {
		for (let i = 1; i < matrix.length; i++) {
			if (matrix[i][0] === -1) {
				for (let j = 0; j < matrix[0].length; j++) {
					if (matrix[i][j] !== -1) matrix[i][j] = 0;
				}
			}
		}
	} else if (matrix[0][0] === -1 && behavior === 2) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[0][j] === -1) {
				for (let i = 0; i < matrix.length; i++) {
					if (matrix[i][j] !== -1) matrix[i][j] = 0;
				}
			}
		}
	}

	console.log(`After Matrix: ${matrix}`);

	// I want to set the flags back to 0.
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] === -1) matrix[i][0] = 0;
	}
	// Don't have to check the first one since i covers that.
	for (let j = 0; j < matrix[0].length; j++) {
		if (matrix[0][j] === -1) matrix[0][j] = 0;
	}

	// I expect the flags to still be -1, so I have to go back and set then to 0 right?
	console.log(`Final Matrix: ${matrix}`);

	return matrix;
};
/**
 * 0 1 2 0
 * 3 4 5 2
 * 1 3 1 5
 * 
 * x 1 2 x
 * 3 4 5 2
 * 1 3 1 5
 * 
 * x 0 0 x
 * 0 4 5 0
 * 0 3 1 0
 * 
 * 1 1 1
 * 0 1 2
 * 
 * x 1 1
 * 0 1 2
 * I marked the column but it destroyed the row.
 */

// This is a discussion solution that fixes the previous mistake. The logic is similar.
const setZeroes = function(matrix) {
	let zeroRow = false;
	let zeroColumn = false;

	// Basically, you need to isolate the first row and column case because the 0,0 case is ambiguous in terms of a row and/or column clear.
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] === 0) {
			zeroColumn = true;
			break;
		}
	}
	for (let j = 0; j < matrix[0].length; j++) {
		if (matrix[0][j] === 0) {
			zeroRow = true;
			break;
		}
	}

	// Set the flags for first row/col to 0.
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				matrix[i][0] = 0;
				matrix[0][j] = 0;
			}
		}
	}

	// Process the ones that are not first row/col, but reference the flags.
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i][0] === 0 || matrix[0][j] === 0) {
				matrix[i][j] = 0;
			}
		}
	}

	// Now handle the first row and/or column.
	if (zeroColumn) {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][0] = 0;
		}
	}
	if (zeroRow) {
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[0][j] = 0;
		}
	}
};

// So the hard part about this was understanding that the first element index 0, 0 is a special case that doesn't work if you use the normal flags because the clearing is ambiguous. The question itself kinda sucks too because you need to use a bunch of for loops when are terrible for time complexity. Your initial approach didn't work because you were suppose to set the flag and use it for solely the inner portion.
