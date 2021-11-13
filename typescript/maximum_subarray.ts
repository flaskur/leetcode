function maxSubArray(nums: number[]): number {
	// max subarray implies contiguous sum so choice is either start anew or sum with existing

	let dp = new Array(nums.length)
	dp[0] = nums[0]

	let largest = dp[0]

	for (let i = 1; i < dp.length; i++) {
		dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])

		largest = Math.max(largest, dp[i])
	}

	return largest
}

// don't need array declaration bc contiguous
function maxSubArray(nums: number[]): number {
	let prev = 0
	let max = -(10 ** 4)

	for (let i = 0; i < nums.length; i++) {
		prev = Math.max(prev + nums[i], nums[i])
		max = Math.max(max, prev)
	}

	return max
}
