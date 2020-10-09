/**
 * A robot is located on the top left corner of a m x n grid. It can only move down or right. How many possible unique paths are there?
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Top Down Recursion
const uniquePaths = (m, n) => {
	// edge case
	if (m === 1 || n === 1) return 1;

	memo = new Map();

	// not counting index 0
	const helper = (row, column) => {
		// base case
		if (row === m && column === n) return 1;

		// failure case
		if (row > m || column > n) return 0;

		let key = row.toString() + ',' + column.toString();

		// console.log(key, memo)

		if (memo.has(key)) {
			return memo.get(key);
		}

		let result = helper(row + 1, column) + helper(row, column + 1);

		memo.set(key, result);

		return result;
	};

	return helper(1, 1);
};

// Bottom Up Dynamic Programming
const uniquePaths = (m, n) => {
	// edge case
	if (m === 1 || n === 1) return 1;

	// create a m + 1 x n + 1 matrix dp to represent board
	const inner = new Array(n + 1).fill(0);
	const dp = [];
	for (let i = 0; i < m + 1; i++) dp.push([...inner]);
	console.log(dp);

	// dp[index][index] represents unique paths if it is the finish point
	dp[1][1] = 1; 

	// console.log(dp);

	// a particular place is calculated by adding the unique paths results from top and left
	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[0].length; j++) {
			dp[i][j] = dp[i][j] + dp[i - 1][j] + dp[i][j - 1];
			// console.log(dp);
		}
	}

	// console.log(dp);

	return dp[dp.length - 1][dp[0].length - 1];
};