// given array consisting of 2n elements, return the array in the shuffled order.
func shuffle(nums []int, n int) []int {
	result := []int{}

	i, j := 0, n

	for i < n && j < 2*n {
		result = append(result, nums[i], nums[j])
		i++
		j++
	}

	return result
}