func lengthOfLastWord(s string) int {
	words := strings.Split(s, " ")
	j := len(words) - 1
	for j >= 0 {
		if words[j] != "" {
			return len(words[j])
		}
		j--
	}
	return 0
}