func partitionLabels(s string) []int {
	result := []int{}

	// find end index of all chars
	end := map[byte]int{}
	for index := range s {
		end[s[index]] = index
	}

	i := 0
	count := 0
	max := end[s[i]]
	for i < len(s) {
		// attempt to move max for chars inbetween
		for i <= max {
			count++
			if end[s[i]] > max {
				max = end[s[i]]
			}
			i++
		}
		result = append(result, count)
		count = 0

		// if max is not end, setup next partition
		if max < len(s)-1 {
			max = end[s[i]]
		}
	}

	return result
}