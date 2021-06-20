func prefixesDivBy5(nums []int) []bool {
	div := make([]bool, len(nums))
	val := 0
	for i, digit := range nums {
		val = (val<<1 | digit) % 5
		div[i] = val == 0
	}
	return div
}

// attemping to build the binary string will overflow