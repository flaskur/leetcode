// given an array of prices and when you buy an item you get a discount for the price of the next item less than current, return all prices for all discounted items.
func finalPrices(prices []int) []int {
	for i := 0; i < len(prices)-1; i++ {
		discount := 0
		for j := i + 1; j < len(prices); j++ {
			if prices[j] <= prices[i] {
				discount = prices[j]
				break
			}
		}
		prices[i] -= discount
	}

	return prices
}