func replaceDigits(s string) string {
	for i := 1; i < len(s); i += 2 {
		if num, err := strconv.Atoi(string(s[i])); err == nil {
			char := int(s[i-1]) + num // have to convert to int to shift byte

			s = s[:i] + string(rune(char)) + s[i+1:]
		}
	}

	return s
}

// using offset byte
func replaceDigits(s string) string {
	r := []rune(s) // convert bc strings are immutable
	for i := 1; i < len(r); i += 2 {
		r[i] = r[i-1] + (r[i] - '0')
	}
	return string(r)
}