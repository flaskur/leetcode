/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// Max profit is just pairwise counting.
	let profit = 0;

	if (prices.length === 0 || prices.length === 1) return profit;

	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i] < prices[i + 1]) {
			profit += prices[i + 1] - prices[i];
			console.log('profit now', profit);
		}
	}

	return profit;
};

// Dynamic programming
// The obvious approach is to use a counter and increment if greater, but how would you break this down into subproblems? The logic behind this is understanding that the max profit is built from the maximum difference from the current price and the minimum price.
const maxProfit = function(prices) {
	let maxProfit = 0;
	let minPrice = Infinity;

	for (let i = 0; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		console.log(`min price is ${minPrice}`);
		maxProfit = Math.max(maxProfit, prices[i] - minPrice);
		console.log(`max profit is ${maxProfit} with ${prices[i]} - ${minPrice}`);
	}

	return maxProfit;
};

// So the logic behind this is that we keep track of min and max an the current iteration. The min price will always be the smallest of the numbers passed in the array currently. So there are two separate ways to think of this. You can either think of it as the brute force way with the counters and index, index + 1 approach, or you could think of it as the max profit from any particular instance is the min value from all passed taken from the largest value passed.
