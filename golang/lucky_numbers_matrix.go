// given an m x n matrix of distinct numbers, return all lucky numbers. lucky numbers are the min of their row and max of their column.
func luckyNumbers(matrix [][]int) []int {
	minRows := map[int]bool{}
	maxCols := map[int]bool{}
	m, n := len(matrix), len(matrix[0])

	for i := 0; i < m; i++ {
		minRow := math.MaxInt32
		for j := 0; j < n; j++ {
			if matrix[i][j] < minRow {
				minRow = matrix[i][j]
			}
		}
		minRows[minRow] = true
	}
	for j := 0; j < n; j++ {
		maxCol := math.MinInt32
		for i := 0; i < m; i++ {
			if matrix[i][j] > maxCol {
				maxCol = matrix[i][j]
			}
		}
		maxCols[maxCol] = true
	}

	luckyNums := []int{}
	for minRow := range minRows {
		if _, ok := maxCols[minRow]; ok {
			luckyNums = append(luckyNums, minRow)
		}
	}

	return luckyNums
}