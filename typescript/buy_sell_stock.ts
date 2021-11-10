function maxProfit(prices: number[]): number {
	let profit = 0
	let min = prices[0]

	for (let i = 1; i < prices.length; i++) {
		let diff = prices[i] - min
		if (diff > profit) profit = diff
		if (prices[i] < min) {
			min = prices[i]
		}
	}

	return profit
}
