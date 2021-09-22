func findAnagrams(s string, p string) []int {
	// anagrams must have the same len --> sliding window

	// edge case
	if len(p) > len(s) {
		return []int{}
	}

	// setup freq map for anagram pattern
	freq := map[rune]int{}
	for _, char := range p {
		freq[char]++
	}

	// setup window
	window := map[rune]int{}
	for i := range p {
		window[rune(s[i])]++
	}

	result := []int{}
	for i := 0; i <= len(s)-len(p); i++ {
		// check that window range matches anagram pattern
		valid := true
		for char, count := range window {
			if count != freq[char] {
				valid = false
				break
			}
		}
		if valid {
			result = append(result, i)
		}

		// move window by 1 space if not last window
		if i != len(s)-len(p) {
			window[rune(s[i])]--
			window[rune(s[i+len(p)])]++
		}
	}

	return result
}