// given an integer array sorted in non decreasing order, find the single integer that appears more than 25% of the time.
func findSpecialInteger(arr []int) int {
	freq := map[int]int{}
	for _, num := range arr {
		freq[num]++
	}
	max := -1
	special := -1
	for num, count := range freq {
		if count > max {
			max = count
			special = num
		}
	}

	return special
}