func halvesAreAlike(s string) bool {
	// make hash set for vowel reference
	str := []rune("aeiou")
	vowels := make(map[rune]bool, len(str))
	for _, v := range str {
		vowels[v] = true
	}

	// check first half
	count := 0
	for i := 0; i < len(s)/2; i++ {
		if _, ok := vowels[unicode.ToLower(rune(s[i]))]; ok {
			count++
		}
	}

	// check second half
	for i := len(s) / 2; i < len(s); i++ {
		if _, ok := vowels[unicode.ToLower(rune(s[i]))]; ok {
			count--
		}
	}

	return count == 0
}