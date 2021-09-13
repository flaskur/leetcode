func combinationSum(candidates []int, target int) [][]int {
	result := [][]int{}
	helper(candidates, target, []int{}, 0, 0, &result)
	return result
}

func helper(candidates []int, target int, current []int, place int, sum int, result *[][]int) {
	if sum > target {
		return
	}
	if sum == target {
		temp := make([]int, len(current))
		copy(temp, current)
		*result = append(*result, temp)
		return
	}

	for index := place; index < len(candidates); index++ {
		current = append(current, candidates[index])
		helper(candidates, target, current, index, sum+candidates[index], result)
		current = current[:len(current)-1]
	}
}