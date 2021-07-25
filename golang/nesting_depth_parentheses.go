func maxDepth(s string) int {
	count, max := 0, 0
	for _, char := range s {
		if char == '(' {
			count++
		} else if char == ')' {
			count--
		}

		if count > max {
			max = count
		}
	}
	return max
}