# Determine if a 9x9 sudoku board is valid. Rules are 1-9 for columns, rows, and boxes without repetition. Empty cells are '.'
# I think the general approach is make a boolean hash map with 1-9 as keys and bool as value to check if it already exists, and then reset on every row, column, and box.
# I think the hard would be identifying and iterating through each sub box, because it seems like you need 4 for loops. The sub box start points are 00, 03, 06, 30, 33, 36, 60, 63, 66.
# Note that the values are all strings, but they appear as numbers.
class Solution:
	def isValidSudoku(self, board: List[List[str]]) -> bool:
		# sub boxes
		for row in range(0, 9, 3):
			for column in range(0, 9, 3):
				subbox_map = {}
				for i in range(row, row + 3):
					for j in range(column, column + 3):
						if board[i][j] != '.' and board[i][j] not in subbox_map:
							subbox_map[board[i][j]] = True
						elif board[i][j] in subbox_map:
							return False
						# otherwise it's '.' so ignore

				print('sub box', subbox_map)
				subbox_map.clear()

		# rows
		for row in range(9):
			row_map = {}
			for column in range(9):
				if board[row][column] != '.' and board[row][column] not in row_map:
					# print(f'added {board[row][column]}')
					row_map[board[row][column]] = True
				elif board[row][column] in row_map:
					# print(f'value {board[row][column]} fails')
					return False

			print('row', row_map)
			row_map.clear()

		# columns
		for column in range(9):
			column_map = {}
			for row in range(9):
				if board[row][column] != '.' and board[row][column] not in column_map:
					column_map[board[row][column]] = True
				elif board[row][column] in column_map:
					return False

			print('column', column_map)
			column_map.clear()

		return True

# Extremely tedious, but concept is literally just resetting a hash map and handling each case individually.
# Had bug where I used i and j instead of row and column on bottom 2 cases.