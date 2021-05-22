package main

// given an array of prices for stocks of ith day, find the maximum profit that you can achieve.
// simply using pointer and taking difference from current and next for profit.
func maxProfit(prices []int) int {
	profit := 0

	for i := 0; i < len(prices)-1; i++ {
		current := prices[i]
		next := prices[i+1]
		if next > current {
			profit += next - current
		}
	}

	return profit
}
