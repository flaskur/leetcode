# Given n pairs of parentheses, write a function to generate all combinations of well formed parentheses.
# Seems like a backtracking problem, but how do you know if a combination is valid?
class Solution:
	def generateParenthesis(self, n: int) -> List[str]:
		result = []

		def helper(n: int, s: str, left: int, right: int) -> None:
			# base case
			if 2 * n == len(s) and left == right:
				result.append(s)

			if left < n:
				helper(n, s + '(', left + 1, right)
			if right < left:
				helper(n, s + ')', left, right + 1)

		helper(n, '', 0, 0)

		return result

		