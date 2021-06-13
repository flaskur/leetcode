// return the index of the valid point with the smallest manhattan distance from current location. valid means it shares the same x or y coordinate.
func nearestValidPoint(x int, y int, points [][]int) int {
	index := -1
	min := math.MaxInt32

	for i, point := range points {
		if point[0] != x && point[1] != y {
			continue
		}

		distance := manhattanDistance(x, point[0], y, point[1])
		if distance < min {
			min = distance
			index = i
		}
	}

	return index
}

func manhattanDistance(x1, x2, y1, y2 int) int {
	return abs(x1-x2) + abs(y1-y2)
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}