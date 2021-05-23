// determine if a 9x9 sudoku board is valid.
func isValidSudoku(board [][]byte) bool {
	var rows, cols, boxes []map[byte]bool
	for i := 0; i < 9; i++ {
		rows = append(rows, make(map[byte]bool))
		cols = append(cols, make(map[byte]bool))
		boxes = append(boxes, make(map[byte]bool))
	}

	for i := range board {
		for j, num := range board[i] {
			if num == '.' {
				continue
			}
			// check if num exist in map
			if rows[i][num] || cols[j][num] || boxes[(i/3)*3+j/3][num] {
				return false
			}
			rows[i][num] = true
			cols[j][num] = true
			boxes[(i/3)*3+j/3][num] = true
		}
	}

	return true
}
