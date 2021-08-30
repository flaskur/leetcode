func climbStairs(n int) int {
	// if n is 1 then theres only 1 distinct way
	// if n is 2 then theres are 2 distinct ways
	// if n is 3 then there are 3 distinct ways
	// if n is 4 then 2+2 1+1+1+1 2+1+1 1+2+1 1+1+2 5 ways
	// implies that to climb n stairs it is the last stairs distinct ways which we can do recursively or dynamically
	// if we do recursively, we should keep memo
	// dynamically we should create an array of length n+1 to account for 0 index
	// init dp[1], dp[2] to 1 and 2 respectively

	// edge case
	if n == 1 {
		return 1
	} else if n == 2 {
		return 2
	}

	dp := make([]int, n+1)
	dp[1] = 1
	dp[2] = 2
	for index := 3; index < len(dp); index++ {
		dp[index] = dp[index-1] + dp[index-2]
	}
	return dp[len(dp)-1]
}