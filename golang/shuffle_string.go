func restoreString(s string, indices []int) string {
	str := make([]byte, len(s))

	for i := 0; i < len(s); i++ {
		str[indices[i]] = s[i]
	}

	return string(str)
}