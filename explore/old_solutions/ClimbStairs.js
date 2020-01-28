/**
 * From what I remember, dynamic programming is basically breaking down a larger problem into two smaller problems.
 * You are climbing a stair case, and it takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. How many distinct ways are there to climb to the top?
 * This seems like a statistics problem.
 * @param {number} n is the total number of steps.
 * @return {number} should be the total number of combinations to get to the top.
 */
const climbStairs = function(n) {
	// Establishing the basecases, but not really?
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;

	let arr = [ 1, 2 ];

	for (let i = 2; i < n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	return arr[n - 1];
};

// Don't understand this yet. Skip.
