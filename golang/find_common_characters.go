// given an array of words, return a list of all characters that show up in all strings in list including duplicates.
func commonChars(words []string) []string {
	maps := make([]map[rune]int, len(words))

	for i, word := range words {
		countMap := map[rune]int{}
		for _, char := range word {
			countMap[char]++
		}
		maps[i] = countMap
	}

	result := []string{}

	for char, count := range maps[0] {
		minCount := count
		for i := 1; i < len(words); i++ {
			if maps[i][char] < minCount {
				minCount = maps[i][char]
			}
		}

		for i := 0; i < minCount; i++ {
			result = append(result, string(char))
		}
	}

	return result
}