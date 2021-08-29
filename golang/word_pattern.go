func wordPattern(pattern string, s string) bool {
	seen := map[byte]string{}
	dup := map[string]bool{}

	words := strings.Split(s, " ")

	if len(words) != len(pattern) {
		return false
	}

	for i := 0; i < len(words); i++ {
		// try failure case
		if word, ok := seen[pattern[i]]; !ok {
			// mappings must be distinct
			if _, ok := dup[words[i]]; ok {
				return false
			}

			seen[pattern[i]] = words[i]
			dup[words[i]] = true
		} else {
			if word != words[i] {
				return false
			}
		}
	}

	return true
}