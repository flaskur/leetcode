# Given an array of integers nums and an integer target, return the indices of two numbers such that they add up to the target.
# I think the two pointers solution is probably the most intuitive and best way to do this because it's already a sorted solution, but since we must use hash maps, I would iterate through the array and store index. Then iterate again to find the exact value to add up to target.
class Solution:
	def twoSum(self, nums: List[int], target: int) -> List[int]:
		hash_map = {}

		# populate hash map with nums corresponding index
		for index, num in enumerate(nums):
			if num in hash_map:
				hash_map[num].append(index)
			else:
				hash_map[num] = [index]

		# iterate again, if num + another value in hash map add up to target, we found our answer
		for index, num in enumerate(nums):
			# to avoid checking the current number in hash map
			if (target - num) in hash_map:
				# handle duplicate numbers case
				if len(hash_map[target - num]) == 2:
					return hash_map[num]
				
				# handles num * 2 = target case
				if index != hash_map[target - num][0]:
					return [index, hash_map[target - num][0]]

		# answer is guaranteed to exist