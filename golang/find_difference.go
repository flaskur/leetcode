func findTheDifference(s string, t string) byte {
	bucket := [26]int{}

	// cancel out common letters
	for _, char := range s {
		bucket[char-'a']++
	}
	for _, char := range t {
		bucket[char-'a']--
	}

	// find odd char out
	for i := 0; i < 26; i++ {
		if bucket[i] != 0 {
			return byte(i + 97)
		}
	}

	return 'a'
}