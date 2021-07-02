func countGoodRectangles(rectangles [][]int) int {
	maxLen := 1
	freq := map[int]int{}
	for _, rectangle := range rectangles {
		side := min(rectangle[0], rectangle[1])
		if side > maxLen {
			maxLen = side
		}
		freq[side]++
	}
	return freq[maxLen]
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}