func missingNumber(nums []int) int {
	xor := len(nums)
	for i := 0; i < len(nums); i++ {
		xor ^= nums[i]
		xor ^= i
	}
	return xor
}
