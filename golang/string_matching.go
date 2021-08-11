func stringMatching(words []string) []string {
	subs := map[string]bool{}
	for i := 0; i < len(words); i++ {
		for j := 0; j < len(words); j++ {
			if validSubstring(words[i], words[j]) {
				subs[words[j]] = true
			}
		}
	}

	// populate substrings from hash set to avoid duplicates
	substrings := []string{}
	for sub := range subs {
		substrings = append(substrings, sub)
	}
	return substrings
}

func validSubstring(word string, sub string) bool {
	// implies that substring is smaller in len than word
	if len(sub) >= len(word) {
		return false
	}

	// keep checking each start point until it succeeds or goes through all possibilities considering length
	// start pointer for word until <= len(word) - len(sub)
	for start := 0; start <= len(word)-len(sub); start++ {
		fail := false

		// if not match, then move to next char
		if word[start] != sub[0] {
			continue
		} else {
			// passing this for loop means successful substring
			for i := 0; i < len(sub); i++ {
				// failure case mean that it should go to outer loop
				if word[start+i] != sub[i] {
					fail = true
					break
				}
			}
			if !fail {
				fmt.Println(word, sub, "success")
				return true
			}
		}
	}

	return false
}