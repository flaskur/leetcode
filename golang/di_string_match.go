func diStringMatch(s string) []int {
	start, end := 0, len(s) // indices
	perm := make([]int, len(s)+1)

	// two pointers to set correct vals
	for index, letter := range s {
		if letter == 'I' {
			perm[index] = start
			start++
		} else if letter == 'D' {
			perm[index] = end
			end--
		}
	}
	perm[len(perm)-1] = start

	return perm
}