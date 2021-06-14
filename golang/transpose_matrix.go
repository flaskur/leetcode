// given a 2d integer array matrix, return the transpose.
func transpose(matrix [][]int) [][]int {
	transpose := [][]int{}
	for i := 0; i < len(matrix[0]); i++ {
		row := make([]int, len(matrix))
		transpose = append(transpose, row)
	}

	for i := range matrix {
		for j := range matrix[i] {
			transpose[j][i] = matrix[i][j]
		}
	}

	return transpose
}