func groupAnagrams(strs []string) [][]string {
	result := [][]string{}
	lexico := make(map[string][]string)

	// sort each string and add to map key value list if matching
	for _, str := range strs {
		sorted := sortString(str)
		lexico[sorted] = append(lexico[sorted], str)
	}

	// copy to return result
	for _, list := range lexico {
		result = append(result, list)
	}

	return result
}

func sortString(str string) string {
	s := strings.Split(str, "")
	sort.Strings(s)
	return strings.Join(s, "")
}

func groupAnagrams(strs []string) [][]string {
	// instead of using the sorted string as a key, use the character counts in bucket sort
	result := [][]string{}
	lexico := map[string][]string{}

	for _, str := range strs {
		buckets := [26]int{}
		for _, char := range str {
			buckets[char-'a']++
		}

		// create key using char count
		var key strings.Builder
		for i := 0; i < 26; i++ {
			key.WriteRune('X') // need separator to discern char count
			key.WriteString(fmt.Sprint(buckets[i]))
		}

		// populate anagram groups
		k := key.String()
		lexico[k] = append(lexico[k], str)
	}

	// populate result format
	for _, words := range lexico {
		result = append(result, words)
	}

	return result
}