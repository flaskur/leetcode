// fibonacci numbers are a sequence such that each number is the sum of the preceding ones starting with 0 and 1.

// recursive memoization
// var cache = make(map[int]int)

// func fib(n int) int {
// 	if n <= 1 {
// 		return n
// 	}

// 	if val, ok := cache[n]; ok {
// 		return val
// 	}

// 	val := fib(n-1) + fib(n-2)
// 	cache[n] = val

// 	return val
// }

// dynamic programming
func fib(n int) int {
	dp := [31]int{}
	dp[0] = 0
	dp[1] = 1

	for i := 2; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}

	return dp[n]
}