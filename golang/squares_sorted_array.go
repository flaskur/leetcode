// given an integer nums sorted in non decreasing order, return an array of the squares of each number sorted in non decreasing order.
// trivial square, then sort
// func sortedSquares(nums []int) []int {
// 	for i, num := range nums {
// 		nums[i] = num * num
// 	}

// 	sort.Ints(nums)

// 	return nums
// }

// buckets
// func sortedSquares(nums []int) []int {
// 	buckets := [10001]int{} // only need 10001 because we abs first

// 	// populate bucket count
// 	for _, num := range nums {
// 		buckets[abs(num)]++
// 	}

// 	result := []int{}

// 	// go through each index ordered, populate result
// 	for i := range buckets {
// 		for buckets[i] > 0 {
// 			result = append(result, squared(i))
// 			buckets[i]--
// 		}
// 	}

// 	return result
// }

// two pointers
func sortedSquares(nums []int) []int {
	result := make([]int, len(nums))
	i := len(nums) - 1

	left := 0
	right := len(nums) - 1

	// i >= 0 or left <= right
	for left <= right {
		if abs(nums[left]) >= abs(nums[right]) {
			result[i] = squared(nums[left])
			left++
			i--
		} else {
			result[i] = squared(nums[right])
			right--
			i--
		}
	}

	return result
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}

func squared(num int) int {
	return num * num
}
