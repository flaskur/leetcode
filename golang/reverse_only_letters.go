func reverseOnlyLetters(s string) string {
	left, right := 0, len(s)-1
	for left < right {
		if unicode.IsLetter(rune(s[left])) && unicode.IsLetter(rune(s[right])) {
			// strings are immutable
			s = s[:left] + string(s[right]) + s[left+1:right] + string(s[left]) + s[right+1:]
			left++
			right--
		} else if unicode.IsLetter(rune(s[left])) {
			right--
		} else if unicode.IsLetter(rune(s[right])) {
			left++
		} else {
			left++
			right--
		}
	}
	return s
}