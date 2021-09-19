func exist(board [][]byte, word string) bool {
	// find start point with first letter
	for row := 0; row < len(board); row++ {
		for col := 0; col < len(board[0]); col++ {
			if board[row][col] == word[0] {
				seen := map[string]bool{
					fmt.Sprint(row, col): true,
				}
				result := helper(board, word, row, col, string(board[row][col]), seen)
				if result == true {
					return true
				}
			}
		}
	}

	return false
}

func helper(board [][]byte, word string, row int, col int, current string, seen map[string]bool) bool {
	// base case
	if len(current) == len(word) {
		if current == word {
			return true
		}
		return false
	}

	// see if going down any of the the paths will work
	up, down, left, right := false, false, false, false
	// up
	if row != 0 && !seen[fmt.Sprint(row-1, col)] && board[row-1][col] == word[len(current)] {
		seen[fmt.Sprint(row-1, col)] = true
		up = helper(board, word, row-1, col, current+string(board[row-1][col]), seen)
		seen[fmt.Sprint(row-1, col)] = false
	}
	// down
	if row != len(board)-1 && !seen[fmt.Sprint(row+1, col)] && board[row+1][col] == word[len(current)] {
		seen[fmt.Sprint(row+1, col)] = true
		down = helper(board, word, row+1, col, current+string(board[row+1][col]), seen)
		seen[fmt.Sprint(row+1, col)] = false
	}
	// left
	if col != 0 && !seen[fmt.Sprint(row, col-1)] && board[row][col-1] == word[len(current)] {
		seen[fmt.Sprint(row, col-1)] = true
		left = helper(board, word, row, col-1, current+string(board[row][col-1]), seen)
		seen[fmt.Sprint(row, col-1)] = false
	}
	// right
	if col != len(board[0])-1 && !seen[fmt.Sprint(row, col+1)] && board[row][col+1] == word[len(current)] {
		seen[fmt.Sprint(row, col+1)] = true
		right = helper(board, word, row, col+1, current+string(board[row][col+1]), seen)
		seen[fmt.Sprint(row, col+1)] = false
	}

	return up || down || left || right
}

// mark board instead of using seen hash set
func exist(board [][]byte, word string) bool {
	for row := 0; row < len(board); row++ {
		for col := 0; col < len(board[0]); col++ {
			if board[row][col] == word[0] && helper(board, word, row, col, string(word[0])) {
				return true
			}
		}
	}
	return false
}

func helper(board [][]byte, word string, row int, col int, current string) bool {
	// base case
	if len(current) == len(word) {
		if current == word {
			return true
		}
		return false
	}

	// mark new cell
	undo := board[row][col]
	board[row][col] = 'X'

	// traverse valid adjacent cells
	// up
	if row != 0 && board[row-1][col] == word[len(current)] && helper(board, word, row-1, col, current+string(board[row-1][col])) {
		return true
	}
	// down
	if row != len(board)-1 && board[row+1][col] == word[len(current)] && helper(board, word, row+1, col, current+string(board[row+1][col])) {
		return true
	}
	// left
	if col != 0 && board[row][col-1] == word[len(current)] && helper(board, word, row, col-1, current+string(board[row][col-1])) {
		return true
	}
	// right
	if col != len(board[0])-1 && board[row][col+1] == word[len(current)] && helper(board, word, row, col+1, current+string(board[row][col+1])) {
		return true
	}

	// failed all paths --> clear board
	board[row][col] = undo
	return false
}