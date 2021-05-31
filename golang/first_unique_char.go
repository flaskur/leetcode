// given a string, return the first non repeating character in it and return its index, if it doesn't exist return -1.
// create a count hash map, populate, iterate and check for count == 1.
func firstUniqChar(s string) int {
	countMap := map[rune]int{}

	// populate count map
	for _, char := range s {
		_, ok := countMap[char]
		if ok {
			countMap[char] += 1
		} else {
			countMap[char] = 1
		}
	}

	// iterate string again and check count
	for i, char := range s {
		count := countMap[char]
		if count == 1 {
			return i
		}
	}

	return -1
}