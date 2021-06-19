func findRotation(mat [][]int, target [][]int) bool {
	if isMatch(mat, target) {
		return true
	}

	for i := 0; i < 3; i++ {
		swapRows(&mat)
		transpose(&mat)
		if isMatch(mat, target) {
			return true
		}
	}

	return false
}

func swapRows(mat *[][]int) {
	for i := 0; i < len(*mat)/2; i++ {
		(*mat)[i], (*mat)[len(*mat)-1-i] = (*mat)[len(*mat)-1-i], (*mat)[i]
	}
}
func transpose(mat *[][]int) {
	for i := 1; i < len(*mat); i++ {
		for j := 0; j < i; j++ {
			(*mat)[i][j], (*mat)[j][i] = (*mat)[j][i], (*mat)[i][j]
		}
	}
}
func isMatch(mat [][]int, target [][]int) bool {
	for i := range mat {
		for j, num := range mat[i] {
			if num != target[i][j] {
				return false
			}
		}
	}
	return true
}