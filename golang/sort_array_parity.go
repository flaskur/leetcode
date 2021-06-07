// given an array of non negative integers, return array of evens followed by odds.
// func sortArrayByParity(nums []int) []int {
// 	for i := 0; i < len(nums)-1; i++ {
// 		if nums[i]%2 == 0 {
// 			continue
// 		}

// 		for j := i + 1; j < len(nums); j++ {
// 			if nums[j]%2 == 0 {
// 				nums[i], nums[j] = nums[j], nums[i]
// 			}
// 		}
// 	}

// 	return nums
// }

func sortArrayByParity(nums []int) []int {
	result := make([]int, len(nums))

	evenIndex := 0
	oddIndex := len(nums) - 1

	for _, num := range nums {
		if num%2 == 0 {
			result[evenIndex] = num
			evenIndex++
		} else {
			result[oddIndex] = num
			oddIndex--
		}
	}

	return result
}