// put each numbered ball into boxes based on the sum of the ball's digits, then find the number of balls in box with most balls.
func countBalls(lowLimit int, highLimit int) int {
	countMap := map[int]int{}

	for i := lowLimit; i <= highLimit; i++ {
		countMap[digitSum(i)]++
	}

	max := 0
	for _, count := range countMap {
		if count > max {
			max = count
		}
	}

	return max
}

func digitSum(x int) int {
	sum := 0
	for x > 0 {
		digit := x % 10
		sum += digit
		x /= 10
	}
	return sum
}