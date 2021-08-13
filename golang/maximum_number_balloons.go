func maxNumberOfBalloons(text string) int {
	// create frequency map for each char
	freq := map[rune]int{}
	for _, char := range text {
		freq[char]++
	}

	count := 0
	for {
		// break when it fails
		if freq['b'] >= 1 && freq['a'] >= 1 && freq['l'] >= 2 && freq['o'] >= 2 && freq['n'] >= 1 {
			count++
			freq['b']--
			freq['a']--
			freq['l'] -= 2
			freq['o'] -= 2
			freq['n']--
		} else {
			break
		}
	}

	return count
}