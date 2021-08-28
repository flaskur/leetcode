func maxRepeating(sequence string, word string) int {
	maxK := 0

	for index := 0; index <= len(sequence)-len(word); index++ {
		// check how many times it repeats
		k := 0
		for j := index; j <= len(sequence)-len(word); j += len(word) {
			valid := true
			for offset := 0; offset < len(word); offset++ {
				// failure case
				if sequence[j+offset] != word[offset] {
					valid = false
					break
				}
			}
			// if it is valid, then we need to check next sub, otherwise move to next start index
			if valid {
				k++
			} else {
				break
			}
		}

		if k > maxK {
			maxK = k
		}
	}

	return maxK
}