func jump(nums []int) int {
	// initialize all jumps except index 0 to max int
	dp := make([]int, len(nums))
	for i := 1; i < len(dp); i++ {
		dp[i] = math.MaxInt32
	}

	// for each index, we need to fill in the step indices and minimize
	for i := 0; i < len(dp)-1; i++ {
		for steps := 1; steps <= nums[i]; steps++ {
			if i+steps >= len(nums) {
				break
			}
			dp[i+steps] = min(dp[i+steps], dp[i]+1)
		}
	}
	return dp[len(dp)-1]
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}

// greedy
func jump(nums []int) int {
	// idea is that if you reach something, you also reach all elements before it
	// each iteration should try to find the farthest reach
	// when you happen upon a previously reached place, move to farthest reached place (which also implies all steps to get there) in one jump
	if len(nums) == 1 {
		return 0
	}

	jumps, reach, prevReach := 0, 0, 0

	for i := 0; i < len(nums); i++ {
		// find the farthest place you can reach every time
		if i+nums[i] > reach {
			reach = i + nums[i]
		}

		// when i == prevReach, it implies that you have found the farthest reach for the entire range of steps to get there, so new reach will be ideal
		if i == prevReach {
			jumps++
			prevReach = reach

			// end case guaranteed to exist
			if prevReach >= len(nums)-1 {
				return jumps
			}
		}
	}

	return -1
}