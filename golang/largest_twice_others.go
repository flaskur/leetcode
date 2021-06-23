func dominantIndex(nums []int) int {
	// edge case
	if len(nums) == 1 {
		return 0
	}

	largestNum, largestIndex := nums[0], 0
	second := -1
	for i := 1; i < len(nums); i++ {
		if nums[i] > largestNum {
			second = largestNum
			largestNum = nums[i]
			largestIndex = i
		} else if nums[i] > second {
			second = nums[i]
		}
	}

	if largestNum >= 2*second {
		return largestIndex
	}
	return -1
}