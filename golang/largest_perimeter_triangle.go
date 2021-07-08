func largestPerimeter(nums []int) int {
	sort.Ints(nums)
	i := len(nums) - 3

	// find the 3 largest lengths, then test if valid, otherwise move to next greatest 3 lengths
	for i >= 0 {
		x, y, z := nums[i], nums[i+1], nums[i+2]
		if x+y > z {
			return x + y + z
		}
		i--
	}

	return 0
}