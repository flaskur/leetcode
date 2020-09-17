# Given integer n, return the number of distinct solutions to the n queen puzzle.
# Idea with backtracking is to make the assumption that a single path can fail and to ignore that path. 
# Base case is when row index becomes n, and we skip a placement (row, col) if it falls into same diagonal or column which will be done with a hash set.
class Solution:
	def totalNQueens(self, n: int) -> int:
		# edge case
		if n == 0:
			return 0

		# initialize 3 hash sets to represent filled columns, diagonal1, diagonal2
		filled_columns = set()
		filled_diagonal1 = set() # top left to bottom right -> row - column
		filled_diagonal2 = set() # top right to bottom left -> row + column

		def helper(n: int, row_index: int, filled_columns, filled_diagonal1, filled_diagonal2) -> int:
			# base case
			if n == row_index:
				return 1

			num_solutions = 0

			for column_index in range(n):

				# check if queen is in same territory
				if column_index in filled_columns:
					continue
				if row_index - column_index in filled_diagonal1:
					continue
				if row_index + column_index in filled_diagonal2:
					continue

				# add placement to hash sets
				filled_columns.add(column_index)
				filled_diagonal1.add(row_index - column_index)
				filled_diagonal2.add(row_index + column_index)

				# valid placement, so check another row
				num_solutions += helper(n, row_index + 1, filled_columns, filled_diagonal1, filled_diagonal2)

				# another path is not deciding to use this specific row/col pair
				filled_columns.remove(column_index)
				filled_diagonal1.remove(row_index - column_index)
				filled_diagonal2.remove(row_index + column_index)

			return num_solutions

		return helper(n, 0, filled_columns, filled_diagonal1, filled_diagonal2)




		