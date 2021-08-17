func largestOddNumber(num string) string {
	for len(num) > 0 {
		if isOdd(num[len(num)-1]) {
			break
		} else {
			num = num[:len(num)-1]
		}
	}
	return num
}

func isOdd(digit byte) bool {
	val, err := strconv.Atoi(string(digit))
	if err != nil {
		panic("invalid digit")
	}
	return val%2==1
}