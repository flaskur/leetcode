func maxAscendingSum(nums []int) int {
	maxSum := 0
	runningSum := 0
	for i, num := range nums {
		runningSum += num

		// cannot check i+1 if last index
		if i == len(nums)-1 {
			if runningSum > maxSum {
				maxSum = runningSum
			}
			break
		}

		// stops subarray sum if next is not ascending
		if nums[i+1] <= num {
			if runningSum > maxSum {
				maxSum = runningSum
			}
			runningSum = 0
		}
	}

	return maxSum
}