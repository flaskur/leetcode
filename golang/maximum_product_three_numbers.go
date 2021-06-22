func maximumProduct(nums []int) int {
	sort.Ints(nums)
	// to maximize product you either need two negatives * one positive, or all positives
	left := nums[0] * nums[1] * nums[len(nums)-1]
	right := nums[len(nums)-1] * nums[len(nums)-2] * nums[len(nums)-3]
	return max(left, right)
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}