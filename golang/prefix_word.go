func isPrefixOfWord(sentence string, searchWord string) int {
	sen := strings.Split(sentence, " ")
	for i, word := range sen {
		if validPrefix(word, searchWord) {
			return i + 1
		}
	}
	return -1
}

func validPrefix(word string, prefix string) bool {
	if len(prefix) > len(word) {
		return false
	}
	for i := 0; i < len(prefix); i++ {
		if word[i] != prefix[i] {
			return false
		}
	}
	return true
}