func distributeCandies(candyType []int) int {
	types := map[int]bool{}
	for _, t := range candyType {
		types[t] = true
	}

	return min(len(types), len(candyType)/2)
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}