# Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.
# The correct approach is to build the current sum and if it's positive, then it's helpful. If the current sum of the subarray is negative, then you discard everything and just start from scratch. Overwriting the array is fine.
class Solution:
	def maxSubArray(self, nums: List[int]) -> int:
		# edge case
		if len(nums) == 1:
			return nums[0]

		for i in range(1, len(nums)):
			# if the subarray sum is positive, it is helpful
			if nums[i-1] > 0:
				nums[i] += nums[i-1]

			# if the subarray sum is negative, start from scratch

		return max(nums)

# Instead of overwriting the array, set a sum variable set to -infinity and update with current sum instead.
# core idea is that if subarray sum is positive, including the next element would be good but may not improve max. If subarray sum is negative, do not include next element, just start new with next element.
# One pointer i is set to start and will change when sub array sum becomes negative. Pointer j will be at next element that could possibly be included 
# INEFFICIENT
class Solution:
	def maxSubArray(self, nums: List[int]) -> int:
		# edge case
		if len(nums) == 1:
			return nums[0]

		max_sub_sum = nums[0]

		# if subarray sum is positive, helpful so possibly update 
		# if subarray sum is negative, move start pointer to current ignoring that portion
		start = 0
		for end in range(1, len(nums)):
			current_sum = sum(nums[start:end]) # not including end
			if current_sum > 0:
				max_sub_sum = max(max_sub_sum, current_sum + nums[end])
			else:
				start = end
				max_sub_sum = max(max_sub_sum, nums[start])
			
		return max_sub_sum
