func arrayStringsAreEqual(word1 []string, word2 []string) bool {
	x, y := strings.Join(word1, ""), strings.Join(word2, "")
	return x == y
}