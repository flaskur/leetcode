func maxSubArray(nums []int) int {
	dp := make([]int, len(nums))
	dp[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		// choice to either include the prev max, or keep current num
		dp[i] = max(nums[i], dp[i-1]+nums[i])
	}

	sum := dp[0]
	for i := 1; i < len(dp); i++ {
		if dp[i] > sum {
			sum = dp[i]
		}
	}
	return sum
}
func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}