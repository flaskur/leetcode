func maxLengthBetweenEqualCharacters(s string) int {
	maxLen := -1
	for left := 0; left < len(s)-1; left++ {
		for right := left + 1; right < len(s); right++ {
			if s[left] == s[right] {
				maxLen = max(maxLen, right-left-1)
			}
		}
	}
	return maxLen
}

// using map to reference last index of character
func maxLengthBetweenEqualCharacters(s string) int {
	maxLen := -1
	seen := map[rune]int{}
	for index, char := range s {
		// only set index on first occurrence
		if _, ok := seen[char]; !ok {
			seen[char] = index
		} else {
			maxLen = max(maxLen, index-seen[char]-1)
		}
	}
	return maxLen
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}