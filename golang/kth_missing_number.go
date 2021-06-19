func findKthPositive(arr []int, k int) int {
	buckets := [1001]int{}
	for _, num := range arr {
		buckets[num]++
	}

	count := 0
	for i := 1; i < len(buckets); i++ {
		if buckets[i] == 0 {
			count++
			if count == k {
				return i
			}
		}
	}

	return k - count + len(buckets) - 1
}