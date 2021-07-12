func findRelativeRanks(score []int) []string {
	order := make([]int, len(score))
	copy(order, score)
	sort.Ints(order)

	rank := make(map[int]int, len(score))
	for i, num := range order {
		rank[num] = len(score) - i
	}

	result := make([]string, len(score))
	for i, num := range score {
		switch rank[num] {
		case 1:
			result[i] = "Gold Medal"
		case 2:
			result[i] = "Silver Medal"
		case 3:
			result[i] = "Bronze Medal"
		default:
			result[i] = strconv.Itoa(rank[num])
		}
	}

	return result
}