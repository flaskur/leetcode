func numOfStrings(patterns []string, word string) int {
	count := 0
	for _, pattern := range patterns {
		for i := 0; i <= len(word)-len(pattern); i++ {
			if word[i:i+len(pattern)] == pattern {
				count++
				break
			}
		}
	}
	return count
}