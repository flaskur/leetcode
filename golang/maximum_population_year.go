func maximumPopulation(logs [][]int) int {
	candidates := map[int]struct{}{}

	for _, log := range logs {
		candidates[log[0]] = struct{}{}
	}

	freq := map[int]int{}
	for year := range candidates {
		for _, log := range logs {
			start, end := log[0], log[1]
			if year >= start && year < end {
				freq[year]++
			}
		}
	}

	maxFreq := 0
	for _, count := range freq {
		if count > maxFreq {
			maxFreq = count
		}
	}

	valid := []int{}
	for year, count := range freq {
		if count == maxFreq {
			valid = append(valid, year)
		}
	}

	sort.Ints(valid)
	return valid[0]
}

// dynamic programming, on start date, add to population, on death date, remove from population, then just go through all years to find max pop year.
func maximumPopulation(logs [][]int) int {
	years := [101]int{}
	maxYear := 0
	for _, log := range logs {
		years[log[0]-1950]++
		years[log[1]-1950]--
	}

	for i := 1; i < 101; i++ {
		years[i] += years[i-1]
		if years[i] > years[maxYear] {
			maxYear = i
		}
	}

	return maxYear + 1950
}