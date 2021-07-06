func intersection(nums1 []int, nums2 []int) []int {
	// hash set for first nums
	numsSet := map[int]bool{}
	for _, num := range nums1 {
		numsSet[num] = true
	}

	// check intersection between both nums arr
	intersection := map[int]bool{} // not arr because i don't want duplicates in result
	for _, num := range nums2 {
		if _, ok := numsSet[num]; ok {
			intersection[num] = true
		}
	}

	// add intersection num to result slice
	result := []int{}
	for num := range intersection {
		result = append(result, num)
	}

	return result
}