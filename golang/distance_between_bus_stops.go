func distanceBetweenBusStops(distance []int, start int, destination int) int {
	cw := 0
	ccw := 0

	i := start
	for i != destination {
		cw += distance[i]
		i++
		i %= len(distance)
	}

	i = start
	for i != destination {
		i -= 1
		if i < 0 {
			i = len(distance) - 1
		}
		ccw += distance[i]
	}

	return min(cw, ccw)
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}