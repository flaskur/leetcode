# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# For this problem I would create a hash map where the keys are the sorted string and the value is a list of all the string entries unsorted. Then iterate through the map to populate a results array.
class Solution:
	def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
		# edge case
		if not strs:
			return []

		# populate hash map
		hash_map = {}
		for str in strs:
			sorted_str = ''.join(sorted(str)) # you cannot have a list as a map key, so we convert original string to list, then back into a string; in js it's much easier because you can just spread [...str].join('')
			if sorted_str in hash_map:
				hash_map[sorted_str].append(str)
			else:
				hash_map[sorted_str] = [str]

		# iterate hash map to populate result array
		result_list = []
		for anagram_list in hash_map.values():
			result_list.append(anagram_list)

		return result_list