// given two integer arrays of equal length, find if you can create the target array by selecting any subarray and reversing.
// you should always be able to make the target as long as you have the same elements, because bubble sort is basically reversing subarrays pairs.
func canBeEqual(target []int, arr []int) bool {
	countMap := map[int]int{}

	for _, num := range target {
		countMap[num]++
	}

	for _, num := range arr {
		if countMap[num] == 0 {
			return false
		}
		countMap[num]--
	}

	return true
}