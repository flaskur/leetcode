func longestNiceSubstring(s string) string {
	// base case
	if len(s) < 2 {
		return ""
	}

	// char hash set
	chars := map[rune]bool{}
	for _, char := range s {
		chars[char] = true
	}

	// try to find a failure
	for i, char := range s {
		// keep moving on success
		_, ok := chars[unicode.ToLower(char)]
		_, ok2 := chars[unicode.ToUpper(char)]
		if ok && ok2 {
			continue
		}

		// divide and conquer if invalid char
		s1 := longestNiceSubstring(s[:i])
		s2 := longestNiceSubstring(s[i+1:])
		if len(s1) >= len(s2) {
			return s1
		} else {
			return s2
		}
	}

	return s
}