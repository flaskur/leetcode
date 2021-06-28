func containsNearbyDuplicate(nums []int, k int) bool {
	if k <= 0 {
		return false
	}

	// keep map to reference the last index for the particular value
	indexMap := make(map[int]int, len(nums))

	for i, num := range nums {
		// number already exists so check span
		if index, ok := indexMap[num]; ok {
			if i-index <= k {
				return true
			}
		}
		indexMap[num] = i // update latest index
	}
	return false
}
