func uniqueOccurrences(arr []int) bool {
	freq := map[int]int{}
	seen := map[int]bool{}
	for _, num := range arr {
		freq[num]++
	}

	for _, f := range freq {
		if _, ok := seen[f]; ok {
			return false
		}
		seen[f] = true
	}

	return true
}