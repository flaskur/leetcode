func nextGreaterElement(nums1 []int, nums2 []int) []int {
	indexMap := map[int]int{} // give num, get index

	// populate map
	for i, num := range nums2 {
		indexMap[num] = i
	}

	result := make([]int, len(nums1))
	for i, num := range nums1 {
		nextGreater := -1
		for j := indexMap[num] + 1; j < len(nums2); j++ {
			if nums2[j] > num {
				nextGreater = nums2[j]
				break
			}
		}
		result[i] = nextGreater
	}

	return result
}