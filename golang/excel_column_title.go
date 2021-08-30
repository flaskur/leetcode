func convertToTitle(columnNumber int) string {
	sb := strings.Builder{}

	for columnNumber > 0 {
		columnNumber--
		remainder := columnNumber % 26
		columnNumber /= 26
		sb.WriteRune(rune(remainder + 'A'))
	}

	s := []rune(sb.String())

	for i := 0; i < len(s)/2; i++ {
		s[i], s[len(s)-1-i] = s[len(s)-1-i], s[i]
	}

	return string(s)
}