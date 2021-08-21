func canConstruct(ransomNote string, magazine string) bool {
	// edge case
	if len(magazine) < len(ransomNote) {
		return false
	}

	// count diff
	buckets := [26]int{}
	for _, char := range ransomNote {
		buckets[char-'a']--
	}
	for _, char := range magazine {
		buckets[char-'a']++
	}

	// all char counts must be >= 0 for valid
	for i := 0; i < 26; i++ {
		if buckets[i] < 0 {
			return false
		}
	}

	return true
}