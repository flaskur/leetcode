func isSubsequence(s string, t string) bool {
	// two pointers, try to progress until i pointer is past s len
	i, j := 0, 0

	for i < len(s) && j < len(t) {
		if s[i] == t[j] {
			i++
		}
		j++
	}

	return i == len(s)
}