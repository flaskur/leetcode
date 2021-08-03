func reverseWords(s string) string {
	// split by single white space, then reverse each word and populate back into string slice, finally join
	reverse := []string{}
	words := strings.Split(s, " ")
	for _, word := range words {
		// reverse the word
		word := []byte(word)
		i := 0
		for i < len(word)/2 {
			// swap operation
			word[i], word[len(word)-1-i] = word[len(word)-1-i], word[i]
			i++
		}

		// add reversed word final
		reverse = append(reverse, string(word))
	}

	return strings.Join(reverse, " ")
}