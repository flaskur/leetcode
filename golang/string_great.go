func makeGood(s string) string {
	stack := []rune{}

	for _, char := range s {
		if len(stack) == 0 {
			stack = append(stack, char)
		} else if isSameLetter(stack[len(stack)-1], char) && isOppositeCase(stack[len(stack)-1], char) {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, char)
		}
	}

	return string(stack)
}

func isSameLetter(x rune, y rune) bool {
	return unicode.ToLower(x) == unicode.ToLower(y)
}

func isOppositeCase(x rune, y rune) bool {
	return (unicode.IsLower(x) && unicode.IsUpper(y)) || (unicode.IsLower(y) && unicode.IsUpper(x))
}