// given two arrays arr1 and arr2, arr2 elements are distinct and all elements in arr2 are in arr1. sort arr1 such that the relative ordering of items in arr1 are the same as in arr2, elements that don't appear should be at the end in ascending order.
func relativeSortArray(arr1 []int, arr2 []int) []int {
	buckets := [1001]int{}
	for _, num := range arr1 {
		buckets[num]++
	}

	result := []int{}
	for _, num := range arr2 {
		for buckets[num] > 0 {
			result = append(result, num)
			buckets[num]--
		}
	}

	for i := 0; i < len(buckets); i++ {
		for buckets[i] > 0 {
			result = append(result, i)
			buckets[i]--
		}
	}

	return result
}