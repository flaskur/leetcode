/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * Pretty sure this will use recursion, I should probably do two recursive calls moving down and right until it reaches border and cannot move further. So the end case would depend on the m x n board. We need to keep track of our current position. If it does succeed, then increment a count, but should that be global. That or I can keep the count as an argument since the function calls should be synchronous, though I'll have to return it.
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
	// Assume that we start at m = 1, n = 1 where m is horizontal, and n is vertical.
	if (m < 1 || n < 1) return null;

	// No movement counts as 1 path.
	if (m === 1 && n === 1) return 1;

	return helper(1, 1, m, n, 0);
};

const helper = function(x, y, m, n, count) {
	// Base is when it attempts to move out of the border, or it finally reaches the goal.
	if (x === m && y === n) return count + 1;
	if (x > m || y > n) return count;

	count = helper(x + 1, y, m, n, count);
	count = helper(x, y + 1, m, n, count);

	return count;
};
// It's not steps, it's paths... You only increment count if it becomes the end goal.
// Timeout, which means not efficient enough.

// Memoization
const uniquePaths = function(m, n) {
	let memo = [];
	for (let i = 0; i < n; i++) {
		memo.push(new Array(m).fill(0));
	}

	memo.forEach((mem) => console.log(mem));
	return helper(m - 1, n - 1, memo);
};

const helper = function(m, n, memo) {
	if (m < 0 || n < 0) return 0;
	else if (m === 0 || n === 0) return 1;
	else if (memo[n][m] > 0) return memo[n][m];
	else {
		memo[n][m] = helper(m - 1, n, memo) + helper(m, n - 1, memo); // Working backwards?
		return memo[n][m];
	}
};
// So basically, I start at the finish and attempt to get back at the start. If I reach the start from that spot, I mark all of the grid spaces as 1, so other calls will know that.
// I forgot to add the other path initially, but each particular grid space should check from that space.
