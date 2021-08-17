func titleToNumber(columnTitle string) int {
	sum := 0
	for index := len(columnTitle) - 1; index >= 0; index-- {
		multiplier := len(columnTitle) - 1 - index
		val := int(columnTitle[index] - 'A' + 1)
		sum += val * pow(26, multiplier)
	}
	return sum
}

func pow(base int, exp int) int {
	x := math.Pow(float64(base), float64(exp))
	return int(x)
}