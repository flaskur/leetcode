func canThreePartsEqualSum(arr []int) bool {
	total := 0
	for _, num := range arr {
		total += num
	}
	if total%3 != 0 {
		return false
	}

	target := total / 3 // guaranteed to be divisible

	sum, successes := 0, 0
	for _, num := range arr {
		sum += num
		if sum == target {
			successes++
			sum = 0
		}
		if successes == 3 {
			return true
		}
	}
	return false
}