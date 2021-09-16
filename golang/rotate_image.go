func rotate(matrix [][]int) {
	// rotating clockwise by 90 degrees is the same as transpose + reverse indices row wise

	// transpose -> only iterate through half
	for row := 1; row < len(matrix); row++ {
		for col := 0; col < row; col++ {
			matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]
		}
	}

	// reverse row wise -> row wise to half point
	for row := 0; row < len(matrix); row++ {
		for col := 0; col < len(matrix[0])/2; col++ {
			matrix[row][col], matrix[row][len(matrix)-1-col] = matrix[row][len(matrix)-1-col], matrix[row][col]
		}
	}
}