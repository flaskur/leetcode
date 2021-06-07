// create the target array given nums and index arrays.
func createTargetArray(nums []int, index []int) []int {
	target := []int{}

	for i := 0; i < len(nums); i++ {
		if index[i] == len(target) {
			target = append(target, nums[i])
		} else {
			target = append(target[:index[i]+1], target[index[i]:]...)
			target[index[i]] = nums[i]
		}
	}

	return target
}