// given an array of nums, return the running sum.
// func runningSum(nums []int) []int {
// 	result := []int{}

// 	total := 0
// 	for _, num := range nums {
// 		result = append(result, num+total)
// 		total += num
// 	}

// 	return result
// }

func runningSum(nums []int) []int {
	for i := 1; i < len(nums); i++ {
		nums[i] += nums[i-1]
	}
	return nums
}