func balancedStringSplit(s string) int {
	count, left, right := 0, 0, 0
	for _, char := range s {
		if char == 'L' {
			left++
		} else if char == 'R' {
			right++
		}

		// if balanced, add count and reset
		if left == right {
			count++
			left = 0
			right = 0
		}
	}
	return count
}