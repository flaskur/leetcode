// given an m x n matrix, return true if the matrix is toeplitz, meaning every diagonal from top left to bottom right is the same element.
func isToeplitzMatrix(matrix [][]int) bool {
	toeplitz := map[int]int{}
	for i := range matrix {
		for j, num := range matrix[i] {
			diff := i - j
			if _, ok := toeplitz[diff]; !ok {
				toeplitz[diff] = num
			} else if toeplitz[diff] != num {
				return false
			}
		}
	}
	return true
}