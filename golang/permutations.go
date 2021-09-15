func permute(nums []int) [][]int {
	result := [][]int{}
	seen := map[int]bool{}
	helper(nums, []int{}, &seen, &result)
	return result
}

func helper(nums []int, current []int, seen *map[int]bool, result *[][]int) {
	// base case
	if len(current) == len(nums) {
		// create temp to avoid same underlying array
		temp := make([]int, len(current))
		copy(temp, current)
		*result = append(*result, temp)
		return
	}

	// backtracking
	for _, num := range nums {
		// skip nums that we have already seen
		if _, ok := (*seen)[num]; ok {
			continue
		}

		current = append(current, num)
		(*seen)[num] = true
		helper(nums, current, seen, result)
		current = current[:len(current)-1]
		delete(*seen, num)
	}
}