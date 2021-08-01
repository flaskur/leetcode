func destCity(paths [][]string) string {
	freq := map[string]int{}
	dests := map[string]bool{}

	// destination city will only occur once and be part of dests set
	// start point will also occur once which is why you need hash set for dests
	for _, path := range paths {
		a, b := path[0], path[1]
		freq[a]++
		freq[b]++
		dests[b] = true
	}

	for city, count := range freq {
		// dest is part of set and freq of 1
		if _, ok := dests[city]; ok && count == 1 {
			return city
		}
	}

	return "" // should never happen
}