func addStrings(num1 string, num2 string) string {
	i, j := len(num1)-1, len(num2)-1
	carry := 0
	result := ""

	for i >= 0 && j >= 0 {
		x, _ := strconv.Atoi(string(num1[i]))
		y, _ := strconv.Atoi(string(num2[j]))

		digit := (x + y + carry) % 10
		carry = (x + y + carry) / 10
		result += strconv.Itoa(digit)

		i--
		j--
	}

	for i >= 0 {
		x, _ := strconv.Atoi(string(num1[i]))
		digit := (x + carry) % 10
		carry = (x + carry) / 10
		result += strconv.Itoa(digit)
		i--
	}
	for j >= 0 {
		y, _ := strconv.Atoi(string(num2[j]))
		digit := (y + carry) % 10
		carry = (y + carry) / 10
		result += strconv.Itoa(digit)
		j--
	}

	if carry == 1 {
		result += "1"
	}

	x := []rune(result)
	for i := 0; i < len(x)/2; i++ {
		x[i], x[len(x)-1-i] = x[len(x)-1-i], x[i]
	}

	return string(x)
}