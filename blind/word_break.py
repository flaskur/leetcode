# Given a non empty string s and a dictionary wordDict containing a list of non empty words, determine if s can be segmented into space separated sequences of one or more dictionary words. You can reuse the same word multiple times and dictionary does not include duplicates.
# One approach is taking every single dictionary combination until word match or length of word is surpassed or the substring slice doesn't match. That would be the top down recursive approach with backtracking on a current string. Times out if dictionary is repetitive and you don't memoize.
# Bottom up DP approach is using a dp array and setting if substring can be represented by the dict words.
class Solution:
	def wordBreak(self, s: str, wordDict: List[str]) -> bool:
		# edge case
		if not s:
			return True

		# init a dp array where each index represents substring
		dp = [False] * (len(s) + 1)
		dp[0] = True

		# i represents iteration of dp array as i boundary index
		for i in range(1, len(dp)):
			# iterate j to create substring
			for j in range(0, i):
				# if current substring boundary can be made up of wordDict and new substring from j to boundary in dict, set true, check next
				if dp[j] and s[j:i] in wordDict: # why s[j:i] not s[j+1:i]? because j represents the boundary in dp array, not included
					dp[i] = True
					break

		return dp[len(s)]


# Top Down Recursive Backtracking Solution tries every candidate and memoizes current strings that have already failed.
# class Solution:
# 	def wordBreak(self, s: str, wordDict: List[str]) -> bool:
# 		# edge case
# 		if not s:
# 			return True

# 		# to expedite failed cases
# 		memo = set()

# 		def helper(s, current, end, wordDict):
# 			# print(s, current, s[:end])
			
# 			# base case
# 			if s == current:
# 				return True

# 			# current length too big
# 			if len(current) >= len(s):
# 				return False

# 			# doesn't match current substring
# 			if current != s[:end]:
# 				return False

# 			# otherwise try each candidate and recursively call
# 			for word in wordDict:
# 				# if we already calculated a failed case
# 				if current + word in memo:
# 					continue
				
# 				original = current
# 				current += word

# 				result = helper(s, current, end + len(word), wordDict)
			
# 				current = original # backtrack

# 				# path worked out
# 				if result == True:
# 					return True

# 				# otherwise set memo and try other candidates
# 				memo.add(current + word)

# 			# path will only return false if all paths fail on this branch
# 			return False

# 		return helper(s, '', 0, wordDict)
