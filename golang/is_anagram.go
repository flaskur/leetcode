// given two strings, return true if they are anagrams
// create a count hash map for each char, then iterate through to check that all counts are 0.
func isAnagram(s string, t string) bool {
	countMap := make(map[rune]int)

	// iterate and count first string
	for _, char := range s {
		if _, ok := countMap[char]; !ok {
			countMap[char] = 1
		} else {
			countMap[char] += 1
		}
	}

	// iterate and reduce count second string
	for _, char := range t {
		if _, ok := countMap[char]; !ok {
			return false
		} else {
			countMap[char] -= 1
		}
	}

	// check that all char counts are 0
	for _, count := range countMap {
		if count != 0 {
			return false
		}
	}

	return true
}