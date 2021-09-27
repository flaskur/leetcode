func lengthOfLIS(nums []int) int {
	dp := make([]int, len(nums))
	dp[0] = 1
	length := 1

	for i := 1; i < len(nums); i++ {
		// need to find max dp value that is also less than nums[i]
		maxValue := 0
		for j := 0; j < i; j++ {
			if nums[j] < nums[i] && dp[j] > maxValue {
				maxValue = dp[j]
			}
		}

		dp[i] = maxValue + 1
		length = max(length, dp[i])
	}

	return length
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}

func lengthOfLIS(nums []int) int {
	queue := []int{}

	for _, num := range nums {
		// binary search to find index of ideal placement for num
		start, end := 0, len(queue)
		for start < end {
			mid := (start + end) / 2
			if num > queue[mid] {
				start = mid + 1
			} else if num <= queue[mid] {
				end = mid
			}
		}

		// 0 1 3 4, search for 2 => replaces to 0 1 2 4 but not relevant because it doesn't change length
		// 0 1 3 4, search for 6 => appends to 0 1 3 4 6
		if start == len(queue) {
			queue = append(queue, num)
		} else {
			queue[start] = num
		}
	}

	return len(queue)
}