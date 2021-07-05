func shortestToChar(s string, c byte) []int {
	bounds := []int{}
	for i := range s {
		if s[i] == c {
			bounds = append(bounds, i)
		}
	}
	bounds = append([]int{-10001}, bounds...)
	bounds = append(bounds, 10001)

	left := bounds[0]
	right := bounds[1]
	counter := 2

	result := []int{}
	for i := range s {
		distance := min(abs(left-i), abs(right-i))
		result = append(result, distance)

		if s[i] == c {
			left = right
			right = bounds[counter]
			counter++
		}
	}

	return result
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}