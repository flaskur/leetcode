// given array of integers, return num of good pairs, where nums[i] == nums[j] and i < j.
func numIdenticalPairs(nums []int) int {
	pairs := 0

	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				pairs++
			}
		}
	}

	return pairs
}