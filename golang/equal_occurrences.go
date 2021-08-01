func areOccurrencesEqual(s string) bool {
	freq := map[byte]int{}
	for i := 0; i < len(s); i++ {
		freq[s[i]]++
	}

	setFreq := freq[s[0]]
	for _, count := range freq {
		if count != setFreq {
			return false
		}
	}
	return true
}