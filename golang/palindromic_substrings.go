func countSubstrings(s string) int {
	result := 0

	for i := 0; i < len(s); i++ {
		// palindrome can be either even or odd
		helper(s, i, i, 0, &result)
		if i != len(s)-1 && s[i] == s[i+1] {
			helper(s, i, i+1, 0, &result)
		}
	}

	return result
}

func helper(s string, start int, end int, count int, result *int) {
	// base case
	if start < 0 || end > len(s)-1 || s[start] != s[end] {
		*result += count
		return
	}

	count++
	helper(s, start-1, end+1, count, result)
}