func maxScore(s string) int {
	maxScore := 0
	zeros := 0
	ones := 0
	for _, digit := range s {
		if digit == '0' {
			zeros++
		} else if digit == '1' {
			ones++
		}
	}
	// initial condition
	maxScore = ones
	if s[0] == '0' {
		maxScore++
	} else if s[0] == '1' {
		maxScore--
	}

	// index represents candidate digit to move from right to left side
	score := maxScore
	for index := 1; index < len(s)-1; index++ {
		if s[index] == '0' {
			score++
		} else if s[index] == '1' {
			score--
		}
		maxScore = max(maxScore, score)
	}

	return maxScore
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}