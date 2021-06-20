func findMaxConsecutiveOnes(nums []int) int {
	max := 0
	count := 0
	for _, num := range nums {
		if num == 0 {
			if count > max {
				max = count
			}
			count = 0
		} else {
			count++
		}
	}
	if count > max {
		max = count
	}
	return max
}