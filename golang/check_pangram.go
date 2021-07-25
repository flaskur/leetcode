func checkIfPangram(sentence string) bool {
	if len(sentence) < 26 {
		return false
	}
	count := 0
	seen := map[rune]bool{}

	for _, char := range sentence {
		// if you haven't seen it, then add to count
		if _, ok := seen[char]; !ok {
			count++
		}
		// mark as seen to avoid duplicate
		seen[char] = true
	}

	return count == 26
}