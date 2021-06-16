// func sumEvenAfterQueries(nums []int, queries [][]int) []int {
// 	result := make([]int, len(nums))

// 	for i, query := range queries {
// 		add := query[0]
// 		index := query[1]

// 		nums[index] += add
// 		result[i] = evenSum(nums)
// 	}

// 	return result
// }
func sumEvenAfterQueries(nums []int, queries [][]int) []int {
	result := make([]int, len(nums))
	sum := evenSum(nums)

	for i, query := range queries {
		add := query[0]
		index := query[1]

		switch {
		// even->even add increment
		case abs(nums[index]%2) == 0 && abs(nums[index]+add)%2 == 0:
			sum += add
			// even->odd remove existing
		case abs(nums[index]%2) == 0 && abs(nums[index]+add)%2 == 1:
			sum -= nums[index]
			// odd->even add both
		case abs(nums[index]%2) == 1 && abs(nums[index]+add)%2 == 0:
			sum += nums[index] + add
			// odd->odd do nothing
		}
		nums[index] += add
		result[i] = sum

	}

	return result
}

func evenSum(nums []int) int {
	sum := 0
	for _, num := range nums {
		if num%2 == 0 {
			sum += num
		}
	}
	return sum
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}