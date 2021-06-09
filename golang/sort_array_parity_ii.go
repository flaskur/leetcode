// given an array of integers, half of the nums are odd, other half even. sort the array so that whenever value is odd, index is odd, likewise for even.
// func sortArrayByParityII(nums []int) []int {
// 	even := 0
// 	odd := 1

// 	for even < len(nums) && odd < len(nums) {
// 		for even < len(nums) && nums[even]%2 == 0 {
// 			even += 2
// 		}
// 		for odd < len(nums) && nums[odd]%2 == 1 {
// 			odd += 2
// 		}

// 		if even < len(nums) && odd < len(nums) {
// 			nums[even], nums[odd] = nums[odd], nums[even]
// 			even += 2
// 			odd += 2
// 		}
// 	}

// 	return nums
// }

func sortArrayByParityII(nums []int) []int {
	even, odd, n := 0, 1, len(nums)

	for even < n && odd < n {
		if nums[even]%2 == 0 {
			even += 2
		} else if nums[odd]%2 == 1 {
			odd += 2
		} else {
			// both places are wrong, swap positions
			nums[even], nums[odd] = nums[odd], nums[even]
			even += 2
			odd += 2
		}
	}

	return nums
}