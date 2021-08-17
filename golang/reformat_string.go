func reformat(s string) string {
	// find the count for letters and digits
	letters := []rune{}
	digits := []rune{}
	for _, char := range s {
		if unicode.IsLetter(char) {
			letters = append(letters, char)
		} else if unicode.IsDigit(char) {
			digits = append(digits, char)
		}
	}

	// failure case
	diff := len(letters) - len(digits)
	if abs(diff) > 1 {
		return ""
	}

	// build result
	result := []rune{}
	if diff == 0 {
		for index := 0; index < len(letters); index++ {
			result = append(result, letters[index], digits[index])
		}
	} else if diff == 1 {
		for index := 0; index < len(digits); index++ {
			result = append(result, letters[index], digits[index])
		}
		result = append(result, letters[len(letters)-1])
	} else if diff == -1 {
		for index := 0; index < len(letters); index++ {
			result = append(result, digits[index], letters[index])
		}
		result = append(result, digits[len(digits)-1])
	}

	return string(result)
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}