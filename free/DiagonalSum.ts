/**
 * Given a square matrix mat, return the sum of the matrix diagonals.
 * There are only two diagonals. Notice that for the primary diagonal the row - column index difference is 0. For the secondary column, the row + column = matrix.length - 1.
 * You can just keep two counter variables instead of instantiating a hash map since it isn't necessary. You still have to iterate through all items though.
 * Actually you combine both diagonal sums, so you only need one variable and return just a number.
 */
const diagonalSum = (mat: number[][]): number => {
	// edge case
	if (!mat.length) return 0;

	let diagSum = 0;

	// iterate and add to diagSum if they fall under the row - col = 0 or row + col = n - 1 rule
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			if (i - j === 0 || i + j === mat.length - 1) {
				diagSum += mat[i][j];
			}
		}
	}

	return diagSum;
};
