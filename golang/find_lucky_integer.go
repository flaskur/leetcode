// given an array of integers, find the largest lucky integer which is an integer whose value matches its frequency.
func findLucky(arr []int) int {
	freq := map[int]int{}
	for _, num := range arr {
		freq[num]++
	}

	luckyNums := []int{}
	for _, num := range arr {
		if num == freq[num] {
			luckyNums = append(luckyNums, num)
		}
	}

	if len(luckyNums) == 0 {
		return -1
	}

	sort.Ints(luckyNums)
	return luckyNums[len(luckyNums)-1]
}