func longestPalindrome(s string) int {
	freq := map[rune]int{}
	len := 0
	foundOdd := false

	for _, char := range s {
		freq[char]++
	}

	// find all pairs
	for _, count := range freq {
		len += 2 * (count / 2)
		if count%2 == 1 {
			foundOdd = true
		}
	}

	if foundOdd {
		len++
	}

	return len
}