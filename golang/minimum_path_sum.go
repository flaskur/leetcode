func minPathSum(grid [][]int) int {
	dp := make([][]int, len(grid))
	for i := 0; i < len(grid); i++ {
		dp[i] = make([]int, len(grid[0]))
	}

	// init dp borders
	dp[0][0] = grid[0][0]
	for row := 1; row < len(grid); row++ {
		dp[row][0] = grid[row][0] + dp[row-1][0]
	}
	for col := 1; col < len(grid[0]); col++ {
		dp[0][col] = grid[0][col] + dp[0][col-1]
	}

	// dynamic step
	for row := 1; row < len(grid); row++ {
		for col := 1; col < len(grid[row]); col++ {
			dp[row][col] = grid[row][col] + min(dp[row][col-1], dp[row-1][col])
		}
	}

	// return bottom right corner
	return dp[len(dp)-1][len(dp[0])-1]
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}