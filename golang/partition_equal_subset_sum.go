// backtracking TLE
func canPartition(nums []int) bool {
	// only positive integers
	// must be partitioned into two integers
	// sum of each subset must be equal
	// implies that total sum is always equal
	// implies that we need to find ways to create sum/2
	// seems like a backtracking problem

	// our target subset will have sum/2
	sum := 0
	for _, num := range nums {
		sum += num
	}

	// edge case
	if sum%2 != 0 {
		return false
	}

	return helper(nums, 0, 0, sum/2)
}

func helper(nums []int, place int, currentSum int, target int) bool {
	// use place instead
	if place == len(nums) {
		if currentSum == target {
			return true
		}
		return false
	}

	// early termination
	if currentSum > target {
		return false
	}

	// success if any recursion is true
	result := false

	// backtracking
	for i := place; i < len(nums); i++ {
		if helper(nums, i+1, currentSum+nums[i], target) {
			result = true
		}
	}

	return result
}

func canPartition(nums []int) bool {
	sum := 0
	for _, num := range nums {
		sum += num
	}
	if sum%2 == 1 {
		return false
	}
	sum /= 2

	dp := make([][]bool, len(nums)+1)
	for i := 0; i <= len(nums); i++ {
		dp[i] = make([]bool, sum+1)
	}

	dp[0][0] = true

	// this is saying that if you have sum of 0, you can reach it by not including any numbers
	// the whole point is that if you can find something that adds up to sum/2, those nums are a valid subset
	for i := 1; i <= len(nums); i++ {
		dp[i][0] = true
	}

	// this is saying that if you have some sum j, you cannot reach it if you have 0 numbers
	for j := 1; j <= sum; j++ {
		dp[0][j] = false
	}

	for i := 1; i <= len(nums); i++ {
		for j := 1; j <= sum; j++ {
			dp[i][j] = dp[i-1][j] // this implies that you don't pick the new number at index i
			if j >= nums[i-1] {
				// the second term implies that we take the number and subtract from current sum j
				dp[i][j] = dp[i][j] || dp[i-1][j-nums[i-1]]
			}
		}
	}

	return dp[len(nums)][sum]
}

func canPartition(nums []int) bool {
	// setup target sum
	sum := 0
	for _, num := range nums {
		sum += num
	}
	if sum%2 == 1 {
		return false
	}
	sum /= 2

	// we want to find dp[sum]
	dp := make([]bool, sum+1)
	dp[0] = true // we can always get sum 0 with no numbers

	// if sum is 1, we can reach it only if there is a 1 in nums
	// if sum is 2, we can reach if 2 or 1+1
	for _, num := range nums {
		// must go right to left because otherwise it reuses num for new sum
		// dp[j] is reliant on previous values, so if you move from left to right, dp[j] will consider the pieces you had overwritten
		for j := sum; j > 0; j-- {
			if j >= num {
				dp[j] = dp[j] || dp[j-num]
			}
		}
	}

	return dp[sum]
}