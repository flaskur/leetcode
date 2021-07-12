func findRestaurant(list1 []string, list2 []string) []string {
	// hash map to find common restaurants between list, while keeping index
	restaurants := map[string]int{}
	for i, res := range list1 {
		restaurants[res] = i
	}

	// find common restaurants and populate into buckets
	buckets := [2001][]string{}
	for i, res := range list2 {
		if index, ok := restaurants[res]; ok {
			buckets[i+index] = append(buckets[i+index], res)
		}
	}

	// find first occurrence (min index) for common restaurants
	for i := 0; i < 2001; i++ {
		if len(buckets[i]) > 0 {
			return buckets[i]
		}
	}

	// failure, return empty
	return []string{}
}