func reverseVowels(s string) string {
	x := []rune(s)
	i, j := 0, len(x)-1
	for i < j {
		if isVowel(x[i]) && isVowel(x[j]) {
			x[i], x[j] = x[j], x[i]
			i++
			j--
		} else if isVowel(x[i]) {
			j--
		} else if isVowel(x[j]) {
			i++
		} else {
			i++
			j--
		}
	}

	return string(x)
}

func isVowel(x rune) bool {
	if unicode.ToLower(x) == 'a' || unicode.ToLower(x) == 'e' || unicode.ToLower(x) == 'i' || unicode.ToLower(x) == 'o' || unicode.ToLower(x) == 'u' {
		return true
	}
	return false
}