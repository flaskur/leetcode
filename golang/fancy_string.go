func makeFancyString(s string) string {
	count := 0
	sb := strings.Builder{}
	for i, char := range s {
		if i > 0 && char == rune(s[i-1]) {
			count++
		} else {
			count = 1
		}

		if count <= 2 {
			sb.WriteRune(char)
		}
	}

	return sb.String()
}