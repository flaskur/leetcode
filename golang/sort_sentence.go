func sortSentence(s string) string {
	order := strings.Split(s, " ")

	words := make([]string, len(order))
	for _, word := range order {
		// find placement index
		num := string(word[len(word)-1]) // access byte which is int32, then cast back to string
		if index, err := strconv.Atoi(num); err == nil {
			words[index-1] = word[:len(word)-1]
		}
	}

	return strings.Join(words, " ")
}