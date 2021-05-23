// given an integer array, move all 0's to the end while maintaining relative order of nonzero elements
// use two pointer method and swap on nonzero occurrence
// func moveZeroes(nums []int) {
// 	i := 0
// 	j := 0

// 	for i < len(nums)-1 && j < len(nums) {
// 		if nums[j] != 0 {
// 			nums[i], nums[j] = nums[j], nums[i]
// 			i += 1
// 			j += 1
// 		} else {
// 			j += 1
// 		}
// 	}

// }

// just use one pointer and iterate over array, overwrite end
func moveZeroes(nums []int) {
	i := 0
	for _, num := range nums {
		if num != 0 {
			nums[i] = num
			i += 1
		}
	}

	for ; i < len(nums); i++ {
		nums[i] = 0
	}
}
