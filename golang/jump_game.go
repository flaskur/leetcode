func canJump(nums []int) bool {
	dp := make([]bool, len(nums))
	dp[0] = true
	for i := 0; i < len(nums)-1; i++ {
		// cannot reach this by prev jumps
		if dp[i] == false {
			return false
		}

		for step := 1; step <= nums[i]; step++ {
			if i+step >= len(nums) {
				break
			}
			dp[i+step] = true
		}
	}

	return dp[len(dp)-1] == true
}

func canJump(nums []int) bool {
	if len(nums) == 1 {
		return true
	}

	reach, prevReach := 0, 0

	for i := 0; i < len(nums)-1; i++ {
		// dead end
		if nums[i] == 0 && i == reach {
			return false
		}

		// find farthest reach
		if i+nums[i] > reach {
			reach = i + nums[i]
		}

		// ends when nums[i] is zero and same as reach
		// i == prevReach implies that you have found the farthest reach of all the nums before it
		if i == prevReach {
			prevReach = reach

			if prevReach >= len(nums)-1 {
				return true
			}
		}
	}

	return false
}