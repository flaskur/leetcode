func thirdMax(nums []int) int {
	x, y, z := math.MinInt64, math.MinInt64, math.MinInt64
	distinct := 0

	for _, num := range nums {
		// only counting distinct numbers
		if x == num || y == num || z == num {
			continue
		}
		distinct++

		if num > x {
			y, z = x, y
			x = num
		} else if num > y {
			z = y
			y = num
		} else if num > z {
			z = num
		}
	}

	if distinct < 3 {
		return x
	}
	return z
}