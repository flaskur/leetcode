# Given a string, find the first non repeating character in it and return its index. If it doesn't exist, return -1.
# Make a hash map with char key and index value. Iterate and it already encountered in the hash, remove from hash. Iterate through string again and check if it exists in hash for correct order.
# Actually a count hash map would be better because the immediately removal doesn't account for multiple chars.
class Solution:
	def firstUniqChar(self, s: str) -> int:
		# edge case
		if not s:
			return -1

		# populate a count hash
		hash_map = {}
		for char in s:
			if char in hash_map:
				hash_map[char] += 1
			else:
				hash_map[char] = 1
 
		# iterate and check if it exists in hash with count 1
		for i in range(len(s)):
			if s[i] in hash_map and hash_map[s[i]] == 1:
				return i
		
		return -1
		