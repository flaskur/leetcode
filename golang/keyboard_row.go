func findWords(words []string) []string {
	// populate hash sets
	first, second, third := "qwertyuiop", "asdfghjkl", "zxcvbnm"
	firstRow, secondRow, thirdRow := map[rune]bool{}, map[rune]bool{}, map[rune]bool{}
	for _, char := range first {
		firstRow[char] = true
	}
	for _, char := range second {
		secondRow[char] = true
	}
	for _, char := range third {
		thirdRow[char] = true
	}

	result := []string{}
	for _, word := range words {
		// assume success flag and determine row based on first char
		success := true
		key := unicode.ToLower(rune(word[0]))
		row := -1
		if _, ok := firstRow[key]; ok {
			row = 1
		} else if _, ok := secondRow[key]; ok {
			row = 2
		} else if _, ok := thirdRow[key]; ok {
			row = 3
		}

		// check that all chars in word are in same row
		for _, char := range word {
			char = unicode.ToLower(char) // case insensitive

			if row == 1 {
				if _, ok := firstRow[char]; !ok {
					success = false
					break
				}
			} else if row == 2 {
				if _, ok := secondRow[char]; !ok {
					success = false
					break
				}
			} else if row == 3 {
				if _, ok := thirdRow[char]; !ok {
					success = false
					break
				}
			}
		}

		if success {
			result = append(result, word)
		}
	}

	return result
}