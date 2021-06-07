// given list of nums, return the decompressed list
func decompressRLElist(nums []int) []int {
	list := []int{}

	for i := 0; i < len(nums)-1; i += 2 {
		count := nums[i]
		num := nums[i+1]

		for j := 0; j < count; j++ {
			list = append(list, num)
		}
	}

	return list
}