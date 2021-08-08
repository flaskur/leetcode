func uncommonFromSentences(s1 string, s2 string) []string {
	words := map[string]bool{}
	first := map[string]bool{}
	second := map[string]bool{}
	common := map[string]bool{}

	firstWords := strings.Split(s1, " ")
	for _, word := range firstWords {
		if _, ok := first[word]; ok {
			common[word] = true
		}
		first[word] = true
		words[word] = true
	}
	secondWords := strings.Split(s2, " ")
	for _, word := range secondWords {
		if _, ok := second[word]; ok {
			common[word] = true
		}
		second[word] = true
		words[word] = true
	}

	// remove instances of common from words
	for word := range first {
		if _, ok := second[word]; ok {
			delete(words, word)
		}
	}
	for word := range common {
		delete(words, word)
	}

	// build response
	uncommon := []string{}
	for word := range words {
		uncommon = append(uncommon, word)
	}
	return uncommon
}