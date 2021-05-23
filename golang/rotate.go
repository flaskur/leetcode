// given an array, rotate the array to the right by k steps
// func rotate(nums []int, k int) {
// 	steps := k % len(nums)

// 	rotatedNums := append(nums[len(nums)-steps:], nums[:len(nums)-steps]...)
// 	copy(nums, rotatedNums)
// }

func rotate(nums []int, k int) {
	steps := k % len(nums)

	// inclusive ranges
	reverse(nums, 0, len(nums)-1)
	reverse(nums, 0, steps-1)
	reverse(nums, steps, len(nums)-1)
}

func reverse(nums []int, start int, end int) {
	for start < end {
		nums[start], nums[end] = nums[end], nums[start]
		start += 1
		end -= 1
	}
}
