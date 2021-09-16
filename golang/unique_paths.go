func uniquePaths(m int, n int) int {
	paths := 0
	helper(m, n, 1, 1, &paths)
	return paths
}

// times out
func helper(m int, n int, y int, x int, paths *int) {
	// base case
	if y == m && x == n {
		(*paths)++
		return
	}

	// avoid bound issues
	if y != m {
		helper(m, n, y+1, x, paths)
	}
	if x != n {
		helper(m, n, y, x+1, paths)
	}
}

// dynamic programming
func uniquePaths(m int, n int) int {
	// the paths for any arbitary spot is the sum of paths for x-1 and y-1 if not on bound
	dp := make([][]int, m)
	for i := 0; i < m; i++ {
		dp[i] = make([]int, n)
	}

	// init
	for row := 0; row < m; row++ {
		dp[row][0] = 1
	}
	for col := 0; col < n; col++ {
		dp[0][col] = 1
	}

	// sum left and up spots
	for row := 1; row < m; row++ {
		for col := 1; col < n; col++ {
			dp[row][col] = dp[row][col-1] + dp[row-1][col]
		}
	}

	return dp[m-1][n-1]
}