func countBits(n int) []int {
	bits := []int{}
	for i := 0; i <= n; i++ {
		// convert decimal to binary counting 1 remainders
		ones := 0
		num := i
		for num > 0 {
			rem := num % 2
			if rem == 1 {
				ones++
			}
			num /= 2
		}
		bits = append(bits, ones)
	}
	return bits
}

// dynamic programming
func countBits(n int) []int {
	bits := []int{}
	for i := 0; i <= n; i++ {
		bits = append(bits, 0)
	}

	bits[0] = 0
	for i := 1; i <= n; i++ {
		// if even, same as right shift
		if i&1 == 0 {
			bits[i] = bits[i>>1]
		} else {
			// if odd, same as one before it plus 1 from LSB
			bits[i] = bits[i-1] + 1
		}
	}

	return bits
}