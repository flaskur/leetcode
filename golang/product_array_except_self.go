func productExceptSelf(nums []int) []int {
	// use result as storage for left/right products
	result := make([]int, len(nums))

	// calculate left products for each number
	left := 1
	for i := 0; i < len(nums); i++ {
		if i > 0 {
			left *= nums[i-1]
		}
		result[i] = left
	}

	// calculate right products
	right := 1
	for i := len(nums) - 1; i >= 0; i-- {
		if i < len(nums)-1 {
			right *= nums[i+1]
		}
		result[i] *= right
	}

	return result
}