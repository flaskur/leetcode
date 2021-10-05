// brute force
func maxProduct(nums []int) int {
	max := nums[0]

	for i := 0; i < len(nums); i++ {
		current := nums[i]
		if current > max {
			max = current
		}

		// build contiguous subarray product and check max
		for j := i + 1; j < len(nums); j++ {
			current *= nums[j]
			if current > max {
				max = current
			}
		}
	}

	return max
}

func maxProduct(nums []int) int {
	maxNum, minNum, result := nums[0], nums[0], nums[0]

	for i := 1; i < len(nums); i++ {
		if nums[i] < 0 {
			maxNum, minNum = minNum, maxNum
		}

		maxNum = max(maxNum*nums[i], nums[i])
		minNum = min(minNum*nums[i], nums[i])

		result = max(result, maxNum)
	}

	return result
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}