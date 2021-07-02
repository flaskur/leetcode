func minSubsequence(nums []int) []int {
	sort.Ints(nums)

	sub := []int{}

	for sum(sub) <= sum(nums) {
		sub = append(sub, nums[len(nums)-1])
		nums = nums[:len(nums)-1]
	}

	return sub
}

func sum(nums []int) int {
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}

