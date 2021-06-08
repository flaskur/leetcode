// given an integer array, find the sum of all unique elements.
func sumOfUnique(nums []int) int {
	sum := 0
	countMap := map[int]int{}

	for _, num := range nums {
		countMap[num]++
	}

	for num, count := range countMap {
		if count == 1 {
			sum += num
		}
	}
	return sum
}