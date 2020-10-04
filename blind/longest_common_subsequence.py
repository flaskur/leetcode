# Given two strings, return the length of their longest common subsequence.
# Core idea is that you compare the end characters of two substrings and you take the max value of cutting off the char of either string. Basically, on failure you remove a character only from one string, then compare again.
# Create a 2 dimensional DP array as the memo to avoid timeout but make sure to include basecase where both are empty strings
class Solution:
	def longestCommonSubsequence(self, text1: str, text2: str) -> int:
		# edge case
		if not text1 or not text2: return 0

		# init dp matrix, already set to 0 for first row and column
		dp = []
		row = [0] * (len(text2) + 1) # +1 to account for empty string
		for col in range(len(text1) + 1):
			dp.append(row[:]) # this must be a value not a reference --> deep copy not a shallow copy

		for i in range(1, len(dp)):
			for j in range(1, len(dp[0])):
				# both values match
				if text1[i-1] == text2[j-1]:
					dp[i][j] = 1 + dp[i-1][j-1]
				# neither match, chop off a character
				else:
					dp[i][j] = max(dp[i-1][j], dp[i][j-1])

		# last value will be length of LCS
		return dp[len(dp) - 1][len(dp[0]) - 1]
