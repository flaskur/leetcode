# Write an efficient algorithm that searches for a value in an m x n matrix. The matrix rows are sorted from left to right. The matrix columns are sorted from top to bottom. Do it recursively.
class Solution:
	def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
		if not matrix:
			return False
		
		def helper(matrix: List[List[int]], row: int, column: int) -> bool:
			# base case
			if row >= len(matrix) or column < 0:
				return False

			if target == matrix[row][column]:
				return True

			if target < matrix[row][column]:
				return helper(matrix, row, column - 1)
			if target > matrix[row][column]:
				return helper(matrix, row + 1, column)

		# initial position at top right
		return helper(matrix, 0, len(matrix[0]) - 1)
	
	# def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
	# 	if not matrix or len(matrix) < 1 or len(matrix[0]) < 1:
	# 		return False

	# 	# start the position at top right corner
	# 	column = len(matrix[0]) - 1
	# 	row = 0

	# 	while column >= 0 and row <= matrix.length - 1:
	# 		if target == matrix[row][column]:
	# 			return True
	# 		elif target < matrix[row][column]:
	# 			column -= 1
	# 		elif target > matrix[row][column]:
	# 			row += 1

	# 	return False