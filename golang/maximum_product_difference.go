func maxProductDifference(nums []int) int {
	// two largest and two smallest nums
	a, b := 0, 0
	c, d := 10001, 10001

	for _, num := range nums {
		if num > a {
			b = a
			a = num
		} else if num > b {
			b = num
		}

		if num < c {
			d = c
			c = num
		} else if num < d {
			d = num
		}
	}

	return (a * b) - (c * d)
}