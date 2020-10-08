# Each house has a certain amount of money stashed, You cannot rob adjacent houses. Determine the max amount of money possible with any rob route.
class Solution:
	def rob(self, nums: List[int]) -> int:
		# edge case
		if not nums:
			return 0

		# edge case --> can only get one house
		if len(nums) <= 2:
			return max(nums)

		# recursive approach
		def helper(nums, index, total):
			# base case
			if index >= len(nums):
				return total

			return max(
				helper(nums, index + 2, total + nums[index]),
				helper(nums, index + 1, total)
			)

		return helper(nums, 0, 0)

class Solution:
	def rob(self, nums: List[int]) -> int:
		# make a dp array where index represents the house number
		# first house max is just itself so dp[1] = nums[1]
		# dp[2] assumes dp[0] + nums[2] which is max if you skipped the one before

		# edge case
		if not nums:
			return 0

		# edge case --> can only get one house
		if len(nums) <= 2:
			return max(nums)

		dp = [0] * (len(nums) + 1) # ignore the 0 index
		dp[1] = nums[0]
		dp[2] = max(nums[0], nums[1])

		# set dp array
		for i in range(3, len(dp)):
			# max cash at house i is max of robbing this one and max of 2 houses back, or skipping and max of 1 house back
			dp[i] = max(dp[i - 2] + nums[i - 1], dp[i - 1])

		return dp[-1]