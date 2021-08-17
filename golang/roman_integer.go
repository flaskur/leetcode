func romanToInt(s string) int {
	symbolMap := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	sum, flag := 0, false

	// look ahead by 1 character to determine add/subtract
	for i := 0; i < len(s)-1; i++ {
		// if second last index is sub, need to avoid checking last
		current, next := symbolMap[s[i]], symbolMap[s[i+1]]

		// edge case
		if i == len(s)-2 && current < next {
			flag = true
		}

		// subtract case
		if current < next {
			sum += next - current
			i++
			continue
		} else {
			sum += current
		}
	}

	// flag means we don't need to check last symbol
	if !flag {
		sum += symbolMap[s[len(s)-1]]
	}

	return sum
}

// backwards, not pairwise sum
func romanToInt(s string) int {
	symbolMap := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	sum := symbolMap[s[len(s)-1]]

	for index := len(s) - 2; index >= 0; index-- {
		left, right := symbolMap[s[index]], symbolMap[s[index+1]]
		if left < right {
			sum -= left
		} else {
			sum += left
		}
	}

	return sum
}