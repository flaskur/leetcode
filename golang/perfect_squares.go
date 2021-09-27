func numSquares(n int) int {
	// 18 is 9+9, you cannot prioritize immediately greatest square bc 16+1+1 goes to 3
	// assuming it's a dynamic programming problem, we know that the end goal is dp[n], the minimum number of squares to sum to n
	// dp[0] should be 0 because it takes 0 squares to sum to 0
	// dp[1] should be 1 if it takes square of 1 => what squares do i check? the squares must be less than or equal to n
	// in the case of 12, you should only check 1, 4, 9 -> you check 3 but not 4. take sqrt of 12 and note that it's between 3 and 4 hence you check up to 3
	// dp[2] should be 2 if you take dp[1] plus 1 goes to 2. so it's dp[i] = min(dp[i-square]+1, dp[i])

	dp := make([]int, n+1)
	dp[0] = 0
	for i := 1; i < len(dp); i++ {
		dp[i] = math.MaxInt32
	}

	for i := 1; i <= n; i++ {
		// check all squares less than or equal to i
		bound := int(math.Sqrt(float64(i)))
		for root := 1; root <= bound; root++ {
			square := root * root
			dp[i] = min(dp[i], dp[i-square]+1)
		}
	}

	return dp[n]
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}