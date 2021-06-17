func decrypt(code []int, k int) []int {
	result := make([]int, len(code))

	switch {
	case k == 0:
		return result
	case k > 0:
		for i := 0; i < len(code); i++ {
			sum := 0
			for j := 1; j <= k; j++ {
				index := (i + j) % len(code)
				sum += code[index]
			}
			result[i] = sum
		}
	case k < 0:
		for i := 0; i < len(code); i++ {
			sum := 0
			for j := 1; j <= -k; j++ {
				index := 0
				if i-j < 0 {
					index = len(code) + i - j
				} else {
					index = i - j
				}
				sum += code[index]
			}
			result[i] = sum
		}
	}

	return result
}