func getMinDistance(nums []int, target int, start int) int {
	indices := []int{}
	for i, num := range nums {
		if num == target {
			indices = append(indices, i)
		}
	}

	minIndex := 1000
	minValue := 10000
	for _, index := range indices {
		if abs(index-start) < minValue {
			minValue = abs(index - start)
			minIndex = index
		}
	}

	return abs(minIndex - start)
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}