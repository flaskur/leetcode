// on a chessboard, there is a single white rook, some white bishops, and some black pawns. find how many captures are possible for the rook.
func numRookCaptures(board [][]byte) int {
	captures := 0
	rookRow, rookCol, foundRook := 0, 0, false

	for i := range board {
		for j, piece := range board[i] {
			if piece == 'R' {
				rookRow, rookCol = i, j
				foundRook = true
				break
			}
		}
		if foundRook {
			break
		}
	}

	left, right := rookRow, rookRow
	for left >= 0 {
		if board[rookRow][left] == 'B' {
			break
		} else if board[rookRow][left] == 'p' {
			captures++
			break
		}
		left--
	}
	for right <= 7 {
		if board[rookRow][right] == 'B' {
			break
		} else if board[rookRow][right] == 'p' {
			captures++
			break
		}
		right++
	}

	top, bottom := rookCol, rookCol
	for top >= 0 {
		if board[top][rookCol] == 'B' {
			break
		} else if board[top][rookCol] == 'p' {
			captures++
			break
		}
		top--
	}
	for bottom <= 7 {
		if board[bottom][rookCol] == 'B' {
			break
		} else if board[bottom][rookCol] == 'p' {
			captures++
			break
		}
		bottom++
	}

	return captures
}