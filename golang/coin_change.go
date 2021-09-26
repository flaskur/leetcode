func coinChange(coins []int, amount int) int {
	// init dp to positive to minimize
	dp := make([]int, amount+1)
	dp[0] = 0
	for i := 1; i < len(dp); i++ {
		dp[i] = math.MaxInt32
	}

	// find min between current and taking the coin and prev amount
	for _, coin := range coins {
		for i := 1; i < len(dp); i++ {
			// avoid index out of bound
			if i >= coin {
				dp[i] = min(dp[i], dp[i-coin]+1)
			}
		}
	}

	if dp[amount] == math.MaxInt32 {
		return -1
	}
	return dp[amount]
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}