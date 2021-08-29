func countSegments(s string) int {
	words := strings.Split(s, " ")
	count := 0
	for _, word := range words {
		if !strings.Contains(word, " ") && word != "" {
			count++
		}
	}
	return count
}