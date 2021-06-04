// find the longest common prefix amongst an array of strings
// you should choose the word with the shortest length.
func longestCommonPrefix(strs []string) string {
	prefix := ""

	// better to find the min len among all strings
	minLen := len(strs[0])
	for _, str := range strs {
		if len(str) < minLen {
			minLen = len(str)
		}
	}
	if minLen == 0 {
		return prefix
	}

	for pos := 0; pos < minLen; pos++ {
		char := strs[0][pos]

		for _, str := range strs {
			if str[pos] != char {
				return prefix
			}
		}

		prefix += string(char)

		if pos == minLen-1 {
			return prefix
		}
	}

	return prefix
}