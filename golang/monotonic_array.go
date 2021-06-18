// monotonic is strictly increasing or decreasing.
func isMonotonic(nums []int) bool {
	valid := true
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] > nums[i+1] {
			valid = false
			break
		}
	}
	if valid {
		return true
	}

	valid = true
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] < nums[i+1] {
			valid = false
			break
		}
	}
	if !valid {
		return false
	}
	return true
}