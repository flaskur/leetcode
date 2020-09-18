# Write a program to solve a sudoku puzzle by filling the empty cells.
# We already wrote a program to check if the whole board was valid, but in this case you would check if a particular placement is valid.
class Solution:
	def solveSudoku(self, board: List[List[str]]) -> None:
		if not board:
			return None

		def helper(board: List[List[str]]) -> bool:
			for i in range(board.length):
				for j in range(board[0].length):
					if board[i][j] == '.':
						# try each candidate if it's a valid placement
						for c in range(1, 10):
							c = str(c)
							
							# assign to board
							if isValid(board, i, j, c):
								board[i][j] = c
								
								# recursively call again to solve with this board state
								if helper(board):
									return True
								# backtrack reverting the board assignment c
								else:
									board[i][j] = '.'

						# couldn't find a valid char entry, return false for failed path
						return False

			# completed the above without finding a '.' meaning it's a solved

		def isValid(board: List[List[str]], row: int, col: int, c: str) -> bool:
			# you need to check that c hasn't already been placed in the row, column, or sub box that was given
			for i in range(0, 10):
				if board[i][col] != '.' and board[i][col] == c:
					return False
				if board[row][i] != '.' and board[row][i] == c:
					return False
				
				# the trick to knowing grid box is by knowing that the grid index increases each time it grows by 3 so use formula box_index = (column / 3) + (row / 3) * 3
				# actually grid index grows by 3 or every 3 row which explains why you multiply row by 3
				# you are suppose to find and iterate through all the numbers in the same grid as row and col given
				# this is really confusing to be honest
				if board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] != '.' and board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3]:
					return False

			return True

				
