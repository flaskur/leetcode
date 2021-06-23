func check(nums []int) bool {
	// find all indices for min value
	indices := []int{0}
	min := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] < min {
			min = nums[i]
			indices = []int{i}
		} else if nums[i] == min {
			indices = append(indices, i)
		}
	}

	// check if indices are sequential
	minIndex := indices[0]
	for i := 0; i < len(indices)-1; i++ {
		// not sequential, new minIndex is start of break
		if indices[i]+1 != indices[i+1] {
			minIndex = indices[i+1]
			break
		}
	}

	// iterate through element length and check for any failures
	current := nums[minIndex]
	for j := minIndex; j < minIndex+len(nums); j++ {
		index := j % len(nums)
		if nums[index] < current {
			return false
		}
		current = nums[index]
	}
	return true
}