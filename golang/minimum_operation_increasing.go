// given an integer array, return min number of +1 operations to make the array strictly increasing.
func minOperations(nums []int) int {
	operations := 0

	for i := 0; i < len(nums)-1; i++ {
		if nums[i] >= nums[i+1] {
			difference := nums[i] - nums[i+1]
			nums[i+1] += difference + 1
			operations += difference + 1
		}
	}

	return operations
}