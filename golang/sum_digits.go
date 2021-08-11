// used explicit string conversions due to overflow issues with int
func getLucky(s string, k int) int {
	// build digits string using rune int val calc
	digits := ""
	for _, char := range s {
		digit := int(char - 'a' + 1)
		digits += strconv.Itoa(digit)
	}

	// transform by summing last place digit until empty string
	i := 0
	for i < k {
		sum := 0
		for len(digits) > 0 {
			// take the last letter as a string convert to literal integer
			digit, _ := strconv.Atoi(string(digits[len(digits)-1]))
			digits = digits[:len(digits)-1]
			sum += digit
		}

		// update digits string with sum int
		digits = strconv.Itoa(sum)
		i++
	}

	num, _ := strconv.Atoi(digits)

	return num
}