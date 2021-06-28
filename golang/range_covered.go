func isCovered(ranges [][]int, left int, right int) bool {
	buckets := [51]int{}
	for _, r := range ranges {
		for i := r[0]; i <= r[1]; i++ {
			buckets[i]++
		}
	}
	for left <= right {
		if buckets[left] == 0 {
			return false
		}
		left++
	}
	return true
}