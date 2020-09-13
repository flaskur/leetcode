# Given the row index, return the row indexth row of the pascal's triangle recursively.
# This is confusing to do recursively because we are dealing with a list. I guess we start by establishing the base case of [1] and [1, 1] for indices 0 and 1.
# You don't exactly build anything here though, you just have to reference previous.
class Solution:
	def getRow(self, rowIndex: int) -> List[int]:
		memo = {} # to avoid timeout from repeat expensive function call

		def helper(rowIndex: int) -> List[int]:
			# base case
			if rowIndex == 0:
				return [1]
			if rowIndex == 1:
				return [1, 1]

			
			# build the row like usual but solve the number by recursively checking the value from the one above, might be better if you memoize
			row = []
			for i in range(rowIndex + 1):
				if i == 0 or i == rowIndex:
					row.append(1)
				else:
					if rowIndex - 1 in memo:
						row.append(memo[rowIndex - 1][i - 1] + memo[rowIndex - 1][i])
					else:
						row.append(helper(rowIndex - 1)[i-1] + helper(rowIndex - 1)[i])

			# since we repeated need to check for previous row, use a hash map as a memo to reference that instead of computing the expensive calculation again
			if rowIndex not in memo:
				memo[rowIndex] = row

			return row

		return helper(rowIndex)