func secondHighest(s string) int {
	nums := map[int]bool{}

	for _, char := range s {
		if unicode.IsNumber(char) {
			num, _ := strconv.Atoi(string(char))
			nums[num] = true
		}
	}

	// find second highest from hash set
	x, y := -1, -1
	for num := range nums {
		if num > x {
			y = x
			x = num
		} else if num > y {
			y = num
		}
	}

	if y == -1 {
		return -1
	}
	return y
}