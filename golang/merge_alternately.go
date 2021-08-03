func mergeAlternately(word1 string, word2 string) string {
	i, j := 0, 0
	alt := []byte{}

	// both exist, alternate order
	for i < len(word1) && j < len(word2) {
		alt = append(alt, word1[i], word2[j])
		i++
		j++
	}

	// fill remaining
	for i < len(word1) {
		alt = append(alt, word1[i])
		i++
	}
	for j < len(word2) {
		alt = append(alt, word2[j])
		j++
	}

	return string(alt)
}