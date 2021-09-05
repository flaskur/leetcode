func longestPalindrome(s string) string {
	if len(s) < 2 {
		return s
	}

	maxLen, begin := 0, 0
	for i := 0; i < len(s)-1; i++ {
		helper(s, i, i, &maxLen, &begin)   // assume odd
		helper(s, i, i+1, &maxLen, &begin) // assume even
	}

	return s[begin : begin+maxLen]
}

func helper(s string, start int, end int, maxLen *int, begin *int) {
	for start >= 0 && end < len(s) && s[start] == s[end] {
		start--
		end++
	}

	length := end - start - 1 // exclusive start end bounds
	if length > *maxLen {
		*maxLen = length
		*begin = start + 1
	}
}