func isIsomorphic(s string, t string) bool {
	// edge case
	if len(s) != len(t) {
		return false
	}

	// create map reference
	iso := map[rune]rune{}
	taken := map[rune]bool{}
	for i := 0; i < len(s); i++ {
		if _, ok := iso[rune(s[i])]; !ok {
			// taken by another char
			if _, ok := taken[rune(t[i])]; ok {
				return false
			}

			iso[rune(s[i])] = rune(t[i])
			taken[rune(t[i])] = true
		}
	}

	// overwrite s using map
	for i, char := range s {
		s = s[:i] + string(iso[char]) + s[i+1:]
	}

	return s == t
}