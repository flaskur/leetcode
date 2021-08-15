func maxPower(s string) int {
	fullpower := 0
	power := 0
	left := 0
	for right := 0; right < len(s); right++ {
		// if they don't match, left becomes right and starts over
		if s[left] != s[right] {
			left = right
			power = 1
		} else {
			power++
		}

		// update max power
		fullpower = max(fullpower, power)
	}

	return fullpower
}

func max(x int, y int) int {
	if x >= y {
		return x
	}
	return y
}