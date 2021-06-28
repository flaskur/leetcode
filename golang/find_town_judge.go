func findJudge(n int, trust [][]int) int {
	if len(trust) == 0 && n == 1 {
		return 1
	}

	trusters := map[int]bool{}
	vouch := map[int]int{}
	for _, t := range trust {
		trusters[t[0]] = true
		vouch[t[1]]++
	}
	for person, vouches := range vouch {
		if vouches >= n-1 && !trusters[person] {
			return person
		}
	}
	return -1
}