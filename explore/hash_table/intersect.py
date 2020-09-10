# Given two arrays, write a function to compute their intersection.
# This seems like the problem as before, but we now need to include exact count, not single instance like with a set.
class Solution:
	def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
		# edge case
		if not nums1 or not nums2:
			return []

		result_list = []
		hash_map = {}

		# make it a count hash instead
		for num in nums1:
			if num not in hash_map:
				hash_map[num] = 1
			else:
				hash_map[num] += 1

		# iterate through second array and populate result set
		for num in nums2:
			if num in hash_map and hash_map[num] > 0:
				result_list.append(num)
				hash_map[num] -= 1

		return result_list