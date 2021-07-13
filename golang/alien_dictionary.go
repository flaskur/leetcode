func isAlienSorted(words []string, order string) bool {
	// map alien chars from order
	dict := make(map[rune]int, len(order))
	for i, char := range order {
		dict[char] = i
	}

	// compare each word pairwise for failure
	for i := 0; i < len(words)-1; i++ {
		if !isOrdered(words[i], words[i+1], dict) {
			return false
		}
	}

	return true
}

func isOrdered(s string, t string, dict map[rune]int) bool {
	if s == t {
		return true
	}

	i := 0
	for i < len(s) && i < len(t) {
		// failure case
		if dict[rune(s[i])] > dict[rune(t[i])] {
			return false
		} else if dict[rune(s[i])] < dict[rune(t[i])] {
			return true
		}
		i++
	}

	// compare which string is completed/blank
	if i == len(s) {
		return true
	} else {
		return false
	}
}