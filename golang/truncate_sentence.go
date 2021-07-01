func truncateSentence(s string, k int) string {
	for index, letter := range s {
		if letter == ' ' {
			k--
		}
		if k == 0 {
			return s[:index]
		}
	}
	return s
}

func truncateSentence(s string, k int) string {
	words := strings.Split(s, " ")
	words = words[:k]
	return strings.Join(words, " ")
}