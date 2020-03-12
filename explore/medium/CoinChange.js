/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You are given the denominations inside of the coins array as integers. So one way of doing this is by continuing to decrement the amount until you reach 0. If you cannot reach 0, then you should return -1. Keep a count for the number of decrements. The denominations are variable so you'll have to loop in reverse order likely. This will probably be terrible complexity wise.
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
	let count = 0;
	coins.sort((a, b) => {
		if (a - b < 0) return false;
		else return true;
	});
	console.log(coins);

	for (let i = coins.length - 1; i >= 0; i--) {
		let denomination = coins[i];
		while (amount >= denomination) {
			amount -= denomination;
			count += 1;
		}
	}

	return amount > 0 ? -1 : count;
};
// This doesn't work because I assume that the larger denominations divisible by the smaller denominations, which isn't true.

// I guess one approach would be looping through each possible choice and checking if one single path works, but I would have to keep track of the count.
const coinChange = function(coins, amount) {
	return helper(coins, amount, 0, Infinity);
};

const helper = function(coins, amount, count, fewest) {
	// Base case is when amount becomes 0 or fails to be bigger than any denomination.
	if (amount === 0) return count;

	let flag = false;
	for (let i = 0; i < coins.length; i++) {
		if (amount >= coins[i]) {
			flag = true;
			break;
		}
	}
	// This path is a failure,
	if (!flag) return Infinity;

	for (let i = 0; i < coins.length; i++) {
		fewest = Math.min(helper(coins, amount - coins[i], count + 1, fewest));
	}

	return fewest;
};
// This doesn't work.

// Top Down Approach
const coinChange = function(coins, amount) {
	// Edge case.
	let count = new Array(amount).fill(0);
	if (amount < 1) return 0;
	return helper(coins, amount, []);
};

const helper = function(coins, amount, count) {
	if (amount < 0) return -1;
	if (amount === 0) return 0;
	if (count[amount - 1] != 0) return count[amount - 1];

	let min = Infinity;
	for (let i = 0; i < coins.length; i++) {
		let res = helper(coins, amount - coins[i], count);
		if (res >= 0 && res < min) min = 1 + res;
	}

	count[amount - 1] = min === Infinity ? -1 : min;
	return count[amount - 1];
};

// Greedy DFS
const coinChange = function(coins, amount) {
	coins.sort((a, b) => b - a); // Descending Order.

	let res = Infinity;

	const find = function(k, amount, count) {
		let coin = coins[k];

		if (k === coins.length - 1) {
			if (amount % coin === 0) {
				res = Math.min(res, count + Math.floor(amount / coin));
			}
		} else {
			for (let i = Math.floor(amount / coin); i >= 0 && count + i < res; i--) {
				find(k + 1, amount - coin * i, count + i);
			}
		}
	};

	find(0, amount, 0);
	return res === Infinity ? -1 : res;
};
// Don't really understand why this works. I'll come back to it later.
