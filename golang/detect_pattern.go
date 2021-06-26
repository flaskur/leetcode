func containsPattern(arr []int, m int, k int) bool {
	// edge case
	if m > len(arr) {
		return false
	}

	patternMax := 0

	for start := 0; start <= len(arr)-m; start++ {
		pattern := arr[start : start+m]
		patternCount := 1

		// candidates for pattern match
		point := start + m
		for point <= len(arr)-m {
			// check if the pattern matches
			success := true
			for offset := 0; offset < m; offset++ {
				if pattern[offset] != arr[point+offset] {
					success = false
					break
				}
			}
			if !success {
				break
			}
			patternCount++
			point += m
		}

		if patternCount > patternMax {
			patternMax = patternCount
		}
	}

	return patternMax >= k
}