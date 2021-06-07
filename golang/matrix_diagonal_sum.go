// given a square matrix, return the sum of the matrix diagonals.
func diagonalSum(mat [][]int) int {
	sum := 0

	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[0]); j++ {
			// primary if equal index, secondary if sum index is len - 1
			if i == j || i+j == len(mat)-1 {
				sum += mat[i][j]
			}
		}
	}

	return sum
}