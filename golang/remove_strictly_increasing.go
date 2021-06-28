func canBeIncreasing(nums []int) bool {
	// find first conflict index
	index := -1
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] >= nums[i+1] {
			index = i
		}
	}
	// already strictly increasing
	if index == -1 {
		return true
	}

	// create copies of nums with removed index/index+1
	first, second := make([]int, len(nums)), make([]int, len(nums))
	copy(first, nums)
	copy(second, nums)
	first = append(first[:index], first[index+1:]...)
	second = append(second[:index+1], second[index+2:]...)

	// check if either are valid
	valid := true
	for i := 0; i < len(first)-1; i++ {
		if first[i] >= first[i+1] {
			valid = false
			break
		}
	}
	if valid {
		return true
	}

	for i := 0; i < len(second)-1; i++ {
		if second[i] >= second[i+1] {
			return false
		}
	}

	return true
}