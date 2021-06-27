func findErrorNums(nums []int) []int {
	errors, found := [2]int{}, map[int]bool{}
	for _, num := range nums {
		// check duplicate
		if _, ok := found[num]; ok {
			errors[0] = num
		} else {
			found[num] = true
		}
	}

	for current := 1; current <= len(nums); current++ {
		// check missing
		if _, ok := found[current]; !ok {
			errors[1] = current
			break
		}
	}

	return errors[:]
}