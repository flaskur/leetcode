# Houses are arranged in a circle so that the first house is the neighbor of the last. Cannot rob adjacent houses. Find max amount of money you can rob.
class Solution:
	def rob(self, nums: List[int]) -> int:
		# edge case
		if not nums:
			return 0

		# edge case
		if len(nums) <= 3:
			return max(nums)

		dp = [0] * len(nums)
		dp[0] = nums[0]
		dp[1] = max(nums[:2])

		# don't count the last one
		for i in range(2, len(dp) - 1):
			dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])

		# you must exclude the first num and calculate again
		dx = [0] * (len(nums) - 1)
		dx[0] = nums[1]
		dx[1] = max(nums[1:3])

		for j in range(2, len(dx)):
			dx[j] = max(dx[j - 2] + nums[j + 1], dx[j - 1])

		# assign max amount of last if you excluded the first value
		dp[-1] = max(dp[-2], dx[-1])

		# print(dx, dp)

		return dp[-1]
