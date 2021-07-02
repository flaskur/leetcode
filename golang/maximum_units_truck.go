func maximumUnits(boxTypes [][]int, truckSize int) int {
	// prioritize boxes with larger units, by first sorting by unit size
	buckets := [1001]int{}
	for _, bt := range boxTypes {
		boxes, units := bt[0], bt[1]
		buckets[units] += boxes
	}

	maxUnits := 0
	for units := 1000; units > 0; units-- {
		if buckets[units] > 0 {
			maxUnits += units * min(buckets[units], truckSize)
			truckSize -= buckets[units]
		}

		if truckSize <= 0 {
			return maxUnits
		}
	}

	return maxUnits
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}