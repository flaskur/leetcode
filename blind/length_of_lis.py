# Given an unsorted array of integers, find the length of the longest increasing subsequence. Subsequence means you can skip values.
# Initial idea is to use backtracking and try with each candidate as the start and go down each path, changing max length on base case or failure. This times out though on large test cases.
# Dynamic programming approach is to set a boundary pointer and traverse from start to boundary. Each number that is greater than current will set a max value at dp array.
# The important distinction is that you are saving operations by setting dp array at i since LIS is independent of future values.
class Solution:
	def lengthOfLIS(self, nums: List[int]) -> int:
		# edge case
		if not nums: return 0

		# arbitrary init value
		max_length = 1

		# initialize a dp array
		dp = [0] * len(nums)
		dp[0] = 1

		# bound is the end point of a sub sequence
		for bound in range(1, len(nums)):
			current_max = 0

			# not including bound
			for j in range(bound):
				# found a increasing value, set current max to dp[j] which is the LIS of j as the bound
				# notice that j iterates through all indices up to bound which means it will take the greatest LIS from that entire sequence from dp array
				if nums[bound] > nums[j]:
					current_max = max(current_max, dp[j])

			# set bound LIS value + 1 because you include the value itself
			dp[bound] = current_max + 1

			# update length if bound value is greater
			max_length = max(max_length, dp[bound])

		return max_length
