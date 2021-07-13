func findLHS(nums []int) int {
	freq := map[int]int{}
	for _, num := range nums {
		freq[num]++
	}

	result := 0
	for _, num := range nums {
		if count, ok := freq[num+1]; ok {
			result = max(result, freq[num]+count)
		}
	}

	return result
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}