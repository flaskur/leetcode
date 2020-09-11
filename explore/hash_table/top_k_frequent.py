# Given a non empty array of integers, return the k most frequent elements.
# I could make a count hash map, but I would need to order based on on frequency which means a sort is necessary. Perhaps you could keep track of a min.
# Alternative solution is to make an array of size max frequency + 1, and then use the count map and populate with the actual number
class Solution:
	def topKFrequent(self, nums: List[int], k: int) -> List[int]:
		# edge case
		if not nums:
			return []

		# represent a bucket array where index represents frequency and value is the real number
		bucket = []
		for i in range(len(nums) + 1):
			bucket.append([]) # empty list to accomodate same frequency values

		# populate a count hash map
		num_count_map = {}
		for num in nums:
			if num not in num_count_map:
				num_count_map[num] = 1
			else:
				num_count_map[num] += 1

		# populate the bucket array using count/freq map
		for num, count in num_count_map.items():
			bucket[count].append(num)

		print(bucket)

		# fill result list until k is reached
		result_list = []
		fill = 0
		for i in range(len(bucket) - 1, -1, -1):
			for j in range(len(bucket[i])):
				# print(bucket[i][j])
				if fill < k:
					result_list.append(bucket[i][j])
					fill += 1
				elif fill == k:
					return result_list

		return result_list
