/**
 * Given array of a the stock price for each day, find the max profit for all the days.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
	let difference = 0;
	if (prices.length > 0) {
		prices.reduce((accumulator, current) => {
			if (current > accumulator) {
				difference += current - accumulator;
			}
			return current;
		});
	}

	return difference;
};

// No initial value is set for accumulator, so it takes the first element and current takes the second.
// This is a two pointers problem, but it turns out you only need to worry about next.

const maxProfit = function(prices) {
	let profit = 0;

	if (prices.length > 1) {
		for (let i = 0; i < prices.length - 1; i++) {
			if (prices[i + 1] > prices[i]) {
				profit += prices[i + 1] - prices[i];
			}
		}
	}

	return profit;
};
