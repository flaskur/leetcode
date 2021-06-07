// return bitwise xor of all elements in nums
func xorOperation(n int, start int) int {
	nums := make([]int, n)

	for i := 0; i < n; i++ {
		nums[i] = start + 2*i
	}

	result := nums[0]
	for i := 1; i < n; i++ {
		result ^= nums[i]
	}

	return result
}