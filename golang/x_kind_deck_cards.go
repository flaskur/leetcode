func hasGroupsSizeX(deck []int) bool {
	freqMap := map[int]int{}
	for _, num := range deck {
		freqMap[num]++
	}

	divisor := 0
	for _, size := range freqMap {
		divisor = gcd(divisor, size)
	}

	return divisor > 1
}

func gcd(x int, y int) int {
	if y == 0 {
		return x
	}
	return gcd(y, x%y)
}