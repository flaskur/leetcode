func findLengthOfLCIS(nums []int) int {
	longest, current := 1, 1
	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[i-1] {
			current++
		} else {
			if current > longest {
				longest = current
			}
			current = 1
		}
	}
	if current > longest {
		longest = current
	}
	return longest
}