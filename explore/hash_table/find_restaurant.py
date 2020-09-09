# Find the common interest with the least list index sum. So, two people basically have their favorite restaurants in ranking order, so the lowest index sum represents overall rank.
# If you didn't care about the least index sum, you could just make a hash map and populate the list, then do the same. Likewise, you could convert both into sets and take the intersection.
# We need to able to store their index in some fashion. I make hash map for the first restaurant, then iterate through the second, if they match then I populate a result arr, but only if the index sum is less, which means we need a counter for index sum.
class Solution:
	def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
		# edge case
		if not list1 or not list2:
			return []

		rest_list = []
		index_sum = 100000 # infinity arbitrary

		# map restaurant to index for first list
		hash_map = {}
		for index, rest in enumerate(list1):
			hash_map[rest] = index

		for index, rest in enumerate(list2):
			if rest in hash_map and index + hash_map[rest] < index_sum:
				rest_list = [rest]
				index_sum = index + hash_map[rest]
			elif rest in hash_map and index + hash_map[rest] == index_sum:
				rest_list.append(rest)

		return rest_list
