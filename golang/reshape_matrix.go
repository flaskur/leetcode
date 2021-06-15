// reshape a matrix to the new size retaining row traversal order.
func matrixReshape(mat [][]int, r int, c int) [][]int {
	if r >= len(mat) && c >= len(mat[0]) {
		return mat
	}
	if r*c < len(mat)*len(mat[0]) {
		return mat
	}

	reshape := make([][]int, r)
	for i := 0; i < r; i++ {
		reshape[i] = make([]int, c)
	}

	row := 0
	col := 0
	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[i]); j++ {
			reshape[row][col] = mat[i][j]
			col++
			if col == c {
				row++
				col = 0
			}
		}
	}

	return reshape
}