func uniqueMorseRepresentations(words []string) int {
	table := [26]string{
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	}
	patterns := map[string]bool{}

	for _, word := range words {
		code := ""
		for _, letter := range word {
			code += table[letter-'a']
		}
		patterns[code] = true
	}

	return len(patterns)
}