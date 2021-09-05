// brute force
func lengthOfLongestSubstring(s string) int {
	maxLen := 0

	seen := map[byte]bool{}
	for start := 0; start < len(s); start++ {
		seen = map[byte]bool{}
		length := 0
		for end := start; end < len(s); end++ {
			if _, ok := seen[s[end]]; ok {
				if length > maxLen {
					maxLen = length
				}
				break
			}
			seen[s[end]] = true
			length++
		}
	}

	return maxLen
}

// sliding window by char index map
func lengthOfLongestSubstring(s string) int {
	maxLen := 0
	seen := map[byte]int{}
	start, end := 0, 0
	for end < len(s) {
		if index, ok := seen[s[end]]; ok {
			if end-start > maxLen {
				maxLen = end - start
			}

			// remove index map from start to index inclusive
			for start <= index {
				delete(seen, s[start])
				start++
			}
			seen[s[end]] = end

			end++
			continue
		}

		seen[s[end]] = end
		end++
	}
	if end-start > maxLen {
		maxLen = end - start
	}
	return maxLen
}