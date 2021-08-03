func canBeTypedWords(text string, brokenLetters string) int {
	count := 0
	broken := map[rune]bool{}

	// populate broken letters to hash set
	for _, letter := range brokenLetters {
		broken[letter] = true
	}

	words := strings.Split(text, " ")
	for _, word := range words {
		// check if any letter in word in broken
		broke := false
		for _, letter := range word {
			if _, ok := broken[letter]; ok {
				broke = true
				break
			}
		}

		if !broke {
			count++
		}
	}

	return count
}