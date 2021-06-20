func largeGroupPositions(s string) [][]int {
	groups := [][]int{}
	start := 0
	letter := s[0]
	for i := 0; i < len(s); i++ {
		if s[i] != letter {
			if i-start >= 3 {
				groups = append(groups, []int{start, i - 1})
			}
			start = i
			letter = s[i]
		}
	}
	if len(s)-start >= 3 {
		groups = append(groups, []int{start, len(s) - 1})
	}
	return groups
}