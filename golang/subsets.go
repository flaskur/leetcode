func subsets(nums []int) [][]int {
	result := [][]int{}
	helper(nums, []int{}, 0, &result)
	return result
}

func helper(nums []int, current []int, place int, result *[][]int) {
	// subset means we add to result everytime
	temp := make([]int, len(current))
	copy(temp, current)
	*result = append(*result, temp)

	// base case
	if place == len(nums) {
		return
	}

	// backtrack
	for i := place; i < len(nums); i++ {
		current = append(current, nums[i])
		helper(nums, current, i+1, result)
		current = current[:len(current)-1]
	}
}