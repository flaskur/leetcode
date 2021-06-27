func checkStraightLine(coordinates [][]int) bool {
	// a line is a line because it follows a ratio slope meaning y2-y1/x2-x1=m should be the same for all pairs
	x := float64(coordinates[1][0] - coordinates[0][0])
	y := float64(coordinates[1][1] - coordinates[0][1])
	if x == 0 {
		p := coordinates[0][0]
		for _, point := range coordinates {
			if point[0] != p {
				return false
			}
		}
		return true
	}

	slope := y / x
	for i := 1; i < len(coordinates)-1; i++ {
		dx := float64(coordinates[i+1][0] - coordinates[i][0])
		dy := float64(coordinates[i+1][1] - coordinates[i][1])
		if dy/dx != slope {
			return false
		}
	}
	return true

}