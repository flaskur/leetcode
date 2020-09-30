/**
 * It takes n steps to reach the top of a staircase. Each time you can climb either 1 or 2 steps. How many distinct ways are there to climb to the top?
 * The approach to this is to make a helper function that sums the recursive paths for 1 and 2 steps. You should memoize the current step by create a hash map that has a value of the resulting distinct ways.
 * 
 * @param {number} n
 * @param {number}
 */
const climbStairs = (n) => {
	// create a hash map to memoize the current step paths
	const memo = new Map();

	const helper = (step) => {
		// base case
		if (step === n || step === n - 1) {
			return 1;
		}

		let result; // enumerates how many distinct paths from current step

		// checking if memo has distincts paths already, otherwise compute normally
		if (memo.has(step + 1) && memo.has(step + 2)) {
			result = memo.get(step + 1) + memo.get(step + 2);
		} else if (memo.has(step + 1) && !memo.has(step + 2)) {
			result = memo.get(step + 1) + helper(step + 2);
		} else if (!memo.has(step + 1) && memo.has(step + 2)) {
			result = helper(step + 1) + memo.get(step + 2);
		} else {
			result = helper(step + 1) + helper(step + 2);
		}

		// update memo for computed step number
		if (!memo.has(step)) {
			memo.set(step, result);
		}

		return result;
	};

	return helper(0);
};

// The core idea is to recursively call until we reach the base case of top step or 1 from top step which means that distinct path has ended.
// The reason we assigned to intermediate result is to set our memo since we repeated call helper at some step n.
// You could have also set a base case for step === n - 2 since there are 2 steps left and only 2 distinct paths left but that would be a bit redundant.

// The iterative approach will instead just loop from 0 to n inclusive while initially setting num distinct ways for n = 0, 1, 2. The num distinct ways for n = 3 is equal to the sum of the last two. And then you progressively increase until you find reach n.
// dp[0] = 0; dp[1] = 1; dp[2] = 2;
// for (let i = 3; i <= n; i++) {
// 	dp[i] = dp[i-1] + dp[i-2];
// }
