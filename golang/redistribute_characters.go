func makeEqual(words []string) bool {
	// infinite operations means you just need to count chars
	freq := map[rune]int{}
	for _, word := range words {
		for _, char := range word {
			freq[char]++
		}
	}

	// each must be divisible by len words
	for _, count := range freq {
		if count%len(words) != 0 {
			return false
		}
	}

	return true
}