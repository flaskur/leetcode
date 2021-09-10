func nextPermutation(nums []int) {
	// if there is no number such that nums[i+1] > nums[i], then it is always decreasing, so just reverse the array
	first, second := -1, -1

	// find the largest index such that nums[i+1] > nums[i]
	for i := len(nums) - 2; i >= 0; i-- {
		if nums[i] < nums[i+1] {
			first = i
			break
		}
	}

	// if none ascending, reverse array
	if first == -1 {
		nums = reverse(nums)
		return
	}

	// find the largest index that is greater than first and greater value --> guaranteed to exist because ascending
	for i := len(nums) - 1; i > first; i-- {
		if nums[i] > nums[first] {
			second = i
			break
		}
	}

	// swap the indices
	nums[first], nums[second] = nums[second], nums[first]

	// reverse the subset after first index
	nums = append(nums[:first+1], reverse(nums[first+1:])...)
}

func reverse(nums []int) []int {
	for i := 0; i < len(nums)/2; i++ {
		nums[i], nums[len(nums)-1-i] = nums[len(nums)-1-i], nums[i]
	}
	return nums
}