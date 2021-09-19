func dailyTemperatures(temperatures []int) []int {
	result := make([]int, len(temperatures))
	stack := []int{}

	for i := 0; i < len(temperatures); i++ {
		// keep popping until current temp is no longer greater than top
		for len(stack) != 0 && temperatures[i] > stack[len(stack)-1] {
			index := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			result[index] = i - index
		}
		stack = append(stack, i)
	}

	return result
}