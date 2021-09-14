func jump(nums []int) int {
	// initialize all jumps except index 0 to max int
	dp := make([]int, len(nums))
	for i := 1; i < len(dp); i++ {
		dp[i] = math.MaxInt32
	}

	// for each index, we need to fill in the step indices and minimize
	for i := 0; i < len(dp)-1; i++ {
		for steps := 1; steps <= nums[i]; steps++ {
			if i+steps >= len(nums) {
				break
			}
			dp[i+steps] = min(dp[i+steps], dp[i]+1)
		}
	}
	return dp[len(dp)-1]
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}