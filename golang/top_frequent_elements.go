func topKFrequent(nums []int, k int) []int {
	// fill freq hash map
	freq := map[int]int{}
	for _, num := range nums {
		freq[num]++
	}

	// bucket sort by freq as index --> max freq is len(nums)
	buckets := make([][]int, len(nums)+1)
	for i := 0; i <= len(nums); i++ {
		buckets[i] = []int{}
	}

	// fill slice with nums of that freq
	for num, count := range freq {
		buckets[count] = append(buckets[count], num)
	}

	// fill result from buckets in reverse order buckets
	result := []int{}
	for i := len(nums); i > 0; i-- {
		for len(buckets[i]) > 0 {
			var num int
			num, buckets[i] = buckets[i][len(buckets[i])-1], buckets[i][:len(buckets[i])-1]
			result = append(result, num)
			k--
		}

		// end when k reaches 0
		if k == 0 {
			break
		}
	}

	return result
}