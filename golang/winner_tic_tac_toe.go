func tictactoe(moves [][]int) string {
	board := make([][]rune, 3)
	for i := 0; i < 3; i++ {
		row := make([]rune, 3)
		board[i] = row
	}
	for i, move := range moves {
		if i%2 == 0 {
			board[move[0]][move[1]] = 'X'
		} else {
			board[move[0]][move[1]] = 'O'
		}
	}

	if isWinner(board, 'X') {
		return "A"
	}
	if isWinner(board, 'O') {
		return "B"
	}
	if isFullBoard(board) {
		return "Draw"
	}
	return "Pending"
}

func isWinner(board [][]rune, token rune) bool {
	// diagonals
	if board[0][0] == token && board[1][1] == token && board[2][2] == token {
		return true
	}
	if board[0][2] == token && board[1][1] == token && board[2][0] == token {
		return true
	}

	for i := 0; i < 3; i++ {
		// row
		if board[i][0] == token && board[i][1] == token && board[i][2] == token {
			return true
		}

		// column
		if board[0][i] == token && board[1][i] == token && board[2][i] == token {
			return true
		}
	}

	return false
}
func isFullBoard(board [][]rune) bool {
	count := 0
	for _, row := range board {
		for _, value := range row {
			if value == 'X' || value == 'O' {
				count++
			}
		}
	}
	return count == 9
}