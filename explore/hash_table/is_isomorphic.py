# Given two strings s and t, determine if they are isomorphic, meaning you can replace each character in s to get t, but the character mappings are fixed. 'a' will always map to 'b'.
# Make a hash map for the mappings of each character, then iterate again to change the string s. Compare transformed s and t at the end.
class Solution:
	def isIsomorphic(self, s: str, t: str) -> bool:
		# edge case
		if len(s) != len(t):
			return False
		
		hash_map = {}

		# iterate to populate the hash character mappings
		for i in range(len(s)):
			# TWO VALUES FOR SAME KEY
			# we encounter the same t char value for different s, return False
			if t[i] in hash_map and s[i] != hash_map[t[i]]:
				return False

			# TWO KEYS FOR SAME VALUE
			# dulicate values for different keys
			if s[i] in hash_map.values() and t[i] not in hash_map:
				return False
			
			hash_map[t[i]] = s[i]

		# remember we reversed the mapping

		# transform t using the character mappings
		for i in range(len(t)):
			t = t[:i] + hash_map[t[i]] + t[i + 1:]

		# print(s, t, hash_map)

		return s == t