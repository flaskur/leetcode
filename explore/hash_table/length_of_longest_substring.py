# Given a string s, find the length of the longest substring without repeating characters.
# Use two pointers i and j. We build a boolean hash map that has characters as values to keep track of previous encounters.
class Solution:
	def lengthOfLongestSubstring(self, s: str) -> int:
		# edge case
		if not s:
			return 0
		if len(s) == 1:
			return 1

		longest_len = 0

		for i in range(len(s)):
			# building character map 
			char_map = {}

			for j in range(i, len(s)):
				# handle case of last char not being a repeat but still need to update longest_len
				if s[j] not in char_map and j == len(s) - 1:
					if len(s[i:]) > longest_len:
						longest_len = len(s[i:])
						break # redundant
				elif s[j] not in char_map:
					char_map[s[j]] = True
				else:
					# print(f'{s[j]} not found in {char_map}')
					if len(s[i:j]) > longest_len:
						# print(s[i:j])
						longest_len = len(s[i:j])

					break

			char_map.clear()

		return longest_len
				