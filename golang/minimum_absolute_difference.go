// given an array of distinct integers, find all pairs with the minimum absolute difference.
func minimumAbsDifference(arr []int) [][]int {
	min := math.MaxInt32
	sort.Ints(arr)
	result := [][]int{}

	for i := 0; i < len(arr)-1; i++ {
		diff := arr[i+1] - arr[i]
		if diff < min {
			min = diff
			result = [][]int{}
			result = append(result, []int{arr[i], arr[i+1]})
		} else if diff == min {
			result = append(result, []int{arr[i], arr[i+1]})
		}
	}

	return result
}