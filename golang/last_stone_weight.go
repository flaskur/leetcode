func lastStoneWeight(stones []int) int {
	buckets := [1001]int{}
	for _, stone := range stones {
		buckets[stone]++
	}

	i := len(buckets) - 1
	var j int
	for i > 0 {
		if buckets[i] == 0 {
			i--
		} else {
			buckets[i] = buckets[i] % 2 // smash same size rocks

			// if there is a remaining stone, you need to find next largest
			if buckets[i] != 0 {
				j = i - 1
				for j > 0 && buckets[j] == 0 {
					j--
				}

				// no matches
				if j == 0 {
					return i
				}

				// otherwise smash together
				buckets[i-j]++
				buckets[j]--
				i--
			}
		}
	}

	return 0
}