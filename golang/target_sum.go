func findTargetSumWays(nums []int, target int) int {
	total, ways := 0, 0
	for _, num := range nums {
		total += num
	}

	helper(nums, target, 1, nums[0], total-nums[0], &ways)
	helper(nums, target, 1, -nums[0], total-nums[0], &ways)
	return ways
}

func helper(nums []int, target int, place int, sum int, leftover int, ways *int) {
	// base case
	if place > len(nums)-1 {
		if sum == target {
			(*ways)++
		}
		return
	}

	// early termination
	if target < sum-leftover || target > sum+leftover {
		return
	}

	// try both paths
	helper(nums, target, place+1, sum+nums[place], leftover-nums[place], ways)
	helper(nums, target, place+1, sum-nums[place], leftover-nums[place], ways)
}