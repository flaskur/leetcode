/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 * Brute force approach is simple enough. Can I bound it somehow? Okay, so I can do a O(nlogn) search by iterating through each row and doing a binary search to find the target in the row.
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
	// Brute force approach using a double for loop.
	// for (let i = 0; i < matrix.length; i++) {
	// 	for (let j = 0; j < matrix[0].length; j++) {
	// 		if (matrix[i][j] === target) return true;
	// 	}
	// }
	// return false;

	// Linear iteration then binary search for each row.
	for (let row = 0; row < matrix.length; row++) {
		// Binary search within each row.
		let start = 0;
		let end = matrix[row].length - 1;
		while (start <= end) {
			let mid = Math.floor((start + end) / 2);
			if (matrix[row][mid] === target) return true;
			else if (matrix[row][mid] < target) start = mid + 1;
			else if (matrix[row][mid] > target) end = mid - 1;
		}
	}
	return false;
};

// One thing I keep forgetting for the binary search is that the condition is start <= end, not start < end, because you still need to consider the singular element left case. This solution uses an initial linear approach for row traversal then a binary search within each row because it's already sorted. I can probably be better optimized since the columns are also sorted.
