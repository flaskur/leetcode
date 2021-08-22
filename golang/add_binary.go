func addBinary(a string, b string) string {
	i, j := len(a)-1, len(b)-1
	carry := 0
	result := ""

	for i >= 0 && j >= 0 {
		x, _ := strconv.Atoi(string(a[i]))
		y, _ := strconv.Atoi(string(b[j]))

		digit := strconv.Itoa((x + y + carry) % 2)
		carry = (x + y + carry) / 2
		result = digit + result

		i--
		j--
	}

	for i >= 0 {
		x, _ := strconv.Atoi(string(a[i]))

		digit := strconv.Itoa((x + carry) % 2)
		carry = (x + carry) / 2
		result = digit + result

		i--
	}
	for j >= 0 {
		y, _ := strconv.Atoi(string(b[j]))

		digit := strconv.Itoa((y + carry) % 2)
		carry = (y + carry) / 2
		result = digit + result

		j--
	}

	if carry == 1 {
		result = "1" + result
	}

	return result
}