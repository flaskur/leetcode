func removeOuterParentheses(s string) string {
	count := 0

	i := 0
	for i < len(s) {
		// don't increment if you remove char
		if s[i] == '(' {
			if count == 0 {
				s = s[:i] + s[i+1:]
			} else {
				i++
			}
			count++
		} else if s[i] == ')' {
			count--
			if count == 0 {
				s = s[:i] + s[i+1:]
			} else {
				i++
			}
		}
	}

	return s
}