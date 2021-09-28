func searchMatrix(matrix [][]int, target int) bool {
	// the trick is to start at bottom left or top right and draw a line across based on binary search
	row, col := len(matrix)-1, 0
	for row >= 0 && col < len(matrix[0]) {
		if target == matrix[row][col] {
			return true
		} else if target < matrix[row][col] {
			row--
		} else if target > matrix[row][col] {
			col++
		}
	}
	return false
}