package main

// given an array of integers, every number appears twice except for one, find that distinct number with linear time and constant space.
// bitwise operation where duplicate numbers when xored together are 0, leaving only the single number.
func singleNumber(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	current := 0

	for _, num := range nums {
		current ^= num
	}

	return current
}
