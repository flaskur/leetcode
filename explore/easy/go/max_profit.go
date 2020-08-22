package main

// Given a prices array where ith element is the price of the day, find the maximum profit.
// One approach is to iterate through the entire array and only add profit amount if the difference is positive from i+1 - i element.
func maxProfit(prices []int) int {
	profit := 0

	for index := 0; index < len(prices)-1; index++ {
		if prices[index+1] > prices[index] {
			profit += prices[index+1] - prices[index]
		}
	}

	return profit
}
