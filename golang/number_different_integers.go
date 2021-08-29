func numDifferentIntegers(word string) int {
	re := regexp.MustCompile("[a-z]")
	split := re.Split(word, -1)

	seen := map[string]bool{}
	for _, s := range split {
		if s != "" {
			s = strings.TrimLeft(s, "0")
			seen[s] = true
		}
	}

	return len(seen)
}