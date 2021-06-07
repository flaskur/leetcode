// 2d plane, find minimum time to visit all points in order.
func minTimeToVisitAllPoints(points [][]int) int {
	seconds := 0

	for i := 0; i < len(points)-1; i++ {
		src := points[i]
		dest := points[i+1]

		distanceX := abs(dest[0] - src[0])
		distanceY := abs(dest[1] - src[1])

		for distanceX > 0 || distanceY > 0 {
			// can move diagonally
			if distanceX > 0 && distanceY > 0 {
				distanceX--
				distanceY--
				seconds++
			} else if distanceX > 0 {
				distanceX--
				seconds++
			} else if distanceY > 0 {
				distanceY--
				seconds++
			}
		}
	}

	return seconds
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}