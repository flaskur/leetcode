func numJewelsInStones(jewels string, stones string) int {
	// make map of jewels to have O(1) access
	jwl := make(map[rune]bool, len(jewels)) // assuming all chars in jewels are distinct
	for _, j := range jewels {
		jwl[j] = true
	}

	// count each occurrence by checking map
	jewelCount := 0
	for _, s := range stones {
		if _, ok := jwl[s]; ok {
			jewelCount++
		}
	}
	return jewelCount
}