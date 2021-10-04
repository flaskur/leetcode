func rob(nums []int) int {
	dp := make([]int, len(nums)+1)
	dp[0] = 0
	dp[1] = nums[0]

	for i := 2; i < len(dp); i++ {
		// either rob this house and avoid robbing prev house or rob prev house
		dp[i] = max(dp[i-2]+nums[i-1], dp[i-1])
	}

	return dp[len(dp)-1]
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}