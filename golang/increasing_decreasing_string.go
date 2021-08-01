func sortString(s string) string {
	buckets := [26]int{} // freq map
	for _, char := range s {
		buckets[char-'a']++
	}

	result := []byte{}
	count := 0 // could use len(result) instead
	for count < len(s) {
		// increasing
		for i := 0; i < 26; i++ {
			if buckets[i] > 0 {
				result = append(result, byte(i+'a'))
				buckets[i]--
				count++
			}
		}
		// decreasing
		for i := 25; i >= 0; i-- {
			if buckets[i] > 0 {
				result = append(result, byte(i+'a'))
				buckets[i]--
				count++
			}
		}
	}

	return string(result)
}