func thousandSeparator(n int) string {
	result := ""
	s := strconv.Itoa(n)
	for len(s) > 0 {
		// prepend last 3 chars
		bound := max(0, len(s)-3)
		result = s[bound:] + result

		// update string
		s = s[:bound]

		// check if any remaining, if so add .
		if len(s) > 0 {
			result = "." + result
		}
	}

	return result
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}