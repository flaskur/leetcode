# Given a collection of distinct integers, return all possible permutations. Remember combo means ignore ordering, perms care about order.
# Solve using backtracking and ignoring numbers that have already appeared in the current list.
class Solution:
	def permute(self, nums: List[int]) -> List[List[int]]:
		if not nums:
			return []
		
		result = []

		def helper(nums: List[int], current: List[int]) -> None:
			# base case
			if len(current) == len(nums):
				result.append(current[:])

			# iterate through every distinct integer, the distinct part allows us to just check if the num already is checked, otherwise we would need to store the indices of the nums already used
			for num in nums:
				if num in current:
					continue

				current.append(num) # add to current list
				helper(nums, current) # try this path
				current.pop() # decide not to go down this path

		helper(nums, [])

		return result
