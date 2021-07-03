func sortByBits(arr []int) []int {
	buckets := [][]int{}
	for i := 0; i <= 32; i++ {
		buckets = append(buckets, []int{})
	}

	for _, num := range arr {
		bits := 0
		temp := num
		for temp != 0 {
			bits += temp & 1
			temp = temp >> 1
		}
		buckets[bits] = append(buckets[bits], num)
	}

	result := []int{}
	for _, bucket := range buckets {
		if len(bucket) == 0 {
			continue
		}

		sort.Ints(bucket)

		result = append(result, bucket...)
	}

	return result
}