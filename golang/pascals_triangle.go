func generate(numRows int) [][]int {
	triangle := [][]int{
		[]int{1},
	}

	for i := 1; i < numRows; i++ {
		row := make([]int, i+1)
		row[0], row[len(row)-1] = 1, 1
		for j := 1; j < len(row)-1; j++ {
			row[j] = triangle[i-1][j-1] + triangle[i-1][j]
		}
		triangle = append(triangle, row)
	}

	return triangle
}