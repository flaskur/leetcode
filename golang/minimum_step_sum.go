// given an array of nums, find the starting value such that the step by step sum is never less than 1.
func minStartValue(nums []int) int {
	min := 100
	stepSum := 0
	for _, num := range nums {
		stepSum += num
		if stepSum < min {
			min = stepSum
		}
	}

	val := 1 - min
	if val < 1 {
		return 1
	}
	return val
}