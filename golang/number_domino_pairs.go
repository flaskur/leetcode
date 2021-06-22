func numEquivDominoPairs(dominoes [][]int) int {
	freq := map[string]int{}
	pairs := 0
	// map the sorted pair to freq
	for _, domino := range dominoes {
		sort.Ints(domino)
		s := strconv.Itoa(domino[0]) + strconv.Itoa(domino[1])
		freq[s]++
	}
	// num unique pairs is n(n-1)/2 from math
	for _, count := range freq {
		if count > 1 {
			pairs += count * (count - 1) / 2
		}
	}
	return pairs
}