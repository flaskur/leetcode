func reorderSpaces(text string) string {
	spaces := 0
	result := ""
	words := []string{}

	// count spaces
	for _, char := range text {
		if char == ' ' {
			spaces++
		}
	}

	// find words without spaces
	w := strings.Split(text, " ")
	for _, word := range w {
		if word != "" {
			words = append(words, word)
		}
	}

	// edge case
	if len(words) == 1 {
		result = result + words[0]
		for i := 0; i < spaces; i++ {
			result += " "
		}
		return result
	}

	// build result
	between := spaces / (len(words) - 1)
	remainder := spaces % (len(words) - 1)
	for i, word := range words {
		result = result + word
		if i != len(words)-1 {
			for i := 0; i < between; i++ {
				result += " "
			}
		} else {
			for i := 0; i < remainder; i++ {
				result += " "
			}
		}
	}

	return result
}