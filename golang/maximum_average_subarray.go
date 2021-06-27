func findMaxAverage(nums []int, k int) float64 {
	// initialize
	sum := 0
	for i := 0; i < k; i++ {
		sum += nums[i]
	}
	maxAverage := float64(sum) / float64(k)

	// slide window sum
	for i := 1; i <= len(nums)-k; i++ {
		sum = sum - nums[i-1] + nums[i-1+k]
		average := float64(sum) / float64(k)
		if average > maxAverage {
			maxAverage = average
		}
	}
	return maxAverage
}