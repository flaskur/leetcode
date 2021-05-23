// given two integer arrays, return an array of their intersection, the nums that appear in both arrays in any order.
// populate count hash map for first array, iterate through second and check availability, populate, and reduce count in map.
func intersect(nums1 []int, nums2 []int) []int {
	countMap := map[int]int{}

	for _, num := range nums1 {
		if count, ok := countMap[num]; ok {
			countMap[num] = count + 1
		} else {
			countMap[num] = 1
		}
	}

	cross := []int{}

	for _, num := range nums2 {
		if count := countMap[num]; count > 0 {
			cross = append(cross, num)
			countMap[num] = count - 1
		}
	}

	return cross
}
