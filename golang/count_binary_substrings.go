func countBinarySubstrings(s string) int {
	// must have equal number of 0s and 1s
	// 0s and 1s must be on the same side
	// would they all have different start? yes
	// the break condition is just when they have equal 1 and 0 count
	// start should go from 0 to len-2 because you need at least 2 for substring

	count := 0
	for start := 0; start < len(s)-1; start++ {
		change := 0
		parity := 0
		if s[start] == '1' {
			parity++
		} else if s[start] == '0' {
			parity--
		}

		for i := start + 1; i < len(s); i++ {
			if s[i] == '1' {
				parity++
			} else if s[i] == '0' {
				parity--
			}

			// consecutive check
			if s[i] != s[i-1] {
				change++
			}
			if change >= 2 {
				break
			}

			if parity == 0 {
				count++
				break
			}
		}
	}

	return count
}

func countBinarySubstrings(s string) int {
	current, prev, count := 1, 0, 0
	for i := 1; i < len(s); i++ {
		if s[i] != s[i-1] {
			count += min(prev, current)
			prev = current
			current = 1
		} else {
			current++
		}
	}

	count += min(prev, current)
	return count
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}