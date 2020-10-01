/**
 * Given coins of different denominations and a total amount of money, find the fewest number of coins needed to make up that amount. If it cannot be made with any combination, return -1.
 * My initial approach is to using a backtracking method to fill a current array, testing every possible candidate. Failed path when current sum is greater than total. If it equals total, then return the length of the current array.
 * Times out so you need to memoize. Problem is that min amount of coins changes for each path, so first assignment to memo might not be correct in the future. Meaning I might need to change the recursive function to return the minCoins instead of having it as a outer scope variable.
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Bottom Up Approach
const coinChange = (coins, amount) => {
	// dp array stands for current min coins to make up index amount
	dp = new Array(amount + 1).fill(Infinity); // amount + 1 because we count 0

	// it takes 0 coins to make up 0 amount
	dp[0] = 0;

	// iterate through dp array and set each value
	for (let i = 0; i <= amount; i++) {
		// try candidate coin if less than or equal to amount
		for (let coin of coins) {
			if (coin <= i) {
				// take one coin so +1, then find the min coins necessary for current amount - coin candidate
				dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
			}
		}
	}

	// failure happens if final case is Infinity and unchanged
	return dp[amount] === Infinity ? -1 : dp[amount];
};

// Top Down Approach
const coinChange = (coins, amount) => {
	// edge case
	if (amount === 0) return 0;

	const memo = new Map();

	const helper = (remainder, count) => {
		// failure, overshot
		if (remainder < 0) return Infinity;

		// base case
		if (remainder === 0) return count;

		if (memo.has(remainder)) return memo.get(remainder);

		let min = Infinity;

		// try each candidate coin and take the min result
		for (let coin of coins) {
			let result;
			if (memo.has(remainder - coin)) {
				result = memo.get(remainder - coin);
			} else {
				result = helper(remainder - coin, count + 1);
			}

			min = Math.min(min, result);
		}

		// update memo with min for remainder
		memo.set(remainder, Math.min(memo.get(remainder) || Infinity, min));

		return min === Infinity ? -1 : min;
	};

	return helper(amount, 0);
};
// The memoization messes it up and it times out if I remove it.
