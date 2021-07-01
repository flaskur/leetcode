func countConsistentStrings(allowed string, words []string) int {
	count := 0

	letterMap := make(map[rune]bool, len(allowed))
	for _, letter := range allowed {
		letterMap[letter] = true
	}

	for _, word := range words {
		success := true
		for _, char := range word {
			if _, ok := letterMap[char]; !ok {
				success = false
				break
			}
		}
		if success {
			count++
		}
	}

	return count
}