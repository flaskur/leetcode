# Given an array of integers and an integer k, find out whether there are two distinct indices i and j such that nums[i] = nums[j] and abs diff of i and j is <= k.
# One approach is make a hash map with key of integer and value of list of index for that value. Then we iterate through each hash map entry to check each index pair.
# The pairing of the indices is technically O(n^2), but maybe some exploit since indices are sorted?
class Solution:
	def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
		# edge case
		if len(nums) < 2:
			return False

		# populate hash map with list of indices
		hash_map = {}
		for index, num in enumerate(nums):
			if num in hash_map:
				hash_map[num].append(index)
			else:
				hash_map[num] = [index]

		# iterate through index lists in hash map to check if j - i <= k
		for num, indices in hash_map.items():
			# only check pairs if list len is at least 2
			if len(indices) >= 2:
				for i in range(len(indices) - 1):
					for j in range(i + 1, len(indices)):
						# remember to use the original index
						if hash_map[num][j] - hash_map[num][i] <= k:
							return True

		return False # failed to find valid index pair
			